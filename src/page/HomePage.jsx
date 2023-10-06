import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../hooks/useFetch'
import TrackerCard from '../components/HomePage/TrackerCard'


const HomePage = () => {

    const [listTracks, getTracks] = useFetch()
    const [inputValue, setInputValue] = useState('walter silva')
    const [quantityPerPage, setQuantityPerPage] = useState(10)

    useEffect(() => {
        getTracks(`/api/tracks?limit=${quantityPerPage}&q=${inputValue}`)
    }, [inputValue, quantityPerPage])

    const inputSearch = useRef()

    const handleSearch = e => {
        e.preventDefault()
        setInputValue(inputSearch.current.value.trim().toLowerCase())
    }

    const handleTracksPerPage = e => {
        setQuantityPerPage(e.target.value)
    }


    return (
        <div>
            <div>
                <form onSubmit={handleSearch}>
                    <input ref={inputSearch} type="text" />
                    <select onChange={handleTracksPerPage} defaultValue={10}>
                        {
                            [2, 4, 6, 8, 10].map(tracksPerPage => (
                                <option key={tracksPerPage} value={tracksPerPage}>{tracksPerPage}</option>
                            ))
                        }
                    </select>
                </form>
                <div>
                    {
                        listTracks?.tracks.items.map(track => (
                            <TrackerCard
                                key={track.id}
                                track={track}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage