# Festa dos Doces - Links

Página oficial de links e contatos da Confeitaria Festa dos Doces. Uma interface leve, responsiva e temática para direcionar clientes para encomendas, localização e redes sociais.

## 🚀 Como está hospedado

Este projeto está configurado para rodar no **GitHub Pages**.

### Estrutura para Deploy

O arquivo `.github/workflows/deploy.yml` é responsável por:
1. Instalar as dependências.
2. Construir o site (Build).
3. Publicar automaticamente no branch `gh-pages` ou ambiente Pages.

## 📂 Estrutura Local Obrigatória

Para que o site funcione e as imagens carreguem:

```text
PASTA DO PROJETO/
├── .github/
│   └── workflows/
│       └── deploy.yml      <-- SCRIPT DE AUTOMAÇÃO
├── public/                 
│   └── logo.png            <-- SUA LOGO AQUI
├── components/             
│   └── LinkButton.tsx
├── App.tsx
├── constants.ts
├── index.html
├── index.tsx
├── metadata.json
├── package.json
├── tsconfig.json
├── types.ts
└── vite.config.ts
```

## 💻 Comandos Locais

Para testar no seu computador (requer Node.js instalado):

```bash
npm install
npm run dev
```

## 🎨 Personalização

Edite o arquivo `constants.ts` para mudar telefones, links e textos rapidamente.