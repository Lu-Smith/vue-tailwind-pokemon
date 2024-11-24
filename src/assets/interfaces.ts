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

export default interface ExchangeRates {
  exchange_rate : number;
  from_currency_id: number;
  to_currency_id: number;
  year: number;
}

export default interface Transaction {
  id: number;
  provider_name: string;
  product_name: string;
  payment: number;
  benchmark: number;
  currency: Currency;
  start_date: string;
}


