import { useState, useEffect } from 'react';

import backend from '../../api';

import GalleryLoading from './GalleryLoading'
import GalleryItem from "./GalleryItem"

function Gallery({ nextStep, url, params = null, setItem }) {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                const { data } = await backend.get(url, { params })
                setItems(data.data)
            } finally {
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

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6">
            {items.map(item => <GalleryItem key={item.id} item={item} submitHandler={submitHandler} />)}
        </div>
    )
}

export default Gallery