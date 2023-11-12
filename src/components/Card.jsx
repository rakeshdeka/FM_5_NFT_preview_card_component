import React from 'react'
import NFTImage from "../assets/images/image-equilibrium.jpg"

const Card = () => {
    return (
        <div className='w-[60%] h-[70%] border-2 border-[#c27f7f] rounded-xl flex justify-center items-center'>

            <div className='w-[90%] h-[90%] border flex gap-2 flex-col'>
                {/* image */}
                <div className='h-[45%] border'>

                    <img src={NFTImage} alt="NFTImage" className='w-[100%] h-[100%] hover:bg-[red] z-10 hover:blur' />


                </div>
                {/* title */}
                <div className='border w-[100%] h-[10%]'>
                    <h1 className='text-white'>
                        Equilibrium #3429
                    </h1>
                </div>
                {/* description */}
                <div className='border w-[100%] h-[20%]'>
                    <p className='text-white'>Our Equilibrium collection promotes balance and calm</p>
                </div>
                {/* price */}
                <div className='border w-[100%] h-[20%] flex justify-between'>
                    <div className='border w-[30%] h-[100%]'>
                        <img src="" alt="" />
                        <p className='text-white'>0.041 ETH</p>
                    </div>
                    <div className='border w-[30%] h-[100%]'>
                        <img src="" alt="" />
                        <p className='text-white'>3 days left</p>
                    </div>

                </div>
                {/* who created */}
                <div className='border-t w-[100%] h-[20%]'>
                    <img src="" alt="" />
                    <p className='text-white'>
                        Creation of Jules Wyvern
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card