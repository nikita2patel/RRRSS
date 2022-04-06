import { useForm } from 'react-hook-form';
import {  Button } from 'react-bootstrap';

function Hookform() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <formControl isInvalid={errors.name}>
        <formLabel htmlFor='name'>First name</formLabel><br></br>
        <input
          id='name'
          placeholder='name'
          {...register('name', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}/> <br></br>
        </formControl>
          <formErrorMessage>
            
          {errors.name && errors.name.message}
        </formErrorMessage>
        <formControl isInvalid={errors.last}>

        <formLabel htmlFor="last">Lastname</formLabel><br></br>
        <input id='last'placeholder='last'{...register('last',{
          required: 'This is rquird'
        })}/><br></br>
        </formControl>
        <formErrorMessage>
          {errors.last && errors.last.message}
        </formErrorMessage>
  
        
      
      <Button  variant='danger'   mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
    </>
  )
}
export default Hookform










































































































// import React, { useState } from 'react'
// import {useForm} from 'react-hook-form'

// const Hookform = () => {
// const [book,setbook] = useState(
//     []
// )


//     const {register,handleSubmit} = useForm()

//     const onSubmit=(data) =>{
//         console.log('9999',data)
//         var obj = book
//         obj.push(book)
//        setbook({
//            ...book,
//            obj

//            })
      

//     }
//     console.log("book",book)
    

//   return (
//     <>
//     <form  onSubmit={handleSubmit(onSubmit)}   >

// <label>Name</label><br></br>
// <input type="text" name='name'{...register('name')}/><br></br>
// <label>Last</label><br></br>
// <input type="text" name='last'{...register('last')}/><br></br>
// <label>Phone</label><br></br>
// <input type="text" name='phone'{...register('phone')}/><br></br>
// <label>Email</label><br></br>
// <input type="text" name='email'{...register('email')}/><br></br>
// <button type='submit'>submit</button>
//     </form>
//     </>
//   )
// }

// export default Hookform