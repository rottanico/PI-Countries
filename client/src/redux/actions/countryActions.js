import axios from 'axios'


   export const GET_BY_NAME = 'GET_BY_NAME';
   export const GET_ALL='GET_ALL';
   export const GET_BY_ID='GET_BY_ID';
   export const SAVE_ORDER='SAVE_ORDER';
   export const GET_ALL_BY_CONTINENT='GET_ALL_BY_CONTINENT';
  export const SAVE_CURRENT='SAVE_CURRENT';
  export const SAVE_SEARCH='SAVE_SEARCH';
  export const SAVE_CONTINENT='SAVE_CONTINENT';
  
  export  function saveCurrent(current){
      return{type:SAVE_CURRENT,payload:current}
  }
  export  function saveOrder(order){
    return{type:SAVE_ORDER,payload:order}
}
export  function saveContinent(continent){
  return{type:SAVE_CONTINENT,payload:continent}
}
export  function saveSearch(search){
  return{type:SAVE_SEARCH,payload:search}
}

 export  function  getCountries(offset,order){

       if(offset===null){ offset=0}
       if(order===null){ order='asc'}
      return async (dispatch)=>{  
        const  country = await axios.get( `http://localhost:3001/country/All/Page?offset=${offset}&order=${order}`)
                          .catch(err=> console.log(err))
            dispatch({type:GET_ALL, payload:country.data })
      }
    }
    export function getCountriesBy(continent,offset,order){
     if(offset ===null){ offset=0}//para que no rompa el servidor
     if(continent===null){continent=''}
     if(order ===null)order='asc'//para que no rompa el servidor
    
     return async(dispatch)=>{
        const country = await axios.get( `http://localhost:3001/country/All?offset=${offset}&order=${order}&continent=${continent}`)
              .catch(err=> console.log(err))
              if(country===undefined) {return dispatch({type:'Undefined Country'})} 
           dispatch({type:GET_ALL_BY_CONTINENT, payload:country.data })
  }}
  export  function searchCountries(name,order,offset){
    if(offset===null){ offset=0}
    if(order===null){ order='asc'}
           return async (dispatch)=>{
        
            const country = await axios.get( `http://localhost:3001/country?name=${name}&offset=${offset}&order=${order}`)
            .catch(err=> console.log(err))
          
          if(country===undefined) {return dispatch({type:'Undefined Country'})} 
            dispatch({type:GET_BY_NAME, payload:country.data })
            
    }
  }
  export function searchByIdCountries(id){
    return async(dispatch)=>{
      const country = await axios.get( `http://localhost:3001/country/${id}`)
            .catch(err=> console.log(err))
          dispatch({type:GET_BY_ID, payload:country.data })
    }}
    
