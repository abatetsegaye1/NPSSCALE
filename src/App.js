import {useState,React} from 'react';
import NumberScale from './components/NumberScale'
import { ScaleProvider } from './components/ScaleContext';
import Sidebar from './components/setting/sidebar';
import './components/templatestyle.scss'
const App = () => {
    const [isCustomize, setIsCustomized] = useState(false);
    const [scaleContent, setScaleContent] = useState(null);
    return (
        <ScaleProvider>
        <div className='scale_container'>
             
            {!isCustomize && (
            <>
            <NumberScale row={true} btnbg={'yellow'} btncolr={'red'} customize={isCustomize} setCustomize={setIsCustomized} setScale={setScaleContent} key={1}/> 
            <NumberScale row={true} btnbg={'orange'} btncolr={'white'} customize={isCustomize} setCustomize={setIsCustomized} setScale={setScaleContent} key={2}/>
            <NumberScale row={false} btnbg={'green'} btncolr={'white'} customize={isCustomize} setCustomize={setIsCustomized} setScale={setScaleContent} key={3}/>  
            
             <NumberScale row={false} btnbg={'blue'} btncolr={'white'}  customize={isCustomize} setCustomize={setIsCustomized} setScale={setScaleContent} key={4}/>
        
            <NumberScale row={true} emoji={true} customize={isCustomize} setCustomize={setIsCustomized} setScale={setScaleContent} key={5}/>
            <NumberScale emoji={true}  customize={isCustomize} setCustomize={setIsCustomized} setScale={setScaleContent} key={6}/> 
         </>
         )}
            
            {isCustomize && <Sidebar {...scaleContent}/>  }
     </div>
     </ScaleProvider>
     );
}

export default App;