import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontLayout from './components/layout/FrontLayout';
import HomeP from './pages/user/HomeP';
import NotFoundP from './pages/NotFoundP';
import Packages from './pages/user/Packages';
import Contact from './pages/user/Contact';

function App() {
  useEffect(() => {
    // Navbar submenu functionality
    const navbarSubmenus = document.querySelectorAll('[data-toggle~="navbar-submenu-content"]');
    navbarSubmenus.forEach(el => {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        const submenuWrapper = this.closest('.navbar-submenu-wrapper');
        submenuWrapper.querySelectorAll('[data-toggle~="navbar-submenu"]').forEach(item => {
          item.classList.remove('active');
        });
        this.classList.add('active');
        submenuWrapper.querySelectorAll('.navbar-submenu-content-wrapper').forEach(item => {
          item.classList.remove('active');
        });
        document.querySelector(this.dataset.target).classList.add('active');
      });
    });

    const navbarToggle = document.querySelector('.navbar-toggle');
    navbarToggle.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.nav-menu-wrapper').classList.add('navbar-active');
    });

    const navbarSubmenuDismiss = document.querySelectorAll('[data-dismiss="navbar-submenu"]');
    navbarSubmenuDismiss.forEach(el => {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        this.closest('.navbar-active').classList.remove('navbar-active');
      });
    });

    const navbarMenuDismiss = document.querySelectorAll('[data-dismiss="navbar-menu"]');
    navbarMenuDismiss.forEach(el => {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelectorAll('.navbar-active').forEach(el => el.classList.remove('navbar-active'));
      });
    });

    const navbarSubmenuToggle = document.querySelectorAll('[data-toggle~="navbar-submenu"]');
    navbarSubmenuToggle.forEach(el => {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        if (window.innerWidth > 767) return;
        document.querySelector(this.dataset.target).classList.add('navbar-active');
      });
    });

    // Header carousel functionality
    const headerImage = document.querySelector('.header-image');
    const headerImageIndicator = document.querySelector('.header-image-indicator');
    let activeImage = 0;
    Array.from(headerImageIndicator.children).forEach((el, idx) => {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        Array.from(headerImage.children).forEach(item => item.classList.remove('active'));
        headerImage.children[idx].classList.add('active');
        Array.from(headerImageIndicator.children).forEach(item => item.classList.remove('active'));
        this.classList.add('active');
        activeImage = idx;
      });
    });

    function carousel() {
      Array.from(headerImage.children).forEach(item => item.classList.remove('active'));
      headerImage.children[activeImage].classList.add('active');

      Array.from(headerImageIndicator.children).forEach(item => item.classList.remove('active'));
      headerImageIndicator.children[activeImage].classList.add('active');

      if (activeImage < headerImage.children.length - 1) {
        activeImage++;
      } else {
        activeImage = 0;
      }

      setTimeout(function () {
        requestAnimationFrame(carousel);
      }, 5000);
    }
    carousel();

    const prevSlideButtons = document.querySelectorAll('[data-slide="prev"]');
    prevSlideButtons.forEach(el => {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.dataset.target);
        target.scrollLeft += target.offsetWidth;
      });
    });

    const nextSlideButtons = document.querySelectorAll('[data-slide="next"]');
    nextSlideButtons.forEach(el => {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.dataset.target);
        target.scrollLeft -= target.offsetWidth;
      });
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontLayout />}>
          <Route index element={<HomeP />} />
          <Route path="contact" element={<Contact />} />
          <Route path="packages" element={<Packages />} />
        </Route>
        <Route path="*" element={<NotFoundP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
