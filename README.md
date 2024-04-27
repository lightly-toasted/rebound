# Rebound
Echo for HTTP

## Query parameters
- `q`: Content to echo, **Required**.
- `encoding`: Optional. When set to `base64`, the content of `q` is decoded from base64 format before processing. Currently, UTF-8 not supported.

## Endpoints
- `/`: Root endpoint, redirects to `/text` if has `q`
- `/text`: Echoes `q` as plain text.
- `/html`: Echoes `q` as HTML content.
- `/file/:name`: Download file named `:name` contains `q`

## Use cases
- Test if your network is working
- Apply CSS styles for your [Vencord](https://vencord.dev/) client (although you can use QuickCSS)
- Quick small file transfer
- Share your simple HTML page without needing a dedicated server
- idk why i made this, this is just a project to see how [Deno](https://deno.dev) works.