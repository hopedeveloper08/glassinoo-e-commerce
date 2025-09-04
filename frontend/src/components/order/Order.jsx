import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchTablesType, fetchTablesMaterial } from '../../redux/features/order/tableSlice';
import Stepper from './components/stepper/Stepper';

export default function Order() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTablesType())
    dispatch(fetchTablesMaterial())
  }, [])

  return (
    <main className="w-screen container mx-auto">
      <Stepper />
    </main>
  )
}
