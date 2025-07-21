import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, SearchIcon } from 'lucide-react';
const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const faqs = [{
    category: 'Cadastro e Verificação',
    questions: [{
      question: 'Como funciona o processo de verificação?',
      answer: 'O processo de verificação envolve o envio de uma selfie e um documento com foto (RG ou CNH). Nossa equipe verifica manualmente cada cadastro para garantir a segurança da plataforma e confirmar que todas as usuárias são mulheres. O processo geralmente leva até 24 horas úteis.'
    }, {
      question: 'Por que preciso enviar um documento de identificação?',
      answer: 'O documento de identificação é necessário para verificar sua identidade e garantir que nossa plataforma seja um espaço seguro e exclusivo para mulheres. Seus dados são tratados com segurança e confidencialidade, seguindo nossa política de privacidade.'
    }, {
      question: 'Posso usar o ApGirl se for estudante?',
      answer: 'Sim! O ApGirl é ideal para estudantes que procuram dividir moradia. Muitas de nossas usuárias são estudantes universitárias buscando apartamentos próximos às suas instituições de ensino.'
    }]
  }, {
    category: 'Utilizando a Plataforma',
    questions: [{
      question: 'Como funciona o sistema de matching?',
      answer: 'Nosso algoritmo analisa diversos fatores como localização desejada, orçamento, estilo de vida, hábitos e preferências pessoais para sugerir matches com alta compatibilidade. Você pode deslizar para a direita para demonstrar interesse ou para a esquerda para passar.'
    }, {
      question: 'Posso filtrar minhas buscas por localização específica?',
      answer: 'Sim, você pode filtrar suas buscas por bairro, região da cidade, proximidade a estações de metrô, universidades e outros pontos de referência. Quanto mais específica for sua busca, mais precisos serão os resultados.'
    }, {
      question: 'O que fazer se encontrar um perfil suspeito?',
      answer: "Se você encontrar um perfil que pareça suspeito ou inadequado, utilize a função 'Denunciar' disponível no perfil da usuária. Nossa equipe irá revisar a denúncia e tomar as medidas necessárias para manter a plataforma segura."
    }]
  }, {
    category: 'Apartamentos e Moradia',
    questions: [{
      question: 'Posso anunciar meu apartamento para dividir?',
      answer: 'Sim! Se você já tem um apartamento e está procurando por colegas para dividir, você pode cadastrar seu imóvel na plataforma com fotos, descrição, valor do aluguel e detalhes sobre as áreas comuns e regras de convivência.'
    }, {
      question: 'O ApGirl oferece contratos de aluguel compartilhado?',
      answer: 'O ApGirl não oferece contratos diretamente, mas disponibilizamos modelos de contratos de convivência que podem ser utilizados pelas usuárias. Sempre recomendamos formalizar o acordo para evitar problemas futuros.'
    }, {
      question: 'Como são verificados os apartamentos anunciados?',
      answer: 'Os apartamentos são vinculados às usuárias que os anunciam, que já passaram pelo nosso processo de verificação. Além disso, incentivamos as usuárias a compartilharem fotos reais e atualizadas dos imóveis. Caso haja denúncias de informações falsas, o anúncio é removido.'
    }]
  }, {
    category: 'Segurança e Privacidade',
    questions: [{
      question: 'Como o ApGirl protege meus dados pessoais?',
      answer: 'Utilizamos criptografia de ponta a ponta para proteger suas conversas e dados pessoais. Seus documentos são armazenados de forma segura e excluídos após o processo de verificação. Nunca compartilhamos suas informações com terceiros sem seu consentimento.'
    }, {
      question: 'O que fazer se me sentir insegura ao conhecer uma potencial colega?',
      answer: 'Recomendamos sempre marcar o primeiro encontro em um local público. Utilize nossa função de videochamada para conversar antes de se encontrar pessoalmente. Se sentir qualquer desconforto, você pode bloquear a usuária e reportar à nossa equipe de suporte.'
    }, {
      question: 'Como funciona o sistema de avaliações?',
      answer: 'Após dividir apartamento com uma usuária por pelo menos 30 dias, você pode avaliá-la com base em critérios como organização, pontualidade nos pagamentos, respeito ao espaço e comunicação. Essas avaliações ajudam a construir uma comunidade confiável.'
    }]
  }];
  const toggleAccordion = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const filteredFAQs = searchTerm ? faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) || q.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  })).filter(category => category.questions.length > 0) : faqs;
  return <div className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            Dúvidas Frequentes
          </h1>
          {/* Barra de pesquisa */}
          <div className="mb-8">
            <div className="relative">
              <input type="text" placeholder="Buscar dúvidas..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <SearchIcon size={20} className="absolute left-4 top-3.5 text-gray-400" />
            </div>
          </div>
          {/* Lista de FAQs */}
          <div className="space-y-8">
            {filteredFAQs.map((category, categoryIndex) => <div key={categoryIndex} className={category.questions.length > 0 ? 'block' : 'hidden'}>
                <h2 className="text-xl font-semibold mb-4">
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.questions.map((faq, faqIndex) => {
                const index = `${categoryIndex}-${faqIndex}`;
                return <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <button className="w-full px-6 py-4 text-left flex justify-between items-center" onClick={() => toggleAccordion(index)}>
                          <span className="font-medium text-gray-800">
                            {faq.question}
                          </span>
                          {activeIndex === index ? <ChevronUpIcon size={20} className="text-purple-600" /> : <ChevronDownIcon size={20} className="text-gray-600" />}
                        </button>
                        {activeIndex === index && <div className="px-6 py-4 bg-gray-50 border-t">
                            <p className="text-gray-700">{faq.answer}</p>
                          </div>}
                      </div>;
              })}
                </div>
              </div>)}
            {filteredFAQs.every(category => category.questions.length === 0) && <div className="text-center py-8">
                <p className="text-gray-500">
                  Nenhuma dúvida encontrada para "{searchTerm}"
                </p>
              </div>}
          </div>
          {/* Não encontrou sua dúvida? */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">
              Não encontrou o que procurava?
            </h3>
            <p className="text-gray-600 mb-6">
              Entre em contato com nossa equipe de suporte e responderemos sua
              dúvida o mais rápido possível.
            </p>
            <button className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition">
              Contatar Suporte
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default FAQPage;