import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";

createRoot(document.getElementById('root')).render(

  // BrowserRouter 역할
  // - 페이지 이동 관련 컴포넌트를 동작시켜주는 컴포넌트
<BrowserRouter>
    <App />
</BrowserRouter>

)
