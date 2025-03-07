import React from 'react';
import Link from "next/link";

const Navbar = () => {
  
  const links = [
    {href: '/client', label: 'Client'},
    {href: '/drinks', label: 'Drinks'},
    {href: '/tasks', label: 'Tasks'},
    {href: '/prisma-example', label: 'Prisma example'},
  ]
  
  return (
    <nav className="bg-base-300 py-2">
      <div className="navbar px-8 max-w-6xl flex-col mx-auto sm:flex-row">
        <Link href="/" className="btn btn-primary" >Home</Link>
        <ul className="menu menu-horizontal md:ml-8 gap-5">
          {
            links.map(link=>{
              return <li key={link.href}>
                <Link href={link.href} className="text-lg">{link.label}</Link>
              </li>
            })
          }                    
        </ul>        
      </div> 
    </nav>
  );
};

export default Navbar;