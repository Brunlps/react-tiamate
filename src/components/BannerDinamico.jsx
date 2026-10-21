const BannerDinamico = ({ titulo, descricao, imagem }) => {

    

    return (
        <div className="relative w-full">
            {/* Div do fundo com a imagem dinâmica */}
            <div className={`w-full h-[450px] bg-cover bg-center flex items-center px-12 text-white bg-[url(./Banner_01.png)]`}>
            </div>
            {/* Div do conteúdo com posicionamento absoluto em relação ao pai */}
            <div className="absolute top-1/2 left-12 transform -translate-y-1/2 max-w-[548px] text-white ">
                <h1 className="text-yellow-500 text-[55px] font-bold mb-4">Um café quentinho</h1>
                <p className="text-lg text-gray-100">aqui na Tiamate muda o dia.</p>
            </div>
        </div>

    );
}

export default BannerDinamico;