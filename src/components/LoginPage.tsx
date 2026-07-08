'use client'

import { useState } from 'react'
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'

interface LoginPageProps {
  onLoginSuccess: () => void
}

type AuthMode = 'login' | 'signup' | 'forgot'

const LoginPage = ({ onLoginSuccess }: LoginPageProps) => {
  const [mode, setMode] = useState<AuthMode>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Simulate login
      await new Promise((resolve) => setTimeout(resolve, 1000))
      if (email && password) {
        onLoginSuccess()
      } else {
        setError('Por favor, preencha todos os campos')
      }
    } catch (err) {
      setError('Erro ao fazer login')
    } finally {
      setLoading(false)
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (password !== confirmPassword) {
        setError('As senhas não correspondem')
        setLoading(false)
        return
      }

      // Simulate signup
      await new Promise((resolve) => setTimeout(resolve, 1000))
      if (email && password) {
        onLoginSuccess()
      } else {
        setError('Por favor, preencha todos os campos')
      }
    } catch (err) {
      setError('Erro ao criar conta')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(#ffffff_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="glass rounded-2xl p-8 border border-gray-800">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 border-2 border-white rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold">J</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">J.A.R.V.I.S.</h1>
            <p className="text-gray-400 text-sm">Intelligent Assistant System</p>
          </div>

          {/* Form */}
          <form onSubmit={mode === 'login' ? handleLogin : handleSignup} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-3 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Senha
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-3 text-gray-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-10 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-300"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* Confirm Password (only for signup) */}
            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Confirmar Senha
                </label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-3 text-gray-500" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-10 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-gray-500 hover:text-gray-300"
                  >
                    {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>
            )}

            {/* Error message */}
            {error && (
              <div className="bg-red-500 bg-opacity-10 border border-red-500 rounded-lg p-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black font-semibold py-2 rounded-lg hover:bg-gray-200 transition disabled:opacity-50"
            >
              {loading ? 'Carregando...' : mode === 'login' ? 'Entrar' : 'Criar Conta'}
            </button>
          </form>

          {/* Forgot password link (only for login) */}
          {mode === 'login' && (
            <button
              onClick={() => setMode('forgot')}
              className="w-full text-center text-gray-400 text-sm mt-4 hover:text-white transition"
            >
              Esqueceu a senha?
            </button>
          )}

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-black text-gray-500">ou</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="space-y-2">
            <button className="w-full flex items-center justify-center gap-2 bg-gray-900 border border-gray-700 rounded-lg py-2 text-white hover:bg-gray-800 transition">
              <FcGoogle className="text-xl" />
              <span>Google</span>
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-gray-900 border border-gray-700 rounded-lg py-2 text-white hover:bg-gray-800 transition">
              <span>🍎</span>
              <span>Apple</span>
            </button>
          </div>

          {/* Switch mode */}
          <p className="text-center text-gray-400 text-sm mt-6">
            {mode === 'login' ? (
              <>
                Não tem conta?{' '}
                <button
                  onClick={() => setMode('signup')}
                  className="text-white hover:underline"
                >
                  Criar conta
                </button>
              </>
            ) : (
              <>
                Já tem conta?{' '}
                <button
                  onClick={() => setMode('login')}
                  className="text-white hover:underline"
                >
                  Fazer login
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
