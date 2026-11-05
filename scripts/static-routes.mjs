import { copyFile, mkdir } from "node:fs/promises";

// Entradas físicas para abrir as páginas diretamente, sem um servidor de aplicação.
for (const route of ["quartos", "contato", "privacidade"]) {
  await mkdir(new URL(`../dist/${route}/`, import.meta.url), { recursive: true });
  await copyFile(
    new URL("../dist/index.html", import.meta.url),
    new URL(`../dist/${route}/index.html`, import.meta.url),
  );
}

await copyFile(
  new URL("../dist/index.html", import.meta.url),
  new URL("../dist/404.html", import.meta.url),
);
