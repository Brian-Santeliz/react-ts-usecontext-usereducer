import { useGetTodos } from "../hooks/useGetTodos";

const Nav = () => {
  const { pending, completed } = useGetTodos();
  return (
    <div>
      ToDo List Typescript React
      <p>ToDo pending : {pending} </p>
      <p>ToDo completed : {completed} </p>
    </div>
  );
};

export default Nav;
