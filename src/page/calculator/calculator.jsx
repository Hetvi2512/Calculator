import React,{useState} from 'react';
import './calculator.styles.css'
import Screen from '../../component/screen/screen-component';
import Keyboard from '../../component/keyboard/keyboard-component';
const Calculator = () => {
    const [input,setInput] = useState('');

  //getting input
    const addInput =(char)=>{
        var tmpInput ="";
    if(input.length===0)
   {
     if(isNaN(Number(char)))
    {
        tmpInput=[...input];
        tmpInput =0+tmpInput+char;
        setInput(tmpInput);
        return;
    }else
    {
        tmpInput=[...input];
        tmpInput = tmpInput+char;
        setInput(tmpInput);
        return;
    }
}
         tmpInput = input;
        tmpInput =  tmpInput+char ;
        setInput(tmpInput);
        }
    //clearing the Input
    const clearInput =()=>{
        setInput("");
    }

    // calculating func

    const calculate =()=>
    {
        setInput(cal(input))
    }
    function cal(fn) {
        return new Function('return ' + fn)();
      }
//for backspace
const backspace =()=>{
    setInput(input.slice(0,-1));
}
    
return (
<div className="calc">
    <div className='calcHeader'>My Calculator</div>
<Screen input={input}/>
<Keyboard addInput={addInput} calculate={calculate}/>
<div style={{ display: "flex", flex: 1 }}>
<div className='clearButton' onClick={clearInput}>CLEAR</div>
<div className="backButton" onClick={backspace}>&#x232b;</div>
</div>
</div>
);
};

export default Calculator;
