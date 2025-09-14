"use client";

import { useState, useEffect } from 'react';

import backend from '@/app/axiosInstance';

import LoadingGallery from './LoadingGallery'
import Error from './Error'
import GalleryItem from "./GalleryItem"


export default function Gallery({ nextStep, url, params = null, setItem }) {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            setError(false)
            try {
                const { data } = await backend.get(url, { params })
                setItems(data.data) 
            } catch (err) {
                setError(true)
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
    
    if (loading) return <LoadingGallery />
    if (error) return <Error />
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {items.map(item => <GalleryItem key={item.id} item={item} submitHandler={submitHandler} />)}
        </div>
    )
}
