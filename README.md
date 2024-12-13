# Frontend_TecnoAMF

# Aplicação Frontend em Expo

Este é um aplicativo móvel desenvolvido com **Expo** e **React Native**, que oferece autenticação de usuários, exibição de detalhes específicos do usuário e gerenciamento de informações de semestres. Abaixo está uma descrição das principais telas:

## Funcionalidades
- **Tela de Login**: Realiza a autenticação segura dos usuários com ID e CPF.
- **Tela Inicial**: Exibe informações específicas do usuário autenticado.
- **Tela de Semestres**: Mostra informações detalhadas sobre semestres e cadeiras em um layout organizado.

## Visão Geral das Telas

### 1. Tela de Login
- **Arquivo**: `LoginScreen.tsx`
- **Descrição**: 
  - Contém um formulário simples com campos para `ID` e `CPF`.
  - Envia uma requisição POST para o backend para autenticar o usuário.
  - Após login bem-sucedido, redireciona para a **Tela Inicial** com os detalhes do usuário.

### 2. Tela Inicial
- **Arquivo**: `HomeScreen.tsx`
- **Descrição**:
  - Exibe informações específicas do usuário, recuperadas do backend.
  - Mostra uma lista de usuários, filtrando pelo ID do usuário logado.
  - Inclui um indicador de carregamento enquanto os dados são buscados.

### 3. Tela de Semestres
- **Arquivo**: `SemestreScreen.tsx`
- **Descrição**:
  - Busca e exibe uma lista de semestres e suas respectivas cadeiras.
  - Utiliza um design baseado em cartões para apresentar os detalhes de cada semestre.
  - Possui um indicador de carregamento para melhorar a experiência do usuário.


