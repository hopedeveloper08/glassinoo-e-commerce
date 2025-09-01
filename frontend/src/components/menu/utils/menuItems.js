import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineTruck } from "react-icons/hi2";
import { HiOutlineIdentification } from "react-icons/hi2";

const menuItems = [
  {
    title: 'صفحه اصلی',
    link: '/',
    icon: HiOutlineHome
  },
  {
    title: 'سفارش طلق',
    link: '/order/',
    icon: HiOutlineBuildingStorefront
  },
  {
    title: 'سبد خرید',
    link: '/cart/',
    icon: HiOutlineShoppingBag
  },
  {
    title: 'پیگیری سفارش',
    link: '/tracking/',
    icon: HiOutlineTruck
  },
  {
    title: 'درباره ما',
    link: '/about-us/',
    icon: HiOutlineIdentification 
  },
]

export default menuItems