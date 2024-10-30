export type CardTypes = {
    title: string;
    startTask: string;
    limitTask: string;
    statusCard: string;
    task: ArrayTask[];
    onPress: () => void;
}

type ArrayTask = {
    id: number;
    desc: string;
}
