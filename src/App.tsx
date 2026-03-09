import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import { Navigation } from '@/components/Navigation'
import { HomePage } from '@/pages/HomePage'
import { TravelPage } from '@/pages/TravelPage'
import { RegistryPage } from '@/pages/RegistryPage'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Toaster position="top-center" richColors />
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/travel" element={<TravelPage />} />
          <Route path="/registry" element={<RegistryPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
