import {call, put,takeEvery} from 'redux-saga/effects';

import { input,delt,clear ,edit} from '../Action/Action';
import {Delt_Data_s, Get_Data,Get_Data_s,Delt_Data, Clear_Data_s,Clear_Data, Save_Data_s, Save_Data, Edit_Data_s,Edit_Data} from '../type'


function* GetData(action){
	
	const item=yield call(input,action.item)
	
	yield put({
		type: Get_Data_s,
		payload: item
	})
	
	console.log('333',item)
}


function* yyy(action){
	const mob = yield call(delt,action.item)

	yield put({
		type: Delt_Data_s,
		payload: mob
	})
}


function* nnn (action){
	const data = yield call(clear,action.item )
	yield put({
		type: Clear_Data_s,
		payload: data

	})
}

function* ccc (action){
	const ddd = yield call(clear,action.item)
	yield put({
		type: Save_Data_s,
		payload: ddd
	})
}
function* fff (action){
	const eee = yield call(edit,action.id)
	yield put ({
		type: Edit_Data_s,
		payload:eee
	})
}





export default function* Selectall(){
	yield takeEvery(Get_Data,GetData)
	yield takeEvery(Delt_Data,yyy)
	yield takeEvery(Clear_Data,nnn)
	yield takeEvery(Save_Data,ccc)
	yield takeEvery(Edit_Data,fff)
}


	
// }
