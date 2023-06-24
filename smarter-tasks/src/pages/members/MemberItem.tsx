import React from 'react'
import { removeMember } from '../../context/members/actions';
import { useMembersDispatch } from '../../context/members/context';

export default function MemberItem(props:any) {
    let {member}= props;
    
    const dispatchMembers = useMembersDispatch();

    const deleteUser = ()=>{
        console.log("Deleting user")
        try{
            removeMember(dispatchMembers,member.id);
        }catch(error){
            console.log(error);
            
        }
    }
  return (
    <div
        
          className="p-6 member bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex justify-between"
        > 
          <div>
            <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
              {member.name}
            </h5>
            <h3 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
              {member.email}
            </h3>
          </div>
          <button className="rounded-full self-center bg-gray-300 p-1 text-gray-400 hover:text-red-500 hover:cursor-pointer h-8 dark:text-gray-950 dark:hover:text-red-700 dark:bg-gray-800 "
            title="Delete User"
            onClick={deleteUser}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M10.375 2.25a4.125 4.125 0 100 8.25 4.125 4.125 0 000-8.25zM10.375 12a7.125 7.125 0 00-7.124 7.247.75.75 0 00.363.63 13.067 13.067 0 006.761 1.873c2.472 0 4.786-.684 6.76-1.873a.75.75 0 00.364-.63l.001-.12v-.002A7.125 7.125 0 0010.375 12zM16 9.75a.75.75 0 000 1.5h6a.75.75 0 000-1.5h-6z" />
            </svg>
          </button>
        </div>
  )
}


