import Container from "../container";
import { motion } from "framer-motion";
import { OurValues } from "../values";

export const About = () => {
    return (
        <section
            id="about"
            className="relative min-h-screen bg-gray-100 flex items-center justify-start overflow-hidden"
        >
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center justify-start gap-6 px-6 sm:px-20"
                    viewport={{ once: true }}
                >
                    {/* Título animado */}
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-4xl sm:text-6xl font-bold text-custom-orange mt-12"
                        viewport={{ once: true }}
                    >
                        Sobre Nós
                    </motion.h2>

                    {/* Texto com animação sutil */}
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="text-lg sm:text-xl text-gray-700 max-w-3xl text-center leading-relaxed"
                        viewport={{ once: true }}
                    >
                        Somos uma empresa dedicada à inovação e à excelência, sempre buscando as melhores soluções para atender às necessidades dos nossos clientes. <span className="text-custom-orange font-bold">Há 30 anos no mercado    </span>, construímos uma trajetória sólida e de confiança, sempre evoluindo para oferecer o que há de melhor. Nosso compromisso vai além da entrega de produtos ou serviços, buscando transformar desafios em oportunidades e agregando valor por meio de tecnologias avançadas, processos eficientes e um atendimento diferenciado.
                    </motion.p>


                </motion.div>

                {/* Valores da empresa */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <OurValues />
                </motion.div>
            </Container>
        </section>
    );
};
