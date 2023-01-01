import React, { useState, useRef, useEffect } from "react";
import Todolist from "./Components/todolist";

function App() {
  const [getter, setter] = useState("");
  const [getSubmit, setSubmit] = useState(false);
  const listOne = useRef("");
  const listTwo = useRef("");
  const listThree = useRef("");


  function handleTitle(e) {
    setter(e.target.value)
  }
  function handleSubmit() {
    if (getter !== "") {
      setSubmit(true);
    }
  }
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setItems(items);
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('listOne,listTwo,listThree',JSON.stringify(listOne,listTwo,listThree))
  // },[listOne,listTwo,listThree]);
  return <div style={{ textAlign: 'center' }}>
    <h1>TODO LIST APP</h1>
    <input type="text" value={getter} placeholder=" TODO Title" onChange={(e) => handleTitle(e)} />
    <br />
    <input type="text" ref={listOne} placeholder="TODO List 1" />
    <input type="text" ref={listTwo} placeholder="TODO List 2" />
    <input type="text" ref={listThree} placeholder="TODO List 3" />
    <br />
    <button onClick={handleSubmit}>Submit</button>



    {getSubmit && <Todolist todo={{
      title: getter,
      list: [listOne.current.value,
      listTwo.current.value,
      listThree.current.value
      ]
    }} />}
  </div>

}

export default App;
