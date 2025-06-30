"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight dark:bg-white dark:text-black"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
       {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}
