//

import axios from 'axios'
import  { useEffect, useState } from 'react'

function Axios (param) {
  const [response, setResponse] = useState(null)
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState('')

  axios.defaults.baseURL = 'https://api.coingecko.com/api/v3'
  async function fetchData () {
    try {
      setFetching(true)
      const res = await axios.get(param)
      setResponse(res.data)
    } catch (error) {
      setError(error)
    } finally {
      setFetching(false)
    }
  }

  useEffect(() => {
    fetchData(param)
  }, [])

  return {
    response,
    fetching,
    error
  }
}

export default Axios
