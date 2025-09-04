import backend from '../axiosInstance'


const getTalqType = (tableId) => {
  return backend.get('talqs/type/', {
    params: { table_id: tableId }
  })
}

const getTalq = (typeId) => {
  return backend.get('talqs/', {
    params: { type_id: typeId }
  })
}

const talqeServices = {
  getTalqType,
  getTalq,
}

export default talqeServices