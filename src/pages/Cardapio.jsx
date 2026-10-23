import BannerDinamico from "../components/BannerDinamico";

const Cardapio = () => {
    return (
        <>
            <BannerDinamico
                descricao={<>O verdadeiro <br/> sabor do Café.</>}
                imagem="/BannerCardapio.png"
                posicaoTopo="top-[151px]"
                alinhamento="left-4 md:left-[133px]"
            />
        </>
    );
}

export default Cardapio;