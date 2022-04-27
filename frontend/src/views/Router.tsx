import React, { useState, useLayoutEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

// api

// redux

// Import Components
import Top from './public/Top';

const Router: React.FC = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Top />} />
      </Routes>
    </>
  );
};

export default Router;