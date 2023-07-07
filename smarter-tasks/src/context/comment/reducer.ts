interface Comment {
    id: number,
    description: string,
    task_id: number,
    owner: number
  }
  // Now, I'll rename the interface in the `ProjectList` component from `State`
  // to `ProjectsState`. And I'll also export the interface.
  
  export interface CommentsState {
    comments: Comment[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  }
  
  export const initialState: CommentsState = {
    comments: [],
    isLoading: false,
    isError: false,
    errorMessage: "",
  };
  
 
  
  export type CommentsActions =
    | { type: "FETCH_COMMENTS_REQUEST" }
    | { type: "FETCH_COMMENTS_SUCCESS"; payload: Comment[] }
    | { type: "FETCH_COMMENTS_FAILURE"; payload: string }
    | { type: "ADD_COMMENT_SUCCESS"; payload: Comment };
  
  // Next, I'll update reducer function accordingly with newly defined types
  
  // export const reducer = (state: State, action: Action): State => {
  
  export const reducer = (
    state: CommentsState = initialState,
    action: CommentsActions
  ): CommentsState => {
    switch (action.type) {
      case "FETCH_COMMENTS_REQUEST":
        return {
          ...state,
          isLoading: true,
        };
      case "FETCH_COMMENTS_SUCCESS":
        return {
          ...state,
          isLoading: false,
          comments: action.payload,
        };
      case "FETCH_COMMENTS_FAILURE":
        return {
          ...state,
          isLoading: false,
          isError: true,
          errorMessage: action.payload,
        };
      case "ADD_COMMENT_SUCCESS":
        return state;
      default:
        return state;
    }
  };
  