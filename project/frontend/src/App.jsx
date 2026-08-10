import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Home from "./pages/home/Home";
import BlogPage from "./pages/blog/BlogPage";
import Explore from "./pages/explore/Explore";
import Gallery from "./pages/gallery/Gallery";
import AlbumDetail from "./pages/albumDetail/AlbumDetail";
import AlbumPhotoDetail from "./pages/albumPhotoDetail/AlbumPhotoDetail";
import TravelJournal from "./pages/travelJournal/TravelJournal";
import JournalDetail from "./pages/journalDetail/JournalDetail";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminSetup from "./pages/admin/AdminSetup";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPosts from "./pages/admin/AdminPosts";
import AdminPostForm from "./pages/admin/AdminPostForm";
import AdminGallery from "./pages/admin/AdminGallery";
import AdminGalleryForm from "./pages/admin/AdminGalleryForm";
import AdminJournal from "./pages/admin/AdminJournal";
import AdminJournalForm from "./pages/admin/AdminJournalForm";
import AdminExplore from "./pages/admin/AdminExplore";
import AdminExploreForm from "./pages/admin/AdminExploreForm";
import AdminMessages from "./pages/admin/AdminMessages";
import AdminCategories from "./pages/admin/AdminCategories";
import AdminSubscribers from "./pages/admin/AdminSubscribers";
import AdminProfile from "./pages/admin/AdminProfile";
import AdminSettings from "./pages/admin/AdminSettings";
import ProtectedRoute from "./pages/admin/ProtectedRoute";
import CategoryPage from "./pages/category/CategoryPage";
import PostDetail from "./pages/postDetail/PostDetail";
import PhotoDetail from "./pages/photoDetail/PhotoDetail";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/album/:slug" element={<AlbumDetail />} />
          <Route path="/gallery/album/:slug/:photoId" element={<AlbumPhotoDetail />} />
          <Route path="/travel-journal" element={<TravelJournal />} />
          <Route path="/journal/:slug" element={<JournalDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/setup" element={<AdminSetup />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="posts" element={<AdminPosts />} />
            <Route path="posts/new" element={<AdminPostForm />} />
            <Route path="posts/:id/edit" element={<AdminPostForm />} />
            <Route path="gallery" element={<AdminGallery />} />
            <Route path="gallery/new" element={<AdminGalleryForm />} />
            <Route path="gallery/:id/edit" element={<AdminGalleryForm />} />
            <Route path="journal" element={<AdminJournal />} />
            <Route path="journal/new" element={<AdminJournalForm />} />
            <Route path="journal/:id/edit" element={<AdminJournalForm />} />
            <Route path="explore" element={<AdminExplore />} />
            <Route path="explore/new" element={<AdminExploreForm />} />
            <Route path="explore/:id/edit" element={<AdminExploreForm />} />
            <Route path="categories" element={<AdminCategories />} />
            <Route path="subscribers" element={<AdminSubscribers />} />
            <Route path="messages" element={<AdminMessages />} />
            <Route path="profile" element={<AdminProfile />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/post/:slug" element={<PostDetail />} />
          <Route path="/gallery/:id" element={<PhotoDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
