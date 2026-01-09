import React, { useState } from 'react';
import './TodoList.css';

//class component for TodoList
const TodoList = () => {
  // To represent an array of todo items. Initialize it with an empty array [], indicating that there are no todo items initially.
  const [todos,setTodos]=useState([]);
  // To represent the value entered by user into an input field for adding a new heading for a todo item. Initialize it as an empty string ''.
  const [listInputs,setListInputs]=useState({});



  // Declares a constant named handleAddTodo and assigns it an arrow function.
  const handleAddTodo = () => {
    // Function to handle adding a new todo item
    if (headingInput.trim() !== '')  //Checks if the headingInput variable, a piece of text input from the user, is empty after trimming any whitespace characters from the beginning and end. 
    // This condition ensures that the user has entered some content before proceeding.
  {  //: If the condition in the if statement is met, this line updates the state variable todos. 
      // It spreads the existing todos array (todos) into a new array using the spread syntax (…todos) and appends a new object to it. 
      // The new object contains a heading property set to the value of headingInput and a lists property initialized as an empty array.
    setTodos([...todos, {  heading: headingInput, items: [] }]);
    setHeadingInput(''); // Clear the input field after adding

  }


  }




  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        {/* for the searchtype box */}
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            // value attribute is set to {headingInput}, which binds the value of the 'input' field to the 'headingInput' state variable.
            // value = {headingInput}
            // The input field and the button element in the div tag need to be updated to 
            // incorporate the functionality to add a new todo item on button click.
            // {setHeadingInput(e.target.value);}: This is the body of the arrow function. setHeadingInput is a function that updates the state variable headingInput
            //  with the value entered in the input field. e.target.value retrieves the current value of the input element that triggered the event, and setHeadingInput is called with this value to update the state.
            onChange={(e) => setHeadingInput(e.target.value)}
            required/>
         
          <button className="add-list-button">Add Heading</button> 
        </div>
 
      </div>


            <div className="todo_main">
      {/* Rendering Todo Item: <div key={index} className="todo-card"> ... </div>: For each todo item, a div element with the class todo-card is rendered. The key attribute is set to index to identify each to-do item within the list uniquely. */}
              {todos.map((todo,index) => (
                <div key={index} className='todo-card'>
                  <div className='heading_todo'>
      {/* Displaying Todo Heading: <h3>{todo.heading}</h3>: Within each todo-card div, the heading of the current todo item is displayed using an <h3> element. The heading text is retrieved from the heading property of the todo object. */}
                    <h3>{todo.heading}</h3>
      {/* Each todo item is accompanied by a "Delete Heading" button. When clicked, this button triggers the handleDeleteTodo function, passing the index of the current todo item as an argument. The index allows the function to identify and delete the corresponding todo item from the todos array. */}
                    <button className='delete-button-heading' onClick={() => handleDeleteHeading(index)}>Delete Heading</button>
                  </div>
                  </div>
                  
            ) )}
            </div>
    </>
  );
};

export default TodoList;
