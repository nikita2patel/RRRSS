//import { GET_POST } from "../Type"
  import {Get_Data} from '../type'
  import { Delt_Data } from '../type'
  import { Clear_Data } from '../type'
  import {Edit_Data} from '../type'
  //import { Save_Data } from '../type'



export const input= (item) =>{
  console.log("nnn",item)
    return{
        type: Get_Data,
        item
    }
}


export const delt = (item) =>{
  return{
    type: Delt_Data,
    item
  }
}
export const clear = (item) =>{
  return{
    type: Clear_Data,
    item
  }
}

export const edit = (id) =>{
  return{
    type: Edit_Data,
    id
  }
}



// export const save = (item) =>{
//   return{
//     type: Save_Data,
//     item
//   }
// }