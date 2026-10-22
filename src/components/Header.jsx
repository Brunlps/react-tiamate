import { Link } from 'react-router';

const Header = () => {
    return (
        <header className="pl-5 pr-5 bg-[#292625] w-360 h-27.5 flex items-center justify-start gap-5">
            <img src="./public/HeaderLogo_horizontal_01.png" className="w-37.5 h-[48.97px]" alt="" />
            <ul className='flex gap-11.25'>
                <li>
                    <Link className="size-4.5 text-[#F5E7DA]">Inicio</Link>
                </li>
                <li>
                    <Link className="size-4.5 text-[#F5E7DA]">Nosso Café</Link>
                </li>
                <li>
                    <Link className="size-4.5 text-[#F5E7DA]">Notícias</Link>
                </li>
                <li>
                    <Link className="size-4.5 text-[#F5E7DA]">Contato</Link>
                </li>
                <li>
                    <Link className="size-4.5 text-[#F5E7DA]">Cardápio</Link>
                </li>
            </ul>
            <button className="bg-[#C7794A] text-[#3B2416] ml-auto font-semibold w-55 h-13">Seja um Franqueado</button>
        </header>
    );
}

export default Header;