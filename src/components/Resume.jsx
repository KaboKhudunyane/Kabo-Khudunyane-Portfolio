const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>
      <div className="eduation">
        <h2>Education</h2>
        <div className="education-cards">
        <div className="dipCard">
            <div className="hcCard-body">
              <h4 className="card-title">
                Diploma: Information and Communication Technology (NQF7)
              </h4>
              <h4 className="card-subtitle">
                Cape Peninsula University of Technology
              </h4>
              <h4 className="card-text">January 2021 - December 2024</h4>
              <h4 className="card-address">
                Hanover St, District Six, Cape Town, 7925{" "}
              </h4>
            </div>
          
          <div className="hcCard">
            <div className="hcCard-body">
              <h4 className="card-title">
                Higher Certificate: Information Technology (NQF6)
              </h4>
              <h4 className="card-subtitle">
                Cape Peninsula University of Technology
              </h4>
              <h4 className="card-text">January 2017 - December 2017</h4>
              <h4 className="card-address">
                Hanover St, District Six, Cape Town, 7925{" "}
              </h4>
            </div>
          </div></div><div className="hsCard">
            <div className="hsCard-body">
              <h4 className="card-title">National Senior Certificate (NQF5)</h4>
              <h4 className="card-subtitle">Table View High School</h4>
              <h4 className="card-text">January 2011 - December 2015</h4>
              <h4 className="card-address">
                Janssens Avenue, Table View, Flamingo Vlei, Milnerton, 7441
              </h4>
            </div>
          </div>
          
        </div>
      </div>
      <div className="experience">
        <h2>Experience</h2>
      </div>
    </div>
  );
};

export default Resume;
