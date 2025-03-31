// Home.js
import { FaWhatsapp } from 'react-icons/fa';
import Container from '../container';
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen bg-[url('../src/assets/bg.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden" id='home'>
      <div className="absolute inset-0 bg-black opacity-80"></div>
      
      {/* Conteúdo */}
      <Container>
        <section className="relative z-10 flex items-center justify-center w-full h-screen flex-col gap-20">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-center text-white">Inteligência</h1>
            <h1 className="text-4xl sm:text-6xl font-bold text-center text-custom-orange">Eficiência</h1>
            <h1 className="text-4xl sm:text-6xl font-bold text-center text-white">Precisão</h1>
          </div>

          {/* Botão que rola para About */}
          <button 
            className="bg-custom-orange text-bold text-white text-2xl rounded-lg p-4 flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={scrollToAbout}
          >
            Saiba mais 
            <IoIosArrowDown className="text-3xl"/>
          </button>
        </section>
      </Container>
      <a 
        href="https://api.whatsapp.com/send?phone=5514997415648" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Contato via WhatsApp"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>
    </section>
  );
};

export default Home;
