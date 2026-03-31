import { useState, type ReactNode } from "react";
import type { Team } from "../definitions/team";
import { allTeams } from "../definitions/teams";
import { mapTeamsToStandings, StandingContext } from "./StandingContext";
import { Standing } from "../definitions/standing";
import type { MatchOutcome } from "../simulation/simulation";
import type { Match } from "../definitions/match";

export interface IStandingProviderProps {
  children?: ReactNode,
  teams: Team[]
}

export const StandingProvider = ({children, teams = allTeams}: IStandingProviderProps) => {

  const [standings, setStandings] = useState(() => mapTeamsToStandings(teams));

  const resetStandings = (teams: Team[] = allTeams) => {
    setStandings(() => mapTeamsToStandings(teams));
  }

  const getStandingByTeam = (team: Team) => {
    const search = standings.find(standing => standing.team === team);
    if (!search) {
      const newStanding = new Standing({team, type: 'short'})
      setStandings(current => current.concat(newStanding));
      return newStanding;
    }
    return search;
  }

  const updateStandingsByMatch = (match: Match, matchOutcome: MatchOutcome) => {
    const homeStanding = getStandingByTeam(match.homeTeam);
    const awayStanding = getStandingByTeam(match.awayTeam);

    const newHome = new Standing({...homeStanding, type: 'long'})
    const newAway = new Standing({...awayStanding, type: 'long'})

    // apply goals
    newHome.goalsFor += match.homeScore;
    newHome.goalsAgainst += match.awayScore;
  
    newAway.goalsFor += match.awayScore;
    newAway.goalsAgainst += match.homeScore;
  
    // handle draw/win/loss
    switch (matchOutcome) {
      case "draw":
        newHome.draw.push(match.awayTeam);
        newAway.draw.push(match.homeTeam);
        break;
      case "home":
        newHome.win.push(match.awayTeam);
        newAway.loss.push(match.homeTeam);
        break;
      case "away":
        newAway.win.push(match.homeTeam);
        newHome.loss.push(match.awayTeam);
        break;
    }

    setStandings(current => {
      const newState = [...current]
      const homeReplace = current.indexOf(homeStanding);
      const awayReplace = current.indexOf(awayStanding);
      newState[homeReplace] = newHome;
      newState[awayReplace] = newAway;
      return newState;
    })
  }


  return (
    <StandingContext value={{standings, resetStandings, getStandingByTeam, updateStandingsByMatch}}>
      {children}
    </StandingContext>
  )
}