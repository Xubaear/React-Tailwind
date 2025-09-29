
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';


const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" }
];

const Navbar = () => {

    const [open, setOpen]= useState(false)
     const links = navLinks.map(route =><li className='px-4 lg:mr-10 hover:bg-amber-400 md:hover:bg-transparent'><a href={route.path}>{route.name}</a></li>)
    return (
        <nav className='flex justify-between mx-10 mt-7' >
           
           <span className='flex ' onClick={()=> setOpen(!open)}>
            {
            open ? <X className='md:hidden'></X>: <Menu className='md:hidden'></Menu>
           }
             
             <ul className={`md:hidden absolute duration-1000
                ${open ? 'top-14' : '-top-73 '}
                 bg-amber-200  text-black p-2`}>
                {links}
             </ul>
            <h3 className='ml-4 text-6xl bg-green-600 text-amber-800 font-extrabold w-[240px]  h-[70px] text-center rounded-sm animate-bounce'>X - Gym</h3>
           </span>


            <ul className='md:flex hidden'>
                {
                    links
                }
            </ul>

            <button className='bg-amber-300 text-black w-[80px] h-[30px] rounded-sm hover:bg-amber-500'>Sign In</button>
        </nav>
    );
};

export default Navbar;