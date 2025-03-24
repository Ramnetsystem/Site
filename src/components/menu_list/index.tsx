
const MenuList = () => {

  const scrollToHome = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      };

    const scrollToServices = () => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
      };

      const scrollToClients = () => {
        document.getElementById("clients")?.scrollIntoView({ behavior: "smooth" });
      };

      const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      };


    return (
        <ul className="flex flex-col items-center justify-center gap-6 sm:flex-row p-2 font-bold text-2xl sm:text-base">
            <li className="cursor-pointer hover:text-orange-900" onClick={scrollToHome}>Pagina Principal</li>
            <li className="cursor-pointer hover:text-orange-900" onClick={scrollToAbout}>Sobre Nós </li>
            <li className="cursor-pointer hover:text-orange-900" onClick={scrollToServices}>Serviços</li>
            <li className="cursor-pointer hover:text-orange-900" onClick={scrollToClients}>Clientes</li>
            <li className="cursor-pointer hover:text-orange-900" onClick={scrollToContact}>Contato</li>
        </ul>


    )
}

export default MenuList