import client from './client'

const getListings = () => client.get('/listings')

const saveListing = (listingData) => client.post('/listings', listingData, {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
})

export default { getListings, saveListing }