export const Home = ()=>{
    return (
        <>
        <main>
        <section className="section-home">
            <div className="container grid grid-two-cols">
                <div className="home-content">
                    <p>Welcome to the world's best technical company</p>
                    <h1>VIP Tech Welcomes You</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus exercitationem facilis repellat error 
                    sapiente corrupti molestiae rerum fugit fugiat reiciendis quidem eligendi cumque, minima ducimus perspiciatis eius temporibus molestias. 
                    Repellendus.</p>
                    <div className="btn btn-group">
                        <a href="/contact">
                            <button className="btn">Connect Now</button>
                        </a>
                        <a href="/service"> <button className="s-btn">Learn More</button></a>
                    </div>
                </div>
                <div className="home-image">
                    <img src="/images/home2.webp" alt="home-logo" width="500px" height="500px" />
                </div>
            </div>
        </section>
        </main>

        <section className="analytical-section">
    <div className="container grid grid-four-cols">
        <div className="div1">
            <h2>50+</h2>
            <p>Registered Companies</p>
        </div>
        <div className="div1">
            <h2>100,000+</h2>
            <p>Happy Clients</p>
        </div>
        <div className="div1">
            <h2>400+</h2>
            <p>Professional Developers</p>
        </div>
        <div className="div1">
            <h2>24/7</h2>
            <p>Services</p>
        </div>
    </div>
</section>

<section className="section-home">
            <div className="container grid grid-two-cols">
                <div className="home-image">
                    <img src="/images/home2.png" alt="home-logo" width="500px" height="500px" />
                </div>
                <div className="home-content">
                    <p>Welcome to the world's best technical company</p>
                    <h1>Get Started Now!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus exercitationem facilis repellat error 
                    sapiente corrupti molestiae rerum fugit fugiat reiciendis quidem eligendi cumque, minima ducimus perspiciatis eius temporibus molestias. 
                    Repellendus.</p>
                    <div className="btn btn-group">
                        <a href="/contact">
                            <button className="btn">Connect Now</button>
                        </a>
                        <a href="/service"> <button className="s-btn">Learn More</button></a>
                    </div>
                </div>
            </div>
        </section>
        

        </>
    )
};