import React from 'react'
import { Link } from 'react-router-dom'
import { formatToCurrency } from '../../../Utility'

function AllMarkets ({ market }) {
  console.log(market)
  return (
    <>
      <Link to={`/cripto/${market.id}`} className='router-link'>
        <div className='market-content'>
          <img src={market.image} alt={market.image} className='market-image' />
          <div className='market-info'>
            <p className='market-name'>
              <span className='symbol'>{market.symbol}</span> {market.name}
            </p>
            <p className='market-price'>
              Price: ${formatToCurrency(market.current_price)}
            </p>

            <p className='market-cap'>
              Market cap: {formatToCurrency(market.market_cap)}
            </p>
            <p
              className={
                market.price_change_percentage_24h < 0
                  ? 'trending-down trend'
                  : 'trending-up trend'
              }
            >
              {market.price_change_percentage_24h < 0 ? (
                <i class='fa-solid fa-arrow-trend-down'></i>
              ) : (
                <i class='fa-solid fa-arrow-trend-up'></i>
              )}
              {market.price_change_percentage_24h}
            </p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default AllMarkets

// ath: 69045
// ath_change_percentage: -72.00902
// ath_date: '2021-11-10T14:24:11.849Z'
// atl: 67.81
// atl_change_percentage: 28401.09898
// atl_date: '2013-07-06T00:00:00.000Z'
// circulating_supply: 19179131
// current_price: 19344.42
// fully_diluted_valuation: 405852514343
// high_24h: 19880.56
// id: 'bitcoin'
// image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
// last_updated: '2022-10-14T17:40:47.562Z'
// low_24h: 19138.02
// market_cap: 370661835203
// market_cap_change_24h: 2870306080
// market_cap_change_percentage_24h: 0.78042
// market_cap_rank: 1
// max_supply: 21000000
// name: 'Bitcoin'
// price_change_24h: 206.4
// price_change_percentage_24h: 1.07846
// roi: null
// symbol: 'btc'
// total_supply: 21000000
// total_volume: 37154952222
