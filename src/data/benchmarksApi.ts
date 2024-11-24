import axios from "axios";
import ProductBenchmarks from '../assets/interfaces';
import ExchangeRates from '../assets/interfaces';

const BASE_URL_BENCHMARKS = 'https://substantive.pythonanywhere.com';
const API_KEY_BENCHMARKS = '590e3e17b6a26a8fcda726e2a91520e476e2c894';


const apiBenchmarks = axios.create({
  baseURL: BASE_URL_BENCHMARKS,
  headers: {
    'auth-key': API_KEY_BENCHMARKS,
  },
});

const getProductBenchmarks = async () => {
  const response = await apiBenchmarks.get<{product_benchmarks: ProductBenchmarks[]}>('product_benchmarks');
  console.log(response.data);
  return response.data;
}

const getExchangeRates = async () => {
  const response = await apiBenchmarks.get<{exchange_rates: ExchangeRates[]}>('exchange_rates');
  console.log(response.data);
  return response.data;
}

export {getProductBenchmarks, getExchangeRates};




