import { motion } from "framer-motion";
import eng from "../../assets/Automacao.jpg";
import processo from "../../assets/Processo.jpg";
import eletrico from "../../assets/Eletrico.jpg";
import redes from "../../assets/Redes.jpg";
import logica from "../../assets/Logica.jpg";
import comissionamento from "../../assets/Comissionamento.png";
import treinamento from "../../assets/Treinamento.png";
import Container from "../container";



const services = [
  {
    title: "ENGENHARIA DE AUTOMAÇÃO",
    description:
      "Consultoria Especializada para otimização de processos e melhorias em controle e operação. Do projeto conceitual, PDA (Plano Diretor de Automação), Fluxogramas P&ID e desenhos típicos de instalação de instrumentação. Especificações técnicas de instrumentação, sistema de controle, mão de obra para  montagem de painéis de automação.",
    image: eng,
  },
  {
    title: "ENGENHARIA DE PROCESSO E ESTRATÉGIAS DE CONTROLE",
    description:
      "Desenvolvimento das Estratégias de Controle e desenvolvimento de Descritivo Operacional de Controles.",
    image: processo,
  },
  {
    title: "PROJETO ELÉTRICO E REDES DE CAMPO",
    description:
      "Desenvolvimento de Projeto Elétrico dos painéis de PLC e Remotas. TAF de painéis de automação.",
    image: eletrico,
  },
  {
    title: "DESENVOLVIMENTO DO SISTEMA DE CONTROLE",
    description:
      "Desenvolvimento de lógicas de controle, desenvolvimento de sistema de supervisão, IHM e TAF com o cliente da aplicação desenvolvida.",
    image: logica,
  },
  {
    title: "COMISSIONAMENTO E STARTUP",
    description:
      "Serviços de comissionamento em campo de instrumentação e acionamentos de CCM, acompanhamento de partida de planta e operação assistida.",
    image: comissionamento,
  },
  {
    title: "TREINAMENTO TÉCNICO",
    description:
      "Capacitação de equipe de operação e gestores. Capacitação de equipe de manutenção para atuação em ocorrências no sistema de controle.",
    image: treinamento,
  },
  {
    title: "ANÁLISE E CERTIFICAÇÃO DE REDES",
    description:
      "Análise e certificação de redes industriais Profibus/DP, Profibus/PA, AS-interface, Profinet, Ethernet/IP, Devicenet, Modbus/TCP, Fibra Ótica, CAN e CANopen. Acompanhamento de montagem e emissão de laudos técnicos de certificação.",
    image: redes,
  },
];

const OurServices = () => {
  return (
    <section className="min-h-screen bg-white py-20 px-6" id="services">
      <Container>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-custom-orange">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Soluções completas para automação industrial, certificação de redes e suporte técnico especializado.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div>
                <img src={service.image} alt="eng" className="w-full h-40 object-center object-cover" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>

  );
};

export default OurServices;
