import { Carousel } from "@material-tailwind/react";
import styles from './Home.module.css';
import { useState, useEffect } from "react";
import 'animate.css';
import VideoCarousel from "./Video";

export default function Home() {
  const images = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    "https://drive.google.com/uc?export=view&id=0B0ocdorWpf3pcWhaNDJIQUVXdlE"  // Direct link to Google Drive image
  ];

  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    "Welcome to Our Website",
    "We are glad to have you here",
    "Explore our exclusive content",
    "Take a look at some of our samples!"
  ];

  useEffect(() => {
    if (messageIndex < messages.length - 1) {
      const timer = setTimeout(() => {
        setMessageIndex(messageIndex + 1);
      }, 2000);  // Change message every 2 seconds

      return () => clearTimeout(timer);
    }
  }, [messageIndex, messages.length]);

  return (
    <>
      {/* Intro text */}
      <div className={styles.introContainer}>
        <div className={styles.introText}>
          {messages.slice(0, messageIndex + 1).map((msg, index) => (
            <p key={index} className={`${styles.introMessage} animate__animated animate__bounceInLeft`}>{msg}</p>
          ))}
        </div>
      </div>
      <div className="mx-20 my-20 bg-gray-700">
        <Carousel transition={{ duration: 2 }} className="rounded-xl">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`image ${index + 1}`}
              className="h-full w-full object-cover"
            />
          ))}
        </Carousel>
      </div>

      <VideoCarousel />
    </>
  );
};
