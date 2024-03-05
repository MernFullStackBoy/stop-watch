import React from 'react'

const Btn = ({start, stop, reset}) => {
    return (
        <div className=' mt-8 flex justify-center gap-5 '>
            <button onClick={start} className=' w-[50px] h-[50px] bg-white rounded-[20px]  fas fa-play'></button>
            <button onClick={stop} className=' w-[50px] h-[50px] bg-white rounded-[20px]  fas fa-pause'></button>
            <button onClick={reset} className=' w-[50px] h-[50px] bg-white rounded-[20px]  fa-solid fa-rotate-right'></button>
        </div>
    )
}

export default Btn