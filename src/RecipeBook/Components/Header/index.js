import React from 'react';
import searchIcon from '../../../images/search-icon.svg';
import { NavigationBar } from '../NavigationBar';
import { Link } from 'react-router-dom';
import './index.css';

const Logo = () => (
  <div className="logo">
    <Link to="/">Namma Atil</Link>
    {/* <img src={logo} alt="Namma Atil" /> */}
  </div>
);

const SearchBar = () => (
  <div className="searchBarWrapper">
    <input type="text" placeholder="Search Recipe.." />
    <img src={searchIcon} className="searchIcon" />
  </div>
);

export const Header = ({ sticky = false }) => (
  <div className={`headerWrapper ${sticky ? 'sticky' : ''}`}>
    <Logo />
    <SearchBar />
    <NavigationBar />
  </div>
);
