# Landing Page Victin Cine

Landing page desenvolvida em React + TypeScript + Vite para a página do curso do Victin Cine.

O projeto foi estruturado em seções independentes, com estilos separados por componente e conteúdo centralizado em dados quando faz sentido. A proposta é manter a página fácil de ajustar visualmente sem misturar layout, copy e comportamento em um único arquivo.

## Stack

- React 19
- TypeScript
- Vite
- CSS modular por arquivo de componente
- ESLint

## Scripts

```bash
npm install
npm run dev
```

Scripts disponíveis:

- `npm run dev`: inicia o ambiente de desenvolvimento
- `npm run build`: gera a build de produção em `dist/`
- `npm run preview`: serve localmente a build gerada
- `npm run lint`: executa o lint do projeto

## Estrutura

```text
src/
  components/   componentes reutilizáveis
  sections/     blocos principais da landing
  data/         conteúdo estruturado da página
  styles/       tokens e estilos globais auxiliares
  assets/       assets importados pelo app

public/
  favicon.svg
  icons.svg

assets/
  icons/
  fonts/
  derived/
```

## Organização da página

As seções principais estão montadas em [`src/App.tsx`](src/App.tsx), hoje nesta ordem:

- Hero
- Sobre o curso
- Bônus
- Mentor
- Feedbacks
- Software
- Público
- Oferta
- FAQ
- Footer

## Conteúdo e assets

- Parte do conteúdo textual e URLs de imagens está em [`src/data/landingContent.ts`](src/data/landingContent.ts).
- Há assets locais em `assets/` e `src/assets/`.
- Algumas imagens ainda apontam para arquivos hospedados em `victincine.com.br`. Se a ideia for deixar o projeto totalmente independente, vale migrar essas URLs para assets locais.

## SEO e metadados

Os metadados básicos da página estão em [`index.html`](index.html), incluindo:

- idioma da página
- título da aba
- favicon
- metatags básicas

Se a landing for publicada em outro domínio ou com outra identidade, esse é o primeiro arquivo a revisar.

## Segurança e versionamento

O projeto já possui `.gitignore` configurado para evitar o versionamento de:

- `node_modules`
- `dist`
- arquivos `.env`
- chaves, certificados e arquivos sensíveis
- caches e artefatos locais de editor/ferramentas

## Publicação

Build de produção:

```bash
npm run build
```

Os arquivos finais serão gerados em `dist/`.
