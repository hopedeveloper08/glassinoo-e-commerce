import { useState, useEffect } from 'react';

import backend from '../../api';

import GalleryLoading from './GalleryLoading'
import GalleryItem from "./GalleryItem"

function Gallery({ nextStep, url, params = null, setItem }) {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            setError(false)
            try {
                const { data } = await backend.get(url, { params })
                if (data.data) setItems(data.data)
                else setError(true)
            } catch {
                setError(true)
            }
            finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const submitHandler = (item) => {
        setItem(item)
        nextStep()
    }

    if (loading) return <GalleryLoading />
    if (error) return <div className='alert alert-error font-semibold text-lg'>خطا در دریافت داده ها از سرور. صفحه خود را رفرش کنید. در صورت نیاز با شماره 09036202425 تماس بگیرید.</div>

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 px-2">
            {items.map(item => <GalleryItem key={item.id} item={item} submitHandler={submitHandler} />)}
        </div>
    )
}

export default Gallery