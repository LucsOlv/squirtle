import { Task } from "../../models/Task";
import { connectDB } from "../../config/database";

interface AddTaskCommentDTO {
    text: string;
    date: string;
}

export async function AddTaskCommentUseCase(id: string, data: AddTaskCommentDTO) {
    await connectDB();
    const taskId = parseInt(id);
    const task = await Task.findOne({ Id: taskId });

    if (!task) {
        return new Response('Task not found', { status: 404 });
    }

    const comment = {
        id: task.comments.length + 1,
        text: data.text.trim(),
        date: data.date
    };

    task.comments.push(comment);
    await task.save();
    return { success: true };
}
