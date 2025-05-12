import React, { useEffect, useState } from "react";


const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Show the splash screen for 2 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000); // Adjust the duration as needed

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (!showSplash) return null;

  return (
    <div id="splash-screen" className="splash-screen">
      <img src={`${import.meta.env.BASE_URL}src/assets/logo.svg`} alt="Logo" className="img-fluid" />
    </div>
  );
};

export default SplashScreen;