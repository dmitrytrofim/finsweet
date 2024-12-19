import Container from '@/components/Container';
import { NavLink } from 'react-router';

function Header() {
 return (
  <header className="">
   <Container>
    <div className="">
     <a href="#" className="">
      <img className="" src="" alt="" loading="lazy" />
     </a>
     <nav className="">
      <ul className="">
       <li className="">
        <NavLink to="/" end>
         Home
        </NavLink>
        <NavLink to="/blog" end>
         Blog
        </NavLink>
       </li>
      </ul>
     </nav>
    </div>
   </Container>
  </header>
 );
}

export default Header;
