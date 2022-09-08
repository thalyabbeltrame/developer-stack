import { Questions } from '@prisma/client';
import * as questionRepository from '../repositories/questionRepository';
import { IQuestionData } from '../types/questionTypes';

export async function createQuestion(question: IQuestionData): Promise<void> {
  await questionRepository.createQuestion(question);
}

export async function getQuestions(): Promise<Questions[]> {
  const questions = await questionRepository.getQuestions();
  return questions;
}
