import { GiTable } from "react-icons/gi";
import { GiDesk } from "react-icons/gi";
import { FaToiletPaper } from "react-icons/fa6";
import { FaRegPenToSquare } from "react-icons/fa6";
import { HiOutlineCheckBadge } from "react-icons/hi2";

import TableGallery from '../gallery/TableGallery';
import TalqTypeGallery from '../gallery/TalqTypeGallery';
import TalqInfo from '../talq-info/TalqInfo'

const steps = [
  {
    id: 1,
    title: 'نوع میز',
    description: 'نوع میز خود را از گالری زیر انتخاب کنید',
    component: TableGallery,
    icon: <GiTable />,
  },
  {
    id: 2,
    title: 'جنس میز',
    description: 'جنس میز خود را از گالری زیر انتخاب کنید',
    component: TableGallery,
    icon: <GiDesk />,
  },
  {
    id: 3,
    title: 'طلق',
    description: 'جنس طلق خود را انتخاب کنید',
    component: TalqTypeGallery,
    icon: <FaToiletPaper />,
  },
  {
    id: 4,
    title: 'ابعاد',
    description: 'ضخامت مورد نظر را انتخاب کنید. سپس براساس شکل میز خود، ابعاد میز خود را وارد کنید',
    component: TalqInfo,
    icon: <FaRegPenToSquare />,
  },
  {
    id: 5,
    title: 'فاکتور',
    description: 'خلاصه سفارش',
    component: null,
    icon: <HiOutlineCheckBadge />,
  },
]

export default steps