import React from 'react';
import SneakerList from './sneakerList/SneakerList';
import Navbar from "./navbar/Navbar";
import "./App.css"
import {Route, Routes} from "react-router-dom";
import SneakerForm from "./sneakerForm/SneakerForm";
import Footer from "./footer/Footer";
import SneakerDetails from "./sneakerDetails/SneakerDetails";
import EditForm from "./editForm/EditForm";
import {LanguageProvider} from "./languageProvider/LanguageContext";
const App = () => {
    return (
        <LanguageProvider>
            <div>
                <Navbar />
                <h1 className="header">Sneaker Shop</h1>
                <Routes>
                    <Route path={"/sneakers"} element={<SneakerList />}/>
                    <Route path={"/sneakers/addSneaker"} element={<SneakerForm />} />
                    <Route path={"/sneakers/:id"} element={<SneakerDetails />} />
                    <Route path={"/sneakers/:id/edit"} element={<EditForm />} />
                </Routes>
                <Footer />
            </div>
        </LanguageProvider>
    );
};

export default App;
