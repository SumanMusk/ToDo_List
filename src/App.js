import './App.css';
import List from './conponents/List'
import Alert from './conponents/Alert'
import { useState } from 'react';

function App() {
  let [inputt, setInputt] = useState("");
  let [main, setMain] = useState([]);
  let [alrt, setAlrt] = useState({
    message: null,
    dis: "none"
  });
  const func = (event) => {
    setInputt(event.target.value);
    // console.log(inputt);
  }
  function add(){
    setMain((old) => {
      return [...old,inputt];
    });
    setAlrt({
      message: "Task Added!",
      dis: "block"
    });
    setTimeout(()=>{
      setAlrt({
        message: null,
        dis: "none"
      });
    }, 1500);
  }
  const deletefunc = (id) =>{
    setMain((element)=>{
      return element.filter((ar, index)=>{
        return index !== id;
      })
    });
    setAlrt({
      message: "Message deleted!",
      dis: "block"
    });
    setTimeout(()=>{
      setAlrt({
        message: null,
        dis: "none"
      });
    }, 1500);
  }
  return (
    <div className="App">
      <Alert obj={alrt}/>
      <div className="container my-5">
        <input onChange={func} id="ipt" className="form-control" type="text" placeholder="add your work!" aria-label="readonly input example"/><br/>
        <button type="button" className="btn btn-light" id="btn" onClick={add}>Add Work</button>
      </div>
      <div className="dropdown">
        <button className={`btn btn-secondary dropdown-toggle ${main.length == 0 ? "disabled": ""}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
          See All Works
        </button>
        <ul className="dropdown-menu" style={{backgroundColor: "grey", display: main.length == 0 ? "none": "block"}}>
          {/* sending a state as a props */}
          {/* using props, calling a function in app.js calling from list.js with a parameter*/}
          <List arr={main} sel={deletefunc}/>

          {/* Alternate Method (in-built in app.js)*/}
          {/* {main.map((element)=>{
            return <li className='d-flex'>
            <a className="dropdown-item" href="#">{element}</a><button style={{marginRight: "5%", width: "30px", border: "none"}}>X</button>
            </li>
          })} */}
        </ul>
      </div>
    </div>
  );
}

export default App;
