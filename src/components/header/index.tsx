
import { HiOutlineBars3 } from "react-icons/hi2";
import { useState } from "react";
import MenuList from "../menu_list";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import Container from "../container";

import ram from '../../assets/ramsemfundo.png'


const Header = () => {


  const [menu, setMenu] = useState<boolean>(false);


  const handleMenu = () => {
    setMenu(!menu)
    console.log(menu)
  }


  return (

    <header className="fixed top-0 left-0 w-full z-50 bg-custom-orange text-white px-4 flex items-center justify-between shadow-md">

      <Container>
        <section className="flex items-center justify-between" >
          <img src={ram} alt="logo da ram" className="w-12 sm:w-16 p-4" />

          {/* Menu normal (aparece apenas em telas md ou maiores) */}
          <nav className="hidden sm:flex gap-6">
            <MenuList />
          </nav>

          {/* Menu hamburguer (só aparece em telas pequenas) */}
          <nav className="relative sm:hidden">
            <button onClick={handleMenu} className="text-2xl">
              <HiOutlineBars3 className="text-3xl" />
            </button>


            {/* Menu que abre quando clicado no hamburguer  */}
            <AnimatePresence>
              {menu && (
                <motion.div
                  className="w-screen h-screen bg-custom-orange bg-opacity-90 fixed top-0 left-0 z-50 flex items-center justify-center"
                  initial={{ x: '-100%' }} // Começa fora da tela à esquerda
                  animate={{ x: 0 }} // Move para a posição final (0px)
                  exit={{ x: '-100%' }} // Volta para fora da tela à esquerda
                  transition={{ type: 'spring', stiffness: 90, damping: 20 }}
                >
                  <button
                    onClick={handleMenu}
                    className="absolute top-4 right-4 text-2xl"
                  >
                    <IoMdClose />
                  </button>
                  <div className="w-full h-full flex flex-col items-center justify-center">

                    <img src={ram} alt="ram" className="w-24 my-8" />
                    <MenuList />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </section>


      </Container>
    </header>
  );
}

export default Header