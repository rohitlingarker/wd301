import { API_ENDPOINT } from '../../config/constants';
export const fetchComments = async (dispatch: any,projectID: string,taskID:string) => {
  const token = localStorage.getItem("authToken") ?? "";
  
  try {
    dispatch({ type: "FETCH_COMMENTS_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/comments/${projectID}/tasks/${taskID}/comments`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch({ type: "FETCH_COMMENTS_SUCCESS", payload: data });
  } catch (error) {
    console.log('Error fetching comments:', error);
    dispatch({ type: "FETCH_COMMENTS_FAILURE", payload: 'Unable to load comments' });
  }
};

export const addComment = async (dispatch: any,projectID: string,taskID:string , comment:Comment) => {
    try {
      const token = localStorage.getItem("authToken") ?? "";
      const response = await fetch(`${API_ENDPOINT}/comments/${projectID}/tasks/${taskID}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
  
        // Next, I'll pass the `args` here
        body: JSON.stringify(comment), 
      });
      if (!response.ok) {
        throw new Error('Failed to create comment');
      }
      const data = await response.json();
      if (data.errors && data.errors.length > 0) {
        return { ok: false, error: data.errors[0].message }
      }
  
      // And if everything goes well with the API call, we will dispatch an action, 
      // with `type` set to `ADD_PROJECT_SUCCESS` and in `payload` we will send the 
      // new comment `data`.
      dispatch({ type: 'ADD_COMMENT_SUCCESS', payload: data });
  
      // Next, I'll return a status called "ok", with value `true`
      // as everything went well.
      return { ok: true }
    } catch (error) {
      console.error('Operation failed:', error);
    // Dialogue 5: And for error I'll return status called "ok", with value `false`.
      return { ok: false, error }
    }
  };