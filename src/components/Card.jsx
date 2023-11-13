import React from 'react'
import iconView from "../assets/images/icon-view.svg"
import NFTImage from "../assets/images/image-equilibrium.jpg"
import avatar from "../assets/images/image-avatar.png"
import clock from "../assets/images/icon-clock.svg"
import ethereum from "../assets/images/icon-ethereum.svg"

const Card = () => {
    return (
        <div className='w-[250px] h-[450px] bg-[#14253d] rounded-xl flex justify-center items-center shadow-xl'>

            <div className='w-[90%] h-[90%] flex gap-2 flex-col'>
                {/* image */}
                <div className='h-[55%] group relative'>
                    <div className='w-[100%] h-[100%]  bg-[#00fff77e] rounded-lg cursor-pointer flex justify-center items-center absolute inset-0 opacity-0 group-hover:opacity-100'>
                        <img src={iconView} alt="iconView" className=' rounded-lg cursor-pointer' />
                    </div>
                    <img src={NFTImage} alt="NFTImage" className=' rounded-2xl w-full h-full' />

                </div>
                {/* title */}
                <div className=' w-[100%] h-[10%]'>
                    <h1 className='font-Outfit text-white  font-bold text-xl cursor-pointer hover:text-[#00fff7]'>
                        Equilibrium #3429
                    </h1>
                </div>
                {/* description */}
                <div className=' w-[100%] h-[20%]'>
                    <p className='text-[#8BACD9] font-Outfit font-light text-sm '>Our Equilibrium collection promotes balance and calm.</p>
                </div>
                {/* price */}
                <div className=' w-[100%] h-[20%] flex justify-between border-b border-[#8BACD9]'>
                    <div className='w-[50%] h-[100%] flex gap-2 items-center'>
                        <div>
                            <img src={ethereum} alt="ethereum" />
                        </div>
                        <p className='text-[#00fff7] font-semibold font-Outfit text-sm'>0.041 ETH</p>
                    </div>
                    <div className='w-[50%] h-[100%] flex gap-2 justify-end items-center '>

                        <div className='flex '>
                            <img src={clock} alt="clock" />
                        </div>
                        <p className='text-[#8BACD9] font-Outfit text-sm'>3 days left</p>
                    </div>

                </div>
                {/* who created */}
                <div className='w-[100%] h-[20%] flex items-center gap-2 pt-1'>
                    <div className='border h-full w-10 rounded-full'>
                        <img src={avatar} alt="avatar" />
                    </div>

                    <p className=' text-[#8BACD9] text-sm font-Outfit'>
                        Creation of <span className=' text-white hover:text-[#00fff7] cursor-pointer'>Jules Wyvern</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card