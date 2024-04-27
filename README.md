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
- [Test](https://rebound.deno.dev/?q=Your%20internet%20is%20working%21) if your internet is working
- [Apply](https://rebound.deno.dev/text?q=%40import%20url%28%27https%3A%2F%2Ffonts.googleapis.com%2Fcss2%3Ffamily%3DUbuntu%26display%3Dswap%27%29%3B%2A%7Bfont-family%3A%22Ubuntu%22%20%21important%7D) CSS styles for your [Vencord](https://vencord.dev/) client (although you can use QuickCSS)
- [Quick](https://rebound.deno.dev/file/lorem-ipsum.txt?q=Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit.) small file transfer
- [Share](https://rebound.deno.dev/html?q=PGlmcmFtZSBzcmM9Imh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2RRdzR3OVdnWGNRP2F1dG9wbGF5PTEmbG9vcD0xIiB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgZnJhbWVib3JkZXI9IjAiPjwvaWZyYW1lPg==&encoding=base64) your simple HTML page without needing a dedicated server
- idk why i made this, this is just a project to see how [Deno](https://deno.dev) works.