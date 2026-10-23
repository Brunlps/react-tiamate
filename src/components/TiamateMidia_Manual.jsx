



const TiamateMidia = () => (

    const noticias = [

    <div>
        <div>
            <img src="./public/img_o-povo.png" alt="O Povo" />
            <h1>O Povo  </h1>
            <p>Conheça cinco lugares no centro para ir com os amigos</p>
            <button>Notícia Completa</button>
        </div>
            
        <div>
            <img src="./public/img_vos.png" alt="VOS" />
            <h1>VOS</h1>
            <p>Um gostinho moderno no coração de Fortaleza</p>
            <button>Notícia Completa</button>
        </div>

        <div>
            <img src="./public/img_a-tarde.png" alt="A Tarde" />
            <h1>A Tarde</h1>
            <p>Cafeteria é nova tendência de negócio em Salvador</p>
            <button>Notícia Completa</button>
        </div>


    </div>
    ];

    return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-sans">
      
      <div className="mb-8">
        <span className="text-sm font-semibold text-amber-800 uppercase tracking-wider">
          Fique por dentro
        </span>
        <h2 className="text-3xl font-bold text-amber-900 mt-1">
          Tiamate na Mídia
        </h2>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {noticias.map((item) => (
          <div key={item.id} className="flex flex-col group">
            
            
            <div className="relative overflow-hidden rounded-lg shadow-md aspect-[16/10]">
              <img 
                src={item.imagem} 
                alt={`Notícia no jornal ${item.midia}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                <span className="text-white font-black text-2xl tracking-tighter">
                  {item.midia}
                </span>
              </div>
            </div>

            
            <h3 className="text-xl font-bold text-amber-950 mt-4 mb-6 leading-snug min-h-[56px]">
              {item.titulo}
            </h3>

            
            <a 
              href={item.link}
              className="mt-auto block w-full text-center py-3 px-4 border border-amber-700 text-amber-800 font-medium rounded hover:bg-amber-700 hover:text-white transition-colors duration-200"
            >
              Notícia Completa
            </a>

          </div>
        ))}
      </div>
    </section>
  );



)
 
export default TiamateMidia;