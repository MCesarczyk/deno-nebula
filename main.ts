import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const getRandomFortune = async (): Promise<string> => {
  const response = await fetch("https://api.sen.cat/api/fortune");
  const jsonBody: { fortune: string } = await response.json();
  return jsonBody.fortune;
  
};

app.use(async (ctx) => {
  const fortune = await getRandomFortune();
  ctx.response.body = `Your fortune:\n${fortune}`;
});

await app.listen({ port: 8080 });
