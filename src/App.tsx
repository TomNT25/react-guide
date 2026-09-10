import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RoutingDemo } from './pages/routing/RoutingDemo';
import { UseStateDemo } from './pages/hooks/UsesStateDemo';
import { UseEffectDemo } from './pages/hooks/UsesEffectDemo';
import { NavBar } from './components/Navbar';
import { UseContextDemo } from './pages/hooks/UsesContextDemo';
import { UseReducerDemo } from './pages/hooks/UsesReducerDemo';
import { UseRefDemo } from './pages/hooks/UsesRefDemo';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/use-state" replace />} />
          <Route path="/use-state" element={<UseStateDemo />} />
          <Route path="/use-effect" element={<UseEffectDemo />} />
          <Route path="/use-ref" element={<UseRefDemo />} />
          <Route path="/use-reducer" element={<UseReducerDemo />} />
          <Route path="/use-context" element={<UseContextDemo />} />

          <Route path="/routing" element={<RoutingDemo />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
