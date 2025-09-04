import { useDispatch, useSelector } from "react-redux"

import { addTableType, addTableMaterial } from '../../../../redux/features/order/orderSlice'
import Loading from './Loading'
import Error from '../Error'
import GalleryItem from "./GalleryItem"

export default function TableGallery({ step, nextStep }) {
  const dispatch = useDispatch()
  const { loading, error, tables } = useSelector(state => step === 1 ? state.listTableType : state.listTableMaterial)

  const submitHandler = (table) => {
    dispatch(step === 1 ? addTableType(table) : addTableMaterial(table))
    nextStep()
  }

  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {tables.map(table => <GalleryItem key={table.id} item={table} submitHandler={submitHandler} />)}
    </div>
  )
}
