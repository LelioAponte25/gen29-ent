import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import TrackInfo from '../components/HomePage/TrackPage/TrackInfo'
import TrackRelated from '../components/HomePage/TrackPage/TrackRelated'

const TrackPage = () => {

    const { id } = useParams()

    const [track, getTrack] = useFetch(`/api/tracks/${id}`)

    useEffect(() => {
        getTrack(`/api/tracks/${id}`)
    }, [id])


    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <div onClick={handleBack}>Back</div>
            <TrackInfo 
            track={track}
            />
            <TrackRelated
            artist={track?.artists[0].name}
            />
        </div>
    )
}

export default TrackPage