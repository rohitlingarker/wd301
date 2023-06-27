
import React, { createContext, useContext, useReducer } from "react";

import { reducer, initialState, CommentsState, CommentsActions } from "./reducer";

const CommentsStateContext = createContext<CommentsState | undefined>(undefined);

// export const CommentsProvider: React.FC<React.PropsWithChildren> = ({ children }) => 
//     {const [state, dispatch] = useReducer(reducer, initialState);

//     // Then, I'll pass the `state` object as value of this projectsStateContext
    
//       return (
//         <CommentsStateContext.Provider value={state}>
//           {children}
//         </CommentsStateContext.Provider>
//       );
//     };
    type CommentsDispatch = React.Dispatch<CommentsActions>;

    const CommentsDispatchContext = createContext<CommentsDispatch | undefined>(undefined);
    export const CommentsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
      const [state, dispatch] = useReducer(reducer, initialState);
    
      // Next, I'll pass the `dispatch` object as value of this CommentsDispatchContext.
    
      return (
        <CommentsStateContext.Provider value={state}>
          <CommentsDispatchContext.Provider value={dispatch}>
            {children}
          </CommentsDispatchContext.Provider>
        </CommentsStateContext.Provider>
      );
    };

    export const useCommentsState = () => useContext(CommentsStateContext);
    export const useCommentsDispatch = () => useContext(CommentsDispatchContext);
