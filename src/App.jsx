import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router'
import { EmailProvider } from './pages/emailContext'

function App() {

  return (
    <>
      <EmailProvider>
      <RouterProvider router={router} />
      </EmailProvider>

    </>
  )
}

export default App
