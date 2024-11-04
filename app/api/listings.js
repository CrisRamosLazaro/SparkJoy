import client from './client'

const getListings = () => client.get('/listings')

const saveListing = (listingData) => client.post('/saveListing', listingData)

export default { getListings, saveListing }