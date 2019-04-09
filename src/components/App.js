import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  //array destructuring
  //[current piece of data, data setter function], (initial value)
  const [resource, setResource] = useState("posts");
  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>ToDos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
