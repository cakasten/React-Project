import axios from "axios";

const fetchData = async (stateSetter) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`
  );
  return stateSetter(response.data);
};

export default fetchData;
