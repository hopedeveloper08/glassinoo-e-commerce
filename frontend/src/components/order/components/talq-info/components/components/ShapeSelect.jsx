import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addShape } from '../../../../../../redux/features/order/orderSlice'

import { FaXmark } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa6";
import { Fa0 } from "react-icons/fa6";
import { FaRegSquare } from "react-icons/fa6";
import { BsAspectRatio } from "react-icons/bs";

export default function ShapeSelect() {
  const dispatch = useDispatch()
  const shape = useSelector(state => state.order.shape)

  useEffect(() => { selectShape(null) }, [])

  const selectShape = (shape) => dispatch(addShape(shape))

  const iconSize = 16
  const shapes = [
    { id: 1, value: 'مستطیل', icon: <BsAspectRatio size={iconSize} /> },
    { id: 2, value: 'مربع', icon: <FaRegSquare size={iconSize} /> },
    { id: 3, value: 'دایره', icon: <FaRegCircle size={iconSize} /> },
    { id: 4, value: 'بیضی', icon: <Fa0 size={iconSize} /> },
  ]

  return (
    <form onSubmit={e => e.preventDefault()} className='flex flex-col items-center'>
      <div className='mb-2 font-semibold text-base-content md:text-base text-sm md:text-md lg:text-lg'>شکل میز شما</div>
      <div className="filter grid grid-cols-2 gap-2">
        <button className={`btn btn-error btn-sm md:btn-md lg:btn-lg mx-2 ${shape ? '' : 'hidden'}`} type="reset" onClick={() => selectShape(null)}>
          <FaXmark size={iconSize} color='white' /> حذف
        </button> 
        {shapes.map(shapeItem => (
          <button key={shapeItem.id} className={`btn btn-primary btn-sm md:btn-md lg:btn-lg mx-2 ${shape ? shape === shapeItem.value ? '' : "hidden" : 'btn-outline'}`} onClick={() => selectShape(shapeItem.value)} type="radio" name="shape">
            {shapeItem.icon} {shapeItem.value}
          </button>
        ))}
      </div>
    </form>
  )
}
