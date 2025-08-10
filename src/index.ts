export default {
  async fetch(request, env) {
    try {
      if (request.method === "POST") {
        const { prompt } = await request.json();

        if (!prompt) {
          return new Response(
            JSON.stringify({ error: "Prompt is required" }),
            { status: 400, headers: { "Content-Type": "application/json" } }
          );
        }

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${env.OPENAI_API_KEY}`
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
          })
        });

        const data = await response.json();

        return new Response(JSON.stringify(data), {
          headers: { "Content-Type": "application/json" }
        });
      } else {
        return new Response(
          JSON.stringify({ status: "ok", message: "Server is running" }),
          { headers: { "Content-Type": "application/json" } }
        );
      }
    } catch (err) {
      return new Response(
        JSON.stringify({ error: err.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }
};
