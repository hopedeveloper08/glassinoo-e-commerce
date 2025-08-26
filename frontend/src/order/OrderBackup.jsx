import { useState } from 'react'
import TableGallery from './components/TableGallery'

import axios from 'axios'

export default function Order() {
  const [step, setStep] = useState(1)
  const [tablesType, setTablesType] = useState(null)
  const [tablesMaterial, setTablesMaterial] = useState(null)

  return <>

    <div className="container mx-auto px-2">

      <div className="flex max-md:flex-col w-full py-4 justify-center">

        {step > 1 &&
          <button className='btn btn-secondary btn-circle text-secondary-content w-28 mx-4 max-md:mb-2' onClick={() => setStep(step - 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
            مرحله قبل
          </button>
        }

        <ul className="steps">
          {steps.map((item, index) => (
            <li className={`step ${step >= (index + 1) ? 'step-primary' : ''}`} onClick={() => setStep(index + 1)} key={index}>{item}</li>
          ))}
        </ul>

      </div>

      <div className="w-full h-[calc(100vh-13rem)] overflow-y-auto pb-24">

        <div className="card bg-base-100 shadow-md rounded-xl p-4">

          {step === 1 && <>
            <h2 className="text-xl font-bold mb-2">انتخاب نوع میز</h2>
            <p className="text-sm text-gray-500 mb-4">
              نوع میز خود را از میزهای موجود در گالری زیر انتخاب کنید.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {tablesType.map((item) => (
                <button
                  key={item.id}
                  className="card bg-base-200 hover:bg-base-300 transition rounded-xl overflow-hidden"
                  onClick={() => probs.setStep(probs.step + 1)}
                >
                  <figure className="aspect-square">
                    <Swiper
                      modules={[Autoplay]}
                      spaceBetween={0}
                      slidesPerView={1}
                      autoplay={{ delay: 3000 }}
                      loop
                      className='w-full h-full'
                    >
                      {item.image_urls.map(url => (
                        <SwiperSlide>
                          <img src={url} alt={item.title} className='object-cover w-full h-full' />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </figure>
                  <div className="p-2 text-center text-sm font-medium">
                    {item.title}
                  </div>
                </button>
              ))}
            </div></>}
          {step === 2 && <TableGallery url={'tables/material/'} step={step} setStep={setStep} title={'جنس'} />}

        </div>

      </div>

    </div>

  </>;
}
