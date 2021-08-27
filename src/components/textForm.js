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
        //this wont work on mobile devices
        navigator.clipboard.writeText(searchInput)

        //this will work on all devices but it selects the whole text which looks unprofessional and also it triggers the keyboard in mobile devices
        // var copyText = document.getElementById("myBox")
        // copyText.select()
        // document.execCommand("copy") //this command is async thats why this method is depriciated(will still work but not recommended)

        props.copyAlert()
    }

    function removeSpaces(){
        let newText=searchInput.split(/[ ]+/)
        newInputValue(newText.join(" "))
    }

    return (
        <div style={style}>
            <div className="my-3">
            <label htmlFor="byBox" className="form-label"><h2>{props.heading}</h2></label>
            <textarea className="form-control" id="myBox" rows="10" style={{border:"3px solid black",fontSize:"1.2rem"}} onChange={(event)=>{newInputValue(event.target.value)}} value={searchInput}></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={()=>{Uppercase()}}>Uppercase</button>
            <button type="button" className="btn btn-secondary mx-1 my-1" onClick={Lowercase}>Lowercase</button>
            <button type="button" className="btn btn-success mx-1 my-1" onClick={removeSpaces}>Remove Extra Spaces</button>
            <button type="button" className="btn btn-danger mx-1 my-1" onClick={copyText}>Copy Text</button>
            <button type="button" className="btn btn-warning mx-1 my-1" onClick={()=>{newInputValue("")}}>Clear Text</button>
            {/* <button type="button" className="btn btn-info mx-1">Info</button> */}

            <div className="my-3">
                <h3>Text Description</h3>
                <p>{searchInput.trim().length>0? searchInput.trim().split(/[ ]+/).length: 0} Words and {searchInput.length} Characters</p>
                <p>{0.008*(searchInput.trim().length>0? searchInput.trim().split(/[ ]+/).length: 0)} Minute Read</p>
            </div>
        </div>

    )
}
