// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";
// import NotFound from "./NotFound";
// import Signup from './pages/signup';
// import Signin from './pages/signin';
// import Dashboard from "./pages/dashboard"
// import { ProtectedRoute } from "./ProtectedRoute";



// function App() {

//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Signup/>} />
//         <Route path="/signup" element={<Signup/>} />
//         <Route path="/signin" element={<Signin/>} />
//         <Route path="/dashboard" element={<ProtectedRoute element={ <Dashboard/> } />} />
//         <Route path="/notfound" element={<NotFound />} />
//         <Route path="*" element={<Navigate to="/notfound" />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;



import React, { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";

import router from "./routes"
import { ThemeContext } from "./context/theme";
import { ProjectsProvider } from "./context/projects/context";
import { MembersProvider } from "./context/members/context";

const App = () => {
  const {theme} = useContext(ThemeContext)

  
    return (
      <div className={`h-full w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}>
        <ProjectsProvider>
          <MembersProvider>
            <RouterProvider router={router} />
          </MembersProvider>
        </ProjectsProvider>
      </div>
    );
}
export default App;