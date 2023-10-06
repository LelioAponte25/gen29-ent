import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './page/HomePage'
import LoginPage from './page/LoginPage'
import RegisterPage from './page/RegisterPage'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCredentialsSlice } from './store/slices/credentials.slice'
import ProtectedRoutes from './page/ProtectedRoutes'
import TrackPage from './page/TrackPage'
import ArtistPage from './page/ArtistPage'
import PlaylistPage from './page/PlaylistPage'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem("token")
    const username = localStorage.getItem("username")
    const email = localStorage.getItem("email")
    const obj = {token, username, email}
    dispatch(setCredentialsSlice(obj))
  },[])

  return (
    <div>
      <Routes>
        <Route path='/auth/login'  element={<LoginPage/>}/>
        <Route path='/auth/register'  element={<RegisterPage/>}/>
        <Route element={<ProtectedRoutes/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/track/:id'  element={<TrackPage/>} />
        <Route path='/artist/:id' element={<ArtistPage/>} />
        <Route path='/Playlist' element={<PlaylistPage/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
