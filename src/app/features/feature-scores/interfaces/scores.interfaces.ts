export interface Fixture {
    id: number;
    referee: any | null;
    timezone: string;
    date: string;
    timestamp: number;
    periods: {
      first: number;
      second: number | null;
    };
    venue: {
      id: number;
      name: string;
      city: string;
    };
    status: {
      long: string;
      short: string;
      elapsed: number;
    };
  }
  
export  interface League {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
  }
  
export interface Team {
    id: number;
    name: string;
    logo: string;
    winner: boolean;
  }
  
export interface Goals {
    home: number;
    away: number;
  }
  
export interface Score {
    halftime: Goals;
    fulltime: Goals | null;
    extratime: Goals | null;
    penalty: Goals | null;
  }

export interface ScoreFixture{
    fixture: Fixture;
    league: League;
    teams: {
        home: Team;
        away: Team;
    };
    goals: Goals;
    score: Score;
}
  
export interface ScoreApiResponse {
    get: string;
    parameters: {
      live: string;
    };
    errors: any[];
    results: number;
    paging: {
      current: number;
      total: number;
    };
    response: ScoreFixture[];
  }