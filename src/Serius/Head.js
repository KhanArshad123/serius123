import React, { useEffect, useState } from 'react';
import './All.css';
function Head()
{
    
    const [day,setDay]=useState(10);
    const [hr,setHr]=useState(23);
    const [min,setMin]=useState(59);
    const [sec,setSec]=useState(59);
    useEffect(()=>
    {
        const inter=setInterval(()=>
        {if(!(sec==0 && min==0 && day==0 && hr==0))
            setSec(sec-1);
        },1000)
        
        if(sec==0)
        {
           if(min>0)
            {
                setMin(min-1);
            setSec(59)}

            
        }
        if(min==0)
        {
            if(hr!=0){
            setHr(hr-1);
            
            setMin(59);
            setSec(59)
            }
        }
        if(hr==0)
        {
            if(day!=0)
            {setDay(day-1)
            setHr(23)
            }
            

            
        }
        if(sec==0 && min==0 && day==0 && hr==0)
        {
            setSec(0);
        }
        return ()=>clearInterval(inter);
    },[sec])
    return (
     <div  className="header">
 <div>Book now to get exciting travel deal. Upto 40% off on credit card payment</div>
 <div>{day==0 && hr==0 && min==0 && sec==0 ?"Times Up":<span>Offer ends in {day}d {hr}h {min}m {sec}s </span>}</div>
     </div>
       
     
    )
} 
export default Head;