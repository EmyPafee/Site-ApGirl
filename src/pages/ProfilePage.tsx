import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserIcon, HomeIcon, DollarSignIcon, MapPinIcon, MusicIcon, MoonIcon, SunIcon, EditIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react';
const ProfilePage = () => {
  const [lookingForApartment, setLookingForApartment] = useState(false);
  const [profile, setProfile] = useState({
    nome: 'Ana Silva',
    idade: 28,
    ocupacao: 'Designer',
    foto: "/foto1.jpg",
    verificado: true,
    preferencias: {
      orcamento: 'R$ 1.200 - R$ 1.800',
      localizacao: 'Zona Sul, São Paulo',
      fumante: false,
      animais: true,
      rotinaDiurna: true,
      rotinaNoturna: false,
      gostosMusicais: 'Pop, Rock, MPB'
    },
    sobre: 'Olá! Sou designer, trabalho remotamente e estou procurando um apartamento tranquilo para dividir. Sou organizada, gosto de manter os espaços comuns limpos e respeito muito a privacidade. Nos fins de semana gosto de assistir filmes e sair com amigos.'
  });
  return <div className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Header do perfil */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:mr-6 mb-4 md:mb-0">
                  <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                    <img src={profile.foto} alt={profile.nome} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="text-white text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start">
                    <h1 className="text-2xl font-bold mr-2">{profile.nome}</h1>
                    {profile.verificado && <CheckCircleIcon size={20} className="text-white" title="Perfil verificado" />}
                  </div>
                  <p className="text-white text-opacity-90">
                    {profile.idade} anos • {profile.ocupacao}
                  </p>
                  <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="bg-white bg-opacity-20 text-white text-sm px-3 py-1 rounded-full">
                      Designer
                    </span>
                    <span className="bg-white bg-opacity-20 text-white text-sm px-3 py-1 rounded-full">
                      São Paulo
                    </span>
                    <span className="bg-white bg-opacity-20 text-white text-sm px-3 py-1 rounded-full">
                      Organizada
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Conteúdo do perfil */}
            <div className="p-6">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Sobre mim</h2>
                  <button className="text-purple-600 flex items-center">
                    <EditIcon size={16} className="mr-1" />
                    <span>Editar</span>
                  </button>
                </div>
                <p className="text-gray-700">{profile.sobre}</p>
              </div>
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Preferências</h2>
                  <button className="text-purple-600 flex items-center">
                    <EditIcon size={16} className="mr-1" />
                    <span>Editar</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <DollarSignIcon size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Orçamento</p>
                      <p className="font-medium">
                        {profile.preferencias.orcamento}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <MapPinIcon size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Localização</p>
                      <p className="font-medium">
                        {profile.preferencias.localizacao}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <MusicIcon size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Gostos Musicais</p>
                      <p className="font-medium">
                        {profile.preferencias.gostosMusicais}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <div size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Animais de Estimação
                      </p>
                      <p className="font-medium">
                        {profile.preferencias.animais ? 'Aceita' : 'Não aceita'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <div size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Fumante</p>
                      <p className="font-medium">
                        {profile.preferencias.fumante ? 'Sim' : 'Não'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      {profile.preferencias.rotinaDiurna ? <SunIcon size={20} className="text-purple-600" /> : <MoonIcon size={20} className="text-purple-600" />}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Rotina</p>
                      <p className="font-medium">
                        {profile.preferencias.rotinaDiurna ? 'Diurna' : 'Noturna'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">
                  Estou procurando:
                </h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className={`flex-1 p-4 rounded-lg border-2 flex flex-col items-center ${!lookingForApartment ? 'border-purple-600 bg-purple-50' : 'border-gray-200 hover:border-purple-300'}`} onClick={() => setLookingForApartment(false)}>
                    <UserIcon size={32} className={!lookingForApartment ? 'text-purple-600' : 'text-gray-400'} />
                    <span className={`mt-2 font-medium ${!lookingForApartment ? 'text-purple-600' : 'text-gray-600'}`}>
                      Colegas de Apartamento
                    </span>
                    <span className="text-sm text-gray-500 mt-1 text-center">
                      Já tenho um imóvel e procuro por colegas
                    </span>
                  </button>
                  <button className={`flex-1 p-4 rounded-lg border-2 flex flex-col items-center ${lookingForApartment ? 'border-purple-600 bg-purple-50' : 'border-gray-200 hover:border-purple-300'}`} onClick={() => setLookingForApartment(true)}>
                    <HomeIcon size={32} className={lookingForApartment ? 'text-purple-600' : 'text-gray-400'} />
                    <span className={`mt-2 font-medium ${lookingForApartment ? 'text-purple-600' : 'text-gray-600'}`}>
                      Apartamento para Dividir
                    </span>
                    <span className="text-sm text-gray-500 mt-1 text-center">
                      Estou procurando um imóvel e colegas
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <Link to="/matching" className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition">
                  Encontrar {lookingForApartment ? 'Apartamentos' : 'Colegas'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ProfilePage;