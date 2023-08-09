import React from 'react'
import { useForm } from 'react-hook-form';
import { addComment } from '../../context/comment/actions';
import { useCommentsDispatch } from '../../context/comment/context';
import { useParams } from 'react-router-dom';



export default function NewComment() {
    const {
        register,
        handleSubmit,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        formState: { errors },
      } = useForm();
    
    const commentDispatch = useCommentsDispatch();
    const {projectID,taskID} = useParams();

    const onSubmit = (data:any)=>{
        console.log('comment submitted',data.commentBox)
        try {
            if ( projectID && taskID && data.commentBox){
                addComment(commentDispatch,projectID,taskID,data.commentBox)
            }
        } catch (error) {
            console.log("could not add comment:",error);
            
            
        }
    }

  return (
    <div className="mt-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      
                      <input
                        type="text"
                        required
                        placeholder="Enter comment"
                        id="commentBox"
                        {...register("commentBox", { required: true })}
                        className="w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                      />
                      
                      <button
                        type="submit"
                        id="addCommentBtn"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Comment
                      </button>
                    </form>
                  </div>
  )
}
