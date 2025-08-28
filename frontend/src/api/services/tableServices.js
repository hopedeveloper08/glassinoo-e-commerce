import backend from '../axiosInstance'


const getTableType = () => {
  return backend.get('tables/type/')
}

const getTableMaterial = () => {
  return backend.get('tables/material/')
}

const tableServices = {
  getTableType,
  getTableMaterial,
}

export default tableServices