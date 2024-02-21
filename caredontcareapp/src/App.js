import React from 'react';
import { useState, useEffect } from 'react';
import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database';

import { SignupForm } from './Login.js';
import { ProfilePage } from './Profile.js';


export default function App(props) {
  return (
    <div>
      <Routes>
        <Route index element={<SignupForm />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}