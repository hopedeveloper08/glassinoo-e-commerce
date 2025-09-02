import backend from '../axiosInstance'


const getTalqType = (tableId) => {
  return backend.get('talqs/type/', {
    params: { table_id: tableId }
  })
}

const talqeServices = {
  getTalqType,
}

export default talqeServices