import { remultHono } from 'remult/remult-hono';
import { Task, TasksController } from 'shared';

export const api = remultHono({
  entities: [Task],
  controllers: [TasksController],
  logApiEndPoints: true,
  getUser: async (c: any) => {
    const session = c.get('session');
    return session.get('user');
  }
});
