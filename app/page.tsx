"use client";
import React, {useState, useEffect} from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from "./components/home";
import Test from "./components/test";
import Sankai from "./components/sankai/test"
import Yonkai from "./components/yonkai/test"

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/test" element={<Test />}/>
        <Route path="/sankai" element={<Sankai />}/>
        <Route path="/yonkai" element={<Yonkai />}/>
      </Routes>
    </HashRouter>
  )
}