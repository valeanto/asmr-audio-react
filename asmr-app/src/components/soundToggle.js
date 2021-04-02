import React, {useState} from "react";
import audioLink from "../sounds/B_Curated/fluffy.mp3";

export default function SoundToggle() {
    const [isOn, toggleIsOn] = useToggle();

    let audio = new Audio("/static/media/fluffy.30ad12b1.mp3")


  const playAudio = () => {
    audio.play()
    console.log({audioLink});
  }


  return (
    // <button className="soundToggle" onClick={playAudio}>
    <button className="soundToggle" onClick={() => toggleIsOn(s => s + 1)}>
      sound toggle
    </button>
  );
}
