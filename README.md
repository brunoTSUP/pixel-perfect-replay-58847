# Hotel Moreno

Landing page institucional do Hotel Moreno, desenvolvida com React,
TypeScript, Vite e Tailwind CSS.

O projeto utiliza uma arquitetura SPA (Single Page Application),
executada inteiramente no navegador. O build gera arquivos estáticos
HTML, CSS, JavaScript e imagens, sem necessidade de um servidor Node.js,
SSR ou Workers em produção.

**Website:** https://hotel-moreno.pages.dev/

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Node.js
- npm

## Requisitos

- Node.js 22.14+ (ou 24+)
- npm

A versão recomendada do Node.js está definida no arquivo `.nvmrc`.

## Desenvolvimento

Para configurar e executar o projeto localmente:

```sh
nvm use
npm ci
npm run dev
```

## Build e publicação

Para gerar e visualizar o build de produção localmente:

```sh
npm run build
npm run preview
```

O conteúdo gerado no diretório `dist/` deve ser publicado na raiz
do domínio.

O comando `preview` destina-se exclusivamente à validação local
do build de produção.

### Rotas

O build gera os seguintes arquivos:

- `index.html`
- `quartos/index.html`
- `contato/index.html`
- `privacidade/index.html`
- `404.html`

As páginas conhecidas podem ser acessadas ou recarregadas diretamente
em hospedagens que servem o arquivo `index.html` de cada diretório.

Para URLs desconhecidas, configure a hospedagem para servir `404.html`.

### Renderização

Os arquivos HTML funcionam como pontos de entrada da SPA, não como
páginas pré-renderizadas.

O React é responsável pela renderização das páginas e pela atualização
dos títulos e metadados no navegador.

## Integração com a API de contato

O formulário de contato utiliza uma API externa desenvolvida em Ruby
on Rails.

Para configurar a integração, defina a variável de ambiente
`VITE_CONTACT_API_URL` antes de executar o build:

```sh
VITE_CONTACT_API_URL=https://api.hotelmoreno.com.br npm run build
```

O formulário envia uma requisição `POST /api/contact` para a API,
que deve permitir a origem do site por meio da configuração de CORS.

Caso a variável não seja configurada, o formulário apresenta um aviso
com a alternativa de contato pelo WhatsApp.

**Segurança:** variáveis de ambiente com o prefixo `VITE_` são públicas.
Não utilize essas variáveis para armazenar credenciais, tokens ou
outras informações sensíveis.

## Validação

Antes de integrar alterações ou publicar uma nova versão, execute:

```sh
npm run typecheck
npm test
npm run build
```

## Gerenciamento de dependências

Utilize npm como gerenciador de pacotes e mantenha o arquivo
`package-lock.json` versionado no repositório para garantir a
consistência das instalações entre ambientes.
