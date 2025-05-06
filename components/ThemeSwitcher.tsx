
import React from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { Switch } from "./ui/switch";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = React.useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log("Toggling theme to:", theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);
  
  return (
    <Switch
      checked={theme === "dark"}
      onCheckedChange={toggleTheme}
      className="data-[state=checked]:bg-gold data-[state=unchecked]:bg-slate-200"
    >
      {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </Switch>
  );
}
