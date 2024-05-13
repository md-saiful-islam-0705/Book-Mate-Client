import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeToggle from '../../components/DarkModeToggle';
import Navbar from '../shared/Navbar';
import Banner from '../../components/Banner';
import Footer from '../shared/Footer';
import Categories from '../Categories/Categories';
import PopularBooks from '../../components/PopularBooks';
import ReadingMaterials from '../../components/ReadingMaterials';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (isDarkMode !== null) {
      setDarkMode(isDarkMode);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={`container mx-auto relative ${darkMode ? 'dark' : ''}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Banner />
        <ReadingMaterials />
        <Categories />
        <PopularBooks />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;
