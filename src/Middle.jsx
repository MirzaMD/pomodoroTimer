import tomato from'./assets/tomato.jpg'
import { useState, useEffect } from 'react';
import { TimesUp } from './TimesUp.jsx'
export function Middle(){
    const[seconds,setSeconds]=useState(60);
    const[minutes,setMinutes]=useState(24);
    const[running,setRunning]=useState(false);
    const[up,setUp]=useState(false);
    useEffect(()=>{
        let timer;
        if(running){
            timer=setInterval(()=>{
                setSeconds((sec)=>{
                if(sec>0){
                    return sec-1;
                }
                else{
                    if(minutes>0){
                        setMinutes((min)=>min-1);
                        return 59;
                    }
                    else{
                        setUp(true);
                        resetTimer();
                        clearInterval(timer);
                        return 0;
                    }
                }
                })
            },1000)
        }
        return ()=>clearInterval(timer);
    },[running,seconds])
    function startTimer(){
        setRunning(run=>!run);
    }
    function resetTimer(){
        setMinutes(24);
        setSeconds(60);
        setRunning(false);
    }
    return(
    <>
    <div className='flex justify-center items-center flex-col space-y-8'>
        <img src={tomato} alt='tomato' className=' h-[150px] sm:h-[300px] mt-20 sm:mt-0 '/>
        <h1 className='text-3xl sm:text-6xl font-mono '>{minutes}:{seconds.toString().padStart(2,'0')}</h1>
        <nav className='flex justify-center items-center w-[250px] space-x-6'>
            <button className='bg-red-600 text-gray-300 p-2 sm:p-4 text-lg 
            sm:text-xl rounded-full font-semibold hover:bg-red-800' onClick={resetTimer}>RESET</button>
            <button className='bg-red-600 text-gray-300 p-2 sm:p-4 text-lg 
            sm:text-xl rounded-full font-semibold hover:bg-red-800' onClick={startTimer}>{running?"STOP":"START"}</button>
        </nav>
    </div>
    <TimesUp up={up} setUp={setUp}></TimesUp>
    </>)
}