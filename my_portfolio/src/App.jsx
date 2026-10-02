import me from './assets/me.jpg';
    
function App() {
  return (
    <div className="bg-gray-100 text-gray-800">

    <header className="fixed top-0 w-full z-10 bg-gray-900 text-white p-4 flex justify-between">
        <h1 className="font-bold text-xl">Timothy</h1>
        <nav className="flex gap-4">
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="https://github.com/TimTechLabs" target="_blank">GitHub</a>
        </nav>
      </header>
    <section className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center gap-10 px-6 pt-24">
        <img src={me}
        alt="Timothy"
        className="w-64 h-64 h-80 object-cover rounded-2xl border-4 border-4 border-blue-600"/>
            <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-4xl font-bold">Hi, I'm Timothy</h2>
          <p className="mt-2 text-lg">Software Developer from Nairobi, Kenya</p>
          <a href="#contact" className="inline-blockmt-6 bg-blue-600 px-6 py-3 rounded-lg">
            Contact Me
          </a>
        </div>
      </section>
         <section id="about" className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="max-w-xl mx-auto">
          I am a software developer and founder of TimTechLabs. I build
          websites and apps using React, Next.js, Node.js and Python.
        </p>
      </section>
          <section id="skills" className="p-10 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="font-bold text-xl">Web Development</h3>
            <p>React, Next.js, Node.js, Django</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="font-bold text-xl">Mobile Development</h3>
            <p>Building apps for Android and iOS</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="font-bold text-xl">Machine Learning</h3>
            <p>Python, data and smart models</p>
          </div>
        </div>
      </section>
          <section id="projects" className="p-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-bold text-xl">Jumia Clone</h3>
            <p>E-commerce site with M-Pesa payments.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-bold text-xl">TimTech LMS</h3>
            <p>Learning Management System built with Django.</p>
          </div>
        </div>
      </section>
           <section id="contact" className="p-10 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <a href="mailto:timothysimiyu@gmail.com" 
  className="underline">
          timothysimiyu@gmail.com
        </a>
      </section>
      </div>
  );
}
export default App;