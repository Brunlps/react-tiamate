const Video = () => {
    return (
        
        <div className=" relative bg-[url('/Rectangle-56.png')] bg-cover bg-center h-125 flex justify-center items-center">
            <div className="absolute inset-0 bg-black/40"></div>
            <button className="cursor-pointer relative h-fit">
                <img src="/Group.png" alt=" Ícone do YouTube" />
                <p className="text-[18px] text-white font-normal mt-5">Assistir Vídeo</p>
            </button>
        </div>
        
        
    );
}
 
export default Video;