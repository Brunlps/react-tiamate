import BannerDinamico from "../components/BannerDinamico";
import QuemSomos from "../components/QuemSomos";
import Video from "../components/Video";

const Franquia = () => {
    return (
        <>
            <BannerDinamico 
                descricao={<>Abra sua Franquia<br />Tiamate Coffee.</>}
                imagem="/BannerFranquia.png"
                posicaoTopo="top-[151px]"
                alinhamento="right-[46px]"
            />
            <QuemSomos />
            <Video />
        </>
    );
}

export default Franquia;