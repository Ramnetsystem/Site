import LogoCarousel from "../carousel";
import Container from "../container";

const logos = [
  "https://chapadensenews.com.br/wp-content/uploads/2024/09/images-2.jpeg",
  "https://cocal-institucional-hml.s3.amazonaws.com/app/uploads/2023/08/RI_LOGO_MARCA.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC1Ah8fidGF0h41Oi7m6ThUx17ITbeCE2eVQ&s",
  "https://media.licdn.com/dms/image/v2/C4D0BAQE7R8UCm6pa5w/company-logo_200_200/company-logo_200_200/0/1630541593237?e=2147483647&v=beta&t=cbKA4wodpBk2zxPd2xgrEHCxciuMA_O5AQZJdZtkV3g",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0qeiXCbcaAoQ31ieLdD8K9CVUtoHdtzwxdg&s",
  "https://upload.wikimedia.org/wikipedia/commons/5/5a/Zilor.jpg",
  "https://logodownload.org/wp-content/uploads/2019/09/weg-logo-0.png",
  "https://media.licdn.com/dms/image/v2/D4D0BAQGgNLOF15nZZA/company-logo_200_200/company-logo_200_200/0/1682592912456?e=2147483647&v=beta&t=nw65YozZ1Z0HmD6lLZQWOHMNRtxNZA36r1d8G1s4318",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56xTGbIJyXpPKgKax8DQoVp5xZxEPGkJbkQ&s",
  "https://jornalcana.com.br/wp-content/uploads/2018/07/264e9a6d217f904a5977e17d1dba5ec4.jpg",
  "https://media.licdn.com/dms/image/v2/D4D0BAQFOabFiQqz7pQ/company-logo_200_200/company-logo_200_200/0/1708091700235/usina_so_luiz_bioenergia_logo?e=2147483647&v=beta&t=LWASNGMyR_JN_C29dDV08qKiIU5MrNrqcYbSNMAlXZk",
  "https://www.cotracaaro.com.br/painel//wa/galeria/thumb/Lutepel.jpg",
  "https://site.usinasantaadelia.com.br/wp-content/uploads/2018/05/img_logo.png",
  "https://static.wixstatic.com/media/c590e6_4ea61374b6754b9d995bdf062c2a2647~mv2.png",
  "https://jornalcana.com.br/wp-content/uploads/2015/10/Albioma-logo_SignatHD-876x264.jpg",
  "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/e1f81aec02188f388000c32387006f92",
  "https://renovaconsultoria.com.br/wp-content/uploads/2017/08/cropped-Renova-Logo-alta.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRne9LO_JW5sNZUxIk2YalTxDLw0P6annzIXA&s",
  "https://jornalcana.com.br/wp-content/uploads/2018/06/unnamed.jpg",
  "https://media.licdn.com/dms/image/v2/C4D0BAQF6ChghGRAo9A/company-logo_200_200/company-logo_200_200/0/1658154250463/amyris_inc_logo?e=2147483647&v=beta&t=N71oMgMTd0m2RhDzXnfknPJz7PQcyviu097229G8cUc",
  "https://media.licdn.com/dms/image/v2/D4D0BAQGRDYisIpB4mA/company-logo_200_200/company-logo_200_200/0/1733308496418/usina_a_ucareira_gua_ra_logo?e=2147483647&v=beta&t=pSe-K_qYQ6szdMbVVi-ilyyW9aRxi90hoPy4YLbyCHc",
  "https://www.usinabrancoperes.com.br/assets/images/grupo/branco-peres.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZZ37XmK9Sd5DmKBT4XsK4Wsao4fpTQ3Uuw&s"

];

const OurClients = () => {
  return (
    <section className="py-20 px-6 flex flex-col justify-center items-center mb-4" id="clients">
      <Container>
        <h2 className="text-4xl font-bold text-custom-orange text-center">
          Nossos Clientes
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-center">
          Empresas que já aderiram ao método RAM.
        </p>

        <div className="w-full mt-12 flex items-center justify-center">
          <LogoCarousel logos={logos} />
        </div>
      </Container>
    </section>
  );
};

export default OurClients;

