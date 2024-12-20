import { lazy, StrictMode, Suspense } from 'react'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { sentralStore, presistor } from './Store/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Home from './components/Home/Home.jsx'
const CatMovies = lazy(() => import('./components/MoviesCat/CatMoviesService/CatMovies.jsx'))
const About = lazy(() => import('./components/About/About.jsx'));
const DetailPage = lazy(() => import('./components/DetailPage/DetailPage.jsx'))
const Wishlist = lazy(() => import('./components/Wishlist/Wishlist.jsx'))
const Bookmarked = lazy(()=> import('./components/Bookmarks/Bookmarked.jsx'))

// Defining the Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/search/:name',
        element: <Home />
      },
      {
        path: '/about',
        element: <Suspense> <About /></Suspense>
      },
      {
        path: '/movies/:name',
        element: <Suspense><DetailPage /></Suspense>
      },
      {
        path: '/like',
        element: <Suspense><Wishlist /></Suspense>
      },
      {
        path:'/bookmarks-movies',
        element:<Suspense><Bookmarked /></Suspense>
      },
      {
        path: '/catageory/:name',
        element: <Suspense><CatMovies /></Suspense>
      }
    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={sentralStore}>
      <PersistGate loading={null} persistor={presistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
