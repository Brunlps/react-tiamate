import { useState, useRef } from "react";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import { BiSolidLeftArrowCircle } from "react-icons/bi";



const Depoimentos = () => {
    const [depoimentos, setDepoimentos] = useState([
        {id:1, nome: "laiz", depoimento:"muito bom o cafeasdadas asdwfasdas sfa a dawdasd a asd wdawda wd w dad adawfawfa"},
        {id:2, nome: "lucas", depoimento:"muito bom o cafeasdadas asdwfasdas sfa a dawdasd a asd wdawda wd w dad adawfawfa"},
        {id:3, nome: "amanda", depoimento:"muito bom o cafeasdadas asdwfasdas sfa a dawdasd a asd wdawda wd w dad adawfawfa"},
        {id:4, nome: "rimance", depoimento:"muito bom o cafeasdadas asdwfasdas sfa a dawdasd a asd wdawda wd w dad adawfawfa"},
        {id:5, nome: "homer", depoimento:"muito bom o cafeasdadas asdwfasdas sfa a dawdasd a asd wdawda wd w dad adawfawfa"},
        {id:6, nome: "popister", depoimento:"muito bom o cafeasdadas asdwfasdas sfa a dawdasd a asd wdawda wd w dad adawfawfa"},
        {id:7, nome: "lops", depoimento:"muito bom o cafeasdadas asdwfasdas sfa a dawdasd a asd wdawda wd w dad adawfawfa"},
        {id:8, nome: "laiz", depoimento:"muito bom o cafeasdadas asdwfasdas sfa a dawdasd a asd wdawda wd w dad adawfawfa"},
        {id:9, nome: "lucas", depoimento:"muito bom o cafeasdadas asdwfasdas sfa a dawdasd a asd wdawda wd w dad adawfawfa"}])

    const carrossel = useRef(null)

    const handleLeftClick = (event) => {
        event.preventDefault()

        carrossel.current.scrollLeft -= 350        
        // carrossel.current.scrollLeft -= carrossel.current.offsetWidth        
        
    }
    const handleRightClick = (event) => {
        event.preventDefault()
        console.log(carrossel.current.offsetWidth);
        
        carrossel.current.scrollLeft += 350
        // carrossel.current.scrollLeft += carrossel.current.offsetWidth
    }


return (
  <div className="lg:mb-40 mt-20">

    <div className="mb-10 lg:mb-20 text-center ">
      <p>Depoimentos</p>
      <div className="text-5xl md:flex md:gap-4 md:justify-center md:text-5xl text-yellow-900 font-bold">
          <div>
              Tuso sobre
          </div>
          <div>
              Tiamate Coffee
          </div>
      </div>
    </div>

    <img className="lg:absolute w-100 md:w-150 m-auto rounded-3xl " src="./Rectangle.png" alt=""/>

    <div id="container" className="lg:relative lg:z-50 top-10 m-auto lg:m-0 lg:ml-auto flex max-w-[75%] justify-end">

        <div ref={carrossel} className="flex gap-8 overflow-x-auto scrollbar-none overflow-auto scroll-smooth">
            {depoimentos.map((depoimento) => (
                <div key={depoimento.id} className="flex flex-col h-60 w-80 mt-10 shrink-0 rounded-lg bg-[#E7E1DF] p-6">
                <img className="mb-5 w-30" src="./estrelas.png" alt="" />

                <p className="text-justify"> {depoimento.depoimento} </p>

                <div className="mt-auto flex items-center gap-4  ">
                    <img className="w-15" src="./Retrato Circular em Preto e Branco.png" alt="" />
                    <h1 className="font-bold">{depoimento.nome}</h1>
                </div>
                </div>
            ))}
        </div>
    </div>

    <div className=" lg:relative lg:z-50 lg:top-15 mt-10 flex justify-center lg:justify-end gap-5 lg:pr-20">
      <BiSolidLeftArrowCircle onClick={handleLeftClick} className="h-10 w-10 fill-amber-600" />
      <BiSolidRightArrowCircle onClick={handleRightClick} className="h-10 w-10 fill-amber-600" />
    </div>

  </div>
);
}
 
export default Depoimentos;