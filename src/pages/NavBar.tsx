import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/EventFeedBack">EventFeedback</Link>
      <Link to="/BookRequest">BookRequest</Link>
    </nav>
  );
};

export default NavBar;
