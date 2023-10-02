import { SETDATA, API_CALLED } from './counter.types';

const INITIAL_STATE = {

   isLoading: false,
    data: false,
    visualization: "table",
    metamask_connected: false,
    wallet_address: "",
    have_metamask: false,
    predictedVis:""
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case SETDATA:

           return {

             ...state, 
             data: action.data,

           };
         
      case API_CALLED :  
         return {
             ...state,
             isLoading: action.data
         };
      
     
    
      default: return state;

    }

};

export default reducer;
