import Elysia from "elysia";
import { swagger } from '@elysiajs/swagger'
import { html,Html } from '@elysiajs/html';
import { logger } from "@tqman/nice-logger";
import { logServerInfo } from "./config/server";
import { taskRoutes } from "./routes/taskRoutes";

new Elysia()
    .use(swagger())
    .use(html())
    .use(logger({
        mode: "live",
        withTimestamp: true,
    }))
    .use(taskRoutes)
    .onStart(logServerInfo)
    .listen({
        hostname: '0.0.0.0',
        port: 3000
    }) 