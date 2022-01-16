interface joke {
    id: string;
    joke: string;
    status: number
}

interface jokeReport {
    joke: string;
    score: number;
    date: string;
}

export {joke, jokeReport}