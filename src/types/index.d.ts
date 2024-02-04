export interface Answer {
    text: string
    votes: number
}

export interface State {
    question: string
    answers: Answer[]
}
