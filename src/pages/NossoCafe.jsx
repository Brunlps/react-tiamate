import BannerDinamico from "../components/BannerDinamico";

const NossoCafe = () => {
    return (
        <div>
            <div>
            {/* O Banner Dinâmico adaptado para a página Nosso Café */}
            <BannerDinamico 
                descricao={<>Mais que sabor,<br />sentimentos!</>}
                imagem="/BannerNossoCafe.png"
                posicaoTopo="top-[151px]"
                
            />
        </div>


            {/* Resto do conteúdo da página Nosso Café */}
        </div>
    );
}

export default NossoCafe;