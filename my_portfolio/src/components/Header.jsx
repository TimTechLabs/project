function Header() {
    return (
        <header className="flex justify-between items-center py-4 bg-white shadow-md">
            <div className="bg-400 p-4 text-center">
                <h1 className="text-2xl font-bold text-800">welcome to my portfolio</h1>
            </div>
            <nav className="flex items-center gap-6">   
                <a href="/contact" className="text-green-500">contact</a>
                <a href="/project" className="text-blue-500">project</a>
                <a href="/skills" className="text-indigo-500">skills</a>
                <a href="/about" className="text-red-400">About</a>
                <a href="https://github.com/Timtechlabs" className="text-blue-500">Github</a>
            </nav>
        
        </header>
    );
}
export default Header;
