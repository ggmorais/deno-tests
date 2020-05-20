import { serve } from 'https://deno.land/std/http/server.ts';

const server = serve({ port: 1515 });

for await (const req of server) {
  req.respond({ body: `Receiving ${req.method} request` });
}