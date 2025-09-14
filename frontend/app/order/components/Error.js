import { HiOutlineExclamationTriangle } from "react-icons/hi2";

export default function Error() {
    return (
        <div role="alert" className="alert alert-error md:w-1/2 mx-auto" >
            <HiOutlineExclamationTriangle size={32} />
            <span className="font-bold md:text-md text-error-content">خطا، صفحه خود را رفرش کنید. درصورت نیاز با شماره 09036202425 تماس بگیرید.</span>
        </div>
    )
}
