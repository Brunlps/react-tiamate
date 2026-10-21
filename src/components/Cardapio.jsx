import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const Cardapio = () => {

    const [mudarCafe, setMudarCafe] = useState(false);

    return ( 
        <div className="">
            <h2 className="text-xs text-[#3B2416] text-center mt-20">Confira nosso</h2>
            <h1 className="text-[#A97744] text-5xl text-center font-bold mt-3">Cardápio</h1>

            <div className="flex justify-center align-items *:w-60 mt-18">
                <button className="cursor-pointer"><BiLeftArrowAlt /></button>
                <img src={"./bebida-01.png"} alt="" />
                <img src="./bebida-02.png" alt="" />
                <img src="./bebida-03.png" alt="" />
                <button className="cursor-pointer -mr-15"><BiRightArrowAlt /></button>
            </div>
        </div>
     );
}
 
export default Cardapio;