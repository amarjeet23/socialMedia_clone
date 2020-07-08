import React,{createContext,useReducer,useState} from 'react';

const initialState=[]

const reducer =(state,action)=>{
    switch(action.type){
        case "ADD_USER":
            return [...state,{name:action.name,id:action.id}]
        case "DELETE":
            return state.filter(res =>res.id !==action.id)
        
        default:
            return state;
        
        }


 }
export const DataContext = createContext();
 const DataProvider =(props) =>{
     const [data,dispatch] = useReducer(reducer,initialState)
     const [demo,setDemo] = useState({name:'Amarjeet'})

     return(
         
         <DataContext.Provider value={{value:[data,dispatch],value2:[demo,setDemo]}}>
             {props.children}
         </DataContext.Provider>
     )
 }
 export default DataProvider;
