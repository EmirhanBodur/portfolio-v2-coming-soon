import React, { useState, useEffect } from "react";
import TerminalText from "./components/Terminal";
import Countdown from "./components/Countdown";
import SocialLinks from "./components/SocialLinks";

const App = () => {
  const [typedText, setTypedText] = useState("");
  const [showContent, setShowContent] = useState(false);

  // Terminal yazısı efekti
  useEffect(() => {
    const fullText =
      "npm run dev\n> Emirhan'ın portfolyo v2.0 başlatılıyor...\n✓ React 18\n✓ Tailwind CSS\n✓ Vite\n✓ Lansmana hazır";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowContent(true), 1000);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      {!showContent ? (
        <TerminalText typedText={typedText} />
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Emirhan Bodur
            </h1>
            <p className="text-xl text-gray-300 mb-6">Full Stack Geliştirici</p>

            <div className="shadow-2xl bg-gray-800 rounded-lg p-6 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">
                Yeni Portfolyo Yakında
              </h2>
              <Countdown />
              <p className="text-gray-300 mb-6">
                Modern teknolojiler ve projelerle yeni portfolyom üzerinde
                çalışıyorum.
              </p>
            </div>
          </div>

          {/* Sosyal Medya */}
          <div className="w-full max-w-md mb-8">
            <SocialLinks />
          </div>

          {/* Footer */}
          <footer className="text-gray-500 text-sm text-center">
            <p>
              © {new Date().getFullYear()} Emirhan Bodur. Tüm hakları saklıdır.
            </p>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
