import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const CurrentTeam = ({ currentTeam, teamEvents, showTeamStats }) => {
  return (
    <>
      <ScrollableAnchor id={"section1"}>
        <span></span>
      </ScrollableAnchor>
      <div className="card mb-3">
        <div className=" d-flex justify-content-center">
          <img
            src={currentTeam.strTeamBanner || currentTeam.strTeamBadge}
            className="card-img-top mt-1"
            alt={currentTeam.strTeam}
            style={
              !currentTeam.strTeamBanner
                ? { height: "200px", width: "200px" }
                : { margin: "0px" }
            }
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{currentTeam.strTeam}</h5>
          <p className="card-text">{currentTeam.strDescriptionEN}</p>
          <hr />
          <ul>
            <li>
              <a
                href={`http://${currentTeam.strWebsite}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Web Page
              </a>
            </li>
            <li>
              <a
                href={`http://${currentTeam.strTwitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a href={`http://${currentTeam.strYoutube}`}>YouTube channel</a>
            </li>
            <li>
              <a
                href={`http://${currentTeam.strInstagram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Intagram
              </a>
            </li>
            <li>
              <a
                href={`http://${currentTeam.strFacebook}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
          <hr />
          <div className="row">
            <div className="col-sm-6">
              <ul>
                <li>Year formed: {currentTeam.intFormedYear}</li>
                <li>Stadium: {currentTeam.strStadium}</li>
                <li>Location: {currentTeam.strStadiumLocation} </li>
                <li>Capacity: {currentTeam.intStadiumCapacity}</li>
              </ul>
              <div>
                <hr />
                {teamEvents[0] && (
                  <>
                    <h4>Coming Games</h4>
                    {teamEvents.map(event => (
                      <p key={event.idEvent}>
                        {event.dateEvent}{" "}
                        <a
                          href="#section1"
                          onClick={() => showTeamStats(event.strHomeTeam)}
                        >
                          <strong>{event.strHomeTeam}</strong>
                        </a>{" "}
                        VS{" "}
                        <a
                          href="#section1"
                          onClick={() => showTeamStats(event.strAwayTeam)}
                        >
                          <strong>{event.strAwayTeam}</strong>
                        </a>{" "}
                        {event.strTimeLocal} - Local time
                      </p>
                    ))}
                  </>
                )}
              </div>
            </div>
            <div className="col-sm-6  mx-auto">
              <img
                src={
                  currentTeam.strStadiumThumb ||
                  currentTeam.strTeamBanner ||
                  currentTeam.strTeamBadge
                }
                alt={currentTeam.strStadium}
                className="img-thumbnail"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CurrentTeam;
