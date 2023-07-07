import React, { useEffect } from "react";
import { useCommentsDispatch, useCommentsState } from "../../context/comment/context";
import {  useParams } from "react-router-dom";
import { fetchComments } from "../../context/comment/actions";
import NewComment from "./NewComment";

export default function CommentListItems() {
  let commentState: any = useCommentsState();
  let commentDispatch:any = useCommentsDispatch();
  let { projectID, taskID } = useParams();

  useEffect(()=>{
    if (projectID && taskID){
      fetchComments(commentDispatch,projectID,taskID);
    }
  },[commentDispatch, projectID, taskID]);

  
  
  const { comments, isLoading, isError, errorMessage } = commentState;
  // console.log("comments list :",comments);

  const formatDate = (date:string)=>{
    const fDate = new Date(date);
    return fDate.toLocaleDateString()
  }

  if (comments.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <>
      <NewComment/>
      
      {comments.map((comment: any) => (

          <div 
          key={comment.id}
          className="comment border"
          >
            <p
            className="flex justify-between"
            >{comment.User.name}
              <span className=""
              >{formatDate(comment.createdAt)}</span>
            </p>
            
            <h5 
            // className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white"
            >
              {comment.description}
            </h5>

          </div>
        
      ))}
    </>
  );
}
