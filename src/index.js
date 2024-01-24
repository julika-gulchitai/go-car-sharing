import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/go-car-sharing">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        {/* <ToastContainer autoClose={500} /> */}
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
