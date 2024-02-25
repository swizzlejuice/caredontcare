import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';

import { SignupForm } from './Login.js';
import { ProfilePage } from './Profile.js';
import { Home } from './Home.js';
import { KalenDeboer } from './KalenDeboer.js';
import { HumaneSociety } from './HumaneSociety.js';

export default function App(props) {
  return (
    <div>
      <Routes>
        <Route path="/"index element={<SignupForm />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="home" element={<Home />} />
        <Route path="kalen-deboer-post" element={<KalenDeboer />} />
        <Route path="humane-society-post" element={<HumaneSociety />} />
      </Routes>
    </div>
  );
}