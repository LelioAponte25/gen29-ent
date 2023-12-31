import { useEffect } from 'react'
import usePlaylist from '../hooks/usePlaylist'

const PlaylistPage = () => {

    const {getPlaylist, playlist} = usePlaylist()

    useEffect(() => {
        getPlaylist()
    },[])

    console.log(playlist)

    return (
        <article>
            <h1>holaaaaaaaaaaaaaaa</h1>
            {
                playlist.map(track => (
                    <div key={track.id}>
                        <h2>{track.title}</h2>
                        <h2>{track.message}</h2>
                    </div>
                ))
            }
        </article>
    )
}

export default PlaylistPage