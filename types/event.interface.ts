export interface Event {
  slug: string,
  name: string,
  start: Date,
  meetup?: string 
  venue: {
    address: {
      name: string
      address: string
      locality: string
      country: string
      url: string
      geo: {
        lat: number
        lng: number
      }
    }
    partner: {
      slug: string
      name: string
      logo: string
      social: {}
    }
  },
  proposals: {
    id: string
    video?: string
    slides?: string
    title: string
    description: string
    speakers: {
      slug: string
      firstName: string
      lastName: string
      avatar: string
      social: [Object]
    }[]
    tags: string[]
  }[],
  tags: []
}