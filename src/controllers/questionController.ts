import { Request, Response } from 'express';
import * as answerService from '../services/answerService';
import * as questionService from '../services/questionService';

export async function createQuestion(req: Request, res: Response) {
  const { askedBy, question } = req.body;
  await questionService.createQuestion({ askedBy, question });
  res.status(201).send('Question created.');
}

export async function createAnswer(req: Request, res: Response) {
  const { answeredBy, answer } = req.body;
  const { id } = req.params;
  await answerService.createAnswer({ answeredBy, answer }, Number(id));
  res.status(201).send('Question answered!');
}

export async function get(_req: Request, res: Response) {
  const questions = await questionService.getQuestions();
  res.status(200).json({ questions });
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const answers = await answerService.getAnswersByQuestionId(Number(id));
  res.status(200).send(answers);
}
