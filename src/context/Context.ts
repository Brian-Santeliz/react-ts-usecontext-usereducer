import { createContext } from "react";
import { Todo } from "../interfaces";

type ContextType = {
    todo:Todo
};
createContext<ContextType>({} as ContextType);
