"use client";

import React, { useState, useEffect, useCallback } from "react"; // 1. Import useCallback
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

// --- START: Animation Variants ---
const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

const slideInFromLeft = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
    },
  },
});

const slideInFromRight = (delay: number) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
    },
  },
});
// --- END: Animation Variants ---

const HeroContent = () => {
  // --- Animation State for the HEADING ---
  const [hLoopNum, setHLoopNum] = useState(0);
  const [hIsDeleting, setHIsDeleting] = useState(false);
  const [hText, setHText] = useState('');
  const [hDelta, setHDelta] = useState(200 - Math.random() * 100);
  const hToRotate = [ "the best", "Creative", "Modern", "Scalable" ];
  const hPeriod = 1000;

  // --- Animation State for the PARAGRAPH ---
  const [pLoopNum, setPLoopNum] = useState(0);
  const [pIsDeleting, setPIsDeleting] = useState(false);
  const [pText, setPText] = useState('');
  const [pDelta, setPDelta] = useState(150 - Math.random() * 100);
  const pToRotate = [ "KyawSwar Hein", "A Software Engineer", "Fullstack Web Developer", "UI/UX Designer" ];
  const pPeriod = 1000;

  // 2. Wrap hTick in useCallback
  const hTick = useCallback(() => {
    let i = hLoopNum % hToRotate.length;
    let fullText = hToRotate[i];
    let updatedText = hIsDeleting
      ? fullText.substring(0, hText.length - 1)
      : fullText.substring(0, hText.length + 1);

    setHText(updatedText);

    if (hIsDeleting) {
      setHDelta(prevDelta => prevDelta / 2);
    }

    if (!hIsDeleting && updatedText === fullText) {
      setHIsDeleting(true);
      setHDelta(hPeriod);
    } else if (hIsDeleting && updatedText === '') {
      setHIsDeleting(false);
      setHLoopNum(hLoopNum + 1);
      setHDelta(300);
    }
  }, [hIsDeleting, hLoopNum, hText, hToRotate, hPeriod]); // Added dependencies for hTick

  // 3. Wrap pTick in useCallback
  const pTick = useCallback(() => {
    let i = pLoopNum % pToRotate.length;
    let fullText = pToRotate[i];
    let updatedText = pIsDeleting
      ? fullText.substring(0, pText.length - 1)
      : fullText.substring(0, pText.length + 1);

    setPText(updatedText);

    if (pIsDeleting) {
      setPDelta(prevDelta => prevDelta / 2);
    }

    if (!pIsDeleting && updatedText === fullText) {
      setPIsDeleting(true);
      setPDelta(pPeriod);
    } else if (pIsDeleting && updatedText === '') {
      setPIsDeleting(false);
      setPLoopNum(pLoopNum + 1);
      setPDelta(300);
    }
  }, [pIsDeleting, pLoopNum, pText, pToRotate, pPeriod]); // Added dependencies for pTick

  // --- useEffect for HEADING animation ---
  useEffect(() => {
    let ticker = setInterval(() => {
      hTick();
    }, hDelta);
    return () => { clearInterval(ticker) };
  }, [hTick, hDelta]); // 4. Add hTick to the dependency array

  // --- useEffect for PARAGRAPH animation ---
  useEffect(() => {
    let ticker = setInterval(() => {
      pTick();
    }, pDelta);
    return () => { clearInterval(ticker) };
  }, [pTick, pDelta]); // 5. Add pTick to the dependency array

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 wraph">
              {` ${hText}`}
            </span>
            project exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        > 
          I&apos;m 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 wrap">
            {` ${pText}`}
          </span>,
            with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="mailto:heinkyawswar804@gmail.com"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Request To Download CV
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;