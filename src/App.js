import React from "react";
import { MainLayout } from "./components/layout/MainLayout/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./components/views/HomePage/HomePage.js";
import PostAdd from "./components/views/PostAdd/PostAdd";
import Post from "./components/views/Post/Post";
import PostEdit from "./components/views/PostEdit/PostEdit";
import NotFound from "./components/views/NotFound/NotFound";

// import { Provider } from "react-redux";

function App() {
  return (
    // <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/post/add" component={PostAdd} />
          <Route exact path="/post/:id" component={Post} />
          <Route exact path="/post/:id/edit" component={PostEdit} />
          <Route path="*" component={NotFound} /> */}
        </Routes>
      </MainLayout>
    </BrowserRouter>
    // </Provider>
  );
}

export default App;
