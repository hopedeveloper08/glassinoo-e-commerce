import { useSelector } from "react-redux";

import ThicknessSelect from "./components/ThicknessSelect"
import ShapeSelect from "./components/ShapeSelect"
import Dimensions from "./components/Dimensions"

export default function Form({ talqs, nextStep }) {
  const { talqThickness, shape } = useSelector(state => state.order)

  const uniqeThickness = [...new Set(talqs.map(talq => talq.thickness))]
  const maxWidth = talqThickness === 0 ? null : Math.max(...talqs.filter(talq => talq.thickness == talqThickness).map(talq => talq.width))
  
  return (
    <div className="card shadow-lg rounded-xl py-6 px-4 md:px-8 flex flex-col gap-4 md:gap-6 bg-base-100 border border-primary w-full max-w-3xl mx-auto">
      <ThicknessSelect uniqeThickness={uniqeThickness} />

      <div className="divider divider-secondary my-0" />

      <ShapeSelect />

      {talqThickness > 0 && shape && (
        <>
          <div className="divider divider-secondary my-0" />
          <Dimensions shape={shape} maxWidth={maxWidth} nexStep={nextStep} />
        </>
      )}
    </div>
  )

}
