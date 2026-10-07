import meImg from '../assets/me.jpg';
function  ProfileHeader() {
    return (
    <article>
           <img src={meImg} alt="Profile" className="w-16 h-16 rounded-full object-cover"/>
            <p>Software Engineer who loves creating innovative web solutions</p>
        
            <img />
            <div className='flex flex-col'>
                <strong>Timothy Simiyu</strong>
                <span>Full Stack Web Development</span>
                </div>
        
           </article>
       
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

