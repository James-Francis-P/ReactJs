import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 8O-izeOXUuyvqL21BT0eapvwSI2jOelbCizy0H_YCAs'
    }

})