import Sidebar from '../../components/sidebar/index';
import NavBar from '../../components/navbar/index';
import Footer from '../../components/footer/index';
// import { useState, useEffect, useRef } from 'react';
import HomePage from "../HomePage/HomePage";
import ProfilePage from "../profile_page/ProfilePage";
import SearchPage from "../search_page/SearchPage";
import Datapage2 from "../../components/category/page2/Datapage2";
import CategoryPage from "../CategoryPage";

import { Routes, Route, Navigate } from "react-router-dom";
import ListPopularSong from '../HomePage/ListPopularSong';
import ListPopularArtists from '../HomePage/ListPopularArtist';
import ListPopularAlbum from '../HomePage/ListPopularAlbum';
import SongAtWork from '../HomePage/Album/ListSongAtWork';
import SongAtParty from '../HomePage/Album/ListSongAtParty';
import SongNCSRelease from '../HomePage/Album/ListSongNCSRelease';
import SongSummerVibe from '../HomePage/Album/ListSongSummerVibe';
import SongUSUKTopHit from '../HomePage/Album/ListSongUSUKTopHit';



export default function AppDefault({ children }) {
    return (
        <>
            <div className="bg"></div>
            <div className="wrapper" >
                <Sidebar />
                <NavBar />
                <Routes>
                    <Route path="*" element={<Navigate to="/404" />} />
                    <Route index element={<HomePage />} />
                        <Route path="/list-popular-song" element={<ListPopularSong />} />
                        <Route path="/list-popular-artist" element={<ListPopularArtists />} />
                        <Route path="/list-popular-album" element={<ListPopularAlbum />} />
                        <Route path="/list-song-at-work" element={<SongAtWork/>} />
                        <Route path="/list-song-at-party" element={<SongAtParty/>} />
                        <Route path="/list-song-NCSRelease" element={<SongNCSRelease/>} />
                        <Route path="/list-song-party-summervibe" element={<SongSummerVibe/>} />
                        <Route path="/list-song-USUKTopHit" element={<SongUSUKTopHit/>} />
                    <Route path="ca-nhan/*" element={<ProfilePage />} />
                    <Route path="the-loai" element={<CategoryPage />} />
                    <Route path="page2" element={<Datapage2 />} />
                    <Route path="search/:search/*" element={<SearchPage />} />

                    {/* 
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<RegisterPage />} />
                    <Route path="/404" element={<NotFoundPage />} />
                    <Route path="/forgot" element={<ForgotPassword />} /> */}
                </Routes>
                {/* {children} */}
            </div>
            <Footer />
        </>
    )
}