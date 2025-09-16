import { useRoutes } from "react-router"

import Menu from "./app/menu/Menu"
import Main from "./app/main/Main"
import Order from "./app/order/Order"

function App() {
    const routes = useRoutes([
        { path: '/', element: <Main /> },
        { path: '/order/', element: <Order /> },
    ])

    return (
        <>
            <Menu />
            {routes}
        </>
    )
}

export default App