import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () =>{
  
  const cartitem=useSelector((store)=>store.cart.items);
  console.log(cartitem);
  
  return (

   <header className="bg-gradient-to-r from-green-200 via-blue-100 to-purple-200 py-6">
     <div className="container mx-auto flex justify-between items-center px-6">
       <h1 className="text-3xl font-semibold text-gray-900"> <Link to="/"> Awsm</Link></h1> 
       
       <nav>
         <ul className="flex space-x-6">
           <li> <Link to="/"><a href="#" className="text-lg text-gray-800 hover:text-gray-900 transition duration-300">Home</a></Link></li>
           <li><Link to="/about">  <a href="#" className="text-lg text-gray-800 hover:text-gray-900 transition duration-300">About</a></Link></li>
           <li><a href="#" className="text-lg text-gray-800 hover:text-gray-900 transition duration-300">Contact</a></li>
           <li><Link to="/cart">  <a href="#" className="text-lg text-gray-800 hover:text-gray-900 transition duration-300">Cart-{cartitem.length}</a></Link></li>
         </ul>
       </nav>
     </div>
   </header>
 );
}
 export default Header;
 