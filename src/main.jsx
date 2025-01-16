import { StrictMode } from 'react'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { sentralStore, presistor } from './Store/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Provider store={sentralStore}>
          <PersistGate loading={null} persistor={presistor}>
            <App />
          </PersistGate>
        </Provider>
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>
)
