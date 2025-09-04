import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { addLength, addWidth } from '../../../../../../redux/features/order/orderSlice'

export default function Dimensions({ shape, maxWidth, nexStep }) {
  const lengthLable = shape === 'مربع' || shape === 'مستطیل' ? 'طول' : 'قطر بزرگ'
  const widthLable = shape === 'مربع' || shape === 'مستطیل' ? 'عرض' : 'قطر کوچک'

  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [lTouched, setLTouched] = useState(false)
  const [wTouched, setWTouched] = useState(false)

  const [lError, setLError] = useState('')
  const [wError, setWError] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    if (!lTouched) return
    if (!length || Number(length) <= 0) {
      setLError(`${lengthLable} باید مقدار معتبر داشته باشد.`)
    } else if (Number(length) > 1400) {
      setLError(`${lengthLable} نباید بیشتر از 1400 سانتی متر باشد!`)
    } else setLError('')
  }, [length, lTouched])

  useEffect(() => {
    if (!wTouched) return
    if (!width || Number(width) <= 0) {
      setWError(`${widthLable} باید مقدار معتبر داشته باشد.`)
    } else if (Number(width) > maxWidth) {
      setWError(`${widthLable} نباید از ${maxWidth} بیشتر باشد.`)
    } else setWError('')
  }, [width, wTouched])

  const submitHandler = () => {
    setLTouched(true)
    setWTouched(true)
    if (!lError && !wError && length && (shape === 'دایره' || width)) {
      dispatch(addLength(parseFloat(length)))
      dispatch(addWidth(parseFloat(width)))
      nexStep()
    }
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); submitHandler(); }}
      className="w-full flex flex-col gap-2"
    >
      <span className="font-semibold text-base-content md:text-base text-sm md:text-md lg:text-lg">
        ابعاد میز شما
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">

        <div className="flex flex-col gap-2">
          <label className="text-sm md:text-base">
            {shape !== 'دایره' ? lengthLable : 'قطر'} (سانتی متر)
          </label>
          <input
            type="number"
            step={0.1}
            min={0}
            placeholder={`${lengthLable} را وارد کنید`}
            value={length}
            onFocus={() => length === '0' && setLength('')}
            onChange={e => setLength(e.target.value)}
            onBlur={() => setLTouched(true)}
            className={`input input-sm md:input-md lg:input-lg input-bordered w-full ${lError ? 'input-error' : 'input-primary'}`}
          />
          {lError && <p className="text-error text-xs">{lError}</p>}
        </div>

        {shape !== 'دایره' && (
          <div className="flex flex-col gap-2">
            <label className="text-sm md:text-base">
              {widthLable} (سانتی متر)
            </label>
            <input
              type="number"
              step={0.1}
              min={0}
              placeholder={`${widthLable} را وارد کنید`}
              value={width}
              onFocus={() => width === '0' && setWidth('')}
              onChange={e => setWidth(e.target.value)}
              onBlur={() => setWTouched(true)}
              className={`input input-sm md:input-md lg:input-lg input-bordered w-full ${wError ? 'input-error' : 'input-primary'}`}
            />
            {wError && <p className="text-error text-xs">{wError}</p>}
          </div>
        )}
      </div>

      <button type="submit" className="btn btn-primary btn-block btn-sm md:btn-md lg:btn-lg md:w-1/2 lg:w-1/3 mx-auto">
        تایید
      </button>
    </form>
  )

}
