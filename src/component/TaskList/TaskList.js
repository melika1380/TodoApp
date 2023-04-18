import React from "react";

const TaskList = () => (
  <header className="TaskList">
    <div>
      <ul>
        <li>
          <input type='checkbox'/>
          <h2>build this app</h2>
          <button>delete</button>
        </li>
      </ul>
    </div>
  </header>
);

export default TaskList;
