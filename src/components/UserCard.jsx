import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-card-header">
        <div className="avatar">
          {user.name.charAt(0)}
        </div>
        <h3>{user.name}</h3>
        <span className="username">@{user.username}</span>
      </div>
      <div className="user-card-body">
        <div className="info-row">
          <span className="icon">📧</span>
          <span className="text">{user.email}</span>
        </div>
        <div className="info-row">
          <span className="icon">📞</span>
          <span className="text">{user.phone}</span>
        </div>
        <div className="info-row">
          <span className="icon">🏢</span>
          <span className="text">{user.company.name}</span>
        </div>
        <div className="info-row">
          <span className="icon">🌐</span>
          <a href={`http://${user.website}`} target="_blank" rel="noreferrer" className="text link">
            {user.website}
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
