import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";


const AppContext=createContext();
const API="https://thapareactapi.up.railway.app/";
console.log(API);


const initialValue={
    name:"",
    image:""
}

const AppProvider=({children})=>{
    const[state,dispatch]=useReducer(reducer,initialValue);

    const updateHome=()=>{
        return dispatch({
            type:"Home-update",
            Load:{
                name:"Aftab Khan",
                image:"./images/hero.svg"
            }
        })
    }
    
    const updateAbout=()=>{
        return dispatch({
            type:"About-update",
            Load:{
                name:"Aftab khan Front-End Dev",
                image:"./images/about1.svg"
            }
        })
    }

    const getServices=()=>{

    }

    useEffect(()=>{
        getServices(API);
    },[])

    return <AppContext.Provider value={{...state,updateHome,updateAbout}}>{children}</AppContext.Provider>
};

    const useGlobalContext=()=>{
        return useContext(AppContext);
    };

export {AppContext,AppProvider,useGlobalContext};