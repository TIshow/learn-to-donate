import React from 'react'
import { Routes, Route } from 'react-router-dom'

// api

// redux

// Import Components
import Home from './Home'
import Quest from './public/Quest'
import SelectOrganization from './public/SelectOrganization'
import SelectCategory from './public/SelectCategory'

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/organization" element={<SelectOrganization />} />
    <Route path="/category" element={<SelectCategory />} />
    <Route path="/quest" element={<Quest />} />
  </Routes>
)

export default Router
