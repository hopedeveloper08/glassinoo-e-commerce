import { useState } from 'react';

import Map from './Map'
import { GrLocation } from "react-icons/gr";

function CustomerForm({
    name,
    setName,
    phone,
    setPhone,
    address,
    setAddress,
    postMethod,
    setPostMethod,
    lng,
    setLng,
    lat,
    setLat,
    error,
}) {
    const [showMap, setShowMap] = useState(false);

    return (
        <form className="flex flex-col items-center gap-4 my-6 w-full md:w-3/4 lg:w-2/3 mx-auto px-4">
            {/* customer info */}
            <div className="w-full flex flex-col items-center gap-2">
                <div className="font-bold text-base-content/80 text-lg">اطلاعات مشتری</div>
                <div className="w-full container flex flex-col items-center gap-2">
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="نام و نام خانوادگی" className="input w-full input-secondary" />
                    <input type="number" value={phone} min={0} onChange={e => setPhone(e.target.value)} placeholder="شماره تلفن" className="input w-full input-secondary" />
                </div>
            </div>
            {/* post method */}
            <div className="w-full flex flex-col items-center gap-3">
                <div className="font-bold text-base-content/80 text-lg">ارسال</div>
                <div className="w-full flex justify-evenly"
                    onChange={e => setPostMethod(parseInt(e.target.value))}
                >
                    <label className="space-x-1 lg:space-x-2 hover:cursor-pointer">
                        <input type="radio" value={0} name="address-method" className="radio radio-sm md:radio-md radio-primary" defaultChecked />
                        <span>به شهر شیراز</span>
                    </label>
                    <label className="space-x-1 lg:space-x-2 hover:cursor-pointer">
                        <input type="radio" value={1} name="address-method" className="radio radio-sm md:radio-md radio-primary" />
                        <span>به شهر دیگر</span>
                    </label>
                    <label className="space-x-1 lg:space-x-2 hover:cursor-pointer">
                        <input type="radio" value={2} name="address-method" className="radio radio-sm md:radio-md radio-primary" />
                        <span>درب فروشگاه</span>
                    </label>
                </div>
                {/* address */}
                {postMethod !== 2 && (
                    <div className="w-full flex flex-col items-center gap-2">
                        <div className="w-full container flex flex-col items-center gap-2">
                            {postMethod === 0 && (
                                <button
                                    type='button'
                                    onClick={() => setShowMap(true)}
                                    className="btn btn-primary btn-dash w-full"
                                >
                                    <GrLocation size={20} /> ثبت موقعیت روی نقشه
                                </button>
                            )}
                            <textarea rows='2' value={address} onChange={e => setAddress(e.target.value)} placeholder="آدرس خود را وارد کنید..." className="textarea w-full textarea-secondary" />

                            {showMap && (
                                <Map
                                    lng={lng}
                                    lat={lat}
                                    setLng={setLng}
                                    setLat={setLat}
                                    onClose={() => setShowMap(false)}
                                />
                            )}
                        </div>
                    </div>
                )}
                {error &&
                    <p className="text-error text-sm mt-1">
                        اطلاعات خود را به درستی وارد کنید
                    </p>
                }
            </div>
        </form >

    )
}

export default CustomerForm