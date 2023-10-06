import axios from "axios"
import { useState } from "react"
import getConfiToken from "../services/getConfiToken"
import { setTRacksSlice } from "../store/slices/tracks.slice"
import { useDispatch } from "react-redux"

const usePlaylist = () => {

    const [playlist, setPlaylist] = useState([])
    const dispatch = useDispatch()
    const baseUrl = 'https://playlist-share-dev.fl0.io'

    const getPlaylist = () => {

        const url = `${baseUrl}/api/playlists/me`

        axios
            .get(url, getConfiToken())
            .then(res => setPlaylist(res.data))
            .catch(err => console.log(err))

    }

    const postPlaylist = ( data ) => {
        const url = `${baseUrl}/api/playlists`
        axios
        .post(url, data, getConfiToken())
        .then(res => {
            console.log(res.data)
            setPlaylist([...playlist, res.data.info])
            dispatch(setTRacksSlice([]))
        })
        .catch(err => console.log(err))
    }

    const deletPlaylist = (id) => {
        const url = `${baseUrl}/api/playlists/${id}`
        axios
        .delete(url, getConfiToken())
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    return {playlist, getPlaylist, postPlaylist, deletPlaylist}

}

export default usePlaylist