import { Switch } from '@mui/material';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  };

  return (
    <Switch checked={darkMode} onChange={toggleDarkMode} />
  );
};

export default DarkModeToggle;
