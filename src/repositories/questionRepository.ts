import { Questions } from '@prisma/client';

import { prisma } from '../config/database';
import { IQuestionData } from '../types/questionTypes';

export async function createQuestion(data: IQuestionData): Promise<Questions> {
  const query = await prisma.questions.create({
    data: {
      askedBy: data.askedBy,
      question: data.question,
    },
  });
  return query;
}

export async function getQuestions(): Promise<Questions[]> {
  const query = await prisma.questions.findMany({
    select: {
      id: true,
      askedBy: true,
      question: true,
    },
  });
  return query;
}
