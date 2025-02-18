import { Elysia } from "elysia";
import { ListTasksUseCase } from "../useCases/tasks/ListTasksUseCase";
import { CreateTaskUseCase } from "../useCases/tasks/CreateTaskUseCase";
import { UpdateTaskUseCase } from "../useCases/tasks/UpdateTaskUseCase";
import { AddTaskTimeUseCase } from "../useCases/tasks/AddTaskTimeUseCase";
import { AddTaskCommentUseCase } from "../useCases/tasks/AddTaskCommentUseCase";
import { taskValidators } from "../validators/tasks/taskValidators";
import { html } from "@elysiajs/html";
import RenderHtml  from "../util/htmlRender";
import { engine } from "../util/engine";

export const taskRoutes = new Elysia() 
    .use(html())
    .get('/', async () => {
        const tasks = await ListTasksUseCase();
        return await engine.renderFile("index", { tasks });;
    })
    .post('/add', async ({ body }) => {
        return await CreateTaskUseCase(body);
    }, taskValidators.createTask)
    .patch('/api/tasks/:id', async ({ params: { id }, body }) => {
        return await UpdateTaskUseCase(id, body);
    }, taskValidators.updateTask)
    .post('/api/tasks/:id/time', async ({ params: { id }, body }) => {
        return await AddTaskTimeUseCase(id, body);
    }, taskValidators.addTaskTime)
    .post('/api/tasks/:id/comments', async ({ params: { id }, body }) => {
        return await AddTaskCommentUseCase(id, body);
    }, taskValidators.addTaskComment);