import tone from './assets/tone.mp3';
import { useEffect } from 'react';
export function TimesUp({up,setUp}){
    useEffect(()=>{
        let tune=new Audio(tone);
        if(up){
            tune.play();
        }
        return()=> {
            tune.pause();
            tune.currentTime=0;
        }
    },[up]);
    function updateUp(){
        setUp(false);
    }
    const box={
        visibility:up?'visible':'hidden',
    }
    return(
    <div className='flex bg-red-600 justify-center items-center 
   h-[120px] sm:h-[200px] w-[250px] flex-col rounded-full relative bottom-[300px]
    left-10 sm:bottom-[400px] sm:left-[580px]' style={box}>
           <h1 className='text-3xl sm:text-4xl font-mono text-gray-300'>TIME'S UP!!</h1>
           <button className='bg-white text-red-600 p-2 sm:p-4 text-lg 
            sm:text-xl rounded-full font-semibold hover:bg-red-800 hover:text-white'onClick={updateUp}>STOP</button>
          </div>
          
        )
}