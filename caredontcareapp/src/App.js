import React from 'react';
import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import { SignupForm } from './Login.js';
import { ProfilePage } from './Profile.js';

export default function App() {
  return (
    <div>
      <Routes>
        <Route index element={<SignupForm />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}