import reducer from './index';

describe('Layout Reducer', () => {

  it('Should be return initial state', () => {
    expect(reducer(undefined,{})).toEqual({showMessage:false});
  });

  it('Should be return state with props showMessage == true ', () => {
    expect(reducer(undefined,{type:'SHOW_MESSAGE'})).toEqual({showMessage : true});
  })

  it('Should be return state with props showMessage == false ', () => {
    expect(reducer({showMessage:true},{type:'HIDE_MESSAGE'})).toEqual({showMessage : false});
  })

})