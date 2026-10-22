import BannerDinamico from "../components/BannerDinamico";
import QuemSomos from "../components/QuemSomos";

const Franquia = () => {
    return (
        <>
            <BannerDinamico 
                descricao={<>Abra sua Franquia<br />Tiamate Coffee.</>}
                imagem="/BannerFranquia.png"
                posicaoTopo="top-[151px]"
                alinhamento="right-[133px]"
            />
            <QuemSomos />
        </>
    );
}

export default Franquia;