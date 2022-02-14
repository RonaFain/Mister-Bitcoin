'use strict'
import { utils } from './utils.service.js'
import { DbService } from './db-service.js'
import axios from 'axios'

const KEY = 'bitcoin'

export default {
  getRate,
  getMarketPrice,
//   getMarketPrice,
}

async function getRate(coins) {
  try {
      const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
      return Promise.resolve(res.data)
  } catch (err) {
    console.log(err)
    throw err
  }
}

async function getMarketPrice() {
    try {
        // const res = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
        // DbService.post('marketPrice', res.data.values)
        // return Promise.resolve(res.data)
        const marketPrice = await DbService.query('marketPrice')
        return Promise.resolve(marketPrice)
    } catch (err) {
        console.log(err)
        throw err
    }
}
