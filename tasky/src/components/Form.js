import React from "react";

const AddTaskForm = (props) => {

  return (
    <div>
      <form onSubmit={props.submit}>
        <label>
            Task title:
            <input type="text" name="title" required onChange={(event) => props.change(event)} />
        </label>
        <br />
        <label>
            Due date:
            <input type="date" name="deadline" required onChange={(event) => props.change(event)} />
        </label>
        <br />
        <label>
            Details:
            <input type="text" name="description" onChange={(event) => props.change(event)} />
        </label>
        <input type="submit" value="Submit"/>
        </form>
    </div>
  )
};

const formChangeHandler = (event) => {
  let form = {...formState};

  switch(event.target.name) {
    case "title":
        form.title = event.target.value;
        break;
    case "description":
        form.description = event.target.value;
        break;
    case "deadline":
        form.deadline = event.target.value;
        break;
    default:
        form = formState;
  }
  setFormState(form);
}

export default AddTaskForm;