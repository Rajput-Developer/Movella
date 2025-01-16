
import Navbar from './components/navbar/Navbar'
import { lazy,Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx'
const CatMovies = lazy(() => import('./components/MoviesCat/CatMoviesService/CatMovies.jsx'))
const About = lazy(() => import('./components/About/About.jsx'));
const DetailPage = lazy(() => import('./components/DetailPage/DetailPage.jsx'))
const Wishlist = lazy(() => import('./components/Wishlist/Wishlist.jsx'))
const Bookmarked = lazy(() => import('./components/Bookmarks/Bookmarked.jsx'))
import Footer from './components/Footer/Footer';
import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:name' element={<Home />} />
        <Route path='/about' element={<Suspense> <About /></Suspense>} />
        <Route path='/movies/:name' element={<Suspense><DetailPage /></Suspense>} />
        <Route path='/like' element={<Suspense><Wishlist /></Suspense>} />
        <Route path='/bookmarks-movies' element={<Suspense><Bookmarked /></Suspense>} />
        <Route path='/catageory/:name' element={<Suspense><CatMovies /></Suspense>} />
      </Routes>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
