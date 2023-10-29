import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl) => {

    const [infoApi, setInfoApi] = useState([])

    const getApi = (path) => {
        const url = `${baseUrl}${path}/`
        axios.get(url)
            .then(res => setInfoApi(res.data))
            .catch(err => console.log(err))
    }

    const postApi = (path, data) => {
        const url = `${baseUrl}${path}/`
        axios.post(url, data)
            .then(res => {
                console.log(res.data)
                setInfoApi([...infoApi, res.data])
            })
            .catch(err => console.log(err))
    }

    const deleteApi = (path, id) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.delete(url)
            .then(res => {
                console.log(res.data)
                setInfoApi(infoApi.filter(e => id !== e.id))
            })
            .catch(err => console.log(err))
    }

    const updateApi = (path, id, data) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.patch(url, data)
            .then(res => {
                console.log(res.data)
                setInfoApi(infoApi.map(e => id === e.id ? res.data : e))
            })
            .catch(err => console.log(err))
    }

    return [infoApi, getApi, postApi, deleteApi, updateApi]
}

export default useFetch