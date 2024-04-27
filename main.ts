import { Context, Hono } from "https://deno.land/x/hono@v3.4.1/mod.ts";

const app = new Hono();

app.get("/", (c) => {
    if (c.req.query("q") != undefined) return c.redirect(`/text?q=${c.req.query("q")}`);
    return c.redirect("https://github.com/lightly-toasted/rebound")
});

function q(c: Context, useBase64: boolean = false) {
    useBase64 = c.req.query("encoding") === "base64" || useBase64
    let q = c.req.query("q") || '';
    if (useBase64) q = atob(q)
    return q
}

app.get("/text", (c) => c.text(q(c)));
app.get("/html", (c) => c.html(q(c)));
app.get("/file/:name", (c) => {
    const content = q(c);
    const fileName = c.req.param("name") || "file.txt";
    c.header("Content-Type", "application/octet-stream");
    c.header("Content-Disposition", `attachment; filename=${fileName}`);
    return c.body(content);
})

Deno.serve(app.fetch);