import React from "react";

import { useMembersState } from "../../context/members/context";
import MemberItem from "./MemberItem";
export default function MemberListItems() {
  let state: any = useMembersState();


  const { members, isLoading, isError, errorMessage } = state;
  console.log("members",members);
  
  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }




  return (
    <>
      {members.map((member: any) => (
        <MemberItem member={member} />
      ))}
    </>
  );
}
