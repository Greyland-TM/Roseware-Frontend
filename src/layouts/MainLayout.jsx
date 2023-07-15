// MainLayout.jsx
import React from 'react';

export function MainLayout({ children }) {
  return (
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  );
}