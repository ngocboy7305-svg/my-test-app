export type Task = {
    id: number;
    title: string;
    description: string;
    priority: string;
    completed: boolean;
    deadline?: string;
    createAt: string;
    priorivity: 'Low' | 'Medium' | 'High';
};