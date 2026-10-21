const FitCultural = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-5 bg-[#F5F5F5] py-20">
                <div className="max-md:flex flex-row max-md:items-center max-md:justify-center max-md:gap-5 flex items-center justify-center gap-20">
                    <div className="flex flex-col gap-5 max-md:gap-5 max-md:flex-wrap">
                        <div className="flex gap-5 max-md:gap-5 max-md:flex-wrap">
                            <img src="public\imgMissao.png" alt="" />
                            <h3 className="flex items-center justify-center">Missão</h3>
                        </div>
                        <p>
                            Fornecer soluções, produtos e serviços
                            de maneira clara e objetiva construindo relacionamentos duradouros com a comunidade, parceiros, colaboradores
                            e sócios, através da criação de valores.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5 max-md:gap-5 max-md:flex-wrap">
                        <div className="flex gap-5 max-md:gap-5 max-md:flex-wrap">
                            <img src="public\imgVisao.png" alt="" />
                            <h3 className="flex items-center justify-center">Visão</h3>
                        </div>
                        <p>
                            Ser referência em inovação e estimular exponencialmente a nossa gestão de maneira diversificada, próspera e justa. Com devoção e disciplina em todas as nossas operações de negócio.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5 max-md:gap-5 max-md:flex-wrap">
                        <div className="flex  gap-5 max-md:gap-5 max-md:flex-wrap">
                            <img src="public\imgValores.png" alt="" />
                            <h3 className="flex items-center justify-center">Valores</h3>
                        </div>
                        <p>
                            Amor ao Trabalho - Organização - Disciplina - Inovação - Busca Contínua Pela Qualidade - Foco no Cliente
                        </p>
                    </div>
                </div>
                <div>
                    <h2>Coisas boas acontecem àqueles
                        que gostam de café</h2>
                </div>
            </div>
        </>
    );
}

export default FitCultural;