import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import axios from 'axios'
import Loading from './Loading'
import ErrorMessage from './ErrorMessage'

export default function TableGallery({ step, setStep, visible }) {
  const [tablesType, setTablesType] = useState(null)
  const [tablesMaterial, setTablesMaterial] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTable, setActiveTable] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      if (tablesType && tablesMaterial) return
      try {
        const responseType = await axios.get('tables/type/')
        setTablesType(responseType.data.tables)
        const responseMaterial = await axios.get('tables/material/')
        setTablesMaterial(responseMaterial.data.tables)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <Loading />
  if (error || !tablesType?.length || !tablesMaterial?.length) return <ErrorMessage />

  const data = step === 1 ? tablesType : tablesMaterial

  return visible ? (
    <>
      <h2 className="text-xl font-bold mb-2">انتخاب {step === 1 ? 'نوع' : 'جنس'} میز</h2>
      <p className="text-sm text-gray-500 mb-4">
        {step === 1 ? 'نوع' : 'جنس'} میز خود را از گالری انتخاب کنید.
      </p>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {data.map((table) => (
          <button
            key={table.id}
            onClick={() => setActiveTable(table)}
            className="card bg-base-200 hover:bg-base-300 transition rounded-xl overflow-hidden"
          >
            <figure className="aspect-square">
              <img
                src={table.image_urls[0]} // فقط thumbnail
                alt={table.title}
                loading="lazy"
                className="object-cover w-full h-full"
              />
            </figure>
            <div className="p-2 text-center text-sm font-medium">
              {table.title}
            </div>
          </button>
        ))}
      </div>

      {activeTable && (
        <dialog
          open
          className="modal modal-open"
          onClick={(e) => {
            if (e.target.classList.contains('modal')) setActiveTable(null)
          }}
        >
          <div className="modal-box relative max-w-2xl">
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => setActiveTable(null)}
            >
              ✕
            </button>

            <Swiper
              modules={[Navigation, Pagination, Autoplay, Zoom]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 5000 }}
              loop
              pagination={{ clickable: true }}
              zoom={true}
              style={{
                "--swiper-navigation-color": "#888",
              }}
              className="w-full aspect-square rounded-lg"
            >
              {activeTable.image_urls.map((url, i) => (
                <SwiperSlide key={i}>
                  <div className="swiper-zoom-container">
                    <img
                      src={url}
                      alt={activeTable.title}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-3 text-center">
              <h3 className="font-bold">{activeTable.title}</h3>
              <button
                className="btn btn-primary btn-lg mt-2"
                onClick={() => {
                  setStep(step + 1)
                  setActiveTable(null)
                }}
              >
                انتخاب و ادامه
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  ) : null
}
