import React from 'react'
import { useParams } from 'react-router'
import Axios from '../../hooks/Axios'
import './CoinDetail.css'
import { Oval } from 'react-loader-spinner'


function CoinDetail () {
  const { criptoId } = useParams()
  const {
    response
  } = Axios(`coins/${criptoId}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=true&sparkline=false
`)
  if (response === null) {
    return (
      <div className='loading-screen'>
        <Oval
          height={100}
          width={100}
          color='#fff'
          wrapperStyle={{}}
          wrapperClass=''
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor='#4fa94d'
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    )
  }

  return (
    <>
      <div className='history-container'>
        <img src={response.image.small} alt={response.name} />
        <h1>{response.name}</h1>
      </div>
      <div className='history-description'>
        <p dangerouslySetInnerHTML={{ __html: response.description.en }}></p>
      </div>
    </>
  )
}

export default CoinDetail

// {additional_notices
// :
// []
// asset_platform_id
// :
// null
// block_time_in_minutes
// :
// 0
// categories
// :
// (2) ['Solana Ecosystem', 'Smart Contract Platform']
// coingecko_rank
// :
// 4
// coingecko_score
// :
// 65.857
// community_score
// :
// 50.646
// country_origin
// :
// ""
// description
// :
// {en: 'Solana crypto is a high throughput blockchain base…n infrastucture for modern internet applications.'}
// detail_platforms
// :
// {"": {…}}
// developer_data
// :
// {forks: 2388, stars: 9471, subscribers: 270, total_issues: 4521, closed_issues: 3526, …}
// developer_score
// :
// 89.605
// genesis_date
// :
// null
// hashing_algorithm
// :
// null
// ico_data
// :
// {ico_start_date: null, ico_end_date: null, short_desc: 'High-Performance Blockchain', description: null, links: {…}, …}
// id
// :
// "solana"
// image: {thumb: 'https://assets.coingecko.com/coins/images/4128/thumb/solana.png?1640133422', small: 'https://assets.coingecko.com/coins/images/4128/small/solana.png?1640133422', large: 'https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422'}
// last_updated
// :
// "2022-10-15T12:59:17.425Z"
// links
// :
// {homepage: Array(3), blockchain_site: Array(10), official_forum_url: Array(3), chat_url: Array(3), announcement_url: Array(2), …}
// liquidity_score
// :
// 74.593
// market_cap_rank
// :
// 9
// name
// :
// "Solana"
// platforms
// :
// {"": ''}
// public_interest_score
// :
// 0.104
// public_interest_stats
// :
// {alexa_rank: 83508, bing_matches: null}
// public_notice
// :
// null
// sentiment_votes_down_percentage
// :
// 40.6
// sentiment_votes_up_percentage
// :
// 59.4
// status_updates
// :
// []
// symbol
// :
// "sol"}
