'use client'

import { useState } from 'react'
import Sidebar from './Sidebar'
import ChatInterface from './ChatInterface'
import TopBar from './TopBar'
import QuickActions from './QuickActions'

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [currentView, setCurrentView] = useState<'chat' | 'recent' | 'projects' | 'files' | 'images' | 'settings'>('chat')

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onToggle={setSidebarOpen} currentView={currentView} onViewChange={setCurrentView} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Content Area */}
        <div className="flex-1 overflow-hidden">
          {currentView === 'chat' && <ChatInterface />}
          {currentView === 'recent' && <RecentView />}
          {currentView === 'projects' && <ProjectsView />}
          {currentView === 'files' && <FilesView />}
          {currentView === 'images' && <ImagesView />}
          {currentView === 'settings' && <SettingsView />}
        </div>
      </div>
    </div>
  )
}

const RecentView = () => (
  <div className="h-full overflow-y-auto p-6 space-y-6">
    <h2 className="text-3xl font-bold">Conversas Recentes</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="glass rounded-xl p-4 border border-gray-800 cursor-pointer hover:border-gray-700 transition">
          <p className="font-semibold mb-2">Conversa {i}</p>
          <p className="text-sm text-gray-400">Última mensagem...</p>
          <p className="text-xs text-gray-500 mt-2">Há 2 horas</p>
        </div>
      ))}
    </div>
  </div>
)

const ProjectsView = () => (
  <div className="h-full overflow-y-auto p-6 space-y-6">
    <h2 className="text-3xl font-bold">Projetos Recentes</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="glass rounded-xl p-4 border border-gray-800 cursor-pointer hover:border-gray-700 transition">
          <p className="font-semibold mb-2">Projeto {i}</p>
          <p className="text-sm text-gray-400">Descrição do projeto...</p>
          <p className="text-xs text-gray-500 mt-2">Modificado há 1 dia</p>
        </div>
      ))}
    </div>
  </div>
)

const FilesView = () => (
  <div className="h-full overflow-y-auto p-6 space-y-6">
    <h2 className="text-3xl font-bold">Arquivos</h2>
    <div className="space-y-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="glass rounded-lg p-4 border border-gray-800 hover:border-gray-700 transition flex items-center justify-between">
          <div className="flex-1">
            <p className="font-semibold">documento_{i}.pdf</p>
            <p className="text-sm text-gray-400">2.5 MB • Adicionado há 3 dias</p>
          </div>
          <button className="text-gray-400 hover:text-white">⋯</button>
        </div>
      ))}
    </div>
  </div>
)

const ImagesView = () => (
  <div className="h-full overflow-y-auto p-6 space-y-6">
    <h2 className="text-3xl font-bold">Imagens Geradas</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div key={i} className="glass rounded-lg overflow-hidden border border-gray-800 cursor-pointer hover:border-gray-700 transition group">
          <div className="aspect-square bg-gray-900 flex items-center justify-center">
            <span className="text-4xl">🖼️</span>
          </div>
          <div className="p-2 text-xs text-gray-400 group-hover:text-gray-300">
            Imagem {i}
          </div>
        </div>
      ))}
    </div>
  </div>
)

const SettingsView = () => (
  <div className="h-full overflow-y-auto p-6 space-y-6">
    <h2 className="text-3xl font-bold">Configurações</h2>
    <div className="max-w-2xl space-y-4">
      <div className="glass rounded-xl p-6 border border-gray-800">
        <h3 className="font-semibold mb-4">Aparência</h3>
        <div className="space-y-3">
          <label className="flex items-center">
            <input type="checkbox" defaultChecked className="mr-3" />
            <span>Modo Escuro (ativo)</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" defaultChecked className="mr-3" />
            <span>Animações</span>
          </label>
        </div>
      </div>

      <div className="glass rounded-xl p-6 border border-gray-800">
        <h3 className="font-semibold mb-4">Som e Notificações</h3>
        <div className="space-y-3">
          <label className="flex items-center">
            <input type="checkbox" defaultChecked className="mr-3" />
            <span>Notificações ativas</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" defaultChecked className="mr-3" />
            <span>Som de mensagens</span>
          </label>
        </div>
      </div>

      <div className="glass rounded-xl p-6 border border-gray-800">
        <h3 className="font-semibold mb-4">Idioma</h3>
        <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white">
          <option>Português (Brasil)</option>
          <option>Inglês</option>
          <option>Espanhol</option>
        </select>
      </div>
    </div>
  </div>
)

export default Dashboard
