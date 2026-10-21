import { useState } from "react";

const Depoimentos = () => {
    const [depoimentos, setDepoimentos] = useState([{id:1, nome: "laiz", depoimento:"muito bom o cafe"},{id:2, nome: "lucas", depoimento:"muito bom o cafe"},{id:3, nome: "amanda", depoimento:"muito bom o cafe"},{id:4, nome: "rimance", depoimento:"muito bom o cafe"},{id:5, nome: "homer", depoimento:"muito bom o cafe"}, {id:6, nome: "popister", depoimento:"muito bom o cafe"},{id:7, nome: "lops", depoimento:"muito bom o cafe"}])

    return ( 
        <div className="mb-20">
            <div className="text-center mb-20">
                <p>Depoimentos</p>
                <h1 className="text-3xl text-yellow-900">Tuso sobre Tiamate Coffee</h1>
            </div>

            <img className="absolute w-100" src="./Rectangle.png" alt="" />

            <div className=" relative z-50 top-10 flex gap-10 justify-end pr-5">
                {depoimentos.slice(0, 3).map((depoimento) => (
                    <div key={depoimento.id} className=" rounded-lg bg-[#E7E1DF] w-70 h-65 p-6">
                        <img className="w-30 mb-5" src="./estrelas.png" alt="" />
                        <p className="text-justify">{depoimento.depoimento}
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                            <img className="w-15" src="./Retrato Circular em Preto e Branco.png" alt="" />
                            <h1 className="font-bold">{depoimento.nome}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Depoimentos;