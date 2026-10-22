import BannerDinamico from "../components/BannerDinamico";

const Cardapio = () => {
    return (
        <>
            <BannerDinamico
                descricao="O verdadeiro sabor do Café."
                imagem="/BannerCardapio.png"
                posicaoTopo="top-[151px]"
                alinhamento="left-[133px]"
            />
        </>
    );
}

export default Cardapio;