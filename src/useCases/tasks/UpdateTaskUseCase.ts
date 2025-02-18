import { Task } from "../../models/Task";
import { connectDB } from "../../config/database";

interface UpdateTaskDTO {
    isComplete?: boolean;
    wasRelease?: boolean;
    StatusId?: number;
    estimatedTime?: number;
}

export async function UpdateTaskUseCase(id: string, data: UpdateTaskDTO) {
    await connectDB();
    const taskId = parseInt(id);
    const task = await Task.findOneAndUpdate(
        { Id: taskId },
        { $set: data },
        { new: true }
    );

    if (!task) {
        return new Response('Task not found', { status: 404 });
    }

    return { success: true };
}
