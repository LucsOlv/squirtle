export type Comment = {
    id: number;
    text: string;
    date: string;
}

export type TaskType = {
    Id: number;
    Number: string;
    Title: string;
    Description: string;
    isComplete: boolean;
    wasRelease: boolean;
    CreatedAt: Date;
    StatusId: number;
    TaskFatherId: number;
    TempoLancado: string[];
    estimatedTime: number;
    comments: Comment[];
}
