import * as answerRepository from '../repositories/answerRepository';
import { IAnswerData } from '../types/answerTypes';

export async function createAnswer(answer: IAnswerData, id: number): Promise<void> {
  await answerRepository.createAnswer(answer, id);
}

export async function getAnswersByQuestionId(id: number): Promise<any> {
  const answers = await answerRepository.getAnswersByQuestionId(id);
  return answers;
}
