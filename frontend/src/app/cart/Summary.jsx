import { useState } from 'react'

import Terms from './Terms'

function Summary({ cart, postMethod, pay, loading }) {
    const [agree, setAgree] = useState(false)

    const postage = 98_000
    const itemPrice = cart.reduce((prev, curr) => prev + curr.price, 0)
    const totalPrice = itemPrice + (postMethod === 0 ? postage : 0)

    return (
        <div className="flex flex-col justify-center items-center h-full gap-8 my-6 px-4 w-full md:w-4/5 lg:w-3/4 mx-auto">
            <div className="font-bold text-base-content/80 text-xl">خلاصه پرداخت</div>
            <table className="table">
                <tbody className="text-base md:text-lg text-base-content/80">
                    <tr>
                        <td>هزینه طلق های شما</td>
                        <td className="text-end">{itemPrice.toLocaleString()}</td>
                    </tr>
                    {postMethod !== 2 &&
                        <tr>
                            <td>هزینه ارسال</td>
                            <td className="text-end">{postMethod === 0 ? postage.toLocaleString() : 'توافقی محاسبه میشود'}</td>
                        </tr>
                    }
                    <tr>
                        <td className="font-bold text-lg md:text-xl text-primary">جمع نهایی</td>
                        <td className="font-bold text-lg md:text-xl text-primary text-end">{totalPrice.toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
            <Terms setAgree={setAgree} />
            <button className="btn btn-primary w-full text-xl" disabled={!agree || loading} onClick={pay} >
                {loading && <span className="loading loading-spinner loading-md text-primary mx-2"></span>}
                ثبت سفارش و پرداخت
            </button>
        </div>
    )
}

export default Summary