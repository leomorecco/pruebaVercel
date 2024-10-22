import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import useRedirection from '../hooks/useRedirection';

function Landing() {
  const [showProgress, setShowProgress] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowProgress(false);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []); // Se ejecuta solo una vez al montar el componente

  useRedirection('/catalog', 3000); // Redireccionamos a la vista 

  return (
    <div>
      {showProgress ? (
        <LinearProgress color="secondary" />
        
      ) : (
        <Link to="/catalog">
          
        </Link>
      )}
      
    </div>
  );
}

export default Landing;
