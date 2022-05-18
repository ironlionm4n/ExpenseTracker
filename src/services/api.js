import axios from 'axios'
import md5 from 'md5'

const publicKey = 'f4bc8a70d46e5635bb3145917df850e9'
const privateKey = '8951764290ccd71249487d00a8f137b8260a8770'
const ts = new Date()
const hash = md5(ts+privateKey+publicKey)

const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/',
    params: {
        ts,
        apikey: publicKey,
        hash,
    },
})

export default api;