import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './features';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <HashRouter basename="/">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </QueryClientProvider>
    </HashRouter>
  );
}

export default App;
