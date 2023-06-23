import React, { useEffect } from 'react';
import { fetchMembers } from "../../context/members/actions";

// So, let's import the useProjectsDispatch custom hook.
import { useMembersDispatch } from "../../context/members/context";
import MemberListItems from './MemberListItems';

// I'll import the ProjectListItems component from the same folder. 
// This I'll define next.

const MemberList: React.FC = () => {

  // I'll define a new constant called dispatchMembers, 
  // to call the useMembersDispatch() hook.
  const dispatchMembers = useMembersDispatch();
  
  useEffect(() => {
    // And I'll pass the `dispatchMembers` to `fetchMembers` function.
    fetchMembers(dispatchMembers)
  }, [])
  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      {/*To keep this file clean, I'll move all the logic to access the Members 
       from our app-state, to a new component MemberListItems */}
      <MemberListItems />
    </div>
  );
};
export default MemberList;