# Hotel Moreno

Landing page institucional em React 19, TypeScript, Vite e Tailwind CSS.
O site é uma SPA executada no navegador: o build contém somente HTML, CSS,
JavaScript e imagens, sem TanStack Start, SSR, Workers ou servidor Node em produção.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://pixel-perfect-replay-58847.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3dcf7581-9ea6-4e01-9c5c-3c49f9bcb88e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Use Node.js 22.14+ (ou 24+) e npm. A versão recomendada está em `.nvmrc`.

```sh
nvm use
npm ci
npm run dev
```

## Build e publicação estática

```sh
npm run build
npm run preview
```

Publique o conteúdo de `dist/` na raiz do domínio. Não publique `.output/`,
que pertence ao build antigo. `preview` serve somente para conferir o build localmente.
O build gera `index.html`, `quartos/index.html`, `contato/index.html`,
`privacidade/index.html` e `404.html`; as páginas conhecidas podem ser abertas ou
recarregadas diretamente em hospedagens que servem `index.html` de cada diretório.
Para URLs desconhecidas, configure a hospedagem para servir `404.html`.

O HTML é a entrada da SPA, não uma pré-renderização do conteúdo. React renderiza
as páginas e atualiza seus títulos e metadados no navegador. O layout, as fontes,
as fotos e os estilos existentes são preservados.

## Contato

Defina `VITE_CONTACT_API_URL` antes de executar o build para usar a API Rails externa:

```sh
VITE_CONTACT_API_URL=https://api.hotelmoreno.com.br npm run build
```

O formulário envia `POST /api/contact` nessa API, que precisa permitir a origem
do site via CORS. Sem essa variável, permanece o aviso com alternativa pelo WhatsApp.
Variáveis `VITE_*` são públicas; não inclua segredos nelas.

## Validação

```sh
npm run typecheck
npm test
npm run build
```

Use npm e mantenha `package-lock.json` como lockfile do projeto.
