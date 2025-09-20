import { useRoutes } from "react-router"

import Menu from "./app/menu/Menu"
import Main from "./app/main/Main"
import Order from "./app/order/Order"
import Cart from "./app/cart/Cart"
import PaymentCallback from "./app/payment/PaymentCallback"
import Error404 from "./app/main/Error404"

function App() {
    const routes = useRoutes([
        { path: '/', element: <Main /> },
        { path: '/order/', element: <Order /> },
        { path: '/cart/', element: <Cart /> },
        { path: '/payment/callback/', element: <PaymentCallback /> },
        { path: '*', element: <Error404 /> },
    ])

    return (
        <>
            <Menu />
            <div className="min-h-[calc(100vh-4rem)]">
                {routes}
            </div>
        </>
    )
}

export default App