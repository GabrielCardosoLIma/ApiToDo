export async function json(req, res) {
//   console.log("Request: ", req);
//   console.log("Response: ", res);

  const buffers = [];

  for await (const chunk of req) {
    // console.log("Chunk: ", chunk);

    buffers.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    req.body = null;
  }

  res.setHeader("Content-type", "application/json");
}
