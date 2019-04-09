import { useState, useEffect } from "react";
import axios from "axios";

const useResources = resource => {
  const [resources, setResources] = useState([]);

  //function is rerun only when the value inside the [] changes
  //or a new object is created within the array

  //if an empty array is passed to the function, it will only
  // be called once- essentially equal to componentDidMount

  //if no [] is passed to the function, the component will be
  //rerendered every time the function is run
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      setResources(response.data);
    })(resource);
  }, [resource]);

  return resources;
};

export default useResources;
