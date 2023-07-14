// PageLayout.jsx
import React from 'react';

export function PageLayout({ children }) {
  return (
    <div className="min-h-full">
      {children}
    </div>
  );
}
