import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { ProjectsIndex } from '../../../pages/Projects/ProjectsIndex';
import { ProjectShow } from '../../project/ui/ProjectShow';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ProjectsIndex />} />
      <Route path="/:projectId" element={<ProjectShow />} />
    </Routes>
  );
};
