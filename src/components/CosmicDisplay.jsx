import React from 'react';

const CosmicDisplay = ({ cosmicData }) => {
  return (
    <main className="cosmic-content">
      <h2>{cosmicData.title}</h2>
      
      <div className="media-container">
        {cosmicData.media_type === "video" ? (
          <iframe 
            src={cosmicData.url} 
            title={cosmicData.title} 
            frameBorder="0" 
            allowFullScreen 
            className="cosmic-media"
          />
        ) : (
          <img 
            src={cosmicData.hdurl || cosmicData.url} 
            alt={cosmicData.title} 
            className="cosmic-media"
          />
        )}
      </div>

      <blockquote>
        <strong>Kredit Foto:</strong> {cosmicData.copyright || 'Domain Publik'}
      </blockquote>

      <p className="explanation">{cosmicData.explanation}</p>
    </main>
  );
};

export default CosmicDisplay;
