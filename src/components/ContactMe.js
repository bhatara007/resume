import React from 'react'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

const ContactMe = (props) => {

    const contactList = [
        {
            logo: <AiFillFacebook class="text-4xl"/>,
            name: "Duke Bhatara Chaemchan",
            link: "https://www.facebook.com/bchaemchan",
            color: "bg-blue-500"
        },
        {   logo: <AiFillInstagram class="text-4xl"/>,
            name: "dukechaemchan",
            link: "https://www.instagram.com/dukechaemchan/",
            color: "bg-pink-600"
        
    }]
    return (
        <div>
            <div class="justify-around flex flex-col md:flex-row mt-12 items-center">
                <div>
                    <h1 class=' text-2xt md:text-5xl font-bold mb-5'> Contact me </h1>
                </div>
                <div>
                    {contactList.map((item, index) => (
                        <div class={`flex items-center space-x-5 mb-5 rounded-xl p-2 md:p-4 text-white bg-pink ${item.color} w-80`}>
                            {item.logo} 
                            <a href={item.link}> {item.name || item.link}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default React.forwardRef((props, ref) => (<ContactMe ref={ref} {...props}/>))
