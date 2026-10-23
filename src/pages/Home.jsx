import ComponentAgradavel from "../pages/ComponenteAmbientAgradavel";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <ComponentAgradavel />
    </>
  );
};
import BannerDinamico from "../components/BannerDinamico";
import Cardapio from "../components/Cardapio";
import Depoimentos from "../components/Depoimentos";
import FitCultural from "../components/FitCultural";


const Home = () => {
    return (
        <>   
            <BannerDinamico
                titulo="Um café quentinho"
                descricao={<>aqui na Tiamate<br />muda o dia.</>}
                imagem="/Banner_01.png"
                posicaoTopo="top-[110px]"
            />
            <FitCultural />
            <Ambi
            <Cardapio />
            <Depoimentos />
        </>
    );
}

export default Home;