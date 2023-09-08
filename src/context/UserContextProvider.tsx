import { ReactNode, useState } from "react";
import UserContext from "./UserContext";
import User from "../models/User";

interface Props {
  children: ReactNode;
}

const UserContextProvider = ({ children }: Props) => {
  const [user] = useState<User | null>({
    _id: "64dcec1b8599d73faf48c1cd",
    displayName: "James",
    darkTheme: true,
  });

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
