import { HiArrowUturnRight } from "react-icons/hi2";

export default function Title({ description, prevStep }) {
  return (
    <div className="flex gap-2 items-center">
      <button className='btn btn-secondary opacity-95 btn-sm md:btn-md lg:btn-lg' onClick={prevStep}><HiArrowUturnRight /> مرحله قبل</button>
      <h3 className="font-bold text-sm md:text-md lg:text-lg text-base-content/90">{description}</h3>
    </div>
  )
}
