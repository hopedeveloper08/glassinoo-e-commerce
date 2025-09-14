import { useState, useEffect } from "react"

import backend from "@/app/axiosInstance"

function TalqForm({
    talqType,
    shape,
    setShape,
    thicknessOptions,
    setThicknessOptions,
    selectedThickness,
    setSelectedThickness,
    dimensions,
    setDimensions,
    setImages,
    nextStep,
}) {

    const [loading, setLoading] = useState(true)
    const [maxWidth, setMaxWidth] = useState(0)

    useEffect(() => {
        setShape(null)
        async function fetchData() {
            setLoading(true)           
            try {
                const { data } = await backend.get('talqs/', { params: { type_id: talqType.id }})
                setThicknessOptions(data.data)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const [errors, setErrors] = useState({})
    const validate = () => {
        const errs = {}
        if (shape === "مستطیل") {
            if (!dimensions.length || !dimensions.width) {
                errs.dim = "طول و عرض الزامی است"
            }
            if (dimensions.length > 1400) {
                errs.length = "حداکثر طول 1400 سانتی متر است"
            }
            if (dimensions.width > maxWidth) {
                errs.width = `عرض نباید بیشتر از ${maxWidth} باشد`
            }
        } else if (shape === "دایره") {
            if (!dimensions.width) {
                errs.dim = "قطر الزامی است"
            }
            if (dimensions.width > maxWidth) {
                errs.width = `قطر نباید بیشتر از ${maxWidth} باشد`
            }
        } else if (shape === "بیضی") {
            if (!dimensions.length || !dimensions.width) {
                errs.dim = "قطر بزرگ و کوچک الزامی است"
            }
            if (dimensions.length > 1400) {
                errs.length = "حداکثر قطر بزرگ 1400 سانتی متر است"
            }
            if (dimensions.width > maxWidth) {
                errs.width = `قطر بزرگ نباید بیشتر از ${maxWidth} باشد`
            }
        }
        setErrors(errs)
        return Object.keys(errs).length === 0
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
        <div className="space-y-8 card border-1 border-secondary shadow p-4">

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
                                setSelectedThickness(0)
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
                        value={selectedThickness}
                        onChange={e => {
                            setSelectedThickness(parseFloat(e.target.value))
                            setTimeout(() => e.target.blur(), 100);
                            setMaxWidth(Math.max(...thicknessOptions.filter((t) => t.thickness === parseFloat(e.target.value)).map(t => t.width)))
                        }}
                    >
                        <option value={0} disabled>ضخامت طلق خود را انتخاب کنید</option>
                        {[...new Set(thicknessOptions.map((t) => t.thickness))].map(t => (
                            <option key={t} value={t}>
                                {t} میلی‌متر
                            </option>
                        ))}
                    </select>
                </div>
            )
            }

            {/* ابعاد */}
            {shape && selectedThickness > 0 && (
                <>
                    <div>
                        <h4 className="font-bold">ابعاد</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                            {shape === "مستطیل" && (
                                <>
                                    <input
                                        min={0}
                                        type="number"
                                        placeholder="طول (سانتی متر)"
                                        className="input input-secondary w-full"
                                        step={0.1}
                                        onChange={(e) =>
                                            setDimensions({ ...dimensions, length: parseFloat(e.target.value) })
                                        }
                                    />
                                    <input
                                        min={0}
                                        type="number"
                                        placeholder="عرض (سانتی متر)"
                                        className="input input-secondary w-full"
                                        step={0.1}
                                        onChange={(e) =>
                                            setDimensions({ ...dimensions, width: parseFloat(e.target.value) })
                                        }
                                    />
                                </>
                            )}
                            {shape === "دایره" && (
                                <input
                                    min={0}
                                    type="number"
                                    placeholder="قطر (سانتی متر)"
                                    className="input input-secondary w-full"
                                    step={0.1}
                                    onChange={(e) =>
                                        setDimensions({ ...dimensions, width: parseFloat(e.target.value) })
                                    }
                                />
                            )}
                            {shape === "بیضی" && (
                                <>
                                    <input
                                        min={0}
                                        type="number"
                                        placeholder="قطر بزرگ (سانتی متر)"
                                        className="input input-secondary w-full"
                                        step={0.1}
                                        onChange={(e) =>
                                            setDimensions({ ...dimensions, length: parseFloat(e.target.value) })
                                        }
                                    />
                                    <input
                                        min={0}
                                        type="number"
                                        placeholder="قطر کوچک (سانتی متر)"
                                        className="input input-secondary w-full"
                                        step={0.1}
                                        onChange={(e) =>
                                            setDimensions({ ...dimensions, width: parseFloat(e.target.value) })
                                        }
                                    />
                                </>
                            )}
                        </div>
                        {Object.values(errors).map((err, i) => (
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
                            className="file-input file-input-secondary file-input-bordered w-full mt-2"
                            onChange={handleImageUpload}
                        />
                    </div>

                    {/* دکمه تایید */}
                    <div>
                        <button
                            className="btn btn-primary rounded-sm w-1/2 md:w-1/3"
                            onClick={handleSubmit}
                            disabled={!shape || !selectedThickness}
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