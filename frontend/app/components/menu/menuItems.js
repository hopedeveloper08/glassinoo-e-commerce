import {
    HiOutlineHome,
    HiOutlineBuildingStorefront,
    HiOutlineShoppingBag,
    HiOutlineTruck,
    HiOutlineIdentification,
} from "react-icons/hi2";

const menuItems = [
    {
        id: 1,
        title: 'صفحه اصلی',
        link: '/',
        icon: HiOutlineHome
    },
    {
        id: 2,
        title: 'سفارش طلق',
        link: '/order',
        icon: HiOutlineBuildingStorefront
    },
    {
        id: 3,
        title: 'سبد خرید',
        link: '/cart',
        icon: HiOutlineShoppingBag
    },
    {
        id: 4,
        title: 'پیگیری‌سفارش',
        link: '/tracking',
        icon: HiOutlineTruck
    },
    {
        id: 5,
        title: 'درباره ما',
        link: '/about-us',
        icon: HiOutlineIdentification
    },
]

export default menuItems