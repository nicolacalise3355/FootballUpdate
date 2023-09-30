import { StandingsApiResponse } from "../../features/feature-ranking/interfaces/league.interfaces";
import { ScoreApiResponse } from "../../features/feature-scores/interfaces/scores.interfaces";

export type GenericApiResponse = StandingsApiResponse | ScoreApiResponse | null;