import { useEffect, useRef } from "react";
import weddingSong from "../../assets/wedding-song.mp3";

function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.loop = true;
    audio.volume = 1;
    audio.preload = "auto";

    const playMusic = () => {
      audio.play().catch((error) => {
        console.log("Autoplay blocked:", error);
      });
    };

    // Try automatically
    playMusic();

    // Play after user's first interaction
    const handleInteraction = () => {
      playMusic();
    };

    document.addEventListener("click", handleInteraction, { once: true });
    document.addEventListener("touchstart", handleInteraction, {
      once: true,
      passive: true,
    });

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src={weddingSong}
      loop
      preload="auto"
    />
  );
}

export default MusicPlayer;