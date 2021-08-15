import React, { useState } from 'react'
import Typical from 'react-typical'



const Banner = () => {

    return (
        <div class="justify-between bg-cover bg-center h-48 md:h-96 flex" style={{backgroundImage: 
            "url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60)"}}
        >
            <div class="text-white container mx-auto flex md:flex-row items-center md:justify-between">
                <div class="text-left md:my-7 mx-16">
                    <h1 class="mt-0 mb-8 text-5xl md:text-8xl font-bold">
                        Hi Visitor!
                    </h1>
                    <h1 class="text-2xl md:text-6xl"> I'm a
                        <Typical
                        loop = {Infinity}
                        wrapper='b'
                        steps={[
                            ' Developer💻',
                            1000,
                            ' CryptoMiner💰',
                            1000,
                            ' Doglover🐶',
                            1000
                        ]}
                        />
                    </h1>

                </div>

            </div>

        </div>
        
    )

}

export default Banner