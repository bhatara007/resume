import React from 'react'
import profile_pic from '../assets/profile-pic.jpg'

const Aboutme = () => {
    return (
        <div>
            <h1 class='text-3xl md:text-5xl font-bold my-3.5'> About me </h1>
            <hr class="solid"></hr>
            <div class='flex  flex-col md:flex-row my-3.5 space-x-5 items-center md:items-start'>
                <div class='w-60 md:flex-none'>
                    <img class="rounded-full" src={profile_pic}/>
                </div>
                <p class='flex-auto text-left my-3.5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. 
                Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.
                </p>
            </div>
        </div>
    )
}

export default Aboutme
