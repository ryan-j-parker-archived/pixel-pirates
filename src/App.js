/* eslint-disable react/no-unknown-property */
import { Loader, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './App.css';
import * as THREE from 'three';
import { ACESFilmicToneMapping, sRGBEncoding } from 'three';
import { Suspense } from 'react';
import Box from './Box';
import FloatingText from './FloatingText';
import { Route, Routes } from 'react-router-dom';
import Experience from './Experience';
import MainPage from './MainPage';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/experience" element={<Experience />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}
