'use client'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface MessageBubbleProps {
  message: {
    id: string
    role: 'user' | 'assistant'
    content: string
    timestamp: Date
  }
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isUser = message.role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl px-4 py-3 rounded-2xl animate-slide-in ${
          isUser
            ? 'bg-white text-black rounded-br-none'
            : 'glass border border-gray-800 text-white rounded-bl-none'
        }`}
      >
        <p className="text-sm md:text-base break-words">{message.content}</p>
        <p className={`text-xs mt-2 ${isUser ? 'text-gray-600' : 'text-gray-500'}`}>
          {formatDistanceToNow(message.timestamp, { locale: ptBR, addSuffix: true })}
        </p>
      </div>
    </div>
  )
}

export default MessageBubble
