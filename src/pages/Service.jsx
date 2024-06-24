import { useAuth } from "../store/auth";

export const Service = () => {
    const {services} = useAuth();

    return (
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">Services</h1>
            </div>
            <div className="container grid grid-three-cols">
                {
                   services.map((currElem, index) => {
                    
                    return(
                    <div className="card" key={index}>
                        <div className="card-image">
                            <img src="/images/design.png" alt="services-images"  width="250" height="250"/>
                        </div>
                        <div className="card-details">
                            <div className="grid grid-two-cols">
                                <p className="provider">{currElem.provider}</p>
                                <p className="price">${currElem.price}</p>
                            </div>
                            <h2 className="service">{currElem.service}</h2>
                            <p className="description">{currElem.description}</p>
                        </div>
                    </div>
                    );
                    })};
            </div>
        </section>
    );
};
