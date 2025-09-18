import { useState, useEffect } from "react"

import CustomerForm from "./CustomerForm"
import Summary from "./Summary"
import CartItems from "./CartItems"

function Cart() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [lng, setLng] = useState(0)
    const [lat, setLat] = useState(0)
    const [postMethod, setPostMethod] = useState(0)
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])

    const removeItem = (index) => {
        const updated = cart.filter((_, i) => i !== index);
        setCart(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
    };

    if (!cart.length) return (
        <div className='mx-8 flex justify-center mt-16'>
            <div className='alert alert-info font-bold text-xl'>
                سبد خرید شما خالی است
            </div>
        </div>
    )

    return (
        <main className="container mt-8 pb-18">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <section className="lg:col-span-5 p-4 card shadow border border-primary/20 bg-primary/3"><CartItems removeItem={removeItem} cart={cart} /></section>
                <section className="lg:col-span-3 card shadow border border-primary/20 bg-primary/3">
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
                <section className="lg:col-span-2 card shadow border border-primary/20 bg-primary/3"><Summary cart={cart} postMethod={postMethod} /></section>
            </div>
        </main>
    )
}

export default Cart