import { useState } from 'react'
import Step from './components/Step'
import TableGallery from './components/TableGallery'

export default function Order() {
  const [step, setStep] = useState(1)

  return (
    <div className="container mx-auto px-2">

      <Step step={step} setStep={setStep} />

      <TableGallery step={step} setStep={setStep} visible={step <= 2} />

    </div>
  )
}
