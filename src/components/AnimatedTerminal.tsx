'use client';

import React, { useState, useEffect, useRef } from 'react';

const LOG_LINES = [
  "> Init Playwright context...",
  "> Launching headless browser [OK]",
  "> Setting user-agent: Mozilla/5.0...",
  "> Navigating to target URL...",
  "WARN: Anti-bot challenge detected (Cloudflare)",
  "> Injecting ms_token cookie...",
  "> Bypassing JS challenge [SUCCESS]",
  "> Waiting for DOM to hydrate...",
  "> Querying selectors: //div[@data-e2e='video-desc']",
  "> Extracting 33+ metrics...",
  "> Metrics acquired. Pushing to pipeline.",
  "> Initializing DuckDB connection...",
  "> Running data validation constraints (GQS, JAMA)",
  "PASS: Data schema strict match.",
  "> Converting to JSONL...",
  "> Writing to disk: dataset_2026.jsonl",
  "> Connection closed.",
  "> Restarting proxy rotation loop..."
];

export function AnimatedTerminal() {
  const [lines, setLines] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    
    // Start with a few lines
    setLines(LOG_LINES.slice(0, 3));
    currentIndex = 3;

    const interval = setInterval(() => {
      setLines(prev => {
        const newLines = [...prev, LOG_LINES[currentIndex]];
        // Keep only the last 6 lines so it "scrolls"
        if (newLines.length > 6) {
          newLines.shift();
        }
        return newLines;
      });

      currentIndex++;
      if (currentIndex >= LOG_LINES.length) {
        currentIndex = 0; // loop back
      }
    }, 800 + Math.random() * 600); // Random delay between 800ms and 1400ms for realistic terminal output

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-4 space-y-1 opacity-80 text-[9px] font-mono h-[100px] flex flex-col justify-end overflow-hidden" ref={containerRef}>
      {lines.map((line, i) => (
        <p key={i} className={`${line.includes('WARN') ? 'text-secondary' : line.includes('PASS') || line.includes('SUCCESS') || line.includes('OK') ? 'text-white font-bold' : 'text-primary/70'}`}>
          {line}
        </p>
      ))}
      <p className="text-white animate-pulse">_</p>
    </div>
  );
}
