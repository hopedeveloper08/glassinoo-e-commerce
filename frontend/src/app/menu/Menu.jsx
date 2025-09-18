import { IoHomeOutline } from "react-icons/io5";
import { IoStorefrontOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineTruck } from "react-icons/hi2";
import { FaUsersRectangle } from "react-icons/fa6";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

function Menu() {
    const menuItems = [
        {
            id: 1,
            title: 'صفحه اصلی',
            link: '/',
            icon: IoHomeOutline
        },
        {
            id: 2,
            title: 'سفارش طلق',
            link: '/order',
            icon: IoStorefrontOutline
        },
        {
            id: 3,
            title: 'سبد خرید',
            link: '/cart',
            icon: BsCart3
        },
        // {
        //     id: 4,
        //     title: 'پیگیری‌سفارش',
        //     link: '/tracking',
        //     icon: HiOutlineTruck
        // },
        {
            id: 5,
            title: 'درباره ما',
            link: '/about-us',
            icon: FaUsersRectangle
        },
    ]

    return (
        <>
            <DesktopMenu menuItems={menuItems} />
            <MobileMenu menuItems={menuItems} />
        </>
    )
}

export default Menu