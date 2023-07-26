// MainLayout.jsx
import React from 'react';

export function MainLayout({ children }) {
  return (
    <main style={{ height: '100%', width: '100%' }}>
      {children}
    </main>
  );
}