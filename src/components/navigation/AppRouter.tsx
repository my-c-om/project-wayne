// src/components/navigation/AppRouter.tsx
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Projects from '../pages/Projects';
import Tasks from '../pages/Tasks';
import Layout from '../layout/Layout';

const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Layout>
  );
};
