import articulos from "../db/articles.json" assert { type: "json" };
export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return reply.view("views/index.html");
  })
}
