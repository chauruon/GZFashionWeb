import Link from "next/link";
import Image from "next/image";
import menu from "../../public/images/icon/menu_icon.svg"
import search from "../../public/images/icon/search.svg"
import { MenuButton } from "./Button";
import { Input } from "./Input";
import { SearchInput } from "./SearchInput";

export const NavBar = () => {

  const handleClick = () => {
    console.log('increment like count');
  }

  return(
    <header className='fixed w-full container bg-navbar rounded-3xl md:h-20 lg:h-20'>
      <nav className='flex justify-between items-center sm:px-[2rem] px-2'>
        <div className="flex justify-between items-center md:w-3/5">
          <div className="flex justify-center items-center">
            <MenuButton  onClick={handleClick}/>
            <Link href='/' className='flex items-center '>
              <div className="rounded-full relative">
                <Image src='/images/logo_lavin.png'
                  alt='logo'
                  width={90}
                  height={100}
                  priority={true} 
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
          <div className="items-center">
            <SearchInput classNameInput="rounded-full flex md:w-full items-center sm:w-2 lg:w-[27rem] xl:w-[35rem]"/>
          </div>
        </div>

        <ul className="flex justify-around w-[360px] bg-white">
          {/* <li>
            Giày Nam
          </li>
          <li>
            Giày Nữ
          </li>
          <li>
            Quần áo
          </li> */}
        </ul>
      </nav>
    </header>
  );
};
