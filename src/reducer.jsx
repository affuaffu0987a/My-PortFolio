
const reducer=(state,action)=>{
    if(action.type==="Home-update"){
        return{
            ...state,
            name: action.Load.name,
            image: action.Load.image,
        }
    };
    if(action.type==="About-update"){
        return{
            ...state,
            name: action.Load.name,
            image: action.Load.image,
        }
    }
    return state;
}

export default reducer;