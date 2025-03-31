import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import SocialMedia from "../midias";

 // Importando o EmailJS

 import emailjs from "@emailjs/browser";
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Envio do e-mail usando EmailJS
      const result = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID, // Serviço do EmailJS
        import.meta.env.VITE_TEMPLATE_ID, // Template do EmailJS
        formData, // Dados do formulário
        import.meta.env.VITE_USER_ID // ID do usuário do EmailJS
      );

      console.log(result.text);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error(error);
      setSubmitError("Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen mt-8" id="contact">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-custom-orange mb-4">Entre em Contato Conosco</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender você. Preencha o formulário abaixo ou utilize um de nossos canais de atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Informações de Contato */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Informações de Contato</h2>

              <div className="space-y-6 ">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaPhone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Telefone</h3>
                    <p className="mt-1 text-gray-600">+55 (14) 99741-5648</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaWhatsapp className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">WhatsApp</h3>
                    <p className="mt-1 text-gray-600">+55 (14) 99741-5648</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaEnvelope className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">comercial@ramsystem.com.br</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaMapMarkerAlt className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Endereço</h3>
                    <p className="mt-1 text-gray-600">
                      Avenida Industrial José E Ortigosa 688<br />
                      Barra Bonita - SP, 17340000
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-2xl font-bold text-gray-900">Nossas Redes Sociais</h1>
                  <SocialMedia />
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Horário de Atendimento</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-950">Segunda a Quinta:</span> 07h às 17:30h
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-950">Sexta:</span> 7h às 16:30h
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-950">Sábado, Domingo e Feriados:</span> Fechado
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Envie sua Mensagem</h2>

              {submitSuccess ? (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                  <div className="flex">
                    <div>
                      <p className="text-green-700 font-medium">
                        Mensagem enviada com sucesso!
                      </p>
                      <p className="text-green-600 mt-1">
                        Agradecemos seu contato. Retornaremos em breve.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-3"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-3"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-3"
                        placeholder="(XX) XXXXX-XXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Assunto
                      </label>
                      <select
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-3"
                      >
                        <option value="Orcamento">Orçamento</option>
                        <option value="Servicos">Duvida sobre Serviços</option>
                        <option value="Contato">Contato</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-3"
                      placeholder="Escreva sua mensagem aqui..."
                    />
                  </div>

                  {submitError && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                      <div className="flex">
                        <div>
                          <p className="text-red-700 font-medium">Erro ao enviar mensagem!</p>
                          <p className="text-red-600 mt-1">{submitError}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                      isSubmitting ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </button>
                </form>
              )}
              
              
            </div>
          </div>
        </div>


           {/* Mapa */}
           <div className="mt-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Nossa Localização</h2>
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1843.2905867865295!2d-48.567719!3d-22.482368!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c74f7df88c1d37%3A0x77fbe04ba97d0750!2zUmFtLVByZXN0YcOnw6NvIGRlIFNlcnZpw6dvcyBlIENvbcOpcmNpbyBkZSBQYWluw6lpcw!5e0!3m2!1spt-BR!2sus!4v1740394921513!5m2!1spt-BR!2sus" className="w-full h-full" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
       
            </div>
          </div>
        </div>


      </div>

      
      
              
    </div>
    
  );
};

export default ContactPage;
