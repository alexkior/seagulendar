FROM node:19.8.1-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY --from=build /app /usr/share/nginx/html

# COPY ./nginx.conf /etc/nginx/nginx.conf

# RUN ln -sf /etc/nginx/conf.d/default.conf /etc/nginx/nginx.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
