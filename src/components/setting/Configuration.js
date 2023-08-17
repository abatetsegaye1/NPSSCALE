import {useContext,React} from 'react'
import { ScaleContext } from '../ScaleContext';

export default function Configuration() {

  const { state, dispatch } = useContext(ScaleContext);

  const handleFontColorChange = (e) => {
    const newColor = e.target.value;
    dispatch({
      type: 'SET_CONFGR_FONT_COLOR',
      payload: newColor,
    });
  };

  const handleLabelChange = (position, value) => {
    dispatch({
      type: 'SET_CONFIGURE_TITLE_QUESTION',
      payload: {
        title: position === 'title' ? value : state.scale.title,
        question: position === 'question' ? value : state.scale.question,
       
      },
    });
  };
  return (
    <div className='configure_element'>
        
        <div className='configure_element--one'>
        <div className='configure--title'>
                <label for="label--title">Scale Title</label>
                <input type="text" id="configure_label--title" name="label--title"
                
                //value={state.scale.lblLeft}
                //onChange={(e) => handleLabelChange('left', e.target.value)}
                
                value={state.scale.title}
                onChange={(e) => handleLabelChange('title', e.target.value)}
                
                />
           </div>
            <div className='configure--question'>
                <label for="label_question">Question</label>
                <input type="text" id="scale_question" name="scale_question"
               // value={state.scale.lblCenter}
               // onChange={(e) => handleLabelChange('center', e.target.value)}
               value={state.scale.question}
               onChange={(e) => handleLabelChange('question', e.target.value)}
               
                
                />
            </div>
            </div>
            <div className='configure_element--two'>
            <div className='configuration_font--color'>
                <label className='font_label--color'>Font Color</label>
                <input type="color" id="font--color" name="font--color"
                
                //value={state.scale.lblLeft}
                ///onChange={(e) => handleLabelChange('left', e.target.value)}
                 
                onChange={handleFontColorChange}
                />
           </div>
            <div className='configuration_font--style'>
                <label for="configure_font--select" className='font_select_label'>Font Style</label>
                <select id="configure_font--select" name="configure_font--select" className='configure_font--select'
               
                >
                <option value="Times New Roman">Times New Roman</option>
                <option value="San Serif">San Serif</option>
            </select>
            </div>
            </div>
          </div>
  )
}




