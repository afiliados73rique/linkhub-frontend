import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/authService'
import './Login.css'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault() // impede o formulário de recarregar a página (comportamento padrão do HTML)
    setErro('')
    setCarregando(true)

    try {
      const token = await login(username, password)
      localStorage.setItem('token', token)
      navigate('/admin')
    } catch (error) {
      setErro('Usuário ou senha inválidos')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>LinkHub Admin</h1>

        <label>Usuário</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {erro && <p className="login-erro">{erro}</p>}

        <button type="submit" disabled={carregando}>
          {carregando ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  )
}

export default Login