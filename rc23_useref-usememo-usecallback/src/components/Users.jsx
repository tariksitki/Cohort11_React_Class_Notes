import { memo } from "react";
import UserItem from "./UserItem";


const Users = ({users}) => {
  console.log("Users Component Rendered");

  return (
    <div className="users" >
      <button onClick={null}> Add User </button>
      {users?.map((user) => {
        return (
            <UserItem key={user.id} user = {user} />
        )
      })}
    </div>
  );
};

export default memo(Users);

/// react memo nun cok side effect i olmaz ama bunlarin olabilir.
