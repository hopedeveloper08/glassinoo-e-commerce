import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import backend from "../../api"

export default function PaymentCallback() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const status = query.get("Status");
        const authority = query.get("Authority");
        const order_id = query.get("order_id");

        if (!status || !authority || !order_id) {
            alert("مشکلی به وجود آمده با پشتیبانی تمایش بگیرید")
            navigate("/cart");
            return;
        }

        backend.get("order/verify_payment/", {
            params: { status, authority, order_id }
        }).then(res => {
            if (res.data.success) {
                alert('پرداخت با موفقیت انجام شد.')
                localStorage.removeItem("cart")
                navigate("/");
            } else {
                alert('ناموفق باگ داریم!')
            }
        }).catch(err => {
            console.error(err);
            navigate("/cart");
        });

    }, [location, navigate]);

    return (
        <div className="flex justify-center mt-16 gap-4">
            <span className="loading loading-bars loading-xl text-primary"></span>
            <p className="font-bold text-xl">درحال بررسی ثبت سفارش...</p>
        </div>
    )
}
