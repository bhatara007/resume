import React, { useState } from 'react'

function Navbar(props){


    return (
      <nav class=" bg-black text-white">
          <div class="container mx-auto flex justify-between px-2">
            <h1 class="mx-2.5 my-2.5 font-bold">Bhatara C.</h1>
            <div class="align-middle flex items-end">
              <a class="mx-2.5 my-2.5 font-bold">Contact me</a>
            </div>
          </div>

      </nav>
    )
}

export default Navbar 