import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MdOutlineLightMode, MdOutlineModeNight } from "react-icons/md";

type ThemeToggleProps = React.HTMLAttributes<HTMLButtonElement>;

export const ThemeToggle = ({ ...props }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      {...props}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-xl"
    >
      {theme === "dark" ? <MdOutlineLightMode /> : <MdOutlineModeNight />}
    </button>
  );
};
