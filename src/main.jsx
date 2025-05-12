import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'

const themeConfig = {
  token: {
    colorPrimary: "#000",
    // colorSuccess: "#52c41a",
    // colorWarning: "#faad14",
    // colorError: "#ff4d4f",
    colorText: "#000",
    borderRadius: 4,
    colorBgContainer: "#fff",
  },
};

createRoot(document.getElementById('root')).render(
  <ConfigProvider theme={themeConfig}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </ConfigProvider>
)
