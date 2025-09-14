"use client";

import { useState, createRef } from 'react'

import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

import { GiTable, GiDesk } from "react-icons/gi";
import { FaToiletPaper, FaRegPenToSquare } from "react-icons/fa6";
import { HiArrowUturnRight } from "react-icons/hi2";
import { CgNotes } from "react-icons/cg";

import Gallery from "./components/Gallery";
import TalqForm from './components/TalqForm';
import Invoice from './components/Invoice';

function Order() {
    const formWizardRef = createRef()

    const prevStep = () => formWizardRef.current?.prevTab()
    const nextStep = () => formWizardRef.current?.nextTab()

    const [tableType, setTableType] = useState(null)
    const [tableMaterial, setTableMaterial] = useState(null)
    const [talqType, setTalqType] = useState(null)
    const [shape, setShape] = useState(null)
    const [thicknessOptions, setThicknessOptions] = useState([])
    const [selectedThickness, setSelectedThickness] = useState(null)
    const [dimensions, setDimensions] = useState({})
    const [images, setImages] = useState([])

    return (
        <main className="container mx-auto">
            <FormWizard
                stepSize='xs'
                color="oklch(60% 0.18 250)"
                ref={formWizardRef}
                nextButtonTemplate={() => null}
                backButtonTemplate={() => null}
                finishButtonTemplate={() => null}
            >
                <FormWizard.TabContent title='نوع میز' icon={<GiDesk />}>
                    <div className="flex gap-2 items-center">
                        <h3 className="font-bold text-sm md:text-lg text-base-content/90">
                            نوع میز خود را از گالری زیر انتخاب کنید
                        </h3>
                    </div>
                    <section className='h-[calc(100vh-18rem)] mt-2 overflow-y-auto p-4'>
                        <Gallery nextStep={nextStep} url='tables/type/' setItem={setTableType} />
                    </section>
                </FormWizard.TabContent>
                <FormWizard.TabContent title='جنس میز' icon={<GiTable />}>
                    <div className="flex gap-2 items-center">
                        <button className='btn btn-secondary opacity-95 btn-sm rounded-2xl md:rounded-4xl md:btn-md' onClick={prevStep}><HiArrowUturnRight /> مرحله قبل</button>
                        <h3 className="font-bold text-sm md:text-lg text-base-content/90">
                            جنس میز خود را از گالری زیر انتخاب کنید
                        </h3>
                    </div>
                    <section className='h-[calc(100vh-18rem)] mt-2 overflow-y-auto p-4'>
                        <Gallery nextStep={nextStep} url='tables/material/' setItem={setTableMaterial} />
                    </section>
                </FormWizard.TabContent>
                <FormWizard.TabContent title='طلق' icon={<FaToiletPaper />}>
                    <div className="flex gap-2 items-center">
                        <button className='btn btn-secondary opacity-95 btn-sm rounded-2xl md:rounded-4xl md:btn-md' onClick={prevStep}><HiArrowUturnRight /> مرحله قبل</button>
                        <h3 className="font-bold text-sm md:text-lg text-base-content/90">
                            جنس طلق خود را از گالری زیر انتخاب کنید
                        </h3>
                    </div>
                    <section className='h-[calc(100vh-18rem)] mt-2 overflow-y-auto p-4'>
                        <Gallery nextStep={nextStep} url='talqs/type/' params={tableMaterial ? { table_id: tableMaterial.id } : null} setItem={setTalqType} />
                    </section>
                </FormWizard.TabContent>
                <FormWizard.TabContent title='ابعاد' icon={<FaRegPenToSquare />}>
                    <div className="flex gap-2 items-center">
                        <button className='btn btn-secondary opacity-95 btn-sm rounded-2xl md:rounded-4xl md:btn-md' onClick={prevStep}><HiArrowUturnRight /> مرحله قبل</button>
                    </div>
                    <section className='h-[calc(100vh-16rem)] overflow-y-auto p-4'>
                        <TalqForm
                            talqType={talqType}
                            shape={shape}
                            setShape={setShape}
                            thicknessOptions={thicknessOptions}
                            setThicknessOptions={setThicknessOptions}
                            selectedThickness={selectedThickness}
                            setSelectedThickness={setSelectedThickness}
                            dimensions={dimensions}
                            setDimensions={setDimensions}
                            setImages={setImages}
                            nextStep={nextStep}
                        />
                    </section>
                </FormWizard.TabContent>
                <FormWizard.TabContent title='فاکتور' icon={<CgNotes />}>
                    <section className='h-[calc(100vh-16rem)] overflow-y-auto p-4'>
                        <Invoice
                            tableType={tableType}
                            tableMaterial={tableMaterial}
                            talqType={talqType}
                            shape={shape}
                            thicknessOptions={thicknessOptions}
                            selectedThickness={selectedThickness}
                            dimensions={dimensions}
                            images={images}
                        />
                    </section>
                </FormWizard.TabContent>
            </FormWizard>
        </main>
    )
}

export default Order