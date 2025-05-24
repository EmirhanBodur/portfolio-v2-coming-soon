import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // 🎯 Hedef: 1 Temmuz 2025 saat 10:00 (yerel saat)
  const targetDate = new Date("2025-06-24T10:00:00");

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const totalSeconds = Math.floor(distance / 1000);

      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({
        days: Math.max(0, days),
        hours: Math.max(0, hours),
        minutes: Math.max(0, minutes),
        seconds: Math.max(0, seconds),
      });
    };

    updateCountdown(); // ilk çalıştırma
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center space-x-4 mb-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="text-3xl font-bold">{value}</div>
          <div className="text-xs text-gray-400">
            {unit === "days"
              ? "GÜN"
              : unit === "hours"
              ? "SAAT"
              : unit === "minutes"
              ? "DAKİKA"
              : "SANİYE"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
