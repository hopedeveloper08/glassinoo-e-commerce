import Link from 'next/link'

import { BsWhatsapp } from "react-icons/bs"

function Invoice({
    tableType,
    tableMaterial,
    talqType,
    shape,
    thicknessOptions,
    selectedThickness,
    dimensions,
    images,
}) {

    const calculatePrice = () => {
        let length = dimensions.length
        let width = dimensions.width
        let price

        const talqWidths = thicknessOptions
            .filter(talq => talq.thickness === selectedThickness)
            .sort(talq => talq.width)

        if (shape === 'دایره') length = width

        if (length < width) {
            [length, width] = [width, length]
        }

        if (dimensions.length <= talqWidths[talqWidths.length - 1].width) {
            [length, width] = [width, length]
        }

        for (const talq of talqWidths) {
            if (width <= talq.width) {
                price = talq.price;
                break;
            }
        }

        return Math.round(parseInt((price * (length * 1.05)) / 100) / 1000) * 1000;
    }

    const priceForCircle = () => {
        if (shape !== "دایره") return 0

        const d = dimensions.width
        if (d <= 60) return 300_000
        if (d <= 120) return 500_000
        if (d <= 160) return 700_000
        return 900_000
    }

    const basePrice = calculatePrice()
    const circleExtra = priceForCircle()
    const finalPrice = basePrice + circleExtra

    const addToCart = () => {
        document.getElementById('cart-dialog').showModal()
    }

    return (
        <div className="w-full card border-1 border-secondary max-w-3xl mx-auto bg-base-100 shadow-lg rounded-xl py-4 px-6 md:p-6 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-base-content mb-2">
                خلاصه سفارش
            </h2>

            <div className="overflow-x-auto">
                <table className="table table-sm md:table-md table-zebra w-full">
                    <tbody>
                        <tr>
                            <td className="font-semibold text-sm md:text-md lg:text-lg">نوع میز</td>
                            <td className="text-sm md:text-md lg:text-lg">{tableType?.title}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-sm md:text-md lg:text-lg">جنس میز</td>
                            <td className="text-sm md:text-md lg:text-lg">{tableMaterial?.title}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-sm md:text-md lg:text-lg">شکل میز</td>
                            <td className="text-sm md:text-md lg:text-lg">{shape}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-sm md:text-md lg:text-lg">طلق انتخابی</td>
                            <td className="text-sm md:text-md lg:text-lg">{talqType?.title} - ضخامت {selectedThickness} میلی‌متر</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-sm md:text-md lg:text-lg">ابعاد</td>
                            <td className="text-sm md:text-md lg:text-lg">
                                {shape === "مستطیل" &&
                                    `${dimensions.length} × ${dimensions.width} سانتی متر`}
                                {shape === "دایره" && `قطر ${dimensions.width} سانتی متر`}
                                {shape === "بیضی" &&
                                    `${dimensions.length} × ${dimensions.width} سانتی متر`}
                            </td>
                        </tr>
                        {shape === "دایره" &&
                            <tr>
                                <td className="font-semibold text-sm md:text-md lg:text-lg">هزینه برش لیزری</td>
                                <td className="text-sm md:text-md lg:text-lg">
                                    {circleExtra.toLocaleString()} تومان
                                </td>
                            </tr>}
                        {shape === "بیضی" &&
                            <tr>
                                <td className="font-semibold text-sm md:text-md lg:text-lg">هزینه برش لیزری</td>
                                <td className="text-sm md:text-md lg:text-lg">
                                    توافقی محاسبه میشود
                                    <a className="btn btn-ghost btn-circle text-green-400" href='https://wa.me/09036202425'>
                                        <BsWhatsapp size={20} />
                                    </a>
                                </td>
                            </tr>}
                    </tbody>
                </table>
            </div>

            <div className="divider my-2 py-0"></div>

            <div className="flex justify-between items-center">
                <span className="font-bold text-lg">قیمت نهایی</span>
                <span className="text-accent text-xl font-extrabold">
                    {finalPrice.toLocaleString()} تومان
                </span>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-end mt-4">
                <button
                    className="btn rounded-md btn-success btn-sm md:btn-md md:flex-none md:order-2"
                    onClick={addToCart}
                >
                    افزودن به سبد خرید
                </button>
                <button
                    className="btn rounded-md btn-error btn-sm md:btn-md btn-outline md:flex-none"
                    onClick={() => window.location.reload()}
                >
                    لغو سفارش
                </button>
            </div>

            <dialog id="cart-dialog" className="modal">
                <div className="modal-box">
                    <div role="alert" class="alert alert-success">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>طلق شما با موفقیت به سبد خرید اضافه شد!</span>
                    </div>
                    <div className="modal-action">
                        <div className="flex justify-end gap-2">
                            <button className="btn btn-sm md:btn-md rounded-md btn-secondary btn-outline" onClick={() => window.location.reload()}>سفارش طلق جدید</button>
                            <Link href="/cart"><button className="btn btn-sm md:btn-md rounded-md btn-primary">تکمیل سفارش</button></Link>
                        </div>
                    </div>
                </div>
            </dialog>
        </div >
    )
}

export default Invoice