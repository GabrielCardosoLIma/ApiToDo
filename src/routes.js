import { Database } from "./database.js";
import { randomUUID } from "node:crypto";
import { buildRoutePath } from "./utils/build-route-path.js";

const database = new Database();

export const routes = [
  {
    method: "POST",
    path: buildRoutePath("/tasks"),
    handler: (req, res) => {
      const { title, description } = req.body;

      if (!title) {
        return res.writeHead(400, { "Content-Type": "application/json" }).end(
          JSON.stringify({
            message: "Erro: O titulo é obrigatório.",
          })
        );
      }

      if (!description) {
        return res.writeHead(400, { "Content-Type": "application/json" }).end(
          JSON.stringify({
            message: "Erro: A descrição é obrigatória.",
          })
        );
      }

      const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: new Date(),
        updated_at: new Date(),
      };

      database.insert("tasks", task);

      return res
        .writeHead(201, { "Content-Type": "application/json" })
        .end(JSON.stringify(task));
    },
  },
  {
    method: "GET",
    path: buildRoutePath("/tasks"),
    handler: (req, res) => {
      const { search } = req.query;

      const tasks = database.select("tasks", {
        title: search,
        description: search,
      });

      return res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(tasks));
    },
  },
  {
    method: "PUT",
    path: buildRoutePath("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params;
      const { title, description } = req.body;

      if (!title && !description) {
        return res.writeHead(400, { "Content-Type": "application/json" }).end(
          JSON.stringify({
            message: "Erro: O titulo ou a descrição é obrigatório.",
          })
        );
      }

      const task = database.select("tasks", { id })[0];

      if (!task) {
        return res.writeHead(404).end();
      }

      database.update("tasks", id, {
        title: title ?? task.title,
        description: description ?? task.description,
        updated_at: new Date(),
      });

      return res.writeHead(204).end();
    },
  },
  {
    method: "DELETE",
    path: buildRoutePath("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params;

      const task = database.select("tasks", { id })[0];

      if (!task) {
        return res.writeHead(404).end();
      }

      database.delete("tasks", id);

      return res.writeHead(204).end();
    },
  },
  {
    method: "PATCH",
    path: buildRoutePath("/tasks/:id/completed"),
    handler: (req, res) => {
      const { id } = req.params;

      const task = database.select("tasks", { id })[0];

      if (!task) {
        return res
          .writeHead(404, { "Content-Type": "application/json" })
          .end(JSON.stringify({ message: "Task não encontrada" }));
      }

      const isTaskCompleted = !!task.completed_at;
      const completed_at = isTaskCompleted ? null : new Date();

      database.update("tasks", id, { completed_at });

      return res.writeHead(204).end();
    },
  },
];
