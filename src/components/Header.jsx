const Header = () => {
    return (
        <header className="bg-black w-360 h-27.5 flex items-center justify-around">
            <img src="./public/HeaderLogo_horizontal_01.png" className="w-37.5 h-[48.97px]" alt="" />
            <ul>
                <li>
                    <Link className="">Inicio</Link>
                </li>
                <li>
                    <Link>Nosso Café</Link>
                </li>
                <li>
                    <Link>Notícias</Link>
                </li>
                <li>
                    <Link>Contato</Link>
                </li>
                <li>
                    <Link>Cardápio</Link>
                </li>
            </ul>
            <button className="bg-[#C7794A] font-semibold w-55 h-13">Seja um Franqueado</button>
        </header>
    );
}

export default Header;