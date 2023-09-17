import React from 'react'

export default function List(props){    
    return(
        <>
        {props.arr.map((element, id)=>{
            return(
                <li className='d-flex' style={{backgroundColor: "grey"}}>
                    <strong className="dropdown-item" placeholder='Empty task Added!'>{element}</strong><button onClick={()=>{props.sel(id)}} style={{marginRight: "5%", width: "30px", border: "none", backgroundColor: "lightgray"}}>X</button>
                </li>
            )
        })}
        </>
    )
}