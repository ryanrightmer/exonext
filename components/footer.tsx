import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      Copyright 2019 Exoplanet.
      <style>{`
        .footer {
          padding: 10px;
          text-align: center;
          background: #cccccc;
          position: absolute;
          bottom: 0;
          width: 100%;
        }
      `}</style>
    </div>
  )
}

export default Footer