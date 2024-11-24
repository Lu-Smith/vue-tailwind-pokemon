import axios from "axios";

const BASE_URL_BENCHMARKS = 'https://substantive.pythonanywhere.com';
const API_KEY_BENCHMARKS = '590e3e17b6a26a8fcda726e2a91520e476e2c894';


const apiBenchmarks = axios.create({
  baseURL: BASE_URL_BENCHMARKS,
  headers: {
    'auth-key': API_KEY_BENCHMARKS,
  },
});



const productBenchmarks = async () => {
  const response = await apiBenchmarks.get('product_benchmarks');
  console.log(response.data);
  return response.data;
}

export {productBenchmarks};




