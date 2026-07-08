'use client'

import { useState, useRef, useEffect } from 'react'
import { FiSend, FiMic, FiPaperclip } from 'react-icons/fi'
import MessageBubble from './MessageBubble'
import QuickActions from './QuickActions'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Olá! Eu sou J.A.R.V.I.S., seu assistente inteligente. Como posso ajudá-lo hoje?',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showQuickActions, setShowQuickActions] = useState(messages.length === 1)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)
    setShowQuickActions(false)

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Essa é uma resposta simulada. Em breve, vou estar integrado com a OpenAI API para responder suas perguntas de forma inteligente.',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setLoading(false)
    }, 1000)
  }

  const handleVoiceInput = () => {
    // Voice input will be implemented later
    console.log('Voice input started')
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      console.log('File uploaded:', file.name)
      const message: Message = {
        id: Date.now().toString(),
        role: 'user',
        content: `📎 Arquivo enviado: ${file.name}`,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, message])
    }
  }

  return (
    <div className="h-full flex flex-col bg-black">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
        {messages.length === 1 && showQuickActions && (
          <div className="flex items-center justify-center h-full">
            <div className="text-center max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Como posso ajudar?</h2>
              <p className="text-gray-400 mb-8">Escolha uma das ações abaixo ou digite sua pergunta</p>
              <QuickActions />
            </div>
          </div>
        )}

        {messages.length > 1 && (
          <div className="space-y-4">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-900 rounded-lg px-4 py-2 glass border border-gray-800">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 md:p-6 border-t border-gray-800">
        <form onSubmit={handleSendMessage} className="space-y-4">
          <div className="glass rounded-2xl border border-gray-800 p-4 flex items-end gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem aqui..."
              className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
            />

            <button
              type="button"
              onClick={handleVoiceInput}
              className="text-gray-400 hover:text-white transition"
              title="Voz"
            >
              <FiMic size={20} />
            </button>

            <label className="text-gray-400 hover:text-white transition cursor-pointer">
              <FiPaperclip size={20} />
              <input
                type="file"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>

            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="bg-white text-black p-2 rounded-lg hover:bg-gray-200 transition disabled:opacity-50"
            >
              <FiSend size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChatInterface
