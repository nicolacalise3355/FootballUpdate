import { League } from "../interfaces/leagues.models";

export const leagues: League[] = [
    { id: 39, name: 'England' },
    { id: 140, name: 'Spain' },
    { id: 61, name: 'France' },
    { id: 78, name: 'Germany' },
    { id: 135, name: 'Italy' },
];

export function findIdByName(name: string): number{
    const foundLeague = leagues.find(league => league.name === name);
    return foundLeague ? foundLeague.id ?? 0 : 0;
}