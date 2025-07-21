import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeOffIcon, CheckCircleIcon } from 'lucide-react';
const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    telefone: '',
    dataNascimento: '',
    aceitaTermos: false
  });
  const navigate = useNavigate();
  const handleChange = e => {
    const {
      name,
      value,
      type,
      checked
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    // Em um cenário real, enviaríamos os dados para um servidor
    // Aqui vamos apenas simular o redirecionamento para a página de verificação
    navigate('/verificacao');
  };
  return <div className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-purple-600 py-4 px-6">
            <h2 className="text-2xl font-bold text-white text-center">
              Crie sua conta
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="py-6 px-8">
            <div className="mb-5">
              <label htmlFor="nome" className="block text-gray-700 font-medium mb-2">
                Nome completo
              </label>
              <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                E-mail
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required />
            </div>
            <div className="mb-5">
              <label htmlFor="telefone" className="block text-gray-700 font-medium mb-2">
                Telefone
              </label>
              <input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required />
            </div>
            <div className="mb-5">
              <label htmlFor="dataNascimento" className="block text-gray-700 font-medium mb-2">
                Data de Nascimento
              </label>
              <input type="date" id="dataNascimento" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required />
            </div>
            <div className="mb-5 relative">
              <label htmlFor="senha" className="block text-gray-700 font-medium mb-2">
                Senha
              </label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} id="senha" name="senha" value={formData.senha} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                <button type="button" className="absolute right-3 top-2.5 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                </button>
              </div>
            </div>
            <div className="mb-6 relative">
              <label htmlFor="confirmarSenha" className="block text-gray-700 font-medium mb-2">
                Confirmar Senha
              </label>
              <input type={showPassword ? 'text' : 'password'} id="confirmarSenha" name="confirmarSenha" value={formData.confirmarSenha} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required />
            </div>
            <div className="mb-6">
              <label className="flex items-center">
                <input type="checkbox" name="aceitaTermos" checked={formData.aceitaTermos} onChange={handleChange} className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" required />
                <span className="ml-2 text-gray-700">
                  Concordo com os{' '}
                  <Link to="/legal" className="text-purple-600 hover:underline">
                    Termos de Uso
                  </Link>{' '}
                  e{' '}
                  <Link to="/legal" className="text-purple-600 hover:underline">
                    Política de Privacidade
                  </Link>
                </span>
              </label>
            </div>
            <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition font-semibold">
              Continuar
            </button>
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Já possui uma conta?{' '}
                <Link to="/" className="text-purple-600 hover:underline font-medium">
                  Entrar
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="mt-8 max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start">
            <CheckCircleIcon size={24} className="text-purple-600 mr-3 mt-0.5" />
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Sua segurança é nossa prioridade
              </h3>
              <p className="text-gray-600">
                Após o cadastro, você passará por um processo de verificação
                para garantir que nossa comunidade seja composta apenas por
                mulheres, criando um ambiente seguro e confiável.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default RegisterPage;