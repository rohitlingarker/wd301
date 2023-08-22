import React, { Suspense } from "react";
import { TasksProvider } from "../../context/task/context";


import ProjectDetails from "./ProjectDetails";

import { Outlet } from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary";

const ProjectDetailsIndex: React.FC = () => {
  return (
    <TasksProvider>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <ProjectDetails />
        </Suspense>
      </ErrorBoundary>
      <Outlet />
    </TasksProvider>
  );
};

export default ProjectDetailsIndex;
