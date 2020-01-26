import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

export default function Teams({
  teams,
  showTeamStats,
  selectedLeague,
  events
}) {
  return (
    <>
      <ScrollableAnchor id={"section"}>
        <span></span>
      </ScrollableAnchor>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 className="display-3">{selectedLeague}</h1>
              <h3 className="display-5">Choose you team</h3>
              <p className="lead">
                by clicking on team you will get a full description about them
              </p>
            </div>
            <div className="col-md-7">
              {teams.length ? (
                <ul>
                  {teams.map(team => (
                    <li key={team.idTeam}>
                      <a
                        href="#section1"
                        onClick={() => showTeamStats(team.strTeam)}
                      >
                        {team.strTeam}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <h3>
                  Unfortunately we have no data about this league, please try
                  another league
                </h3>
              )}
              <div>
                {events.map(event => (
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
                    begining local time: {event.strTimeLocal}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
