import React,{useState} from 'react';


export default function Textbox(props) {

    // text state variable
    const [text,setText]=useState("");

    // arrow function to handle uppercase button click
    const upper = ()=> {
      setText(text.toUpperCase());
      if(text!=="")
      props.alertFun('Converted to UPPERCASE');
    }

    const lower = ()=> {
      setText(text.toLowerCase());
      if(text!=="")
      props.alertFun('Converted to lowercase');
    }


    const capitalise = ()=> {
      let res="";
      let ch=0;
      let arr=['. ',', ','! ','?'];
      for (let i = 0; i < text.length; i++) {
        const x=text.charAt(i);
        if(ch===0 && x!==" "){
          res+=x.toUpperCase();
          ch=1;
        }else{
          res+=x;
          if(arr.includes(x+text.charAt(i+1))){
            ch=0;
            i++;
            res+=text.charAt(i);
          }
        }
      }
      setText(res);
      if(text!=="")
      props.alertFun('Text Capitalised');
    }

    // arrow function to handle entry of data
    const entry= (pra)=>{
        setText(pra.target.value);
    }
    
    const clear= ()=>{
      setText("");
      if(text!=="")
      props.alertFun('Text cleared');
    }
    
    const Copy= ()=>{
      // let x=document.getElementById("text").value;
      navigator.clipboard.writeText(text);
      if(text!=="")
      props.alertFun('text copied to clipboard');
    }

    // counting word length using ternary operator
    let x=text.split(" ").length;
    let wordlen = (text.split(" ")[x-1]==='') ? (x - 1) : (x);

    //props.theme changing conditions
    let color={};
    let wrStyle={};
    if(props.theme==='light'){
      color=({"backgroundColor":"blue",'color':'white'});
    }else if(props.theme==='dark'){
      color=({"backgroundColor":"#cc00ff"});
      wrStyle={backgroundColor: "#c7bdbd",
        color: "black"};
    }else if(props.theme==='reddish'){
      color=({"backgroundColor":"#fff70b"});
      wrStyle={backgroundColor: "#f0f9f1d9"}
    }else{
      color=({"backgroundColor":"#fc0101",'color':'white'});
      wrStyle={
        backgroundColor: "black",
        color:"green",
        fontStyle: 'oblique'}
      }

  return (
    <div className='container-fluid'>
    
        <h1>Enter your text here for analysis</h1><br/>
        <textarea className="form-control" style={wrStyle} value={text} onChange={entry} id="text" rows="5" placeholder='enter your text here'></textarea>
        <div className='my-2'>
          <button className='btn mx-1' style={color} onClick={upper}>UPPERCASE</button>
          <button className="btn mx-1" style={color} onClick={lower}>lowercase</button>
          <button className="btn mx-1" style={color} onClick={capitalise}>Capitalise</button>
          <button className="btn mx-1" style={color} onClick={Copy}>Copy to clipboard</button>
          <button className="btn mx-1" style={color} onClick={clear}>clear</button>
        </div>
        <div className="container">
          <h3>Text summary</h3>
          <div>Text contains {wordlen} words and {text.length} characters</div>
        </div>
    </div>
  )
}
