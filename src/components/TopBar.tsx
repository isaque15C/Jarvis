'use client'

import { FiMenu, FiBell, FiUser } from 'react-icons/fi'
import { useState } from 'react'

interface TopBarProps {
  onMenuClick: () => void
}

const TopBar = ({ onMenuClick }: TopBarProps) => {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  return (
    <div className="border-b border-gray-900 bg-black/80 backdrop-blur-xl px-4 md:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="hidden md:flex items-center justify-center text-gray-400 hover:text-white"
          >
            <FiMenu size={24} />
          </button>
          <h1 className="text-2xl font-bold">J.A.R.V.I.S. AI</h1>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-gray-400 hover:text-white transition"
            >
              <FiBell size={24} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 glass rounded-xl border border-gray-800 shadow-lg z-50">
                <div className="p-4 border-b border-gray-800">
                  <p className="font-semibold">Notificações</p>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4 border-b border-gray-900 hover:bg-gray-900/50 transition">
                      <p className="text-sm font-semibold">Notificação {i}</p>
                      <p className="text-xs text-gray-500">Há alguns minutos</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-900 transition"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white to-gray-400 flex items-center justify-center text-black font-semibold">
                I
              </div>
              <span className="hidden md:block text-sm font-semibold">Isaque</span>
            </button>
            {showProfile && (
              <div className="absolute right-0 mt-2 w-48 glass rounded-xl border border-gray-800 shadow-lg z-50">
                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-800">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white to-gray-400 flex items-center justify-center text-black font-semibold">
                      I
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Isaque</p>
                      <p className="text-xs text-gray-400">usuario@email.com</p>
                    </div>
                  </div>
                  <button className="w-full text-left text-sm hover:text-gray-300 transition">
                    Perfil
                  </button>
                  <button className="w-full text-left text-sm hover:text-gray-300 transition">
                    Preferências
                  </button>
                  <button className="w-full text-left text-sm text-red-400 hover:text-red-300 transition pt-3 border-t border-gray-800">
                    Sair
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
