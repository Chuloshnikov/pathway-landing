import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import MenuIcon from '@/assets/menu.svg';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm">
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"/>
        </div>
      </div>
      <div className='py-5'>
        <div className='container'>
          <Image src={Logo} alt={"Pathway Logo"} height={40} width={40}/>
          <MenuIcon className="h-5 w-5"/>
        </div>
      </div>
    </header>
  );
};

export default Header;

