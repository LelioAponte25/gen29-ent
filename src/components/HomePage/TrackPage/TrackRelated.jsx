import { useEffect } from 'react'
import useFetch from '../../../hooks/useFetch'
import TrackerCard from '../TrackerCard'

const TrackRelated = ({artist}) => {

    const [ tracksList, getTrackList  ] = useFetch()

    useEffect(() => {

        if (artist) {
            getTrackList(`/api/tracks?limit=10&q=${artist}`)
        }
    },[artist])



    return (
        <section>
            <h3>Track Related</h3>
            <div>
                {
                    tracksList?.tracks.items.map(track =>  (
                        <TrackerCard
                        key={track.id}
                        track={track}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default TrackRelated