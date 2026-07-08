'use client'

import { useState } from 'react'
import {
  FiPlus,
  FiMessageSquare,
  FiImage,
  FiFileText,
  FiGrid,
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi'

interface SidebarProps {
  open: boolean
  onToggle: (open: boolean) => void
  currentView: string
  onViewChange: (view: any) => void
}

const Sidebar = ({ open, onToggle, currentView, onViewChange }: SidebarProps) => {
  const menuItems = [
    { id: 'chat', label: 'Nova Conversa', icon: FiPlus },
    { id: 'recent', label: 'Histórico', icon: FiMessageSquare },
    { id: 'images', label: 'Imagens', icon: FiImage },
    { id: 'files', label: 'Arquivos', icon: FiFileText },
    { id: 'projects', label: 'Projetos', icon: FiGrid },
    { id: 'settings', label: 'Configurações', icon: FiSettings },
  ]

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed md:relative h-screen bg-gray-950 border-r border-gray-900 transition-all duration-300 z-40 ${
          open ? 'w-64' : 'w-0'
        } overflow-hidden`}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-lg font-bold">J</span>
            </div>
            {open && (
              <div>
                <p className="text-sm font-semibold">J.A.R.V.I.S.</p>
                <p className="text-xs text-gray-500">AI Assistant</p>
              </div>
            )}
          </div>
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = currentView === item.id
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? 'bg-white text-black'
                    : 'text-gray-400 hover:text-white hover:bg-gray-900'
                }`}
              >
                <Icon size={20} />
                {open && <span className="text-sm">{item.label}</span>}
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-900">
          <div className="glass rounded-lg p-3 text-center">
            <p className="text-xs text-gray-400">Versão 1.0</p>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => onToggle(!open)}
        className="fixed md:hidden left-4 top-20 z-50 bg-white text-black p-2 rounded-lg hover:bg-gray-200 transition"
      >
        {open ? <FiChevronLeft size={20} /> : <FiChevronRight size={20} />}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
          onClick={() => onToggle(false)}
        />
      )}
    </>
  )
}

export default Sidebar
