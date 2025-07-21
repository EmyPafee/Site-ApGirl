import React from 'react';
import { ShieldIcon, UserIcon, HomeIcon, HeartIcon, StarIcon } from 'lucide-react';
const AboutPage = () => {
  return <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre o ApGirl
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Uma plataforma exclusiva para mulheres encontrarem colegas de
            apartamento de forma segura, compatível e acolhedora.
          </p>
        </div>
      </section>
      {/* Nossa Missão */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Nossa Missão
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              O ApGirl nasceu da necessidade de criar um ambiente seguro para
              mulheres que buscam dividir moradia. Sabemos que encontrar uma
              colega de apartamento compatível pode ser um desafio,
              especialmente quando se trata de segurança, confiança e afinidades
              pessoais.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Nossa missão é conectar mulheres com valores e estilos de vida
              compatíveis, tornando a experiência de moradia compartilhada mais
              segura, harmoniosa e enriquecedora. Acreditamos que um lar deve
              ser um espaço de acolhimento, respeito e crescimento pessoal.
            </p>
            <div className="flex justify-center mt-8">
              <img src="/grupomulheresap.jpg" alt="Mulheres dividindo apartamento" className="rounded-lg shadow-lg max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      {/* Nossos Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <ShieldIcon size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Segurança</h3>
              <p className="text-gray-600">
                Priorizamos a segurança das nossas usuárias com verificação de
                identidade e avaliações transparentes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <HeartIcon size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Empatia</h3>
              <p className="text-gray-600">
                Valorizamos a diversidade e promovemos um ambiente de respeito e
                compreensão entre todas as usuárias.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <StarIcon size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Qualidade</h3>
              <p className="text-gray-600">
                Buscamos oferecer a melhor experiência possível, com matches de
                alta compatibilidade e suporte dedicado.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Nossa História */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Nossa História
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              O ApGirl foi fundado em 2023 por um grupo de mulheres que
              vivenciaram os desafios de encontrar colegas de apartamento
              compatíveis em grandes cidades. Após experiências negativas e
              preocupações com segurança, elas decidiram criar uma plataforma
              exclusiva para mulheres.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Começamos como um pequeno projeto em São Paulo e rapidamente nos
              expandimos para outras cidades brasileiras. Hoje, contamos com
              milhares de usuárias satisfeitas que encontraram não apenas
              colegas de apartamento, mas também amizades duradouras através da
              nossa plataforma.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nosso compromisso é continuar inovando e aprimorando nossos
              serviços para atender às necessidades das mulheres em busca de
              moradia compartilhada segura e compatível.
            </p>
          </div>
        </div>
      </section>
      {/* Equipe */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img src="/1.jpg" alt="Fundadora" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Alice Rodrigues</h3>
              <p className="text-purple-600 mb-3">CEO & Fundadora</p>
              <p className="text-gray-600">
                Empreendedora apaixonada por tecnologia e impacto social.
                Formada em Administração pela USP.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img src="/2.jpg" alt="CTO" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Vicky Ferri</h3>
              <p className="text-purple-600 mb-3">CTO</p>
              <p className="text-gray-600">
                Desenvolvedora full-stack com mais de 10 anos de experiência.
                Especialista em segurança de dados.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img src="/3.jpg" alt="COO" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Ellen Alencar</h3>
              <p className="text-purple-600 mb-3">COO</p>
              <p className="text-gray-600">
                Especialista em experiência do usuário e operações. Formada em
                Psicologia pela UFC.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contato */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Entre em Contato
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-center text-lg text-gray-700 mb-6">
                Tem dúvidas, sugestões ou quer fazer parte da nossa equipe?
                Entre em contato conosco!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">E-mail</h3>
                  <p className="text-purple-600">contato@apgirl.com.br</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Telefone</h3>
                  <p className="text-purple-600">(11) 99999-9999</p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-semibold mb-4 text-center">
                  Ou preencha nosso formulário
                </h3>
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
                    <input type="text" id="assunto" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem
                    </label>
                    <textarea id="mensagem" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition">
                      Enviar Mensagem
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default AboutPage;