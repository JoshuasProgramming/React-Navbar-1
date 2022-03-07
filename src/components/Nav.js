import React from 'react'
import '../input.css';

const Nav = () => {

  return (
    <>
    <link href="/dist/output.css" rel="stylesheet"/>
    <section class="flex items-center justify-evenly h-12 m-auto text-gray-300 fixed z-50 shadow-inner w-full ">
      <header class="flex justify-around items-center m-auto max-w-7xl h-full">
                <ul class="flex items-center justify-end m-auto h-8 ">
                    <li class="my-0 mx-1.5 cursor-pointer hover:text-gray-400"><a href="#">About</a></li>
                    <li class="my-0 mx-1.5 cursor-pointer hover:text-gray-400"><a href="#">Menu</a></li>
                    <li class="my-0 mx-1.5 cursor-pointer hover:text-gray-400"><a href="#">Contact</a></li>
                </ul>
      </header>
    </section>
    </>
  );
}

export default Nav;
