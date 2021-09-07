import React ,{useState} from 'react'


export default function Textform(props) {
     const handleupercaseclick = () => {
            //   console.log('button is clicked ');
              let newtext =  text.toUpperCase();
              settext(newtext);
              props.showalert("Converted to Uppercase","success")
     }
     const handllowercaseclick = () => {
            //   console.log('button is clicked ');
              let newtext =  text.toLowerCase ();
              settext(newtext);
          props.showalert("Converted to Lowercase","success")
     }
     const handlecleartext =()=>{
         let newtext = "";
         settext(newtext);
          props.showalert("The chat has been cleared successfully","success")
     }
     const titlecase = () => {
            //  let text= /\w\S*/g;
                let newtext =text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
               settext(newtext)
          props.showalert("Converted to Title case ","success")
     }

     const handleonchange=(event)=>{
    //    console.log("on change");
       settext(event.target.value)
     }
    const [text,settext]= useState('');
    // text= "gohoh"// wrong way to change the heading of the text
    // settext("new text ")// correct way to change the text
    return (
        <>
        <div div className = "container"
        style = {
            {
                color: props.mode === 'dark' ? 'white' : '#042743'
            }
        } >
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color: props.mode === 'dark' ? 'white' : '#042743'}} value={text} id="mybox" rows="8"></textarea>
        </div>
         <button  className = "btn btn-primary mx-2"onClick = {handleupercaseclick} > Convert to upper case </button>
         <button  className = "btn btn-primary mx-2"
         onClick = { handllowercaseclick} > Convert to lower case </button>
        <button button className = "btn btn-primary mx-2"onClick = {handlecleartext} > Cear the text </button>
        <button button className = "btn btn-primary mx-2"onClick = {titlecase} >Title case </button>
        </div>
        <div div className = "container my-3"
        style = {
            {
               color: props.mode === 'dark' ? 'white' : '#042743'
            }
        }>
            <h2>Your text summary </h2>
            <p>{text.split("").length} words ,{text.length} character</p>
            <p> {0.008 *text.split("").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?'text':'Enter something in the box above to preview it '}</p>
        </div>
        </>
    )
}
