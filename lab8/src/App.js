import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from '@testing-library/react';


function AddNote({onChange, title, select, onChangeCheckbox}){
  //alert(noteId)
  return(
    <label>
      <input type="checkbox" name={title} checked={select} onChange={onChangeCheckbox}/>
      <input type="text"  placeholder="New task"  value={title} onChange={onChange}/>
    </label>
  );
}

function Button({ title, children, onClick, className}){
  return(
    <button className={className} onClick={onClick}>
      {title} {children}
    </button>
  );
}

// function Swap(lst, i1, i2){
//   let temp = lst[i1];
//   lst[i1] = lst[i2];
//   lst[i2] = temp;
// }

function App() {
  const [notes, setNotes] = React.useState([{ select: false, title: 'task1'}, {select: false, title: 'task2'}, 
  {select: false, title: 'task3'}]);
 // const [count, setCount] = React.useState(notes.length - 1);
 // const [select, setSelect] = React.useState(false);
 // const NoteList = [<div>Hello, world!</div>, <div>Buy, world!</div>]
  const handleClick = () => {
    //let ind; 
    //alert(count)
  //   newValues.length > 1 ? setCount(count + 1) : setCount(0);
  //   //alert(count)
  //   newValues.length > 1 ? ind = newValues.length - 1 : ind = 0;
  //  // alert(ind)
  //   Swap(newValues, ind, count)
    setNotes([...notes, {select: false, title:'taskN'}]);
    //setNotes([...notes, {select: false, title:'taskN'}]);
    //alert(notes)
  }
  const handleChangeCheckbox = (index) => (event) => {
    //setSelect(event.currentTarget.checked);
    const sel = event.target.checked;
    const newValues = [...notes];
    newValues[index].select = sel;
    setNotes(newValues);
    // Swap(newValues, index, count);
    // count > 0 ? setCount(count - 1) : setCount(0);
    // setNotes(newValues);
    
  }
  //const [ShowNote, setShowNote] = React.useState('1');
  //const [ShowNoteList, setShowNoteList] = React.useState([true]);

  const removeNote = (index) => {
    console.log(index)
    setNotes(notes.filter((_, index1) => index1 != index));
    //count > 0 ? setCount(count - 1) : setCount(0);
    //alert(notes)
  }
  const changeInput = (index) => (event) => {
    const val = event.target.value;
    const newValues = [...notes];
    newValues[index].title = val;
    setNotes(newValues);
  }
  return (
    <div className="App">
      <h2>ToDo:</h2>
        {notes.map((item, index) => 
        !item.select ?
          <label key={index}>
            <AddNote 
            select={item.select} 
            onChangeCheckbox={handleChangeCheckbox(index)} 
            title={item.title} 
            onChange={changeInput(index)}
            />
            <Button className="delButton" onClick={() => removeNote(index)}/>
          </label> : '')}
          {notes.map((item, index) => 
        item.select ?
          <label key={index}>
            <AddNote 
            select={item.select} 
            onChangeCheckbox={handleChangeCheckbox(index)} 
            title={item.title} 
            onChange={changeInput(index)}
            />
            <Button className="delButton" onClick={() => removeNote(index)}/>
          </label> : '')}
        <Button className="addButton" title='Add a task' onClick={handleClick}/>
    </div>
  );
  // const IfShowNote = () => {
  //   //setCount(count + 1);
  //   //setShowNoteList([...ShowNoteList, ShowNote]);
  //   let noteid1 = ShowNote;
  //   if(ShowNote==='0'){
  //    // alert(ShowNote)
  //     setShowNote('1'); 
  //     //alert(noteid1)
  //   } 
  //   return <label><AddNote noteId={noteid1} /><Button title="del" onClick={removeNote}/></label>
  // }
  
}

export default App;
