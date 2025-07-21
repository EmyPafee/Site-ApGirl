import React from 'react';
import { StarIcon, ThumbsUpIcon, ThumbsDownIcon, FilterIcon } from 'lucide-react';
const ReviewsPage = () => {
  // Dados de exemplo
  const user = {
    nome: 'Mariana Costa',
    foto: "/WhatsApp_Image_2025-06-23_at_09.28.34.jpg",
    avaliacao: 4.8,
    totalAvaliacoes: 12
  };
  const reviews = [{
    id: 1,
    autor: {
      nome: 'Ana Silva',
      foto: "/WhatsApp_Image_2025-06-23_at_09.28.36.jpg"
    },
    avaliacao: 5,
    data: '15/03/2023',
    texto: 'Dividir apartamento com a Mariana foi uma experiência incrível. Ela é muito organizada, respeita o espaço dos outros e sempre mantém as áreas comuns limpas. Além disso, é uma ótima companhia para conversas e nunca tivemos problemas com pagamentos.',
    aspectosPositivos: ['Organizada', 'Pontual nos pagamentos', 'Respeitosa'],
    aspectosNegativos: []
  }, {
    id: 2,
    autor: {
      nome: 'Juliana Rocha',
      foto: "/WhatsApp_Image_2025-06-23_at_09.28.29.jpg"
    },
    avaliacao: 4,
    data: '22/01/2023',
    texto: 'A Mariana é uma ótima colega de apartamento. Muito tranquila e organizada. O único ponto é que às vezes recebe amigos sem avisar com antecedência, mas nada que tenha causado grandes problemas.',
    aspectosPositivos: ['Tranquila', 'Organizada', 'Amigável'],
    aspectosNegativos: ['Às vezes recebe visitas sem avisar']
  }];
  return <div className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Header perfil */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 flex flex-col md:flex-row items-center">
              <div className="md:mr-6 mb-4 md:mb-0">
                <img src={user.foto} alt={user.nome} className="w-24 h-24 rounded-full border-4 border-white object-cover" />
              </div>
              <div className="text-white text-center md:text-left">
                <h1 className="text-2xl font-bold">{user.nome}</h1>
                <div className="flex items-center justify-center md:justify-start mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} size={20} fill={i < Math.floor(user.avaliacao) ? 'currentColor' : 'none'} className="text-yellow-300" />)}
                  </div>
                  <span className="ml-2 font-semibold">{user.avaliacao}</span>
                  <span className="ml-2 text-white text-opacity-80">
                    ({user.totalAvaliacoes} avaliações)
                  </span>
                </div>
              </div>
            </div>
            {/* Filtros */}
            <div className="border-b p-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Avaliações</h2>
              <button className="flex items-center text-gray-600 hover:text-gray-800">
                <FilterIcon size={16} className="mr-1" />
                <span>Filtrar</span>
              </button>
            </div>
            {/* Lista de avaliações */}
            <div className="p-4">
              {reviews.map(review => <div key={review.id} className="mb-6 border-b pb-6 last:border-0 last:pb-0">
                  <div className="flex items-start">
                    <img src={review.autor.foto} alt={review.autor.nome} className="w-12 h-12 rounded-full object-cover mr-4" />
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-semibold">{review.autor.nome}</h3>
                        <span className="text-sm text-gray-500">
                          {review.data}
                        </span>
                      </div>
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => <StarIcon key={i} size={16} fill={i < review.avaliacao ? 'currentColor' : 'none'} className="text-yellow-400" />)}
                      </div>
                      <p className="text-gray-700 mb-4">{review.texto}</p>
                      {review.aspectosPositivos.length > 0 && <div className="mb-3">
                          <div className="flex items-center mb-2">
                            <ThumbsUpIcon size={16} className="text-green-600 mr-2" />
                            <h4 className="font-medium">Aspectos positivos</h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {review.aspectosPositivos.map((aspecto, index) => <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                {aspecto}
                              </span>)}
                          </div>
                        </div>}
                      {review.aspectosNegativos.length > 0 && <div>
                          <div className="flex items-center mb-2">
                            <ThumbsDownIcon size={16} className="text-red-600 mr-2" />
                            <h4 className="font-medium">Aspectos a melhorar</h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {review.aspectosNegativos.map((aspecto, index) => <span key={index} className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                                {aspecto}
                              </span>)}
                          </div>
                        </div>}
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ReviewsPage;