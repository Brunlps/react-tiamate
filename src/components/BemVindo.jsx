const BemVindo = () => {
  return (
    <section className="bg-[#E7E1DF] py-16 px-10 font-archivo text-[#3B2416] tracking-tight">
      <div className="max-w-6xl mx-auto flex items-center gap-10">
        <img
          src="./banner2.png"
          alt="Bebidas Tiamate"
          className="w-1/2 max-w-[700px] h-auto object-contain"
        />

        <div className="w-1/2">
          <p className="mb-2 text-lg">Para os amantes de café</p>

          <h3 className="text-5xl font-bold text-[#A97744] mb-6 leading-tight">
            Bem-vindo a
            <br />
            Tiamate Coffee
          </h3>

          <p className="mb-4 leading-relaxed">
            A Tiamate Coffee traduz de maneira clara e objetiva o verdadeiro
            sabor do café e o seu espírito inovador. Visamos fazer parte da vida
            das pessoas e diferentes culturas, isso é o que nos motiva a
            oferecer o café mais gostoso. Por isso, selecionamos as melhores
            plantações, os grãos, os blends e as pessoas que vão colocar a mão
            na massa para fazer esse delicioso café.
          </p>

          <p className="leading-relaxed">
            Pensamos em fazer os seus momentos mais felizes, seja no café da
            manhã ou em uma reunião. Individualmente ou entre amigos. A Tiamate
            Coffee investe em um conceito atual que transmite às pessoas uma
            sensação de bem-estar. Enquanto nosso café aproxima as pessoas,
            nossos serviços de Wi-Fi gratuito as mantêm conectadas. Descubra
            como navegar na internet enquanto você saboreia um Tiamate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BemVindo;