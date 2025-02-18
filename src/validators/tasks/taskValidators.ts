import { t } from "elysia";

export const taskValidators = {
    createTask: {
        body: t.Object({
            Number: t.String(),
            Title: t.String(),
            Description: t.String(),
            estimatedTime: t.Optional(t.String())
        })
    },

    updateTask: {
        params: t.Object({
            id: t.String()
        }),
        body: t.Object({
            isComplete: t.Optional(t.Boolean()),
            wasRelease: t.Optional(t.Boolean()),
            StatusId: t.Optional(t.Number()),
            estimatedTime: t.Optional(t.Number())
        })
    },

    addTaskTime: {
        params: t.Object({
            id: t.String()
        }),
        body: t.Object({
            time: t.Number()
        })
    },

    addTaskComment: {
        params: t.Object({
            id: t.String()
        }),
        body: t.Object({
            text: t.String(),
            date: t.String()
        })
    }
};
