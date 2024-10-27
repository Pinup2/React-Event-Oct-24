type userDetails = {
  id: string,
  name: string,
  lastName: string,
  birthdate: string,
  status: string,
  baseLocations: {
    latitude: number,
    longitude: number,
    district: string,
    city: string,
  }[],
  educations: {
    organizationName: string,
    level: string,
    specialization?: string,
    graduationYear: number
}[],
  additionalInfo: string,
  contacts: {
    email: string,
        phone: string,
        social: {
            telegram: string,
            whatsapp: string,
            vk: string,
        }
  },
  favouriteRequests: []
}

export default userDetails;