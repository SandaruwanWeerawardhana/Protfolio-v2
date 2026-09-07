
import { Link } from 'react-scroll';

const Logo = () => {
  return (
    <Link
      to="about"
      spy={true}
      smooth={true}
      offset={-80}
      duration={500}
      className="cursor-pointer focus-ring rounded"
      aria-label="Logo, go to top"
    >
      <div className="flex items-center">
        <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-primary-600 text-white font-bold text-xl transform rotate-12 hover:rotate-2 transition-transform duration-300 shadow-glow">
          S
        </div>
        <span className="text-white text-xl ml-2 font-medium">
          <span className="text-primary-400">Sandaruwan</span>
          Weerawardhana
        </span>
      </div>
    </Link>
  );
};

export default Logo;
