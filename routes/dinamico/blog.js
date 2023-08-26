import articulos from "../../db/articles.json" assert { type: "json" };
export default async function (fastify, opts) {
  fastify.get('/blog', async function (request, reply) {
    return reply.view("templates/blog.ejs", { articulos });
  })
}
