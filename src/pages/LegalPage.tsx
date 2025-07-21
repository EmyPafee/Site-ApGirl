import React, { useState } from 'react';
import { ShieldIcon } from 'lucide-react';
const LegalPage = () => {
  const [activeTab, setActiveTab] = useState('terms');
  return <div className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 text-center">
              <ShieldIcon size={48} className="text-white mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-white">
                Termos de Uso
              </h1>
            </div>
            {/* Tabs */}
            <div className="flex border-b">
              <button className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === 'terms' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-600 hover:text-purple-600'}`} onClick={() => setActiveTab('terms')}>
                Termos de Uso
              </button>
              <button className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === 'privacy' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-600 hover:text-purple-600'}`} onClick={() => setActiveTab('privacy')}>
                Política de Privacidade
              </button>
              <button className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === 'cookies' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-600 hover:text-purple-600'}`} onClick={() => setActiveTab('cookies')}>
                Política de Cookies
              </button>
            </div>
            {/* Conteúdo */}
            <div className="p-6">
              {activeTab === 'terms' && <div>
                  <h2 className="text-2xl font-semibold mb-4">Termos de Uso</h2>
                  <p className="text-gray-700 mb-4">
                    Última atualização: 01 de Junho de 2023
                  </p>
                  <div className="space-y-6">
                    <section>
                      <h3 className="text-xl font-medium mb-2">
                        1. Aceitação dos Termos
                      </h3>
                      <p className="text-gray-700">
                        Ao acessar ou usar o serviço ApGirl, você concorda em
                        cumprir estes Termos de Uso e todas as leis e
                        regulamentos aplicáveis. Se você não concordar com algum
                        destes termos, está proibido de usar ou acessar este
                        site.
                      </p>
                    </section>
                    <section>
                      <h3 className="text-xl font-medium mb-2">
                        2. Uso do Serviço
                      </h3>
                      <p className="text-gray-700 mb-3">
                        O ApGirl é uma plataforma exclusiva para mulheres que
                        buscam compartilhar moradia. Ao usar nossos serviços,
                        você declara que:
                      </p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          É maior de 18 anos ou possui autorização legal de um
                          responsável;
                        </li>
                        <li>
                          Fornecerá informações verdadeiras e atualizadas
                          durante o processo de registro;
                        </li>
                        <li>
                          Manterá a segurança e confidencialidade de sua senha e
                          conta;
                        </li>
                        <li>
                          Não utilizará o serviço para fins ilegais ou não
                          autorizados;
                        </li>
                        <li>
                          Não tentará prejudicar ou explorar menores de qualquer
                          maneira.
                        </li>
                      </ul>
                    </section>
                    <section>
                      <h3 className="text-xl font-medium mb-2">
                        3. Verificação de Identidade
                      </h3>
                      <p className="text-gray-700">
                        Para garantir a segurança da nossa comunidade, exigimos
                        que todas as usuárias passem por um processo de
                        verificação de identidade. Este processo inclui o envio
                        de documentos oficiais com foto e uma selfie para
                        confirmar sua identidade. Nos reservamos o direito de
                        recusar ou cancelar cadastros que não atendam aos nossos
                        critérios de verificação.
                      </p>
                    </section>
                    <section>
                      <h3 className="text-xl font-medium mb-2">
                        4. Conteúdo do Usuário
                      </h3>
                      <p className="text-gray-700">
                        Ao publicar conteúdo em nossa plataforma, você concede
                        ao ApGirl uma licença mundial, não exclusiva e isenta de
                        royalties para usar, modificar, executar publicamente,
                        exibir publicamente e distribuir seu conteúdo em conexão
                        com o serviço. Você é responsável por todo o conteúdo
                        que publica e garante que possui todos os direitos
                        necessários para conceder esta licença.
                      </p>
                    </section>
                    <section>
                      <h3 className="text-xl font-medium mb-2">
                        5. Conduta Proibida
                      </h3>
                      <p className="text-gray-700 mb-3">
                        As seguintes condutas são estritamente proibidas na
                        plataforma ApGirl:
                      </p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          Assédio, bullying ou intimidação de outros usuários;
                        </li>
                        <li>
                          Publicação de conteúdo discriminatório, ofensivo ou
                          ilegal;
                        </li>
                        <li>Criação de perfis falsos ou enganosos;</li>
                        <li>
                          Uso da plataforma para fins comerciais não
                          autorizados;
                        </li>
                        <li>
                          Tentativa de acessar informações privadas de outros
                          usuários;
                        </li>
                        <li>
                          Qualquer atividade que viole leis ou regulamentos
                          aplicáveis.
                        </li>
                      </ul>
                    </section>
                    {/* Continuação dos termos... */}
                    <p className="text-gray-500 text-center italic mt-8">
                      Este é um resumo dos nossos Termos de Uso. Para acessar o
                      documento completo, entre em contato com nosso suporte.
                    </p>
                  </div>
                </div>}
              {activeTab === 'privacy' && <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Política de Privacidade
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Última atualização: 01 de Junho de 2023
                  </p>
                  <div className="space-y-6">
                    <section>
                      <h3 className="text-xl font-medium mb-2">
                        1. Informações Coletadas
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Coletamos os seguintes tipos de informações:
                      </p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          Informações de registro (nome, e-mail, telefone, data
                          de nascimento);
                        </li>
                        <li>Documentos de identificação para verificação;</li>
                        <li>Preferências de moradia e estilo de vida;</li>
                        <li>Informações de localização;</li>
                        <li>Comunicações na plataforma;</li>
                        <li>Dados de uso e interação com o serviço.</li>
                      </ul>
                    </section>
                    <section>
                      <h3 className="text-xl font-medium mb-2">
                        2. Uso das Informações
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Utilizamos suas informações para:
                      </p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          Verificar sua identidade e garantir a segurança da
                          plataforma;
                        </li>
                        <li>Fornecer, manter e melhorar nossos serviços;</li>
                        <li>
                          Personalizar sua experiência e oferecer matches
                          compatíveis;
                        </li>
                        <li>
                          Comunicar-se com você sobre atualizações e novidades;
                        </li>
                        <li>
                          Detectar e prevenir fraudes e atividades abusivas;
                        </li>
                        <li>Cumprir obrigações legais.</li>
                      </ul>
                    </section>
                    <section>
                      <h3 className="text-xl font-medium mb-2">
                        3. Compartilhamento de Informações
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Podemos compartilhar suas informações nas seguintes
                        circunstâncias:
                      </p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          Com outras usuárias, conforme necessário para o
                          funcionamento do serviço (apenas informações que você
                          escolher compartilhar em seu perfil público);
                        </li>
                        <li>
                          Com prestadores de serviços que nos ajudam a operar a
                          plataforma;
                        </li>
                        <li>
                          Para cumprir obrigações legais, como responder a
                          intimações ou ordens judiciais;
                        </li>
                        <li>
                          Para proteger os direitos, propriedade ou segurança do
                          ApGirl, nossos usuários ou do público.
                        </li>
                      </ul>
                      <p className="text-gray-700 mt-3">
                        Nunca vendemos seus dados pessoais a terceiros.
                      </p>
                    </section>
                    {/* Continuação da política de privacidade... */}
                    <p className="text-gray-500 text-center italic mt-8">
                      Este é um resumo da nossa Política de Privacidade. Para
                      acessar o documento completo, entre em contato com nosso
                      suporte.
                    </p>
                  </div>
                </div>}
              {activeTab === 'cookies' && <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Política de Cookies
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Última atualização: 01 de Junho de 2023
                  </p>
                  <div className="space-y-6">
                    <section>
                      <h3 className="text-xl font-medium mb-2">
                        1. O que são Cookies
                      </h3>
                      <p className="text-gray-700">
                        Cookies são pequenos arquivos de texto que são
                        armazenados em seu dispositivo quando você visita um
                        site. Eles são amplamente utilizados para fazer os sites
                        funcionarem de maneira mais eficiente, bem como fornecer
                        informações aos proprietários do site.
                      </p>
                    </section>
                    <section>
                      <h3 className="text-xl font-medium mb-2">
                        2. Como Utilizamos os Cookies
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Utilizamos cookies para:
                      </p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Manter você conectado durante sua visita;</li>
                        <li>Lembrar suas preferências e configurações;</li>
                        <li>Melhorar a velocidade e segurança do site;</li>
                        <li>
                          Coletar dados analíticos anônimos sobre como você usa
                          nosso site;
                        </li>
                        <li>
                          Personalizar sua experiência com conteúdo e recursos
                          relevantes.
                        </li>
                      </ul>
                    </section>
                    <section>
                      <h3 className="text-xl font-medium mb-2">
                        3. Tipos de Cookies que Utilizamos
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-gray-800">
                            Cookies Essenciais
                          </h4>
                          <p className="text-gray-700">
                            Necessários para o funcionamento básico do site e
                            dos serviços solicitados por você. Não é possível
                            recusar estes cookies quando você usa nosso site.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">
                            Cookies de Preferências
                          </h4>
                          <p className="text-gray-700">
                            Permitem que o site lembre informações que mudam a
                            aparência ou o comportamento do site, como seu
                            idioma preferido ou a região em que você está.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">
                            Cookies Estatísticos
                          </h4>
                          <p className="text-gray-700">
                            Ajudam-nos a entender como os visitantes interagem
                            com o site, coletando e relatando informações
                            anonimamente.
                          </p>
                        </div>
                      </div>
                    </section>
                    <section>
                      <h3 className="text-xl font-medium mb-2">
                        4. Controle de Cookies
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Você pode configurar seu navegador para recusar todos os
                        cookies ou para indicar quando um cookie está sendo
                        enviado. No entanto, se você não aceitar cookies, é
                        possível que algumas partes do nosso site não funcionem
                        corretamente.
                      </p>
                      <p className="text-gray-700">
                        A maioria dos navegadores permite que você:
                      </p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          Veja quais cookies você tem e os exclua
                          individualmente;
                        </li>
                        <li>Bloqueie cookies de terceiros;</li>
                        <li>Bloqueie cookies de sites específicos;</li>
                        <li>Bloqueie todos os cookies;</li>
                        <li>
                          Exclua todos os cookies quando fechar o navegador.
                        </li>
                      </ul>
                    </section>
                    {/* Continuação da política de cookies... */}
                    <p className="text-gray-500 text-center italic mt-8">
                      Este é um resumo da nossa Política de Cookies. Para
                      acessar o documento completo, entre em contato com nosso
                      suporte.
                    </p>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default LegalPage;