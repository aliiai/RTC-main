import { Link } from "react-router-dom";
import "./PageServicesCard.css";
export default function PageServicesCard() {
  return (
    <section>
      <h2>
        leading companies
        <br />
        have trusted us
      </h2>
      <div className="container">
        <div className="card">
          <div
            className="card-inner"
            style={{ "--clr": "#fff" } as React.CSSProperties}
          >
            <div className="box">
              <div className="imgBox">
                <img
                  src="https://www.shutterstock.com/image-photo/chat-ai-bot-tech-futurist-600nw-2281195209.jpg"
                  alt="Trust & Co."
                />
              </div>
              <div className="icon">
                <Link to={`/services/${1}`} className="iconBox">
                  <span className="material-symbols-outlined">
                  Read More
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="content">
            <h3>Custom Clearance 
            </h3>
            <p>
            Customs clearance is the process of inspecting and approving goods for import or export by customs authorities, ensuring compliance with regulations and payment of duties. 
            </p>
            <ul>
              <li
                style={{ "--clr-tag": "#d3b19a" } as React.CSSProperties}
                className="branding"
              >
                Custom Clearance
              </li>
             
            </ul>
          </div>
        </div>

        <div className="card">
          <div
            className="card-inner"
            style={{ "--clr": "#fff" } as React.CSSProperties}
          >
            <div className="box">
              <div className="imgBox">
                <img
                  src="https://www.shutterstock.com/image-photo/cargo-plane-flying-above-container-260nw-2054876753.jpg"
                  alt="Tonic"
                />
              </div>
              <div className="icon">
                <a href="#" className="iconBox">
                  <span className="material-symbols-outlined">
                  Read More
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            <h3>In Land Transportation</h3>
            <p>
            Inland transportation refers to the movement of goods or passengers by road, rail, or inland waterways within a country.
            </p>
            <ul>
              <li
                style={{ "--clr-tag": "#d3b19a" } as React.CSSProperties}
                className="branding"
              >
                In Land Transportation
              </li>
             
            </ul>
          </div>
        </div>

        <div className="card">
          <div
            className="card-inner"
            style={{ "--clr": "#fff" } as React.CSSProperties}
          >
            <div className="box">
              <div className="imgBox">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/023/291/816/non_2x/the-container-cargo-ship-on-the-sea-with-ai-generated-free-photo.jpg"
                  alt="Shower Gel"
                />
              </div>
              <div className="icon">
                <a href="#" className="iconBox">
                  <span className="material-symbols-outlined text-[15px]">
                  Read More
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            <h3>Sea Cargo</h3>
            <p>
             
Sea cargo, also known as ocean freight, refers to the transportation of goods via ships across seas and oceans.
            </p>
            <ul>
              <li
                style={{ "--clr-tag": "#d3b19a" } as React.CSSProperties}
                className="branding"
              >
                Sea Cargo
              </li>
              
            
            </ul>
          </div>
        </div>
        <div className="card">
          <div
            className="card-inner"
            style={{ "--clr": "#fff" } as React.CSSProperties}
          >
            <div className="box">
              <div className="imgBox">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvixc-71RApd5-K6Eps-18g8EndcwNVZWVNQ&s"
                  alt="Shower Gel"
                />
              </div>
              <div className="icon">
                <a href="#" className="iconBox">
                  <span className="material-symbols-outlined">
                    Read More
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            <h3>Air Cargo</h3>
            <p>

            Air cargo refers to the transportation of goods by aircraft, offering fast and efficient delivery for both domestic and international shipments.
            </p>
            <ul>
             
           
              <li
                style={{ "--clr-tag": "#d05fa2" } as React.CSSProperties}
                className="marketing"
              >
                Air Cargo
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
