import React from "react";

function Leagues({ leagues, getTeams }) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h1 className="display-4">Choose you league</h1>
            <p className="lead">
              by clicking on league you will get a list of teams
            </p>
          </div>
          <div className="col-md-7">
            <ul>
              {leagues.map(league => (
                <li key={league.idLeague}>
                  <a href="#section" onClick={() => getTeams(league)}>
                    {league.strLeague}
                  </a>
                </li>
              ))}
            </ul>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Leagues;
