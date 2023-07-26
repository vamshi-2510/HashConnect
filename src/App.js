import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import AddPost from './components/AddPost/AddPost'
import Reels from './components/Reels/Reels'
import Profile from './components/Profile/Profile'
import Register from './components/Registration/RegistrationForm'
import Login from './components/Login/LoginForm'
import Dashboard from './components/UserDashBoard/Dashboard'
import Requests from './components/Requests/Requests'
import EditProfile from './components/EditProfile/EditProfile'
import Followers from './components/FollowersFollowing/Followers'
import './App.css'


function App() {
  return (
    <div className='container-fluid '>

      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/Dashboard' element={<Dashboard />}>
          <Route path='' element={<Home />}></Route>
          <Route path='Requests' element={<Requests />}></Route>
          <Route path='Search' element={<Search />}></Route>
          <Route path='AddPost' element={<AddPost />}></Route>
          <Route path='Reels' element={<Reels />}></Route>
          <Route path='Profile' element={<Profile />}></Route>
          <Route path='FollowersFollowing' element={<Followers />}></Route>
          <Route path='EditProfile' element={<EditProfile />}></Route>
        </Route>

      </Routes>


    </div>
  );
}
export default App;
