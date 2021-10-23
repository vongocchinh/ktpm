import * as types from '../redux/actions';
import reducer from './../redux/Store';
import expect from 'expect';
import Reducer from './../redux/reducer';

describe('Product reducer',()=>{
    test("add new Product - action type - add product",()=>{
        const initialState=[];
        const expectedState=[{id:2,name:'cong viec 2',desc:'cong viec lan 1'}];
        const testAction={
            type:types.addProduct,
            payload:{id:2,name:'cong viec 2',desc:'cong viec lan 1'}
        }

        const actualState=reducer.Reducer(initialState,testAction);
        expect(actualState).toEqual(expectedState);
    })

})