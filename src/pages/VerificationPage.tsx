import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldIcon, CheckCircleIcon, UploadIcon } from 'lucide-react';
const VerificationPage = () => {
  const [step, setStep] = useState(1);
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [idUploaded, setIdUploaded] = useState(false);
  const navigate = useNavigate();
  const handlePhotoUpload = () => {
    // Simulação de upload de foto
    setPhotoUploaded(true);
  };
  const handleIdUpload = () => {
    // Simulação de upload de documento
    setIdUploaded(true);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Em um cenário real, enviaríamos os dados para verificação
      // Aqui vamos apenas simular o redirecionamento para o perfil
      navigate('/perfil');
    }
  };
  return <div className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-purple-600 py-4 px-6">
              <h2 className="text-2xl font-bold text-white text-center">
                Verificação de Identidade
              </h2>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center mb-8">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  1
                </div>
                <div className={`h-1 w-16 ${step >= 2 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  2
                </div>
              </div>
              {step === 1 ? <div>
                  <div className="text-center mb-6">
                    <ShieldIcon size={48} className="text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      Selfie de Verificação
                    </h3>
                    <p className="text-gray-600">
                      Por favor, tire uma selfie clara para verificarmos sua
                      identidade. Isso ajuda a garantir que nossa comunidade
                      seja segura.
                    </p>
                  </div>
                  <div className="mb-6">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      {photoUploaded ? <div className="flex flex-col items-center">
                          <CheckCircleIcon size={48} className="text-green-500 mb-2" />
                          <p className="text-green-600 font-medium">
                            Foto enviada com sucesso!
                          </p>
                        </div> : <div className="flex flex-col items-center">
                          <UploadIcon size={36} className="text-gray-400 mb-2" />
                          <p className="text-gray-500 mb-2">
                            Clique para fazer upload da sua selfie
                          </p>
                          <button onClick={handlePhotoUpload} className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition">
                            Selecionar Foto
                          </button>
                        </div>}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      * A foto deve mostrar claramente seu rosto e ser recente
                    </p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <button type="submit" disabled={!photoUploaded} className={`w-full py-2 px-4 rounded-md font-semibold ${photoUploaded ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'} transition`}>
                      Próximo Passo
                    </button>
                  </form>
                </div> : <div>
                  <div className="text-center mb-6">
                    <ShieldIcon size={48} className="text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      Documento de Identificação
                    </h3>
                    <p className="text-gray-600">
                      Por favor, envie uma foto de um documento oficial com foto
                      (RG, CNH) para confirmarmos sua identidade.
                    </p>
                  </div>
                  <div className="mb-6">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      {idUploaded ? <div className="flex flex-col items-center">
                          <CheckCircleIcon size={48} className="text-green-500 mb-2" />
                          <p className="text-green-600 font-medium">
                            Documento enviado com sucesso!
                          </p>
                        </div> : <div className="flex flex-col items-center">
                          <UploadIcon size={36} className="text-gray-400 mb-2" />
                          <p className="text-gray-500 mb-2">
                            Clique para fazer upload do seu documento
                          </p>
                          <button onClick={handleIdUpload} className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition">
                            Selecionar Documento
                          </button>
                        </div>}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      * O documento deve estar legível e mostrar claramente sua
                      foto e dados pessoais
                    </p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <button type="submit" disabled={!idUploaded} className={`w-full py-2 px-4 rounded-md font-semibold ${idUploaded ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'} transition`}>
                      Finalizar Verificação
                    </button>
                  </form>
                </div>}
            </div>
          </div>
          <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start">
              <ShieldIcon size={24} className="text-purple-600 mr-3 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Privacidade e Segurança
                </h3>
                <p className="text-gray-600">
                  Seus documentos e fotos são criptografados e usados
                  exclusivamente para o processo de verificação. Não
                  compartilhamos essas informações com outras usuárias ou
                  terceiros. Após a verificação bem-sucedida, seus documentos
                  são excluídos permanentemente de nossos servidores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default VerificationPage;