import React from 'react';
import { useState, useEffect } from 'react';
import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database';

import { SignupForm } from './Login.js';
import { ProfilePage } from './Profile.js';
import { Home } from './Home.js';
import { KalenDeboer } from './KalenDeboer.js';

export default function App(props) {
  return (
    <div>
      <Routes>
        <Route index element={<SignupForm />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="home" element={<Home />} />
        <Route path="kalen-deboer-forum" element={<KalenDeboer />} />
      </Routes>
    </div>
  );
}