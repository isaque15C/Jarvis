'use client'

import { useEffect, useState } from 'react'
import SplashScreen from '@/components/SplashScreen'
import LoginPage from '@/components/LoginPage'

type PageState = 'splash' | 'login' | 'dashboard'

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageState>('splash')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const timer = setTimeout(() => {
      setIsLoading(false)
      const isAuthenticated = localStorage.getItem('isAuthenticated')
      if (isAuthenticated) {
        setCurrentPage('dashboard')
      } else {
        setCurrentPage('login')
      }
    }, 3000) // Show splash screen for 3 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleLoginSuccess = () => {
    localStorage.setItem('isAuthenticated', 'true')
    setCurrentPage('dashboard')
  }

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    setCurrentPage('login')
  }

  if (currentPage === 'splash') {
    return <SplashScreen />
  }

  if (currentPage === 'login') {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Dashboard will be implemented here */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
          <p className="text-gray-400 mb-8">Coming soon...</p>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
