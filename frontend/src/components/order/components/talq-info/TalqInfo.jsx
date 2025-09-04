import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTalq } from '../../../../redux/features/order/talqSlice'

import Error from '../Error'
import Form from './components/Form'

export default function TalqInfo({ nextStep }) {

  const dispatch = useDispatch()
  const { loading, error, talqs } = useSelector(state => state.listTalq)
  const { talqType } = useSelector(state => state.order)

  useEffect(() => {
    dispatch(fetchTalq(talqType.id))
  }, [])

  if (loading) return <div className='text-center'><span className="loading loading-dots loading-xl text-primary mt-20"></span></div>
  if (error || !talqs.length) return <Error />

  return <Form talqs={talqs} nextStep={nextStep} />
}
