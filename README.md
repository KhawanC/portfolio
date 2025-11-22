# Portfólio Kauã Cassiano

Portfólio profissional desenvolvido com Next.js 14, React 18, Tailwind CSS 4 e Framer Motion.

## 🚀 Features

- ✅ **Next.js 14** com App Router
- ✅ **Server-Side Rendering (SSR)** para SEO otimizado
- ✅ **Internacionalização (i18n)** PT-BR/EN com detecção automática
- ✅ **Animações** com Framer Motion
- ✅ **Tailwind CSS 4** para estilização
- ✅ **Componentes reutilizáveis**
- ✅ **Metadata API** do Next.js para SEO
- ✅ **Modo escuro** por padrão
- ✅ **Totalmente responsivo**

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## 🔧 Instalação

```bash
# Clonar repositório
git clone <url-repositorio>

# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start
```

## 🌐 Desenvolvimento

O servidor de desenvolvimento roda em: **http://localhost:3000**

## 📦 Scripts disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento na porta 3000
- `npm run build` - Cria build de produção otimizado
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa linter do Next.js

## 🗂️ Estrutura do Projeto

```
├── app/                    # App Router do Next.js
│   ├── layout.jsx         # Layout principal com metadata
│   ├── page.jsx           # Página inicial
│   └── globals.css        # Estilos globais
├── src/
│   ├── components/        # Componentes React
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Footer/
│   │   └── LanguageSelector/
│   ├── i18n/             # Configuração de internacionalização
│   │   ├── config.js
│   │   └── locales/
│   │       ├── pt.json
│   │       └── en.json
│   └── assets/           # Assets do projeto (mantido para referência)
├── public/               # Assets estáticos servidos pelo Next.js
│   └── assets/          # Imagens e ícones
├── next.config.js       # Configuração do Next.js
├── tailwind.config.js   # Configuração do Tailwind
└── package.json

```

## 🎨 Tecnologias

- **Next.js 14** - Framework React com SSR
- **React 18** - Biblioteca UI
- **Tailwind CSS 4** - Framework CSS utility-first
- **Framer Motion** - Biblioteca de animações
- **i18next** - Internacionalização
- **ESLint** - Linting de código

## 🌍 Internacionalização

O projeto suporta dois idiomas:
- Português (PT-BR) - padrão
- Inglês (EN)

A detecção é automática baseada no navegador do usuário, com opção de troca manual através do seletor no header.

## 🔍 SEO

O projeto utiliza a Metadata API do Next.js com:
- Meta tags otimizadas
- Open Graph tags
- Twitter Cards
- Sitemap (configurável)
- robots.txt (configurável)

## 📝 Licença

ISC

## 👤 Autor

**Kauã Cassiano**
- Email: equipe@khawantech.online
- Portfolio: [https://localhost:3000](https://localhost:3000)

---

Desenvolvido com ❤️ usando Next.js e React
