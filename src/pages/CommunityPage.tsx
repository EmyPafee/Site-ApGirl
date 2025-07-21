import React, { useState } from 'react';
import { MessageSquareIcon, ThumbsUpIcon, MessageCircleIcon, ShareIcon, SearchIcon, FilterIcon, PlusIcon, TagIcon, TrendingUpIcon, UsersIcon } from 'lucide-react';
const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [searchTerm, setSearchTerm] = useState('');
  // Dados de exemplo
  const discussions = [{
    id: 1,
    author: {
      name: 'Bruna Lima',
      avatar: "/foto5c"
    },
    title: 'Dicas para organização de espaços compartilhados',
    content: 'Olá meninas! Estou prestes a me mudar para um apartamento compartilhado e gostaria de saber quais são as melhores estratégias para manter os espaços comuns organizados e evitar conflitos. Alguém tem dicas para compartilhar?',
    tags: ['Organização', 'Convivência', 'Dicas'],
    likes: 24,
    comments: 15,
    time: '2 dias atrás'
  }, {
    id: 2,
    author: {
      name: 'Iasmin Uchoa',
      avatar: "/foto6c"
    },
    title: 'Dividindo contas e despesas: qual a melhor forma?',
    content: 'Estou com dificuldades para gerenciar as contas do apartamento que divido com mais duas meninas. Já tentamos planilhas e aplicativos, mas sempre há confusão. Alguém tem uma solução que funciona bem?',
    tags: ['Finanças', 'Dicas', 'Contas'],
    likes: 32,
    comments: 21,
    time: '5 dias atrás'
  }, {
    id: 3,
    author: {
      name: 'Vitoria Susan',
      avatar: "/foto7c"
    },
    title: 'Segurança para mulheres: dicas para escolher um bairro',
    content: 'Estou me mudando para São Paulo e procurando um bairro seguro para morar. Quais regiões vocês recomendam para mulheres que moram sozinhas ou compartilham apartamento? Quais critérios devo considerar?',
    tags: ['Segurança', 'Bairros', 'São Paulo'],
    likes: 45,
    comments: 28,
    time: '1 semana atrás'
  }];
  const events = [{
    id: 1,
    title: 'Workshop de Finanças Pessoais para Mulheres',
    date: '15/07/2023',
    time: '19:00',
    location: 'Online',
    description: 'Aprenda a organizar suas finanças, economizar e investir mesmo dividindo apartamento e despesas.',
    participants: 42,
    image: "/eventofoto.jpg"
  }, {
    id: 2,
    title: 'Encontro ApGirl São Paulo',
    date: '22/07/2023',
    time: '15:00',
    location: 'Parque Ibirapuera, São Paulo',
    description: 'Venha conhecer outras usuárias do ApGirl em um piquenique descontraído no parque. Traga seu lanche e boa energia!',
    participants: 28,
    image: "/eventofoto2.jpg"
  }];
  const resources = [{
    id: 1,
    title: 'Guia de Direitos para Inquilinas',
    type: 'PDF',
    description: 'Um guia completo sobre seus direitos como inquilina, incluindo contratos de aluguel, depósito caução e manutenção.',
    downloads: 156
  }, {
    id: 2,
    title: 'Modelo de Contrato de Convivência',
    type: 'DOCX',
    description: 'Template editável para criar um acordo formal entre colegas de apartamento, definindo regras de convivência e responsabilidades.',
    downloads: 213
  }, {
    id: 3,
    title: 'Checklist para Visita de Apartamentos',
    type: 'PDF',
    description: 'Lista completa de itens para verificar ao visitar um potencial apartamento para alugar.',
    downloads: 189
  }];
  return <div className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-t-lg p-6 text-white">
            <h1 className="text-3xl font-bold text-center mb-4">
              Comunidade ApGirl
            </h1>
            <p className="text-center max-w-3xl mx-auto">
              Um espaço seguro para compartilhar experiências, tirar dúvidas e
              conectar-se com outras mulheres.
            </p>
          </div>
          {/* Barra de pesquisa e botões */}
          <div className="bg-white p-4 border-b flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-1/2">
              <input type="text" placeholder="Buscar na comunidade..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <SearchIcon size={18} className="absolute left-3 top-2.5 text-gray-400" />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition flex items-center">
                <PlusIcon size={18} className="mr-1" />
                <span>Nova Discussão</span>
              </button>
              <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition">
                <FilterIcon size={18} />
              </button>
            </div>
          </div>
          {/* Tabs */}
          <div className="bg-white flex border-b">
            <button className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === 'discussions' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-600 hover:text-purple-600'}`} onClick={() => setActiveTab('discussions')}>
              <MessageSquareIcon size={18} className="inline mr-2" />
              Discussões
            </button>
            <button className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === 'events' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-600 hover:text-purple-600'}`} onClick={() => setActiveTab('events')}>
              <UsersIcon size={18} className="inline mr-2" />
              Eventos
            </button>
            <button className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === 'resources' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-600 hover:text-purple-600'}`} onClick={() => setActiveTab('resources')}>
              <TagIcon size={18} className="inline mr-2" />
              Recursos
            </button>
          </div>
          {/* Conteúdo */}
          <div className="bg-white rounded-b-lg shadow-md">
            {activeTab === 'discussions' && <div className="p-4">
                {/* Tópicos em alta */}
                <div className="mb-6">
                  <div className="flex items-center text-gray-700 mb-4">
                    <TrendingUpIcon size={18} className="mr-2" />
                    <h2 className="text-lg font-medium">Tópicos em Alta</h2>
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm whitespace-nowrap">
                      #Segurança
                    </button>
                    <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm whitespace-nowrap">
                      #DicasDeOrganização
                    </button>
                    <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm whitespace-nowrap">
                      #DividindoContas
                    </button>
                    <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm whitespace-nowrap">
                      #BairrosSeguros
                    </button>
                    <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm whitespace-nowrap">
                      #RegrasDeConvivência
                    </button>
                  </div>
                </div>
                {/* Lista de discussões */}
                <div className="space-y-4">
                  {discussions.map(discussion => <div key={discussion.id} className="border rounded-lg p-4 hover:shadow-md transition">
                      <div className="flex items-center mb-3">
                        <img src={discussion.author.avatar} alt={discussion.author.name} className="w-10 h-10 rounded-full object-cover mr-3" />
                        <div>
                          <h3 className="font-medium">
                            {discussion.author.name}
                          </h3>
                          <p className="text-xs text-gray-500">
                            {discussion.time}
                          </p>
                        </div>
                      </div>
                      <h2 className="text-xl font-semibold mb-2">
                        {discussion.title}
                      </h2>
                      <p className="text-gray-700 mb-3">{discussion.content}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {discussion.tags.map((tag, index) => <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                            #{tag}
                          </span>)}
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <button className="flex items-center hover:text-purple-600">
                          <ThumbsUpIcon size={16} className="mr-1" />
                          <span>{discussion.likes}</span>
                        </button>
                        <button className="flex items-center hover:text-purple-600">
                          <MessageCircleIcon size={16} className="mr-1" />
                          <span>{discussion.comments} comentários</span>
                        </button>
                        <button className="flex items-center hover:text-purple-600">
                          <ShareIcon size={16} className="mr-1" />
                          <span>Compartilhar</span>
                        </button>
                      </div>
                    </div>)}
                </div>
              </div>}
            {activeTab === 'events' && <div className="p-4">
                <h2 className="text-xl font-semibold mb-4">Próximos Eventos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {events.map(event => <div key={event.id} className="border rounded-lg overflow-hidden">
                      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-1">
                          {event.title}
                        </h3>
                        <div className="flex items-center text-gray-700 text-sm mb-2">
                          <span className="mr-3">{event.date}</span>
                          <span>{event.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>Local:</strong> {event.location}
                        </p>
                        <p className="text-gray-700 mb-4">
                          {event.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">
                            {event.participants} participantes
                          </span>
                          <button className="px-4 py-1 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 transition">
                            Participar
                          </button>
                        </div>
                      </div>
                    </div>)}
                </div>
                <div className="mt-6 text-center">
                  <button className="px-6 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition">
                    Ver Todos os Eventos
                  </button>
                </div>
              </div>}
            {activeTab === 'resources' && <div className="p-4">
                <h2 className="text-xl font-semibold mb-4">Recursos Úteis</h2>
                <div className="space-y-4">
                  {resources.map(resource => <div key={resource.id} className="border rounded-lg p-4 hover:shadow-md transition">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{resource.title}</h3>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded">
                          {resource.type}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm mb-4">
                        {resource.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">
                          {resource.downloads} downloads
                        </span>
                        <button className="px-4 py-1 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 transition">
                          Download
                        </button>
                      </div>
                    </div>)}
                </div>
                <div className="mt-6 bg-gray-50 p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2">Sugerir um Recurso</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Conhece algum material útil que poderia ajudar outras
                    usuárias? Sugira para nossa equipe!
                  </p>
                  <button className="px-4 py-2 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 transition">
                    Enviar Sugestão
                  </button>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </div>;
};
export default CommunityPage;