import React, { useEffect, useState } from "react";
import { configureAnchors } from "react-scrollable-anchor";
import axios from "axios";

import NavBar from "./components/NavBar";
import Leagues from "./components/Leagues";
import Teams from "./components/Teams";
import CurrentTeam from "./components/CurrentTeam";

import "./App.css";

function App() {
  const [teams, setTeams] = useState();
  const [selectedTeam, setSelectedTeam] = useState();

  const [leagues, setLeagues] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState();

  const [events, setEvents] = useState([]);
  const [teamEvents, setTeamEvents] = useState();

  configureAnchors({ offset: 0, scrollDuration: 700 });

  useEffect(() => {
    getLeagues();
  }, []);

  const getLeagues = async () => {
    const { data } = await axios.get(
      "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php"
    );
    const leagues = data.leagues.filter(league => league.strSport === "Soccer");
    // console.log(leagues);
    leagues.length = 40;
    setLeagues(leagues);
  };

  const getTeams = async ({ strLeague, idLeague }) => {
    setSelectedLeague(strLeague);
    const { data } = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${strLeague.replace(
        /" "/g,
        "%20"
      )}`
    );

    if (data.teams) {
      setTeams(data.teams);
      const { data: dbEvents } = await axios.get(
        `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=${idLeague}`
      );
      if (dbEvents.events) {
        // let eventsArr = dbEvents.events.slice(0, 5);
        dbEvents.events.length = 5;
        let eventsArr = dbEvents.events;
        console.log(eventsArr);
        setEvents(eventsArr);
      } else {
        setEvents([]);
      }
    } else {
      setTeams([]);
    }
  };

  const showTeamStats = async clikedTeam => {
    const selectedTeam = teams.filter(team => team.strTeam === clikedTeam)[0];
    setSelectedTeam(selectedTeam);
    console.log(selectedTeam);
    const { data: dbteamEvents } = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${selectedTeam.idTeam}`
    );
    if (dbteamEvents.events) setTeamEvents(dbteamEvents.events);
    else {
      setTeamEvents([]);
    }
  };

  return (
    <div className="container">
      <NavBar />
      <Leagues leagues={leagues} getTeams={getTeams} />
      {teams && (
        <Teams
          events={events}
          selectedLeague={selectedLeague}
          teams={teams}
          showTeamStats={showTeamStats}
        />
      )}
      {teamEvents && (
        <CurrentTeam
          teamEvents={teamEvents}
          currentTeam={selectedTeam}
          showTeamStats={showTeamStats}
        />
      )}
    </div>
  );
}

export default App;
