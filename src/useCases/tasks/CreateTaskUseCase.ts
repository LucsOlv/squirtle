import { Task } from "../../models/Task";
import { connectDB } from "../../config/database";
import RenderHtml from "../../util/htmlRender";

interface CreateTaskDTO {
    Number: string;
    Title: string;
    Description: string;
    estimatedTime?: string;
}

export async function CreateTaskUseCase(data: CreateTaskDTO) {
    await connectDB();
    const taskCount = await Task.countDocuments();
    
    const task = new Task({
        Id: taskCount + 1,
        Number: data.Number,
        Title: data.Title,
        Description: data.Description,
        isComplete: false,
        wasRelease: false,
        CreatedAt: new Date(),
        StatusId: 1,
        TaskFatherId: 0,
        TempoLancado: [],
        estimatedTime: Number.parseInt(data.estimatedTime || "0"),
        comments: []
    });
    
    await task.save();
    const tasks = await Task.find();
    return await RenderHtml("index.ejs", { tasks });
}
