import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl) => {
    const [infoApi, setInfoApi] = useState()

    const getApi = (path) => {
        const url = `${baseUrl}${path}/`
        axios.get(url)
            .then(({ data }) => setInfoApi(data))
            .catch(err => console.log(err))
    }

    const postApi = (path, data) => {
        const url = `${baseUrl}${path}/`
        axios.post(url, data)
            .then(({ data }) => {
                setInfoApi([...infoApi, data])
            })
            .catch(err => console.log(err))
    }

    const deleteApi = (path, id) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.delete(url)
            .then(({ data }) => {
                console.log(data)
                setInfoApi(infoApi.filter(e => id !== e.id))
            })
            .catch(err => console.log(err))
    }

    const updateApi = (path, id) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.patch(url, data)
            .then(({ data }) => {
                console.log(data)
                setInfoApi(infoApi.map(e => id === e.id ? data : e))
            })
            .catch(err => console.log(err))
    }

    return [infoApi, getApi, postApi, deleteApi, updateApi]
}

export default useFetch