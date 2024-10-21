import React, { useEffect,  useState } from 'react'
import Books from './Books';
const Entrance = () => {
    let [result,setResult] = useState(false)
    const [seconds, setSeconds] = useState(600);
useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }else{
      setResult(true)
    }
  }, [seconds]);
  
  return (
    <div >
         {result ? <h1 className=' text-[#009dff] text-center font-bold text-[40px] mt-[200px] text-center bg-black '> Thank you very much !!! 😎 BOSS</h1>: 
            <>
              <div>
                <Books/>
              </div>
              <form >
                  <div className='p-3 mb-[30px] font-bold text-[30px] text-[red]'>
                        {seconds > 0 ? ( <h1>{Math.floor(seconds / 60)}:{seconds % 60}</h1> ) : ( <h1>Timer finished!</h1>)}
                  </div> 
              </form>
            </>
          }
    </div>
  )
}
export default Entrance 