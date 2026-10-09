
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Hero from './components/Hero';
import Skills from './components/skills';
import FeaturedProject from './components/featuredproject';
import Login from './components/login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-white text-gray-900">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={
                <main className="max-w-5xl mx-auto px-6 py-8 space-y-12">
                  <Hero />
                  <Skills />
                  <FeaturedProject />
                </main>
              } 
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;