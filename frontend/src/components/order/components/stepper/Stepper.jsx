import { createRef } from 'react'

import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

import isMobile from '../../../../utils/isMobile'
import steps from './steps'
import Title from './components/Title';

export default function Stepper() {
  const formWizardRef = createRef()

  const prevStep = () => formWizardRef.current?.prevTab()
  const nextTab = () => formWizardRef.current?.nextTab()

  return (
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
          <Title description={step.description} prevStep={prevStep} />
          <section className='h-[calc(100vh-20rem)] mt-4 overflow-y-auto p-4'>
            {<step.component
              step={step.id}
              nextStep={nextTab}
            />}
          </section>
        </FormWizard.TabContent>
      ))}
    </FormWizard>
  )
}
