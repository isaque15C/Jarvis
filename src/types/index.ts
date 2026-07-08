export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  createdAt: Date
}

export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  conversationId: string
}

export interface Conversation {
  id: string
  userId: string
  title: string
  messages: Message[]
  createdAt: Date
  updatedAt: Date
}

export interface AISettings {
  theme: 'dark' | 'light'
  language: string
  fontSize: 'small' | 'medium' | 'large'
  notifications: boolean
  voice: boolean
}
