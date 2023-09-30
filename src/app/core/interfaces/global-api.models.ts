import { StandingsApiResponse } from "src/app/features/feature-ranking/interfaces/league.interfaces";
import { ScoreApiResponse } from "src/app/features/feature-scores/interfaces/scores.interfaces";

export type GenericApiResponse = StandingsApiResponse | ScoreApiResponse | null;