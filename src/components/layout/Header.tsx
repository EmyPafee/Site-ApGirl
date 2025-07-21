import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircleIcon, ShieldIcon, AlertCircleIcon, UsersIcon, UserIcon } from 'lucide-react';
const Header = () => {
  return <header className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-purple-600">ApGirl</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/faq" className="flex items-center text-gray-700 hover:text-purple-600">
              <HelpCircleIcon size={18} className="mr-1" />
              <span>Dúvidas</span>
            </Link>
            <Link to="/legal" className="flex items-center text-gray-700 hover:text-purple-600">
              <ShieldIcon size={18} className="mr-1" />
              <span>Políticas</span>
            </Link>
            <Link to="/comunidade" className="flex items-center text-gray-700 hover:text-purple-600">
              <AlertCircleIcon size={18} className="mr-1" />
              <span>Comunidade</span>
            </Link>
            <Link to="/suporte" className="flex items-center text-gray-700 hover:text-purple-600">
              <UsersIcon size={18} className="mr-1" />
              <span>Suporte</span>
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/cadastro" className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
              Cadastre-se
            </Link>
            <Link to="/perfil" className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <UserIcon size={20} />
            </Link>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;