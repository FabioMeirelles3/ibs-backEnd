FROM node:20

WORKDIR /usr/src/app

COPY . .
COPY ./.env.development ./.env

RUN npm install --quiet --no-optional --no-fund --loglevel=error

RUN npx prisma generate

EXPOSE 3333

CMD ["npm", "run", "start:dev"]
