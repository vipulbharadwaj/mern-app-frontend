import './Footer.css'

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="wrapper">
                    <div className="footer-content">
                        <div className="footer-section about">
                            <h2>About Us</h2>
                            <p>We are VIP Technologies, committed to delivering the best technological solutions.</p>
                        </div>
                        <div className="footer-section links">
                            <h2>Quick Links</h2>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/service">Services</a></li>
                                <li><a href="c/ontact">Contact</a></li>
                                <li><a href="/about">About</a></li>
                            </ul>
                        </div>
                        <div className="footer-section contact">
                            <h2>Contact Us</h2>
                            <p>Email: contact@viptech.com</p>
                            <p>Phone: (123) 456-7890</p>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; VIP Technologies 2024</p>
                    </div>
                </div>
            </footer>
        </>
    );
};
