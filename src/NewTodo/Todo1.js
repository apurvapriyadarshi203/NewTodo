import React ,{useState} from 'react';
import '../NewTodo/Todo1.css'
import TodoList from './TodoList';

function Todo1() {
    const [inputList, setinputList] = useState("");
    const [items ,setItem] =useState([])

    const itemEvents =(event) =>{
        setinputList(event.target.value)
    };

    const listOfItems =(event) => {
        setItem((olditems) => {
            return[...olditems, inputList]
        });
        setinputList("");
    }
    return (
        <div>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <div className="head">
                        <h1>ToDO List</h1>
                        <br />
                    </div>
                    <div className="in">
                        <input type="text" placeholder="Enter the Work" 
                        value ={inputList}
                        onChange={itemEvents} />
                        <button onClick ={listOfItems}>+</button>
                    </div>
                    <ol>
                        {items.map((itemval) =>{
                        return <TodoList text ={itemval}/>
                        })}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Todo1
