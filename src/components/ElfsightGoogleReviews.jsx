import { useEffect } from "react";

const ElfsightWidget = () => {
  useEffect(() => {
    // Check if script already exists
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full flex justify-center my-6">
      {/* Elfsight Google Reviews */}
      <div
        className="elfsight-app-d08f2ab8-df46-40dc-adcf-bea1105c68a3" data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default ElfsightWidget;
