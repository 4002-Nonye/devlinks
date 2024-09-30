import logo from '../assets/logo.svg';

function Header() {
  return (
    <h1 className="inline-flex items-center gap-2 text-4xl font-extrabold">
      <img src={logo} alt="logo" />
      devlinks
    </h1>
  );
}

export default Header;
