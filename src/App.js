import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Home from './components/pages/Home.js';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';

function App(){
    return(
        <>
            <Router>
                <Layout>
                    <Routes>
                        <Route path={'/AboutUs'} element={<AboutUs/>}/>
                        <Route path={'/ContactUs'} element={<ContactUs/>}/>
                        <Route path={'/'} element={<Home/>}/>
                    </Routes>
                </Layout>
            </Router>
        </>
    );
}

export default App;