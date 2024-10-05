const NavMenu = () => {
  return (
    <ul className="lg:flex space-x-4 font-semibold">
      <li>
        <a href="#home" className="hover:text-primary hover:bg-transparent">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-primary hover:bg-transparent">
          About
        </a>
      </li>
      <li>
        <a href="#services" className="hover:text-primary hover:bg-transparent">
          Services
        </a>
      </li>
      <li>
        <a href="#blog" className="hover:text-primary hover:bg-transparent">
          Blog
        </a>
      </li>
    </ul>
  );
};

export default NavMenu;
