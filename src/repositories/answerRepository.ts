import { Answers } from '@prisma/client';
import { prisma } from '../config/database';
import { IAnswerData } from '../types/answerTypes';

export async function createAnswer(answerData: IAnswerData, questionId: number): Promise<Answers> {
  const query = await prisma.answers.create({
    data: {
      questionId: questionId,
      answer: answerData.answer,
      answeredBy: answerData.answeredBy,
    },
  });
  return query;
}

export async function getAnswersByQuestionId(questionId: number) {
  const query = await prisma.questions.findMany({
    where: {
      id: questionId,
    },
    select: {
      id: true,
      askedBy: true,
      question: true,
      Answers: {
        select: {
          answeredBy: true,
          answer: true,
        },
      },
    },
  });
  return query;
}
