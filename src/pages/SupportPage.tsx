import React, { useState } from 'react';
import { HelpCircleIcon, MessageCircleIcon, PhoneIcon, MailIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
const SupportPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const toggleAccordion = index => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  const commonQuestions = [{
    question: 'Como posso entrar em contato com o suporte?',
    answer: 'Você pode entrar em contato conosco através do formulário nesta página, por e-mail em suporte@apgirl.com.br ou pelo telefone (11) 99999-9999, disponível de segunda a sexta, das 9h às 18h.'
  }, {
    question: 'Quanto tempo leva para meu perfil ser verificado?',
    answer: 'O processo de verificação geralmente leva até 24 horas úteis. Em períodos de alta demanda, pode levar até 48 horas. Você receberá uma notificação por e-mail assim que seu perfil for verificado.'
  }, {
    question: 'O que fazer se encontrar um perfil suspeito?',
    answer: "Se você identificar um perfil que pareça suspeito ou que viole nossos termos de uso, utilize a função 'Denunciar Perfil' disponível na página do perfil em questão. Nossa equipe irá analisar a denúncia e tomar as medidas necessárias."
  }, {
    question: 'Como cancelar minha assinatura premium?',
    answer: "Para cancelar sua assinatura premium, acesse 'Configurações' > 'Assinatura' e clique em 'Cancelar Assinatura'. O cancelamento será efetivado ao final do período já pago. Você continuará tendo acesso aos recursos premium até o final deste período."
  }];
  return <div className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-t-lg p-8 text-white text-center">
            <h1 className="text-3xl font-bold mb-4">Suporte ApGirl</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Estamos aqui para ajudar. Nossa equipe está disponível para
              responder suas dúvidas e resolver seus problemas.
            </p>
          </div>
          {/* Opções de contato */}
          <div className="bg-white p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-6 text-center">
              Como podemos ajudar?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition">
                <div className="bg-purple-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <MessageCircleIcon size={32} className="text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Chat Online</h3>
                <p className="text-gray-600 mb-4">
                  Converse com nossa equipe em tempo real para solução rápida de
                  problemas.
                </p>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
                  Iniciar Chat
                </button>
                <p className="text-xs text-gray-500 mt-2">
                  Disponível de seg. a sex., 9h às 20h
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition">
                <div className="bg-purple-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <MailIcon size={32} className="text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">E-mail</h3>
                <p className="text-gray-600 mb-4">
                  Envie sua dúvida por e-mail e receba uma resposta em até 24
                  horas.
                </p>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
                  Enviar E-mail
                </button>
                <p className="text-xs text-gray-500 mt-2">
                  suporte@apgirl.com.br
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition">
                <div className="bg-purple-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <PhoneIcon size={32} className="text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Telefone</h3>
                <p className="text-gray-600 mb-4">
                  Prefere falar diretamente? Ligue para nossa central de
                  atendimento.
                </p>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
                  (11) 99999-9999
                </button>
                <p className="text-xs text-gray-500 mt-2">
                  Disponível de seg. a sex., 9h às 18h
                </p>
              </div>
            </div>
          </div>
          {/* Formulário de contato */}
          <div className="bg-white p-6 mt-6 shadow-md">
            <h2 className="text-xl font-semibold mb-6">Envie sua Mensagem</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <input type="text" id="nome" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-1">
                  Assunto
                </label>
                <select id="assunto" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option value="">Selecione um assunto</option>
                  <option value="verificacao">Verificação de Conta</option>
                  <option value="pagamento">Problemas de Pagamento</option>
                  <option value="match">Problemas com Matches</option>
                  <option value="denuncia">Denúncia de Usuário</option>
                  <option value="sugestao">Sugestões</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea id="mensagem" rows={5} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Descreva sua dúvida ou problema em detalhes..."></textarea>
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
                  <span className="ml-2 text-sm text-gray-600">
                    Concordo em receber notificações por e-mail sobre este
                    assunto
                  </span>
                </label>
              </div>
              <button type="submit" className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition">
                Enviar Mensagem
              </button>
            </form>
          </div>
          {/* Perguntas frequentes */}
          <div className="bg-white p-6 mt-6 shadow-md rounded-b-lg">
            <div className="flex items-center mb-6">
              <HelpCircleIcon size={24} className="text-purple-600 mr-2" />
              <h2 className="text-xl font-semibold">Perguntas Frequentes</h2>
            </div>
            <div className="space-y-3">
              {commonQuestions.map((item, index) => <div key={index} className="border rounded-lg overflow-hidden">
                  <button className="w-full px-4 py-3 text-left flex justify-between items-center bg-gray-50" onClick={() => toggleAccordion(index)}>
                    <span className="font-medium">{item.question}</span>
                    {activeAccordion === index ? <ChevronUpIcon size={20} className="text-purple-600" /> : <ChevronDownIcon size={20} className="text-gray-600" />}
                  </button>
                  {activeAccordion === index && <div className="px-4 py-3 bg-white">
                      <p className="text-gray-700">{item.answer}</p>
                    </div>}
                </div>)}
            </div>
            <div className="mt-6 text-center">
              <a href="/faq" className="text-purple-600 hover:underline font-medium">
                Ver todas as perguntas frequentes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default SupportPage;