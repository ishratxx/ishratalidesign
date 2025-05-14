import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg"; // Import the logo from the assets folder


const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);
  
  useEffect(() => {
    // Show the splash screen for 2 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500); // Adjust the duration as needed

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (!showSplash) return null;
  console.log(logo)
  return (
    <div id="splash-screen" className="splash-screen">
      <img src="../src/assets/ialogo.svg" alt="Logo" className="img-fluid" />
    </div>
  );
};

export default SplashScreen;