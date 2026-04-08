# Amorae - Full Stack Application

Bem-vindo ao repositório do **Amorae**, uma aplicação Full Stack desenvolvida com foco em segurança, performance e excelente experiência do usuário.

## Arquitetura
O projeto utiliza um modelo **Monorepo**, dividindo a aplicação em dois diretórios principais: `frontend/` e `backend/`. Esta abordagem centraliza o código fonte, facilitando a gestão de dependências, refatorações cross-stack e versionamento unificado, mantendo, porém, as aplicações estritamente isoladas em seus ambientes de build e testes.

## Stack Técnica
* **Frontend:** React com TypeScript (React + TS), Vite, React Router, Styled Components. Comunicação HTTP feita via Axios.
* **Backend:** Java 21, Spring Boot 3, REST API, Maven.
* **Segurança:** Spring Security com JWT (JSON Web Tokens) e encriptação de senhas com BCrypt.
* **Banco de Dados:** PostgreSQL para produção e H2 em memória para testes.
* **Infraestrutura/Deploy:** Docker (com build multistage usando Eclipse Temurin JRE 21), Deploy na nuvem automatizado via Render (Backend) e Vercel (Frontend).

## Destaques de Engenharia
* **Gestão Avançada de JWT:** Utilização de Interceptors no Axios para inclusão automática de headers de autorização (Bearer token) e tratamento global de erros (ex: respostas 401).
* **Optimistic UI:** Estratégia de Interface de Usuário Otimista implementada na sincronização de favoritos, garantindo uma resposta visual imediata ao usuário enquanto a requisição é processada em background.
* **Conteinerização & Deploy Automatizado:** O backend é empacotado através de um Dockerfile multistage na raiz, configurado para respeitar limites estritos de memória (`-Xmx300m -Xss512k`), prevenindo erros de OOM no Render.

## Variáveis de Ambiente

Para rodar a aplicação localmente, certas variáveis de ambiente podem ser configuradas (ou as defaults serão utilizadas).

### Frontend (`frontend/.env`)
* `VITE_API_URL`: URL base da API backend (Padrão: `http://localhost:8080/api`)

### Backend (`backend/src/main/resources/application.properties` ou `.env`)
* `SPRING_DATASOURCE_URL`: URL de conexão com o banco de dados (Padrão: `jdbc:postgresql://localhost:5432/amorae`)
* `SPRING_DATASOURCE_USERNAME`: Usuário do banco (Padrão: `postgres`)
* `SPRING_DATASOURCE_PASSWORD`: Senha do banco (Padrão: `postgres`)
* `JWT_SECRET`: Chave secreta para assinar os tokens JWT
* `JWT_EXPIRATION`: Tempo de expiração do token em milissegundos (Padrão: `86400000` - 24 horas)

## Como Rodar

### Pré-requisitos
* Node.js (npm)
* Java 21 (JDK)
* PostgreSQL (opcional para testes locais, o backend pode falhar se não houver banco configurado, mas os testes usam H2).

### Backend
1. Navegue até o diretório do backend: `cd backend`
2. Construa a aplicação: `./mvnw clean package`
3. Inicie o servidor: `./mvnw spring-boot:run`

### Frontend
1. Navegue até o diretório do frontend: `cd frontend`
2. Instale as dependências: `npm install`
3. Rode o servidor de desenvolvimento: `npm run dev`
