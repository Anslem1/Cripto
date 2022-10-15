import React from 'react'
import Axios from '../../hooks/Axios'
import CoinsTrending from './CoinTrending/CoinsTrending'

function Trending () {
  const { response } = Axios('/search/trending')

  return (
    <>
      <div className='trending-container'>
        <div className='trending'>Trending:</div>
        {response &&
          response.coins.map(coin => {
            return <CoinsTrending key={coin.item.coin_id} coin={coin.item} />
          })}
      </div>
    </>
  )
}

export default Trending
