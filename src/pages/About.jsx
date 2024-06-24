import {useAuth} from "../store/auth";

export const About = () => {
  const {user} = useAuth();
  return (
    <>
      <section className="section-about">
        <div className="container grid grid-two-cols">
          <div className="about-content">
            <p>Welcome, {user?.username || 'Guest'}</p>
            <h1>Why Choose Us?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              architecto accusamus repellendus iure sed explicabo ratione, optio
              beatae quo necessitatibus nobis totam tenetur quae deleniti odit
              laudantium? Maiores aliquid corporis ex ipsam sed ad.
            </p>
            <div className="btn btn-group">
            <a href="/contact">
                <button className="btn">Connect Now</button>
            </a>
            <a href="/service">
                <button className="s-btn">Learn More</button>
            </a>
            </div>
          </div>
          <div className="about-image">
            <img src="/images/about2.png" alt="about-logo" width="400px" height="600px" />
          </div>
        </div>
      </section>

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
    </>
  );
};
