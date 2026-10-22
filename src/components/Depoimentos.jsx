import { useState, useRef } from "react";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import { BiSolidLeftArrowCircle } from "react-icons/bi";



const Depoimentos = () => {
    const [depoimentos, setDepoimentos] = useState([{id:1, nome: "laiz", depoimento:"muito bom o cafe"},{id:2, nome: "lucas", depoimento:"muito bom o cafe"},{id:3, nome: "amanda", depoimento:"muito bom o cafe"},{id:4, nome: "rimance", depoimento:"muito bom o cafe"},{id:5, nome: "homer", depoimento:"muito bom o cafe"}, {id:6, nome: "popister", depoimento:"muito bom o cafe"},{id:7, nome: "lops", depoimento:"muito bom o cafe"},{id:1, nome: "laiz", depoimento:"muito bom o cafe"},{id:2, nome: "lucas", depoimento:"muito bom o cafe"},{id:3, nome: "amanda", depoimento:"muito bom o cafe"},{id:4, nome: "rimance", depoimento:"muito bom o cafe"},{id:5, nome: "homer", depoimento:"muito bom o cafe"}, {id:6, nome: "popister", depoimento:"muito bom o cafe"},{id:7, nome: "lops", depoimento:"muito bom o cafe"},{id:1, nome: "laiz", depoimento:"muito bom o cafe"},{id:2, nome: "lucas", depoimento:"muito bom o cafe"},{id:3, nome: "amanda", depoimento:"muito bom o cafe"},{id:4, nome: "rimance", depoimento:"muito bom o cafe"},{id:5, nome: "homer", depoimento:"muito bom o cafe"}, {id:6, nome: "popister", depoimento:"muito bom o cafe"},{id:7, nome: "lops", depoimento:"muito bom o cafe"}])

    const carrossel = useRef(null)

    const handleLeftClick = (event) => {
        event.preventDefault()

        carrossel.current.scrollLeft -= carrossel.current.offsetWidth        
        
    }
    const handleRightClick = (event) => {
        event.preventDefault()

        carrossel.current.scrollLeft += carrossel.current.offsetWidth
    }


return (
  <div className="mb-40">

    <div className="mb-20 text-center ">
      <p>Depoimentos</p>
      <h1 className="text-3xl text-yellow-900">
        Tuso sobre Tiamate Coffee
      </h1>
    </div>

    <img className="absolute left-0 max-w-full " src="./Rectangle.png" alt=""/>

    <div id="container" className="relative z-50 top-10 ml-auto flex max-w-[75%]  justify-end">

        <div ref={carrossel} className="flex gap-8 overflow-x-auto scrollbar-none overflow-auto scroll-smooth">
        {depoimentos.map((depoimento) => (
            <div key={depoimento.id} className="h-65 w-80 shrink-0 rounded-lg bg-[#E7E1DF] p-6">
            <img className="mb-5 w-30" src="./estrelas.png" alt="" />

            <p className="text-justify"> {depoimento.depoimento} </p>

            <div className="mt-2 flex items-center gap-4">
                <img className="w-15" src="./Retrato Circular em Preto e Branco.png" alt="" />
                <h1 className="font-bold">{depoimento.nome}</h1>
            </div>
            </div>
        ))}
        </div>
    </div>

    <div className=" relative z-50 top-15 flex justify-end gap-5 pr-20">
      <BiSolidLeftArrowCircle onClick={handleLeftClick} className="h-10 w-10 fill-amber-600" />
      <BiSolidRightArrowCircle onClick={handleRightClick} className="h-10 w-10 fill-amber-600" />
    </div>

  </div>
);
}
 
export default Depoimentos;