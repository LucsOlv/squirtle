import { Task, type TaskType } from "../../models/Task";
import { connectDB } from "../../config/database";
import RenderHtml from "../../util/htmlRender";

export async function ListTasksUseCase() : Promise<TaskType[]> {
    await connectDB();
    const tasks = await Task.find();
    return tasks as TaskType[];
}
