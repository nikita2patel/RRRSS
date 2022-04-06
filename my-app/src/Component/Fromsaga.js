import React,{useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { input } from '../Redux/Action/Action';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';




const Fromsaga = () => {
    const {id} = useParams()
    console.log("id",id)
    const navigate = useNavigate()
    const output = useSelector((state) => state.reducer.user)
     //const output = useSelector((state)=>state.reducer)
     console.log('output',output)

    const dispatch = useDispatch();
    const [data,setdata] = useState(
         {
             name: '',
             email: '',
             phone: '',
             last: ''
         }
         )

         const handelsubmit = (event) =>{
            event.preventDefault()
            dispatch(input(data))
            // setdata({
            //     name: '',
            //     last: '',
            //     email: '',
            //     phone: ''
            //         })
            navigate('/Tabel');

          
           }
        

 
         useEffect(()=>{
             var ooo = output[id] 
             console.log('000',ooo)
             
             
             if(ooo){
                setdata(
                     { ...data,
                         name: ooo.name,
                         last: ooo.last,
                         phone: ooo.phone,
                         email:ooo.email

                     }
                    
                 )
                 console.log('2222',data)
             }
            

        },[id]) 

  return (
   <>
   <form onSubmit={handelsubmit}>
   <p className="h4 text-center mb-4">Sign up</p>
       <label>Name</label><br></br>
       <input type="text"  name="name" onChange={(e)=>setdata({...data,name:e.target.value})}/><br></br>
       <label>Last</label><br></br>
       <input type="text" name="last" onChange={(e)=>setdata({...data,last:e.target.value})}/><br></br>
       <label>Email</label><br></br>
       <input type="text"  name="email"   onChange={(e)=>setdata({...data,email:e.target.value})}/><br></br>
       <label>phone</label><br></br>
       <input type="text"  name="phone" onChange={(e)=>setdata({...data,phone:e.target.value})} /><br></br>
       <Button variant='success' type='submit'>submit</Button><br></br>
   </form>
   <div>
{/* { 
output.map((x)=>{
        return(
            <>
            <h6>{x.name}</h6>
            <h6>{x.last}</h6>
            <h6>{x.email}</h6>
            <h6>{x.phone}</h6>
            </>
        )
    })
}      */}


   </div>
 
   </>
  )
}

export default Fromsaga