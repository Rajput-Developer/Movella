import { lazy, StrictMode, Suspense } from 'react'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import { sentralStore,presistor } from './Store/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
const About = lazy(() => import('./components/About/About.jsx'));
const DetailPage = lazy(() => import('./components/DetailPage/DetailPage.jsx'))
const Wishlist = lazy(() => import('./components/Wishlist/Wishlist.jsx'))
const ActionMovies = lazy(() => import('./components/MoviesCat/action/Action.jsx'));
const BollywoodMovies = lazy(() => import('./components/MoviesCat/Bollywood/Bollywood.jsx'));
const HollywoodMovies = lazy(() => import('./components/MoviesCat/Hollywood/Hollywood.jsx'));

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
        path: '/action-movies',
        element: <Suspense><ActionMovies /></Suspense>
      },
      {
        path: '/bollywood-movies',
        element: <Suspense><BollywoodMovies /></Suspense>
      },
      {
        path: '/hollywood-movies',
        element: <Suspense> <HollywoodMovies /> </Suspense>
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
