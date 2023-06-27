import React from "react";
import { useCommentsState } from "../../context/comment/context";
import { Link } from "react-router-dom";

export default function CommentListItems() {
  let state: any = useCommentsState();
  const { comments, isLoading, isError, errorMessage } = state;
  console.log("comments list :",comments);

  if (comments.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <>
      {comments.map((comment: any) => (
        <Link
          key={comment.id}
          to={`${comment.id}`}
          className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {comment.description}
          </h5>
        </Link>
      ))}
    </>
  );
}
