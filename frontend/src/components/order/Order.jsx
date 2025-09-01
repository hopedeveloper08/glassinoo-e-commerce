import { createRef } from 'react'

import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

import { HiArrowUturnRight } from "react-icons/hi2";

import isMobile from '../../utils/isMobile'
import steps from './utils/steps';

export default function Order() {
  const formWizardRef = createRef();

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
          <FormWizard.TabContent title={step.title} key={step.id} icon={step.icon}>

            <div className="flex gap-2 items-center">
              <button className='btn btn-secondary btn-sm md:btn-md' onClick={() => formWizardRef.current?.prevTab()}><HiArrowUturnRight /> مرحله قبل</button>
              <h3 className="font-bold text-sm md:text-lg">{step.description}</h3>
            </div>

            <section className='h-[calc(100vh-20rem)] mt-4 overflow-y-auto p-4'>
              {<step.component 
                nextStep={() => formWizardRef.current?.nextTab()}
              />}
            </section>

          </FormWizard.TabContent>
        ))}
      </FormWizard>

    </main>
  )
}
