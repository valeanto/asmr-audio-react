import React from "react";
import { Link } from "react-router-dom";

export default function GenerateSound() {
  return (
    <>
      <section id="generateSoundBg">
        <div className="container">
          <div className="item">
            <Link to="/your-sound" className="svg-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 498.14 96.5">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M3.65,25.92C-2.78,39.13,1,55.26,7.25,65.54c14.58,24.1,48.43,26.13,63,27,30,1.81,36.09-8.45,70.23-9,22.89-.37,26.76,4.14,59.43,9,22.9,3.41,49.79,3.52,102.65,3.61,44.3.07,66.45.1,91.84-1.8,82.18-6.17,94.47-20.06,99.05-28.82,4.8-9.18,6.67-23.35,0-32.41-12.14-16.5-41.27-.69-90-3.61-54.68-3.26-54.67-25.31-109.86-27-23.53-.72-20.13,3.39-82.84,7.2-33.44,2-50.16,3.06-66.63,1.81C101,8.24,94.93-1.75,63.08.71,46,2,14.08,4.5,3.65,25.92Z"
                    />
                  </g>
                </g>
              </svg>

              <h3 className="title">generating</h3>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
