import { http } from './http';
import { Issue, Issues } from '../types/Issue';

export const getIssue = (id: string) => http.get<Issue>(`issues/${id}`);
export const getIssues = (page: number) =>
  http.get<Issues>(`issues?page=${page}&sort=comments&state=open`);
