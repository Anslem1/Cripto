import React from 'react'
import { useParams } from 'react-router'
import Axios from '../../hooks/Axios'
import { Oval } from 'react-loader-spinner'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js'
import moment from 'moment/moment'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

function CoinChart () {
  const { criptoId } = useParams()
  const {
    response
  } = Axios(`/coins/${criptoId}/market_chart?vs_currency=usd&days=7
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
  const crptoChartData = response.prices.map(value => ({
    x: value[0],
    y: value[1].toFixed(2)
  }))

  const options = {
    responive: true
  }
  const data = {
    labels: crptoChartData.map(value => {
      return moment(value.x).format('MMM DD')
    }),
    datasets: [
      {
        fill: true,
        label: criptoId,
        data: crptoChartData.map(value => value.y),
        backgroundColor: 'rgba(100, 100, 100, 0.7)',
        borderColor: 'rgb(255, 2, 2, 0.7)'
      }
    ]
  }

  return <Line options={options} data={data} />
}

export default CoinChart
