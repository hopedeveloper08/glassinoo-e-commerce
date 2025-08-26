
export default function Step(props) {
  const steps = ["نوع میز", "جنس میز", "طلق", "ابعاد", "شکل", "تایید"]

  return (
    <div className="flex max-md:flex-col w-full py-4 justify-center">
      {props.step > 1 &&
        <button className='btn btn-secondary btn-circle text-secondary-content w-28 mx-4 max-md:mb-2' onClick={() => props.setStep(props.step - 1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
          مرحله قبل
        </button>
      }

      <ul className="steps">
        {steps.map((item, index) => (
          <li className={`step ${props.step >= (index + 1) ? 'step-primary' : ''}`} key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
