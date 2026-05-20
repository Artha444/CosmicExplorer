import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="user-card skeleton">
      <div className="user-card-header skeleton-header">
        <div className="skeleton-avatar"></div>
        <div className="skeleton-title"></div>
        <div className="skeleton-subtitle"></div>
      </div>
      <div className="user-card-body">
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line short"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
