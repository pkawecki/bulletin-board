import React from "react";
import { MainLayout } from "./components/layout/MainLayout/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import { HomePage } from "./components/views/HomePage/HomePage.js";
import Album from "./components/views/AlbumFromMui/Album";
import { PostAdd } from "./components/views/PostAdd/PostAdd";
import { Post } from "./components/views/Post/Post";
import { PostEdit } from "./components/views/PostEdit/PostEdit";
import { NotFound } from "./components/views/NotFound/NotFound";

// import { Provider } from "react-redux";

function App() {
  return (
    // <Provider store={store}>
    <BrowserRouter>
      <CssBaseline />

      <MainLayout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/post/add" element={<PostAdd />} />
          <Route exact path="/post" element={<Post />} />
          <Route exact path="/post/:id/edit" element={<PostEdit />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route exact path="/album" element={<Album />} /> */}
        </Routes>
      </MainLayout>
    </BrowserRouter>
    // </Provider>
  );
}

export default App;
