import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addThickness } from '../../../../../../redux/features/order/orderSlice'

export default function ThicknessSelect({ uniqeThickness }) {
  const dispatch = useDispatch()

  useEffect(() => { dispatch(addThickness(0)) }, [])

  const selectThickness = (value) => dispatch(addThickness(parseFloat(value)))

  return (
    <div className="w-full flex flex-col gap-3">
      <label className="mb-2 font-semibold text-base-content md:text-base text-sm md:text-md lg:text-lg">
        ضخامت طلق
      </label>
      <select
        defaultValue={0}
        className="select select-sm md:select-md lg:select-lg select-bordered select-primary w-full md:w-2/3 lg:w-1/2 mx-auto"
        onChange={(e) => selectThickness(e.target.value)}
      >
        <option disabled value={0}>
          ضخامت طلق خود را انتخاب کنید...
        </option>
        {uniqeThickness.map(thickness => (
          <option key={thickness} value={thickness}>
            {thickness} میلی‌متر
          </option>
        ))}
      </select>
    </div>
  )
}
