# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## using vite

npm create vite@latest

## to start a local host

npm install
npm run dev

## to use aos in react

we need to follow this major steps

## install the package

npm install --save aos@next

## to initialize AOS

import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

## next add it to your react export default function

 useEffect(() => {
        AOS.init();
      }, [])
