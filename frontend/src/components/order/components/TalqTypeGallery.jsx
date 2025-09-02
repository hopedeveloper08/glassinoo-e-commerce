import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addTalqType } from '../../../redux/features/order/orderSlice'
import { fetchTalqType } from '../../../redux/features/order/talqSlice'

import Loading from './Loading'
import Error from './Error'
import Item from './Item'

export default function TalqTypeGallery({ nextStep }) {
  const dispatch = useDispatch()
  const { loading, error, talqs } = useSelector(state => state.listTalqType)
  const { tableMaterial } = useSelector(state => state.order)

  useEffect(() => {
    dispatch(fetchTalqType(tableMaterial.id))
  }, [])

  const submitHandler = (talq) => {
    dispatch(addTalqType(talq))
    nextStep()
  }

  if (error) return <Error />

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {loading ? <Loading /> : talqs.map(talq => <Item key={talq.id} item={talq} submitHandler={submitHandler} />)}
    </div>
  )
}
