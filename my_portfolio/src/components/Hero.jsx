import meImg from '../assets/me.jpg';
function  ProfileHeader() {
    return (
        <div className="flex items-center gap-3">
            <img src={meImg} alt="Profile" className="w-16 h-16 rounded-full object-cover"/>
            <div className='flex flex-col'>
                <strong>Timothy Simiyu</strong>
                <span>Full Stack Web Development</span>
                </div>
            </div>
            );
}

export default function Hero() {
    return (
        <section className="hero">
            <ProfileHeader/>
            <h2>Hi, I'm Timothy</h2>
            <p>A passionate web developer</p>
        </section>
    )
}

