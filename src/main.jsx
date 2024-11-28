import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from "./Redux/store.js";
import { persistor } from "./Redux/store.js"; 

import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
              <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <ToastContainer />
</PersistGate>
        <App />
    </Provider>,
)
