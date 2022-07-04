import { useState } from "react";

const AddTaskForm = ({tasks}) => {
  // baslangic degeri veriyoruz uncontrolled uyarisi almamak icin
  const [task, setTask] = useState("");
  const [day, setDay] = useState("");

  console.log(tasks);
  return (
    <div>
      <form>
        <div className="form-control">
          <label htmlFor="task">Task</label>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Add Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="day">Day</label>
          <input
            type="date"
            name="day"
            id="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
