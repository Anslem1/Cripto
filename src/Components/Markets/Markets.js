
import React from 'react'
import Axios from '../../hooks/Axios'
import AllMarkets from './AllMarkets/AllMarkets'
import './Markets.css'

function Markets () {
  const { response } = Axios(
    '/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  )

  return (
    <>
      <div className='market-container'>
        <h2 className='trending'>Market:</h2>
        {response &&
          response.map(market => {
            return <AllMarkets key={market.id} market={market} />
          })}
      </div>
    </>
  )
}

export default Markets
