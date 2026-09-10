import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RoutingDemo } from './pages/routing/RoutingDemo';
import { NavBar } from './components/Navbar';
import { UseContextDemo } from './pages/hooks/UsesContextDemo';
import { UseEffectDemo } from './pages/hooks/UsesEffectDemo';
import { UseReducerDemo } from './pages/hooks/UsesReducerDemo';
import { UseRefDemo } from './pages/hooks/UsesRefDemo';
import { UseStateDemo } from './pages/hooks/UsesStateDemo';

const App: React.FC = () => {
  return (
    <HashRouter>
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
    </HashRouter>
  );
};

export default App;
