import {  GET_ALL, GET_BY_ID, GET_BY_NAME, SAVE_ORDER,GET_ALL_BY_CONTINENT,SAVE_CURRENT,SAVE_SEARCH,SAVE_CONTINENT} from "../actions/countryActions";

const defaultValue = {
  country: [],
countryDetail:[],
  current:0,
  order:'asc',
  search:'',
  continent:''
  
};
const reducer = function (state = defaultValue, action) {
  switch (action.type) {
   case GET_ALL:{
     return{
      ...state,
      country:action.payload.rows,
      count: action.payload.count
     }
   }
   case GET_ALL_BY_CONTINENT:{
    return{
     ...state,
     country:action.payload.rows,
     count: action.payload.count
    }
  }
   case GET_BY_NAME:{
     return{
       ...state,
       country:action.payload.rows,
        count: action.payload.count
     }
   }
   case GET_BY_ID:{
     return{
       ...state,
       countryDetail:action.payload
     }
   }
   
   case SAVE_CURRENT:{
    return{
      ...state,
      current:action.payload
   }}
   case SAVE_ORDER:{
    return{
      ...state,
      order:action.payload
   }
   }
   case SAVE_SEARCH:{
    return{
      ...state,
      search:action.payload
   }}
   case SAVE_CONTINENT:{
    return{
      ...state,
     continent:action.payload
   }}
    default:{
    return state}
  
}
};
export default reducer;
