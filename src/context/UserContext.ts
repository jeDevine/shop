import { createContext } from "react";
import User from "../models/User";

interface UserContextModel {
  user: User | null;
}

const defaultValues: UserContextModel = {
  user: null,
};

const UserContext = createContext(defaultValues);

export default UserContext;
