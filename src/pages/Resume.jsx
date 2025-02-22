import React from 'react';

function Resume() {
  return (
    <div className="container mx-auto py-10 px-5">
      <div className="max-w-5xl mx-auto rounded-lg shadow-lg">
        <img 
          src="/images/resume.jpg" 
          alt="Resume" 
          className="w-full h-auto rounded-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Resume;
