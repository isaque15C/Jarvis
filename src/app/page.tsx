'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import SplashScreen from '@/components/SplashScreen'
import LoginPage from '@/components/LoginPage'

type PageState = 'splash' | 'login' | 'dashboard'

export default function Home() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState<PageState>('splash')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const timer = setTimeout(() => {
      setIsLoading(false)
      const isAuthenticated = localStorage.getItem('isAuthenticated')
      if (isAuthenticated) {
        router.push('/dashboard')
      } else {
        setCurrentPage('login')
      }
    }, 3000) // Show splash screen for 3 seconds

    return () => clearTimeout(timer)
  }, [router])

  const handleLoginSuccess = () => {
    localStorage.setItem('isAuthenticated', 'true')
    router.push('/dashboard')
  }

  if (currentPage === 'splash') {
    return <SplashScreen />
  }

  if (currentPage === 'login') {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />
  }

  return null
}
