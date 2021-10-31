FROM node:16-alpine
WORKDIR /srv/app
COPY . .
RUN npm install
EXPOSE 3013
ENV NODE_ENV=production
CMD ["node", "index.js"]
# CMD ['nodemon', 'index.js']