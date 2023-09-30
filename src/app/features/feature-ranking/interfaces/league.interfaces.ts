export interface Team {
    id: number;
    name: string;
    logo: string;
}

export interface Goals {
    for: number;
    against: number;
}

export interface Standing {
    rank: number;
    team: Team;
    points: number;
    goalsDiff: number;
    group: string;
    form: string;
    status: string;
    description: string;
    all: {
        played: number;
        win: number;
        draw: number;
        lose: number;
        goals: Goals;
    };
    home: {
        played: number;
        win: number;
        draw: number;
        lose: number;
        goals: Goals;
    };
    away: {
        played: number;
        win: number;
        draw: number;
        lose: number;
        goals: Goals;
    };
    update: string;
}

export interface LeagueItem {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    standings: Standing[][];
}

export interface Paging {
    current: number;
    total: number;
}

export interface ResponseItem {
    league: LeagueItem;
}

export interface ErrorStandingApi{
    token: string;
}

export interface StandingsApiResponse {
    get: string;
    parameters: {
        league: string;
        season: string;
    };
    errors: ErrorStandingApi[];
    results: number;
    paging: Paging;
    response: ResponseItem[];
}