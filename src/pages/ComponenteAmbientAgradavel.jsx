import React from "react";
import photo1 from '../assets/1igthAA.webp';
import photo2 from '../assets/2igthAA.webp';
import photo3 from '../assets/3igthAA.webp';
import photo4 from '../assets/4igthAA.webp';
import photo5 from '../assets/5igthAA.webp';
import photo6 from '../assets/6igthAA.webp';

const AmbientAgradavel = () => {
    return (

        <>

            {/* Div maior */}
            <div>

                {/* Div texto */}
                <div>
                    <span className="text-[#3B2416] dark:text-gray-300 block">Para você e seus amigos</span>
                    <h1 className="text-2xl font-bold text-[#A97744] dark:text-white">Ambiente Agradável</h1>
                    {/* icone */}
                </div>

                {/* Div para imagens */}    
                {/* <div className="grid grid-cols-3 gap-0 w-fit">
                    <img
                    src={photo1}
                    alt="Ambiente agradável 1"
                    className="w-97.5 h-97.5 object-cover rounded-lg shadow-md"
                    />
                    <img
                    src={photo2}
                    alt="Ambiente agradável 2"
                    className="w-97.5 h-97.5 object-cover rounded-lg shadow-md"
                    />
                    <img
                    src={photo3}
                    alt="Ambiente agradável 3"
                    className="w-97.5 h-97.5 object-cover rounded-lg shadow-md"
                    />
                    <img
                    src={photo4}
                    alt="Ambiente agradável 4"
                    className="w-97.5 h-97.5 object-cover rounded-lg shadow-md"
                    />
                    <img
                    src={photo5}
                    alt="Ambiente agradável 5"
                    className="w-97.5 h-97.5 object-cover rounded-lg shadow-md"
                    />
                    <img
                    src={photo6}
                    alt="Ambiente agradável 6"
                    className="w-97.5 h-97.5 object-cover rounded-lg shadow-md"
                    />
                </div> */}

            </div>

        </>

    );
}

export default AmbientAgradavel;