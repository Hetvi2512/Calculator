import React from 'react';
import './keyboard.styles.css'

const Keyboard = ({addInput, calculate}) => {
return (
<div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", flex: 1 }}>
       <div className="centerme">
            <div className="roundbutton" onClick={()=>{addInput("7")}}>7</div>
        </div>
        <div className="centerme">
            <div className="roundbutton" onClick={()=>{addInput("8")}}>8</div>
        </div>
        <div className="centerme">
            <div className="roundbutton" onClick={()=>{addInput("9")}}>9</div>
        </div> 
        <div className="centerme">
            <div className="roundbutton" onClick={()=>{addInput("/")}}>&#xf7;</div>
        </div>   
    </div>
    <div style={{ display: "flex", flex: 1 }}>
       <div className="centerme">
            <div className="roundbutton" onClick={()=>{addInput("4")}}>4</div>
        </div>
        <div className="centerme">
            <div className="roundbutton" onClick={()=>{addInput("5")}}>5</div>
        </div>
        <div className="centerme">
            <div className="roundbutton" onClick={()=>{addInput("6")}}>6</div>
        </div>
        <div className="centerme">
            <div className="roundbutton" onClick={()=>{addInput("*")}}>&#xd7;</div>
        </div> 
    </div>   

    <div style={{ display: "flex", flex: 1 }}>
       <div className="centerme">
            <div className="roundbutton" onClick={()=>{addInput("1")}}>1</div>
        </div>
        <div className="centerme">
            <div className="roundbutton" onClick={()=>{addInput("2")}}>2</div>
        </div>
        <div className="centerme">
            <div className="roundbutton" onClick={()=>{addInput("3")}}>3</div>
        </div>
       
        <div className="centerme">
            <div className="roundbutton" onClick={()=>{addInput("-")}}>-</div>
        </div>
    </div>   
 <div style={{ display: "flex", flex: 1 }}>
    <div className="centerme">
            <div className="roundbutton" onClick={()=>{addInput("0")}}>0</div>
        </div>
        <div className="centerme">
            <div className="roundbutton" onClick={()=>{addInput(".")}}>.</div>
        </div>
        <div className="centerme">
            <div className="roundbutton" onClick={()=>{calculate()}}>=</div>
        </div>
        <div className="centerme">
            <div className="roundbutton" onClick={()=>{addInput("+")}}>+</div>
        </div>
      
    </div>   
</div>
)
}

export default Keyboard;