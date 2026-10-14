"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("skilltree-theme");
    const dark = savedTheme === "dark";

    document.documentElement.classList.toggle("dark", dark);
    setIsDark(dark);
    setMounted(true);
  }, []);

  function changeTheme(newTheme: boolean) {
    flushSync(() => {
      setIsDark(newTheme);

      document.documentElement.classList.toggle("dark", newTheme);
    });

    localStorage.setItem("skilltree-theme", newTheme ? "dark" : "light");
  }

  function toggleTheme(event: MouseEvent<HTMLButtonElement>) {
    const newTheme = !isDark;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!document.startViewTransition || reducedMotion) {
      changeTheme(newTheme);
      return;
    }

    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      changeTheme(newTheme);
    });

    void transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 750,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      })
      .catch(() => {
      });
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl bg-transparent text-white transition-transform duration-300 hover:scale-110"
    >
      {mounted ? (
        isDark ? <Moon size={24} /> : <Sun size={24} />
      ) : (
        <span className="h-6 w-6" />
      )}
    </button>
  );
}