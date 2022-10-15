import React from 'react'
import CoinDetail from '../../Components/CoinDetail/CoinDetail'
import CoinChart from '../../Components/CoinHistoryChart/CoinChart'
import './CriptoDetails.css'

function CriptoDetails () {
  return (
    <>
      <CoinChart />
      <CoinDetail />
    </>
  )
}

export default CriptoDetails
