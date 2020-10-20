import React, { useState, useEffect } from 'react'
import './assets/scss/app.scss'
import Layout from './components/Layout'
import Loading from './components/Loading'
import Gallery from './components/Gallery'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [cats, setCats] = useState([])

  const requestOptions = {
    headers: { 'x-api-key': 'ed351e2b-0947-462c-b967-77cf4c39d243' },
  }
  const fetchData = async () => {
    setLoading(true)
    const response = await fetch(
      'https://api.thecatapi.com/v1/images/search?limit=10',
      requestOptions
    ).then((response) => response.json())
    setCats(response)
    {console.log(response)}
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <Layout>{loading ? <Loading /> : <Gallery data={cats} />}</Layout>
}

export default App