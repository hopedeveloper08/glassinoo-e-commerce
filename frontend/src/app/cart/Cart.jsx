import { useState } from "react"

import CustomerForm from "./CustomerForm"
import Summary from "./Summary"

function Cart() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [lng, setLng] = useState(0)
    const [lat, setLat] = useState(0)
    const [postMethod, setPostMethod] = useState(0)

    const cart = JSON.parse(localStorage.getItem('cart')) || []

    if (!cart.length) return (
        <div className='mx-8 flex justify-center mt-16'>
            <div className='alert alert-info font-bold text-xl'>
                سبد خرید شما خالی است
            </div>
        </div>
    )

    return (
        <main className="container mt-4 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <section className="md:col-span-3 card shadow border-2 border-primary/20 bg-primary/3">
                    <CustomerForm
                        name={name}
                        setName={setName}
                        phone={phone}
                        setPhone={setPhone}
                        address={address}
                        setAddress={setAddress}
                        postMethod={postMethod}
                        setPostMethod={setPostMethod}
                        lng={lng}
                        setLng={setLng}
                        lat={lat}
                        setLat={setLat}
                    />
                </section>
                <section className="md:col-span-2 card shadow border-2 border-primary/20 bg-primary/3"><Summary /></section>
            </div>
        </main>
    )
}

export default Cart