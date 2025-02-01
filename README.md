# Vehicle Management System

Este é um projeto de demonstração que implementa um sistema de gerenciamento de veículos utilizando Next.js, TypeScript, Zustand e Shadcn/UI. O projeto demonstra duas diferentes abordagens de gerenciamento de estado com Zustand.

## 🚀 Tecnologias

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn ou pnpm

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone [url-do-repositorio]
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Execute o projeto:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Acesse `http://localhost:3000` no seu navegador

## 📦 Estrutura do Projeto

```
src/
├── app/
│   ├── vehicle-basic-zustand/     # Implementação com Zustand básico
│   └── vehicle-context-zustand/   # Implementação com Zustand + Context
├── stores/
│   └── useVehicles.ts            # Store global do Zustand
└── templates/
    └── vehicle-context-zustand/   # Componentes e lógica do Context
        ├── components/
        ├── context/
        ├── mocks/
        ├── store/
        └── schema.ts
```

## 🎯 Funcionalidades

- CRUD completo de veículos
- Validação de formulários com Zod
- Interface responsiva com Shadcn/UI
- Duas implementações diferentes de gerenciamento de estado

## 📚 Padrões de Gerenciamento de Estado

### 1. Global State Management (Basic Zustand)

> Localização: `src/stores/useVehicles.ts`

Neste padrão, o Zustand é utilizado como um gerenciador de estado global, onde a store é criada e exportada diretamente para uso em toda a aplicação.

#### Características:

- Estado compartilhado globalmente
- Singleton pattern - uma única instância da store
- Acesso direto através do hook `useVehiclesStore`
- Ideal para estados que precisam ser acessados em múltiplos lugares da aplicação

### 2. Local State Management with Context (Context + Zustand)

> Localização: `src/templates/vehicle-context-zustand/`

Neste padrão, combinamos Zustand com Context API para criar stores isoladas para diferentes partes da aplicação.

#### Características:

- Estado isolado por contexto
- Múltiplas instâncias da mesma store
- Acesso através do hook `useVehicleStore` específico do contexto
- Ideal para estados que precisam ser compartilhados apenas em uma parte específica da aplicação

## 📝 Comparação dos Padrões

### Global State (Basic Zustand):

✅ Mais simples de implementar
✅ Melhor para estados verdadeiramente globais
✅ Menor boilerplate
❌ Não permite múltiplas instâncias
❌ Pode causar re-renders desnecessários

### Context + Zustand:

✅ Permite múltiplas instâncias independentes
✅ Melhor isolamento de estado
✅ Mais flexível para reutilização
✅ Melhor performance em grandes aplicações
❌ Mais complexo de implementar
❌ Requer mais boilerplate
❌ Necessita de Provider

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Por favor, leia as diretrizes de contribuição primeiro.

1. Faça o Fork do projeto
2. Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

## ✨ Demonstração

O projeto possui duas rotas principais para demonstrar os diferentes padrões:

- `/vehicle-basic-zustand` - Implementação usando Zustand básico
- `/vehicle-context-zustand` - Implementação usando Zustand com Context API

Cada implementação oferece as mesmas funcionalidades, mas com diferentes abordagens de gerenciamento de estado.
