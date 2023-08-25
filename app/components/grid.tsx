import React from 'react';

export default function Grid(){
    const data =[
        {
            path : '',
            name : 'michael scott',
        },
        {
            path : '',
            name : 'michael scott',
        },
        {
            path : '',
            name : 'michael scott',
        },
        {
            path : '',
            name : 'michael scott',
        },
        {
            path : '',
            name : 'michael scott',
        },
        {
            path : '',
            name : 'michael scott',
        },
    ]
    return(
        <>
        <div className='text-white pt-32'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6'>
            <div>
                        <div className='w-full h-80 bg-[#292727] text-[#eeeeee] rounded-lg'>Upload yours</div>
                       
                    </div>
                {data.map((info)=>(
                    <div>
                        <div className='w-full h-80 bg-gray-300 rounded-lg'></div>
                        <div> {info.name} </div>
                    </div>

                ))}
            </div>
        </div>

        </>
    )
}