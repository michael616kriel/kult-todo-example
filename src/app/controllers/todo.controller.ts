import {
  KultController,
  Get,
  Application,
  ControllerBase,
  Post,
  Put,
  Delete,
  Context,
} from '@kult/core';
import Todo from '../models/todo.model';

@KultController('todo')
class TodoController extends ControllerBase {

  @Get('/all')
  async all(ctx: Context, { database: { datasource } }: Application) {
    const todos = await datasource?.getRepository(Todo).find();
    return todos;
  }

  @Put('/create')
  async create(
    { request: { body } }: Context,
    { database: { datasource } }: Application
  ) {
    const repository = datasource?.getRepository(Todo);
    const { title, description } = body as {
      title: string;
      description: string;
    };
    if (repository) {
      const newTodo = await repository.insert({
        title,
        description,
      });
      const id = newTodo?.raw[0].id;
      const todo = await repository.findOne({
        where: {
          id,
        },
      });
      return todo;
    }
    return null;
  }

  @Post('/update')
  async update(
    { request: { body } }: Context,
    { database: { datasource } }: Application
  ) {
    const { id, title, description } = body as {
      id: number;
      title: string;
      description: string;
    };
    const repository = datasource?.getRepository(Todo);
    if (repository) {
      await repository.update(id, { title, description });
      return await repository.findOne({
        where: {
          id,
        },
      });
    }
    return null;
  }

  @Delete('/remove')
  async remove(
    { request: { body } }: Context,
    { database: { datasource } }: Application
  ) {
    const { id } = body as { id: number };
    const repository = datasource?.getRepository(Todo);
    if (repository) {
      const todo = await repository.findOne({
        where: {
          id,
        },
      });
      if (todo) {
        await repository.remove(todo, {});
        return todo;
      }
    }
    return null;
  }
  
}

export default TodoController;
