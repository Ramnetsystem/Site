import { FaLightbulb, FaShieldAlt, FaCogs, FaMedal } from "react-icons/fa";

export const OurValues = () => {
  return (
    <section  className=" bg-gray-100 flex flex-col items-center justify-center py-20">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 sm:px-20">
        
        {/* 🔹 Integridade */}
        <div className="flex flex-col items-center text-center p-6 shadow-lg rounded-lg bg-gray-100">
          <FaShieldAlt className="text-5xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold">Integridade</h3>
          <p className="text-gray-600 mt-2">Atuamos com ética e transparência em todas as relações.</p>
        </div>

        {/* 🔹 Inovação */}
        <div className="flex flex-col items-center text-center p-6 shadow-lg rounded-lg bg-gray-100">
          <FaLightbulb className="text-5xl text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold">Inovação</h3>
          <p className="text-gray-600 mt-2">Buscamos sempre novas tecnologias para oferecer soluções eficientes.</p>
        </div>

        {/* 🔹 Comprometimento */}
        <div className="flex flex-col items-center text-center p-6 shadow-lg rounded-lg bg-gray-100">
          <FaMedal className="text-5xl text-red-500 mb-4" />
          <h3 className="text-xl font-semibold">Comprometimento</h3>
          <p className="text-gray-600 mt-2">Trabalhamos com dedicação para entregar o melhor serviço.</p>
        </div>

        {/* 🔹 Excelência */}
        <div className="flex flex-col items-center text-center p-6 shadow-lg rounded-lg bg-gray-100">
          <FaCogs className="text-5xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold">Excelência</h3>
          <p className="text-gray-600 mt-2">Priorizamos a qualidade e eficiência em tudo o que fazemos.</p>
        </div>

     


    
      </div>
    </section>
  );
};
