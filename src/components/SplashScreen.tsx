'use client'

import { useEffect, useState } from 'react'

const SplashScreen = () => {
  const [showMessage, setShowMessage] = useState(false)
  const [showSecondMessage, setShowSecondMessage] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setShowMessage(true), 800)
    const timer2 = setTimeout(() => setShowSecondMessage(true), 2200)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute text-gray-800 text-sm font-mono opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${i * 20}%`,
              animation: `slideInDown ${2 + i * 0.3}s ease-in-out infinite`,
            }}
          >
            {'> 0x' + Math.random().toString(16).slice(2).toUpperCase()}
          </div>
        ))}
      </div>

      {/* Logo and Text */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <div className="w-24 h-24 mx-auto mb-4 border-2 border-white rounded-lg flex items-center justify-center glass">
            <span className="text-4xl font-bold">J</span>
          </div>
        </div>

        {/* Main text */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
          J.A.R.V.I.S.
        </h1>

        {/* Loading message 1 */}
        {showMessage && (
          <p className="text-xl text-gray-400 mb-4 animate-slide-in-up">
            Inicializando J.A.R.V.I.S…
          </p>
        )}

        {/* Loading message 2 */}
        {showSecondMessage && (
          <div className="animate-slide-in-up">
            <p className="text-lg text-gray-300 mb-2">
              Todos os sistemas operacionais carregados.
            </p>
            <p className="text-sm text-gray-500">Redirecionando...</p>
          </div>
        )}
      </div>

      {/* Loading indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-white"
              style={{
                animation: `pulse 1.5s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SplashScreen
