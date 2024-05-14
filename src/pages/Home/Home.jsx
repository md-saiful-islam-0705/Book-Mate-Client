import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../shared/Navbar';
import Banner from '../../components/Banner';
import Footer from '../shared/Footer';
import Categories from '../Categories/Categories';
import PopularBooks from '../../components/PopularBooks';
import ReadingMaterials from '../../components/ReadingMaterials';
import useDarkMode from '../../components/useDarkMode';

const Home = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={`container mx-auto relative ${darkMode ? 'dark' : ''}`}>
        <Navbar darkMode={darkMode} setDarkMode={toggleDarkMode} />
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
