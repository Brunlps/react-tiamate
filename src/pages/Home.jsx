import BannerDinamico from "../components/BannerDinamico";

const Home = () => {
    return (
        <>
            <BannerDinamico
                titulo="Um café quentinho"
                descricao={<>aqui na Tiamate<br />muda o dia.</>}
                imagem="/Banner_01.png"
                posicaoTopo="top-[110px]"
            />
        </>
    );
}

export default Home;