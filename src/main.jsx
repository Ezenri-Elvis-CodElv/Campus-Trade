import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import {ToastContainer} from 'react-toastify'
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import './index.css'
import App from './App.jsx'
import store from '../src/global/store'
import { SearchProvider } from './context/SearchProducts.jsx';

const persistor = persistStore(store)

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <PersistGate loading={null} persistor={persistor}>
        <SearchProvider>
      <App />
      </SearchProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
)