import {React,useContext,useState} from 'react'

import './sidebar.scss'
import Scale from './Scale'
import { ScaleContext } from '../ScaleContext'
import Configuration from './Configuration';
export default function Sidebar({row,emoji,btnbg,btncolr}) {
  //console.log(scaleContent);
  const [setting,setSetting] = useState(true);
  const { state, dispatch } = useContext(ScaleContext);
 

  const handleScaleColorChange = (e) => {
    const newColor = e.target.value;
    dispatch({
      type: 'SET_SCALE_COLOR',
      payload: newColor,
    });
  };

  const handleButtonColorChange = (e) => {
    const newColor = e.target.value;
    dispatch({
      type: 'SET_BTN_COLOR',
      payload: newColor,
    });
  };

  // const handleButtonBgColorChange = (e) => {
  //   const newColor = e.target.value;
  //   dispatch({
  //     type: 'SET_BTN_BG_COLOR',
  //     payload: newColor,
  //   });
  // };

  const handleFontColorChange = (e) => {
    const newColor = e.target.value;
    dispatch({
      type: 'SET_FONT_COLOR',
      payload: newColor,
    });
  };



  const handleLabelChange = (position, value) => {
    dispatch({
      type: 'SET_LABELS',
      payload: {
        lblLeft: position === 'left' ? value : state.scale.lblLeft,
        lblCenter: position === 'center' ? value : state.scale.lblCenter,
        lblRight: position === 'right' ? value : state.scale.lblRight,
      },
    });
  };

  const handleScaleFormatChange = (format) => {
    dispatch({
      type: 'SET_SCALE_FORMAT',
      payload: format,
    });
  };


  const handleScaleDimensionsChange = (property, value) => {
    dispatch({
      type: 'SET_SCALE_DIMENSIONS',
      payload: {
        width: property === 'width' ? value : state.scale.width,
        height: property === 'height' ? value : state.scale.height,
      },
    });
  };


 

  return (
    <>
    <div className='sidebar'>
    <div className='setting_configure'>
    <button className='setting_button' onClick={()=>setSetting(true)} style={{borderBottom: `${setting ? '3px solid #6E62E5':''}`}}>Setting</button>
    <button className='configure_button' onClick={()=>setSetting(false)} style={{borderBottom: `${!setting ? '3px solid #6E62E5':''}`}}>Configurations</button>
    </div>
     <div className='sidebar_setting'>
        {/* <div className='sidebar_wrapper'> */}
      
        {setting ? (
            <>
         <div className='sidebar_element--one'>
          <label for="scale_orient" className='orient_label'>Scale Orientation</label>
            <select id="scale_orient" name="orientation" className='orient_select'
            
  value={state.scaleOrientaion==='horizontal' ? 'Horizontal' : 'Vertical'}
  onChange={(e) => {
    const orientation = e.target.value;
    dispatch({
      type: 'SET_SCALE_ORIENTATION',
      payload: orientation,
    });
  }}
            
            >
                <option value="">options</option>
                <option value="vertical">Vertical</option>
                <option value="horizontal">Horizontal</option>
            </select>
          </div>

          <div className='sidebar_element_two'>
            <div className='scale_color'>
                <label for="scale_color--input">Scale Color</label>
                <input type="color" id="scale_color--input" name="scale_color--input"
                
                onChange={handleScaleColorChange}
                />
            </div>
            <div className='button_color'>
                <label for="button_color--input">Button Color</label>
                <input type="color" id="button_color--input" name="button_color--input"
                onChange={handleButtonColorChange}
                />
            </div>
          </div>
          
          <div className='sidebar_element_three'>
            <div className='font_color'>
                <label for="font_color--input">Font Color</label>
                <input type="color" id="font_color--input" name="font_color--input"
      
                onChange={handleFontColorChange}
                />
            </div>
            <div className='font_style'>
            <label for="font_style--select">Font Style</label>
            <select id="font_style--select" name="font_style--select">
                <option value="Times New Roman">Times New Roman</option>
                <option value="San Serif">San Serif</option>
            </select>
            </div>
          </div>


          <div className='sidebar_element_four'>
          <label>Scale Format</label>
            <div className='Scale_format'>
               <div>
               <input type="radio" id="emoji" name="options" value="emoji"
               
               checked={state.scale.format === 'emoji'}
               onChange={() => handleScaleFormatChange('emoji')}
               />
                <label for="emoji">Emoji</label>
                </div>
              <div>
                <input type="radio" id="number" name="options" value="number"
                
                checked={state.scale.format === 'number'}
                onChange={() => handleScaleFormatChange('number')}
                />
                <label for="number">Number</label>
                </div>
               
            </div>
          </div>


          <div className='sidebar_element_five'>
            <div className='scale_width'>
                <label for="scale_width--input">Scale Width</label>
                <input type="text" id="scale_width--input" name="scale_width--input"
                
                value={state.scale.width}
                onChange={(e) => handleScaleDimensionsChange('width', e.target.value)}
                
                />
            </div>
            <div className='scale_height'>
                <label for="scale_height--input">Scale height</label>
                <input type="text" id="scale_height--input" name="scale_height--input"
                 value={state.scale.height}
                 onChange={(e) => handleScaleDimensionsChange('height', e.target.value)}
                
                />
            </div>
          </div>
       
       
        <div className='sidebar_element_six'>
        <label>Scale Label</label>
        <div className='label_position'>
            <div className='scale_label--left'>
                <label for="scale_label--left">Left</label>
                <input type="text" id="scale_label--left" name="left"
                
                value={state.scale.lblLeft}
                onChange={(e) => handleLabelChange('left', e.target.value)}
                
                />
            </div>
            <div className='scale_label--center'>
                <label for="scale_label--center">Center</label>
                <input type="text" id="scale_label--center" name="center"
                value={state.scale.lblCenter}
                onChange={(e) => handleLabelChange('center', e.target.value)}
                />
            </div>
            </div>
            <div className='scale_label--right'>
                <label for="scale_label--right">Right</label>
                <input type="text" id="scale_label--right" name="right"
                value={state.scale.lblRight}
                onChange={(e) => handleLabelChange('right', e.target.value)}
                />
            </div>
          </div>
        
  

        <div className='sidebar_element_eight'>
           <div className='time'>
            <label>Time</label>
            <small className='toggle'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="24" viewBox="0 0 36 24" fill="none">
  <rect x="0.509277" y="2.9436" width="25.903" height="12.9515" rx="6.47574" fill="#86B3AB"/>
  <g filter="url(#filter0_d_240_256)">
    <circle cx="24.0574" cy="9.41925" r="9.41925" fill="#29E2C1"/>
  </g>
  <defs>
    <filter id="filter0_d_240_256" x="12.2834" y="0" width="23.5483" height="23.5481" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="2.35481"/>
      <feGaussianBlur stdDeviation="1.17741"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_240_256"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_240_256" result="shape"/>
    </filter>
  </defs>
</svg></small>
           </div>
           <input type='text' className='time--input'/>
           <div className='scale_instance'>
            <label>show total score for all instance</label>
            <button className='toggle_b'><svg xmlns="http://www.w3.org/2000/svg" width="37" height="28" viewBox="0 0 37 28" fill="none">
  <rect x="10.3965" y="3.8103" width="25.903" height="12.9515" rx="6.47574" fill="#B9B9B9"/>
  <g filter="url(#filter0_d_240_260)">
    <circle cx="13.9285" cy="10.2857" r="9.41925" fill="#DBDBDB"/>
  </g>
  <defs>
    <filter id="filter0_d_240_260" x="0.813462" y="0.866455" width="26.2303" height="26.2303" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="3.69582"/>
      <feGaussianBlur stdDeviation="1.84791"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.454167 0 0 0 0 0.454167 0 0 0 0 0.454167 0 0 0 0.46 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_240_260"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_240_260" result="shape"/>
    </filter>
  </defs>
</svg></button>
           </div>
        </div>

            
            </>

        ):(<Configuration/>)}
          
       
       <button className='use_scale'>Use Scale</button>
        </div>
        
     </div>
     <Scale row={row} emoji={emoji} btnbg={btnbg} btncolr={btncolr}/>
     </>





















    // </div>
  )
}
