import React, { useState, useLayoutEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

// api

// redux

// Import Components
import Top from './public/Top';
import SelectOrganization from './public/SelectOrganization';

const Router: React.FC = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/organization" element={< SelectOrganization />} />
      </Routes>
    </>
  );
};

export default Router;