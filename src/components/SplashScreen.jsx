import React, { useEffect, useState } from "react";


const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    // Show the splash screen for 2 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1200); // Adjust the duration as needed

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (!showSplash) return null;

  return (
    <div id="splash-screen" className="splash-screen">
      <img src={`${base}src/assets/logo.svg`} alt="Logo" className="img-fluid" />
    </div>
  );
};

export default SplashScreen;