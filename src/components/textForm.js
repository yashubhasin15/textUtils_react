import React, {useState} from 'react'

export default function TextForm(props) {

    let style = props.mode==='light' ? {
        color:'black',
        // backgroundColor:'white'
    }:{
        color:'white',
        // backgroundColor:'#111111'
    };

    const [searchInput, newInputValue] = useState("")

    function Uppercase(){
        newInputValue(searchInput.toUpperCase())
    }

    function Lowercase(){
        newInputValue(searchInput.toLowerCase())
    }

    function copyText(){
        //this wont work on mobile devices if site is not https(secured)
        // navigator.clipboard.writeText(searchInput)

        //this will work on all devices
        var copyText = document.getElementById("myBox")
        copyText.select()
        document.execCommand("copy") //this command is not async thats why this method is depriciated(will still work but not recommended)
        document.getSelection().removeAllRanges()

        props.copyAlert()
    }

    function removeSpaces(){
        let newText=searchInput.split(/[ ]+/)
        newInputValue(newText.join(" "))
    }

    return (
        <div style={style}>
            <div className="my-3">
            <label htmlFor="byBox" className="form-label"><h1>{props.heading}</h1></label>
            <textarea className="form-control" id="myBox" rows="10" style={{border:"3px solid black",fontSize:"1.2rem"}} onChange={(event)=>{newInputValue(event.target.value)}} value={searchInput}></textarea>
            </div>
            <button type="button" disabled={searchInput.length===0} className="btn btn-primary mx-1 my-1" onClick={()=>{Uppercase()}}>Uppercase</button>
            <button type="button" disabled={searchInput.length===0} className="btn btn-secondary mx-1 my-1" onClick={Lowercase}>Lowercase</button>
            <button type="button" disabled={searchInput.length===0} className="btn btn-success mx-1 my-1" onClick={removeSpaces}>Remove Extra Spaces</button>
            <button type="button" disabled={searchInput.length===0} className="btn btn-danger mx-1 my-1" onClick={copyText}>Copy Text</button>
            <button type="button" disabled={searchInput.length===0} className="btn btn-warning mx-1 my-1" onClick={()=>{newInputValue("")}}>Clear Text</button>
            {/* <button type="button" className="btn btn-info mx-1">Info</button> */}

            <div className="my-3">
                <h2>Text Description</h2>
                <p>{searchInput.split(/\s+/).filter((a)=>{return a.length!==0}).length} Words and {searchInput.length} Characters</p>
                <p>{0.008*(searchInput.split(" ").filter((a)=>{return a.length!==0}).length)} Minute Read</p>
            </div>
        </div>

    )
}
