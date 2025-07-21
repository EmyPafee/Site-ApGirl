import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, UserIcon, TargetIcon, ShieldIcon, MessageSquareIcon, StarIcon, UsersIcon } from 'lucide-react';
const HomePage = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Encontre a colega de apartamento ideal
              </h1>
              <p className="text-xl mb-8">
                Conectando mulheres em busca de moradia compartilhada segura,
                compatível e acolhedora.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/cadastro" className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-md hover:bg-gray-100 transition text-center">
                  Cadastre-se Agora
                </Link>
                <Link to="/sobre" className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:bg-opacity-10 transition text-center">
                  Saiba Mais
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src="/grupogarotas.jpg" alt="Mulheres compartilhando apartamento" className="rounded-lg shadow-xl max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      {/* How it Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Como Funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <UserIcon size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Crie seu perfil</h3>
              <p className="text-gray-600">
                Cadastre-se na plataforma e crie seu perfil com suas
                preferências, estilo de vida e necessidades de moradia.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <TargetIcon size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                2. Encontre matches
              </h3>
              <p className="text-gray-600">
                Nossa plataforma encontrará matches ideais com base em
                compatibilidade, localização e preferências pessoais.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <MessageSquareIcon size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Conecte-se</h3>
              <p className="text-gray-600">
                Converse com suas matches, conheça melhor e decida se deseja
                compartilhar um apartamento.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que escolher o ApGirl?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <ShieldIcon size={24} className="text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Segurança Primeiro
                </h3>
                <p className="text-gray-600">
                  Verificamos todas as usuárias para garantir um ambiente seguro
                  e confiável.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <TargetIcon size={24} className="text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Compatibilidade Real
                </h3>
                <p className="text-gray-600">
                  Nosso algoritmo encontra matches com base em hábitos, estilo
                  de vida e preferências.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <HomeIcon size={24} className="text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Busca de Apartamentos
                </h3>
                <p className="text-gray-600">
                  Encontre apartamentos disponíveis ou colegas para seu imóvel
                  atual.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <StarIcon size={24} className="text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Avaliações Verificadas
                </h3>
                <p className="text-gray-600">
                  Veja avaliações reais de outras usuárias sobre potenciais
                  colegas de apartamento.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <MessageSquareIcon size={24} className="text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Comunidade Acolhedora
                </h3>
                <p className="text-gray-600">
                  Faça parte de uma comunidade exclusiva de mulheres que se
                  apoiam mutuamente.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <UsersIcon size={24} className="text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Suporte Dedicado</h3>
                <p className="text-gray-600">
                  Nossa equipe está sempre disponível para ajudar em qualquer
                  etapa do processo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            O que dizem nossas usuárias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} size={16} fill="currentColor" />)}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "Encontrei minha colega de apartamento perfeita através do
                ApGirl! Temos estilos de vida super compatíveis e nos tornamos
                grandes amigas."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-purple-200 flex items-center justify-center mr-3">
                  <span className="text-purple-700 font-semibold">ML</span>
                </div>
                <div>
                  <h4 className="font-semibold">Maria Lima</h4>
                  <p className="text-sm text-gray-500">São Paulo, SP</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} size={16} fill="currentColor" />)}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "A verificação de perfil me deu muita segurança para encontrar
                colegas de apartamento. Recomendo para todas as mulheres!"
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-purple-200 flex items-center justify-center mr-3">
                  <span className="text-purple-700 font-semibold">CS</span>
                </div>
                <div>
                  <h4 className="font-semibold">Carla Silva</h4>
                  <p className="text-sm text-gray-500">Rio de Janeiro, RJ</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} size={16} fill="currentColor" />)}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "Estava com receio de dividir apartamento novamente após
                experiências ruins, mas o ApGirl mudou isso! O matching é
                incrível."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-purple-200 flex items-center justify-center mr-3">
                  <span className="text-purple-700 font-semibold">JR</span>
                </div>
                <div>
                  <h4 className="font-semibold">Juliana Rocha</h4>
                  <p className="text-sm text-gray-500">Belo Horizonte, MG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronta para encontrar sua colega de apartamento ideal?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Junte-se a milhares de mulheres que já encontraram segurança e
            compatibilidade em suas moradias compartilhadas.
          </p>
          <Link to="/cadastro" className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-md hover:bg-gray-100 transition inline-block">
            Comece Agora
          </Link>
        </div>
      </section>
    </div>;
};
export default HomePage;