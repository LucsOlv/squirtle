import { Task } from "../../models/Task";
import { connectDB } from "../../config/database";

interface AddTaskTimeDTO {
    time: number;
}

export async function AddTaskTimeUseCase(id: string, data: AddTaskTimeDTO) {
    await connectDB();
    const taskId = parseInt(id);
    const task = await Task.findOne({ Id: taskId });

    if (!task) {
        return new Response('Task not found', { status: 404 });
    }

    if (typeof data.time === 'number' && data.time > 0) {
        task.TempoLancado.push(`${data.time}min`);
        await task.save();
        return { success: true };
    }

    return new Response('Invalid time value', { status: 400 });
}
