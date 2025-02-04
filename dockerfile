# Etapa 1: Construção da aplicação Angular
FROM node:22.13.0 AS build

# Definindo o diretório de trabalho
WORKDIR /app

# Copiando os arquivos de configuração e instalando as dependências
COPY package*.json ./
RUN npm install -f

# Copiando o restante dos arquivos e construindo a aplicação
COPY . .
RUN npm run build

# Etapa 2: Configuração do servidor Nginx
FROM nginx:alpine

# Copiando o build Angular para o Nginx
COPY --from=build /app/dist/angular-storybook-example/browser /usr/share/nginx/html

# Configurando o Nginx para servir a aplicação Angular
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expondo a porta padrão do Nginx
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]