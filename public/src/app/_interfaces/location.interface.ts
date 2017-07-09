export interface Location {
  city: string
  country: string
  lat: number
  lon: number
  name: string
  state: string
  unique_id: number
  author: number
  _id: any
  images: string[]
  imageLink: string
  description: string
  activities: Activities[]
  length: number
}

interface Activities {
  description: string
  name: string
  url: string
  _id: string
}