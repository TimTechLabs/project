
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/skills";
import FeaturedProject from "./components/featuredproject";
import "./App.css";





function App() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <Header />
            <main className="max-w-4xl mx-auto px-4 py-8 space-y-12">
                 <Hero />
                  <Skills />
                <FeaturedProject />
            </main>
        </div>
    );
}
export default App;
