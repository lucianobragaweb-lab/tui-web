import City from './City'
import Geo from './Geo'

type Price = {
  currency: string
  amount: string
  priceType?: string
}

type Region = {
  code: string
  label: string
}

type Country = {
  code: string
  label: string
}

type PerPerson = {
  allInPrice: Price,
  totalPrice: Price,
  displayPrice: Price,
  netPrice: Price,
}

type Product {
  totalPrice: Price,
  allInPrice: Price,
  displayPrice: Price,
  localSupplier: string,
  marketIdentifier: string,
  board: string,
  from: string,
  city: City,
  ref: string,
  duration: string,
  region: Region,
  country: Country,
  adults: string,
  room: string,
  geo: Geo,
  children: string,
  averageRating: string,
  ratingCount: string,
  starRating: string,
  amenities: string,
  guests: number,
  trustyouId: string,
  hotelName: string,
  perPerson: PerPerson
}

export default Product
