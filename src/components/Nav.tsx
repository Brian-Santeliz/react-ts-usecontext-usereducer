import { useGetTodos } from "../hooks/useGetTodos"

const Nav = () => {
const {pending} =  useGetTodos()
    return (
        <div>
           ToDo List Typescript React
            <p>ToDo pending : {pending} </p>
        </div>
    )
}

export default Nav
