// src/shared/TasksController.ts

import { BackendMethod, remult } from 'remult';
import { Task } from '../models/task';

export class TasksController {
  @BackendMethod({ allowed: true })
  static async findAll() {
    const taskRepo = remult.repo(Task);
    return await taskRepo.find();
  }
  @BackendMethod({ allowed: true })
  static async insertTask(task: { title: string }) {
    return await remult.repo(Task).insert(task);
  }
  @BackendMethod({ allowed: true })
  static async saveTask(task: Task) {
    return await remult.repo(Task).save(task);
  }
  @BackendMethod({ allowed: true })
  static async deleteTask(task: Task) {
    return await remult.repo(Task).delete(task);
  }
  @BackendMethod({ allowed: true })
  static async setAllCompleted(completed: boolean) {
    for (const task of await remult.repo(Task).find()) {
      await remult.repo(Task).save({ ...task, completed });
    }
  }
}
