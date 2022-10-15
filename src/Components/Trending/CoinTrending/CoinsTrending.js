import React from 'react'
import { Link } from 'react-router-dom'
import { formatToCurrency } from '../../../Utility'
import './CoinsTrending.css'

function CoinsTrending ({ coin }) {
  console.log(coin)
  return (
    <Link to={`/cripto/${coin.id}`} className='router-link'>
      <div className='trending-content'>
        <div className='coin-name-container'>
          <img src={coin.small} alt={coin.name} />
          <h2>
            {coin.name} <small>({coin.symbol})</small>
          </h2>
        </div>
        <div className='coin-info'>
          <p>Market ranking: {coin.market_cap_rank}</p>
          {/* <p>Price: ${formatToCurrency( coin.price_btc)}</p> */}
          <p>
            Price: $
            {coin.price_btc <= 0.1
              ? coin.price_btc
              : formatToCurrency(coin.price_btc)}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default CoinsTrending
