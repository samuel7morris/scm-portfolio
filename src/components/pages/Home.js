import React from "react";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="card main-card">
          <div className="card-body" id="main-body">
            <h2 className="card-title">About me</h2>
            <hr />
            <div className="row">
              <img
                className="col-md-3"
                src="https://i.imgur.com/DTL1R7k.jpg"
                alt="standing on a bridge in paris"
              />
              <p className="card-text col">
                I am a 23 year old bootcamp student living in Boulder, CO. I am
                a passionate, creative, problem solver who loves to learn new
                things. I am interested in any opportunity that comes my way
                when it comes to web development. Find me at:
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/samuel-morris-351840105/">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    
                    <a href="https://docs.google.com/document/d/1VK7de0clbdxPwq-EzyVSQwQBapzlc0E7NGiV6BDeH_0/edit?usp=sharing">
                      Resume
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/samuel7morris">GitHub</a>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
