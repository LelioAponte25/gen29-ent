import React from 'react'
import TrackerCard from '../HomePage/TrackerCard'

const ArtistSongTop = ({tracks}) => {
    return (
        <section>
            <h3>Artist's Top Song</h3>
            <div>
                {
                    tracks?.map(trackInfo => (
                        <TrackerCard
                        key={trackInfo.id}
                        track={trackInfo}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default ArtistSongTop