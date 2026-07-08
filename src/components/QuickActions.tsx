'use client'

import {
  FiGlobe,
  FiSmartphone,
  FiSliders,
  FiImage,
  FiBook,
  FiCode,
  FiFileText,
} from 'react-icons/fi'

const QuickActions = () => {
  const actions = [
    { id: 'site', label: 'Criar Site', icon: FiGlobe, color: 'from-blue-500 to-cyan-500' },
    { id: 'app', label: 'Criar App', icon: FiSmartphone, color: 'from-purple-500 to-pink-500' },
    { id: 'slide', label: 'Criar Slide', icon: FiSliders, color: 'from-orange-500 to-red-500' },
    { id: 'image', label: 'Gerar Imagem', icon: FiImage, color: 'from-yellow-500 to-orange-500' },
    { id: 'ebook', label: 'Criar eBook', icon: FiBook, color: 'from-green-500 to-emerald-500' },
    { id: 'code', label: 'Criar Código', icon: FiCode, color: 'from-indigo-500 to-purple-500' },
    { id: 'summarize', label: 'Resumir Doc', icon: FiFileText, color: 'from-red-500 to-pink-500' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      {actions.map((action) => {
        const Icon = action.icon
        return (
          <button
            key={action.id}
            className="glass rounded-xl p-4 border border-gray-800 hover:border-gray-700 transition group text-left"
          >
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${action.color} text-white group-hover:shadow-lg transition`}>
                <Icon size={24} />
              </div>
              <span className="font-semibold text-sm">{action.label}</span>
            </div>
          </button>
        )
      })}
    </div>
  )
}

export default QuickActions
