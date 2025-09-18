import { useState, useEffect } from "react"

import backend from '../../api';

function TalqForm({
    talqType,
    shape,
    setShape,
    talqs,
    setTalqs,
    thickness,
    setThickness,
    length,
    setLength,
    width,
    setWidth,
    setImages,
    nextStep,
}) {
    const [loading, setLoading] = useState(true)
    const [maxWidth, setMaxWidth] = useState(0)

    useEffect(() => {
        setShape(null)
        setThickness(0)
        setLength(0)
        setWidth(0)
        async function fetchData() {
            setLoading(true)
            try {
                const { data } = await backend.get('talqs/', { params: { type_id: talqType.id } })
                setTalqs(data.data)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const [errors, setErrors] = useState([])
    const validate = () => {
        let errs = []

        if (shape === "مستطیل") {
            if (length <= 0) {
                errs = [...errs, "مقدار طول را وارد کنید"]
            }
            if (width <= 0) {
                errs = [...errs, "مقدار عرض را وارد کنید"]
            }
            if (length > 1400) {
                errs = [...errs, "حداکثر مقدار طول 1400 سانتی متر است"]
            }
            if (width > maxWidth) {
                errs = [...errs, `بیشترین مقدار عرض موجود ${maxWidth} است`]
            }
        } else if (shape === "دایره") {
            if (width <= 0) {
                errs = [...errs, "مقدار قطر را وارد کنید"]
            }
            if (width > maxWidth) {
                errs = [...errs, `بیشترین مقدار قطر موجود ${maxWidth} است`]
            }
        } else if (shape === "بیضی") {
            if (length <= 0) {
                errs = [...errs, "مقدار قطر بزرگ را وارد کنید"]
            }
            if (width <= 0) {
                errs = [...errs, "مقدار قطر کوچک را وارد کنید"]
            }
            if (length > 1400) {
                errs = [...errs, "حداکثر مقدار قطر بزرگ 1400 سانتی متر است"]
            }
            if (width > maxWidth) {
                errs = [...errs, `بیشترین مقدار قطر کوچک موجود ${maxWidth} است`]
            }
        }
        setErrors(errs)
        return errs.length === 0
    }

    const handleSubmit = () => {
        if (!validate()) return
        nextStep()
    }

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files)
        setImages((prev) => [...prev, ...files])
    }

    return (
        <div className="space-y-8 p-4 lg:w-6/10 mx-auto card shadow border border-primary/20 bg-primary/3">

            {/* انتخاب شکل */}
            <div className="flex flex-col items-center gap-2">
                <h4 className="font-bold">شکل میز</h4>
                <div className="flex gap-2">
                    {[
                        { id: "مستطیل", label: "مستطیل / مربع" },
                        { id: "دایره", label: "دایره" },
                        { id: "بیضی", label: "بیضی" },
                    ].map((opt) => (
                        <button
                            key={opt.id}
                            className={`btn btn-sm rounded-md md:btn-md btn-secondary  ${shape === opt.id ? "" : "btn-outline"
                                }`}
                            onClick={() => {
                                setShape(opt.id)
                                setThickness(0)
                                setTimeout(() => document.querySelector('select').focus(), 100)
                            }}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* ضخامت */}
            {shape && loading && <span className="loading loading-spinner text-secondary"></span>}
            {shape && !loading && (
                <div className="space-y-2">
                    <h4 className="font-bold">ضخامت طلق</h4>
                    <select
                        className="select select-secondary w-full md:w-1/2 space-y-2"
                        value={thickness}
                        onChange={e => {
                            setThickness(parseFloat(e.target.value))
                            setTimeout(() => e.target.blur(), 100);
                            setMaxWidth(Math.max(...talqs.filter((t) => t.thickness === parseFloat(e.target.value)).map(t => t.width)))
                        }}
                    >
                        <option value={0} disabled>ضخامت طلق خود را انتخاب کنید</option>
                        {[...new Set(talqs.map((t) => t.thickness))].map(t => (
                            <option key={t} value={t}>
                                {t} میلی‌متر
                            </option>
                        ))}
                    </select>
                </div>
            )
            }

            {/* ابعاد */}
            {shape && thickness > 0 && (
                <>
                    <div>
                        <h4 className="font-bold">ابعاد</h4>
                        <div className="grid grid-cols-1 gap-2 mt-2">
                            {shape === "مستطیل" && (
                                <>
                                    <input
                                        min={0}
                                        type="number"
                                        placeholder="طول (سانتی متر)"
                                        className="input input-secondary md:w-1/2 mx-auto"
                                        step={0.1}
                                        onChange={(e) => setLength(parseFloat(e.target.value))}
                                    />
                                    <input
                                        min={0}
                                        type="number"
                                        placeholder="عرض (سانتی متر)"
                                        className="input input-secondary md:w-1/2 mx-auto"
                                        step={0.1}
                                        onChange={(e) => setWidth(parseFloat(e.target.value))}
                                    />
                                </>
                            )}
                            {shape === "دایره" && (
                                <input
                                    min={0}
                                    type="number"
                                    placeholder="قطر (سانتی متر)"
                                    className="input input-secondary md:w-1/2 mx-auto"
                                    step={0.1}
                                    onChange={(e) => setWidth(parseFloat(e.target.value))}
                                />
                            )}
                            {shape === "بیضی" && (
                                <>
                                    <input
                                        min={0}
                                        type="number"
                                        placeholder="قطر بزرگ (سانتی متر)"
                                        className="input input-secondary md:w-1/2 mx-auto"
                                        step={0.1}
                                        onChange={(e) => setLength(parseFloat(e.target.value))}
                                    />
                                    <input
                                        min={0}
                                        type="number"
                                        placeholder="قطر کوچک (سانتی متر)"
                                        className="input input-secondary md:w-1/2 mx-auto"
                                        step={0.1}
                                        onChange={(e) => setWidth(parseFloat(e.target.value))}
                                    />
                                </>
                            )}
                        </div>
                        {errors.map((err, i) => (
                            <p key={i} className="text-error text-sm mt-1">
                                {err}
                            </p>
                        ))}
                    </div>

                    {/* آپلود عکس */}
                    <div>
                        <h4 className="font-bold text-sm">عکس‌های میز خود را آپلود کنید</h4>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            className="file-input file-input-secondary file-input-bordered w-full mt-2 md:w-1/2"
                            onChange={handleImageUpload}
                        />
                    </div>

                    {/* دکمه تایید */}
                    <div>
                        <button
                            className="btn btn-primary rounded-sm w-1/2 md:w-1/3"
                            onClick={handleSubmit}
                            disabled={!shape || !thickness}
                        >
                            تایید
                        </button>
                    </div>
                </>
            )}
        </div >
    )
}

export default TalqForm