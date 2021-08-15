import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import profile_pic from '../assets/profile-pic.jpg'

const Card = ({title="Project", pic, desc="Lo", mediaLogo}) => {
    return (
        <div class="border-2 rounded-3xl flex-col w-72 text-center overflow-hidden shadow-lg mb-5">

            <div class=" bg-cover h-48 flex" style={{backgroundImage: 
                "url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60)"}}
            >
            </div>

            <div class='space-y-2 p-4'>
                <h1 class=""> {title} </h1>
                <p class="text-gray-500"> loremNulla velit ullamco pariatur cupidatat deserunt sit ipsum in proident anim proident qui in sint. Eiusmod cupidatat nostrud pariatur ad cillum occaecat 
                    qui tempor.</p>
                <AiFillGithub class="w-full text-2xl"/>
            </div>
        </div>
    )
}

export default Card;

