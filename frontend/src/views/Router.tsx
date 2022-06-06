import React from 'react';
import { Routes, Route } from 'react-router-dom';

// api

// redux

// Import Components
import Top from './public/Top';
import SelectOrganization from './public/SelectOrganization';
import SelectCategory from './public/SelectCategory';

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Top />} />
    <Route path="/organization" element={<SelectOrganization />} />
    <Route path="/category" element={<SelectCategory />} />
  </Routes>
);

export default Router;