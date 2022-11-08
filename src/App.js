
import './App.css';
import React,{ useState } from 'react';

function App() {
  
  const [characterCount, setCharacterCount] = useState(0);
 
  
  return (
    <div className="App">
      <img src="https://st-1.akipress.org/st_all/bilim/9/1519540999.2.jpg" id="img-logo" style={{width: "400px",}}  alt='alatoo logo'/>
      <h1>Enter input text! And get your text as barcode!!</h1>
      <h2 id='output-text'>{characterCount}</h2>
      <textarea onChange={(e) => setCharacterCount(e.target.value)} placeholder='Enter text'></textarea>
      
      
    </div>
  );
}

export default App;
