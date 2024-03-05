import React from 'react'

const Display = ({ time }) => {
    return (
        <div className=' flex justify-center gap-1 text-[50px] text-white font-bold font-mono '>
            <h2>{(time.m >= 10) ? time.m : "0" + time.m}</h2>:
            <h2>{(time.s >= 10) ? time.s : "0" + time.s}</h2>:
            <h2>{(time.ms >= 10) ? time.ms : "0" + time.ms}</h2>
        </div>
    )
}

export default Display