import { GiTable } from "react-icons/gi";
import { GiDesk } from "react-icons/gi";
import { FaToiletPaper } from "react-icons/fa6";
import { FaRegPenToSquare } from "react-icons/fa6";
import { HiOutlineScissors } from "react-icons/hi2";
import { HiOutlineCheckBadge } from "react-icons/hi2";

import TableType from '../components/TableGallery';

const steps = [
  {
    id: 1,
    title: 'نوع میز',
    description: 'نوع میز خود را از گالری زیر انتخاب کنید',
    component: TableType,
    icon: <GiDesk />,
  },
  {
    id: 2,
    title: 'جنس میز',
    description: 'جنس میز خود را از گالری زیر انتخاب کنید',
    component: TableType,
    icon: <GiTable />,
  },
  {
    id: 3,
    title: 'طلق',
    description: 'جنس، ضخامت و عرض طلق خود را انتخاب کنید',
    component: null,
    icon: <FaToiletPaper />,
  },
  {
    id: 4,
    title: 'طول',
    description: 'طول طلق خود را وارد کنید',
    component: null,
    icon: <FaRegPenToSquare />,
  },
  {
    id: 5,
    title: 'برش',
    description: 'شکل میز و نوع برش را انتخاب کنید',
    component: null,
    icon: <HiOutlineScissors />,
  },
  {
    id: 6,
    title: 'تایید',
    description: 'خلاصه سفارش',
    component: null,
    icon: <HiOutlineCheckBadge />,
  },
]

export default steps