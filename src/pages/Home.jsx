import BannerDinamico from "../components/BannerDinamico";
import Cardapio from "../components/Cardapio";
import FitCultural from "../components/FitCultural";
import Etapas from "../components/Etapas";
import Depoimentos from "../components/Depoimentos";


const Home = () => {
    return (
        <>
            <Etapas/>        
            <BannerDinamico
                titulo="Um café quentinho"
                descricao={<>aqui na Tiamate<br />muda o dia.</>}
                imagem="/Banner_01.png"
                posicaoTopo="top-[110px]"
            />
            <FitCultural />
            <Cardapio />
            <Depoimentos/>

        </>
    );
}

export default Home;