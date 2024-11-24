export interface Currency {
  id : number;
  name: string;
  symbol: string;
}


export default interface ProductBenchmarks {
  id : number;
  provider_name: string;
  product_name: string;
  end_date : string;
  start_date : string;
  currency : Currency;
  payment : number;
  benchmark : number;
}
