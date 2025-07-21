import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SendIcon, PaperclipIcon, SmileIcon, PhoneIcon, VideoIcon, InfoIcon, ArrowLeftIcon, HomeIcon } from 'lucide-react';
const ChatPage = () => {
  const {
    id
  } = useParams();
  const [message, setMessage] = useState('');
  // Dados de exemplo
  const contact = {
    id: 1,
    nome: 'Mariana Costa',
    foto: "/foto3.jpg",
    online: true,
    ultimoAcesso: 'Há 5 minutos'
  };
  const apartment = {
    titulo: 'Apartamento',
    endereco: 'Rua Rui Barbosa , 307',
    bairro: 'Centro',
    cidade: 'Quixadá',
    preco: 900,
    foto: "/fotoapartamento.jpg"
  };
  const messages = [{
    id: 1,
    sender: 'other',
    text: 'Oi, Bom dia! Vi seu perfil e acho que podemos ser colegas para dividir apartamento.',
    time: '10:30'
  }, {
    id: 2,
    sender: 'me',
    text: 'Oioi Mariana! Também achei seu perfil muito bacana. Você está procurando em qual areá, mais para o centro ou mais afastada?',
    time: '10:32'
  }, {
    id: 3,
    sender: 'other',
    text: 'Estou procurando mais ao centro. Trabalho por ali e seria ideal para mim.',
    time: '10:35'
  }, {
    id: 4,
    sender: 'other',
    text: 'Encontrei esse apartamento que parece ser bem legal. Dá uma olhada!',
    time: '10:36'
  }, {
    id: 5,
    sender: 'other',
    type: 'apartment',
    apartmentData: apartment,
    time: '10:36'
  }, {
    id: 6,
    sender: 'me',
    text: 'Nossa, parece muito bom! Você já foi visitar ou dar uma olhada?',
    time: '10:40'
  }];
  const handleSendMessage = e => {
    e.preventDefault();
    // Em um cenário real, enviaríamos a mensagem para um servidor
    // Aqui apenas limpamos o campo
    if (message.trim()) {
      setMessage('');
    }
  };
  return <div className="w-full bg-gray-50 h-screen flex flex-col">
      <div className="container mx-auto px-4 flex-grow flex flex-col">
        <div className="max-w-4xl mx-auto w-full flex-grow flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
          {/* Header do chat */}
          <div className="bg-white border-b p-4 flex items-center">
            <Link to="/matching" className="mr-4 text-gray-600 hover:text-gray-800">
              <ArrowLeftIcon size={20} />
            </Link>
            <div className="flex-shrink-0 mr-3">
              <div className="relative">
                <img src={contact.foto} alt={contact.nome} className="w-12 h-12 rounded-full object-cover" />
                {contact.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>}
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold">{contact.nome}</h3>
              <p className="text-xs text-gray-500">
                {contact.online ? 'Online' : contact.ultimoAcesso}
              </p>
            </div>
            <div className="flex space-x-3">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                <PhoneIcon size={20} />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                <VideoIcon size={20} />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                <InfoIcon size={20} />
              </button>
            </div>
          </div>
          {/* Mensagens */}
          <div className="flex-grow bg-gray-50 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map(msg => <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                  {msg.type === 'apartment' ? <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
                      <img src={msg.apartmentData.foto} alt={msg.apartmentData.titulo} className="w-full h-32 object-cover" />
                      <div className="p-3">
                        <h4 className="font-semibold text-sm">
                          {msg.apartmentData.titulo}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {msg.apartmentData.bairro}, {msg.apartmentData.cidade}
                        </p>
                        <p className="text-sm font-medium mt-1">
                          R$ {msg.apartmentData.preco}/mês
                        </p>
                        <div className="mt-2 flex justify-between items-center">
                          <span className="text-xs text-gray-500">
                            {msg.time}
                          </span>
                          <button className="text-xs text-purple-600 flex items-center">
                            <HomeIcon size={12} className="mr-1" />
                            Ver detalhes
                          </button>
                        </div>
                      </div>
                    </div> : <div className={`max-w-xs px-4 py-2 rounded-lg ${msg.sender === 'me' ? 'bg-purple-600 text-white' : 'bg-white border border-gray-200'}`}>
                      <p>{msg.text}</p>
                      <p className={`text-xs mt-1 text-right ${msg.sender === 'me' ? 'text-purple-200' : 'text-gray-500'}`}>
                        {msg.time}
                      </p>
                    </div>}
                </div>)}
            </div>
          </div>
          {/* Input de mensagem */}
          <div className="bg-white border-t p-3">
            <form onSubmit={handleSendMessage} className="flex items-center">
              <button type="button" className="p-2 text-gray-500 hover:text-gray-700">
                <PaperclipIcon size={20} />
              </button>
              <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Digite uma mensagem..." className="flex-grow mx-2 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <button type="button" className="p-2 text-gray-500 hover:text-gray-700 mr-1">
                <SmileIcon size={20} />
              </button>
              <button type="submit" className={`p-2 rounded-full ${message.trim() ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`} disabled={!message.trim()}>
                <SendIcon size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>;
};
export default ChatPage;