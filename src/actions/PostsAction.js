import { GET_POSTS } from './types'
import axios from 'axios'



export const getPosts = (start,end) => {
    return(dispatch) => {
        axios({
            method:'get',
            url:'https://jsonplaceholder.typicode.com/posts'
        }).then(response => {
            console.log(response.data,'başarılı')
            dispatch({
                type: GET_POSTS,
                payload: response.data.slice(start,end)
            })

        }).catch(error => {
            console.log("hata:", error)
        })     

    }



}