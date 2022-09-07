FROM node:18-alpine

WORKDIR /app

ENV NODE_ENV production

COPY package.json package-lock.json ./

RUN npm ci

COPY ./ ./

RUN npm run build

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "run", "start"]