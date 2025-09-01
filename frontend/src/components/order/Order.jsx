import { useEffect, createRef } from 'react'
import { useDispatch } from 'react-redux'

import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

import { HiArrowUturnRight } from "react-icons/hi2";

import isMobile from '../../utils/isMobile'
import steps from './utils/steps'
import { fetchTablesType, fetchTablesMaterial } from '../../redux/features/order/tableSlice';


export default function Order() {
  const dispatch = useDispatch()
  const formWizardRef = createRef()

  useEffect(() => {
    dispatch(fetchTablesType())
    dispatch(fetchTablesMaterial())
  }, [])

  return (
    <main className="w-screen container mx-auto">
      <FormWizard
        stepSize={isMobile ? 'xs' : 'sm'}
        color="oklch(60% 0.18 250)"
        ref={formWizardRef}
        nextButtonTemplate={() => null}
        backButtonTemplate={() => null}
        finishButtonTemplate={() => null}
      >
        {steps.map(step => (
          <FormWizard.TabContent title={step.title} icon={step.icon}>

            <div className="flex gap-2 items-center">
              <button className='btn btn-secondary btn-sm md:btn-md' onClick={() => formWizardRef.current?.prevTab()}><HiArrowUturnRight /> مرحله قبل</button>
              <h3 className="font-bold text-sm md:text-lg">{step.description}</h3>
            </div>

            <section className='h-[calc(100vh-20rem)] mt-4 overflow-y-auto p-4'>
              {<step.component
                step={step.id}
                nextStep={() => formWizardRef.current?.nextTab()}
              />}
            </section>

          </FormWizard.TabContent>
        ))}
      </FormWizard>
    </main>
  )
}
