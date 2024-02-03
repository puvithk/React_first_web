import logo from '../assets/pexels-shamia-casiano-944743.svg';
import twiter from  '../assets/twiter.png';
import cart from '../assets/shopping-cart.png';
import { Link } from 'react-router-dom';
function NavBar(){
    return(
        <>
    <div className="main fixed  bg-black opacity-65 text-white w-screen h-16  grid grid-flow-col grid-cols-3 align-middle  justify-between p-1 pr-4 pl-4 ">
      <div className="ing  h-16 w-full justify-self-center grid grid-flow-col self-center  align-middle justify-center">
        <img src={logo} alt="" className="h-16 invert justify-self-center "/>
        
        </div> 
      <div className="listButton grid grid-flow-row align-middle justify-center">
        <ul className='flex gap-10 self-center'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/Blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          </ul> 
          </div>
      <div className="logo flex align-middle invert justify-end pr-7 gap-10">
        <img src={twiter} alt="" className="h-10 self-center"/>
        <img src={cart} alt="" className="h-7 self-center" /></div>  
    </div>
        </>
    );
}
export default NavBar;