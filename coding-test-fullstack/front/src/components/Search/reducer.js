import {
    SEARCH_CRITERIA_CHANGED
  } from './types';
  

  export default (state = {}, action) => {
    switch (action.type) {
      case SEARCH_CRITERIA_CHANGED:
          {
            let s = {};
            if (action.payload.text) { 
                s.text = action.payload.text; 
            } else s.text = state.text;
            if (action.payload.id) {
                s.helpdeskid =  action.payload.id; 
            } else s.helpdeskid = state.helpdeskid;
            if (action.payload.detailed){
                s.detailed = action.payload.detailed;
            } else s.detailed = state.detailed;
            console.log(action.payload);
            return s;
          }
      default:
        return state;
    }
  };
  