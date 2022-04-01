const initialState = {
    showMessage:false
};


export default (state = initialState,action) => {
    switch(action.type){
        case Types.SHOW_MESSAGE:
            return { ...state, showMessage:true}
        case Types.HIDE_MESSAGE:
            return {...state, showMessage:false}
      default:
          return state;
    }
}

export const Types = {SHOW_MESSAGE:'SHOW_MESSAGE',HIDE_MESSAGE:'HIDE_MESSAGE'};

export const Creators = {
    showMessage : () => ({type: Types.SHOW_MESSAGE}),
    hideMessage : () => ({type: Types.HIDE_MESSAGE})
}

