"use client";
import { useEffect, useState, useMemo, useCallback, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const defaultWords = ["LOADING", "COMPUTING", "SEARCHING", "RETRIEVING", "ASSEMBLING"]

// Memoized Letter component for performance
const Letter = memo(function Letter({
    char,
    delay,
    exitDelay,
    letterDuration
}) {
    return (
        <motion.span
            style={{ transformStyle: "preserve-3d" }}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
                initial: {
                    rotateX: 90,
                    y: 20,
                    opacity: 0,
                    filter: "blur(8px)",
                },
                animate: {
                    rotateX: 0,
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: {
                        duration: letterDuration,
                        delay: delay,
                        ease: [0.2, 0.65, 0.3, 0.9],
                    },
                },
                exit: {
                    rotateX: -90,
                    y: -20,
                    opacity: 0,
                    filter: "blur(8px)",
                    transition: {
                        duration: letterDuration * 0.67,
                        delay: exitDelay,
                        ease: "easeIn",
                    },
                },
            }}
            className="inline-block">
            {char}
        </motion.span>
    );
})

// Memoized Word component for performance
const Word = memo(function Word({
    text,
    staggerDelay,
    exitStaggerDelay,
    letterDuration,
    textClassName
}) {
    const words = useMemo(() => text.split(" "), [text])

    // Calculate total previous characters for delay offset
    let charCount = 0;

    return (
        <div
            className={cn(
                "flex flex-wrap justify-center gap-x-[0.3em] gap-y-2 text-4xl md:text-6xl font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-100",
                textClassName
            )}
        >
            {words.map((word, wordIndex) => {
                const currentWordDelayOffset = charCount * staggerDelay;
                const currentWordExitDelayOffset = charCount * exitStaggerDelay;

                const wordElement = (
                    <span key={`${word}-${wordIndex}`} className="inline-flex whitespace-nowrap">
                        {word.split("").map((char, charIndex) => (
                            <Letter
                                key={`${char}-${charIndex}`}
                                char={char}
                                delay={currentWordDelayOffset + (charIndex * staggerDelay)}
                                exitDelay={currentWordExitDelayOffset + (charIndex * exitStaggerDelay)}
                                letterDuration={letterDuration}
                            />
                        ))}
                    </span>
                );

                charCount += word.length + 1; // +1 for space (conceptually, though not rendered as a letter)
                return wordElement;
            })}
        </div>
    );
})

export function FlipFadeText({
    words = defaultWords,
    interval = 3000,
    className,
    textClassName,
    letterDuration = 0.5,
    staggerDelay = 0.05,
    exitStaggerDelay = 0.02
}) {
    const [index, setIndex] = useState(0)

    // Memoize the interval callback
    const updateIndex = useCallback(() => {
        setIndex((prev) => (prev + 1) % words.length)
    }, [words.length])

    useEffect(() => {
        const timer = setInterval(updateIndex, interval)
        return () => clearInterval(timer);
    }, [updateIndex, interval])

    // Memoize the current word
    const currentWord = useMemo(() => words[index], [words, index])

    return (
        <div
            className={cn("flex items-center justify-center min-h-[200px]", className)}>
            <div
                className="relative flex items-center justify-center w-full"
                style={{ perspective: "1000px" }}>
                <AnimatePresence mode="wait">
                    <Word
                        key={currentWord}
                        text={currentWord}
                        staggerDelay={staggerDelay}
                        exitStaggerDelay={exitStaggerDelay}
                        letterDuration={letterDuration}
                        textClassName={textClassName} />
                </AnimatePresence>
            </div>
        </div>
    );
}

export default FlipFadeText
