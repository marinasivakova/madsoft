export type question = {
  id: number,
  task: {
    type: string,
    question: string,
    options: Array<string>
  }
}

export type answer = {
  id: number,
  answer: Array<string>
}