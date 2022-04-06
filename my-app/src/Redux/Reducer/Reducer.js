import { Get_Data_s, Delt_Data_s, Clear_Data_s, Edit_Data_s } from '../type';

const intialstate = {
    user: []
}
const reducer = function (state = intialstate, action) {


    switch (action.type) {
        case Get_Data_s:
            var mouse = state.user
            mouse.push(action.payload.item)

            return {
                ...state,
                user: mouse,

            };
        case Delt_Data_s:
            var ppp = state.user
            ppp.splice(action.payload, 1)
            return {
                ...state,
                user: ppp
            }
            case Clear_Data_s:
                var nnn = state.user
                nnn.splice(action.payload)
                
                return{
                    ...state,
                    user: nnn
                }
               case Edit_Data_s:
                   var ppp = state.user
                   console.log('4444',action.payload)
                  var object = ppp[action.payload]
                  return{
                      ...state,
                      isedit:object
                  }





        default: return state
    }

}
export default reducer

