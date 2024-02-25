import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Calculator from './pages/Calculator.tsx';
import './index.css'
import { Provider } from 'react-redux';
import {store} from './redux/store.ts'
import {
  BrowserRouter,
  Route,
  Routes,
  redirect
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/calc' element={<Calculator/>}/>
          </Routes>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
