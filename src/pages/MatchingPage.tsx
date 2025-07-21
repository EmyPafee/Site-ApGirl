import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, UserIcon, CheckIcon, XIcon, StarIcon, MapPinIcon, DollarSignIcon, MessageSquareIcon, HeartIcon } from 'lucide-react';
const MatchingPage = () => {
  const [matchType, setMatchType] = useState('users'); // 'users' ou 'apartments'
  const [currentIndex, setCurrentIndex] = useState(0);
  // Dados de exemplo
  const users = [{
    id: 1,
    nome: 'Mariana Costa',
    idade: 27,
    ocupacao: 'Jornalista',
    foto: "/foto3.jpg",
    localizacao: 'Capistrano, Ceará',
    avaliacao: 4.8,
    compatibilidade: 92,
    descricao: 'Jornalista, trabalho em regime híbrido e procuro dividir apartamento na região de Pinheiros. Sou organizada, gosto de receber amigos de vez em quando e adoro pets.'
  }, {
    id: 2,
    nome: 'Camila Mendes',
    idade: 20,
    ocupacao: 'Médica',
    foto: "/foto2.jpg",
    localizacao: 'Paraipaba, Ceará',
    avaliacao: 4.9,
    compatibilidade: 85,
    descricao: 'Médica, trabalho em hospital e tenho rotina um pouco imprevisível. Procuro apartamento tranquilo e organizado. Não tenho animais mas adoro gatos.'
  }, {
    id: 3,
    nome: 'Juliana Alves',
    idade: 25,
    ocupacao: 'Desenvolvedora',
    foto: "/foto4",
    localizacao: 'Morada Nova, Ceará',
    avaliacao: 4.7,
    compatibilidade: 78,
    descricao: 'Desenvolvedora de software, trabalho remotamente. Sou tranquila, organizada e gosto de manter a casa limpa. Nos finais de semana gosto de assistir séries e cozinhar.'
  }];
  const apartments = [{
    id: 1,
    titulo: 'Apartamento bem localizado',
    endereco: 'Rua Dr Eudasio Barroso, 61',
    bairro: 'Centro',
    cidade: 'Quixadá',
    preco: 800,
    vagasDisponiveis: 2,
    descricao: 'Apartamento espaçoso com 3 quartos, 2 banheiros, cozinha equipada e sala ampla. Próximo a Rodoviaria.',
    fotos: ["/apfoto2"],
    proprietaria: {
      nome: 'Fernanda Lima',
      avaliacao: 4.9
    }
  }, {
    id: 2,
    titulo: 'Apartamento ',
    endereco: 'Travessa Tiradentes, 154',
    bairro: 'Centro',
    cidade: 'Quixadá',
    preco: 750,
    vagasDisponiveis: 1,
    descricao: 'Apartamento charmoso com 2 quartos, 1 banheiro, cozinha americana e varanda. Localização privilegiada, próximo a bares e restaurantes.',
    fotos: ["/apfoto1"],
    proprietaria: {
      nome: 'Patrícia Santos',
      avaliacao: 4.7
    }
  }];
  const currentItems = matchType === 'users' ? users : apartments;
  const currentItem = currentItems[currentIndex % currentItems.length];
  const handleSwipe = direction => {
    // Em um app real, registraríamos o like/dislike
    // Aqui apenas avançamos para o próximo item
    setCurrentIndex(prevIndex => (prevIndex + 1) % currentItems.length);
  };
  return <div className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-center mb-6">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button type="button" className={`px-6 py-2 text-sm font-medium rounded-l-lg ${matchType === 'users' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} onClick={() => setMatchType('users')}>
                  <UserIcon size={18} className="inline mr-2" />
                  Colegas
                </button>
                <button type="button" className={`px-6 py-2 text-sm font-medium rounded-r-lg ${matchType === 'apartments' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} onClick={() => setMatchType('apartments')}>
                  <HomeIcon size={18} className="inline mr-2" />
                  Apartamentos
                </button>
              </div>
            </div>
            {matchType === 'users' && <div className="relative">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative">
                    <img src={currentItem.foto} alt={currentItem.nome} className="w-full h-80 object-cover" />
                    <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {currentItem.compatibilidade}% compatível
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="text-xl font-bold">
                        {currentItem.nome}, {currentItem.idade}
                      </h2>
                      <div className="flex items-center">
                        <StarIcon size={16} fill="currentColor" className="text-yellow-400" />
                        <span className="ml-1 text-gray-700">
                          {currentItem.avaliacao}
                        </span>
                      </div>
                    </div>
                    <div className="text-gray-600 mb-1">
                      {currentItem.ocupacao}
                    </div>
                    <div className="flex items-center text-gray-500 mb-4">
                      <MapPinIcon size={16} className="mr-1" />
                      <span>{currentItem.localizacao}</span>
                    </div>
                    <p className="text-gray-700 mb-6">
                      {currentItem.descricao}
                    </p>
                    <div className="flex justify-center space-x-4">
                      <button onClick={() => handleSwipe('left')} className="w-14 h-14 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50">
                        <XIcon size={24} className="text-red-500" />
                      </button>
                      <Link to={`/chat/${currentItem.id}`} className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full shadow-sm hover:bg-blue-200">
                        <MessageSquareIcon size={24} className="text-blue-600" />
                      </Link>
                      <button onClick={() => handleSwipe('right')} className="w-14 h-14 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50">
                        <HeartIcon size={24} className="text-purple-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>}
            {matchType === 'apartments' && <div className="relative">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative">
                    <img src={currentItem.fotos[0]} alt={currentItem.titulo} className="w-full h-80 object-cover" />
                    <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {currentItem.vagasDisponiveis}{' '}
                      {currentItem.vagasDisponiveis > 1 ? 'vagas' : 'vaga'}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="text-xl font-bold">
                        {currentItem.titulo}
                      </h2>
                      <div className="flex items-center">
                        <StarIcon size={16} fill="currentColor" className="text-yellow-400" />
                        <span className="ml-1 text-gray-700">
                          {currentItem.proprietaria.avaliacao}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 mb-2">
                      <MapPinIcon size={16} className="mr-1" />
                      <span>
                        {currentItem.bairro}, {currentItem.cidade}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-700 font-semibold mb-4">
                      <DollarSignIcon size={16} className="mr-1" />
                      <span>R$ {currentItem.preco}/mês</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      {currentItem.descricao}
                    </p>
                    <div className="mb-6">
                      <p className="text-sm text-gray-500">Anunciado por</p>
                      <p className="font-medium">
                        {currentItem.proprietaria.nome}
                      </p>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <button onClick={() => handleSwipe('left')} className="w-14 h-14 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50">
                        <XIcon size={24} className="text-red-500" />
                      </button>
                      <Link to={`/chat/${currentItem.id}`} className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full shadow-sm hover:bg-blue-200">
                        <MessageSquareIcon size={24} className="text-blue-600" />
                      </Link>
                      <button onClick={() => handleSwipe('right')} className="w-14 h-14 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50">
                        <HeartIcon size={24} className="text-purple-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>}
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Filtros</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Localização
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Todas as regiões</option>
                  <option>Zona Sul</option>
                  <option>Zona Oeste</option>
                  <option>Zona Norte</option>
                  <option>Centro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Faixa de preço
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Qualquer</option>
                  <option>Até R$ 1.000</option>
                  <option>R$ 1.000 - R$ 1.500</option>
                  <option>R$ 1.500 - R$ 2.000</option>
                  <option>R$ 2.000 - R$ 3.000</option>
                  <option>Acima de R$ 3.000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Compatibilidade mínima
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Qualquer</option>
                  <option>Acima de 70%</option>
                  <option>Acima de 80%</option>
                  <option>Acima de 90%</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Avaliação mínima
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Qualquer</option>
                  <option>3 estrelas ou mais</option>
                  <option>4 estrelas ou mais</option>
                  <option>4.5 estrelas ou mais</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
                Aplicar Filtros
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default MatchingPage;