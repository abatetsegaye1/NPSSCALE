import React, { createContext, useReducer } from 'react';

// Initial state for the counter
const initialState = { scaleOrientaion: '', 
color: {btnColor:'',btnBgcolor:'', fntColor:'', sclColor:'',confgrFontColor:''},
scale:{format:'',width:'',height:'',lblLeft:'unlikely',lblCenter:'likely',lblRight:'most likely',sclRangefromA:'',sclRangetoB:'',title:'Help us improve!',question:'How would you rate it?'}
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SCALE_ORIENTATION':
      return {
        ...state,
        scaleOrientaion: action.payload,
      };
    case 'SET_BTN_COLOR':
      return {
        ...state,
        color: {
          ...state.color,
          btnColor: action.payload,
        },
      };
      case 'SET_CONFGR_FONT_COLOR':
      return {
        ...state,
        color: {
          ...state.color,
          confgrFontColor: action.payload,
        },
      };
    case 'SET_BTN_BG_COLOR':
      return {
        ...state,
        color: {
          ...state.color,
          btnBgcolor: action.payload,
        },
      };
    case 'SET_FONT_COLOR':
      return {
        ...state,
        color: {
          ...state.color,
          fntColor: action.payload,
        },
      };
    case 'SET_SCALE_COLOR':
      return {
        ...state,
        color: {
          ...state.color,
          sclColor: action.payload,
        },
      };
    case 'SET_SCALE_FORMAT':
      return {
        ...state,
        scale: {
          ...state.scale,
          format: action.payload,
        },
      };
    case 'SET_SCALE_DIMENSIONS':
      return {
        ...state,
        scale: {
          ...state.scale,
          width: action.payload.width,
          height: action.payload.height,
        },
      };
    case 'SET_LABELS':
      return {
        ...state,
        scale: {
          ...state.scale,
          lblLeft: action.payload.lblLeft,
          lblCenter: action.payload.lblCenter,
          lblRight: action.payload.lblRight,
        },
      };

      case 'SET_CONFIGURE_TITLE_QUESTION':
        return {
          ...state,
          scale: {
            ...state.scale,
            title: action.payload.title,
            question: action.payload.question,
          },
        };
    case 'SET_SCALE_RANGE':
      return {
        ...state,
        scale: {
          ...state.scale,
          sclRangefromA: action.payload.sclRangefromA,
          sclRangetoB: action.payload.sclRangetoB,
        },
      };
    default:
      return state;
  }
};

export default reducer;


// Create the context
const ScaleContext = createContext();

// Provider component
const ScaleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ScaleContext.Provider value={{ state, dispatch }}>
      {children}
    </ScaleContext.Provider>
  );
};

export { ScaleContext, ScaleProvider };
