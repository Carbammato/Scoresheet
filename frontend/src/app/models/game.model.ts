export interface Game {
    finished: boolean;
    groupId: string;
    participantIds: string[];
    results: Record<string, number>;
    score: number[][];
}
