FROM node
ADD . /app
WORKDIR /app
RUN npm install -g bower
RUN bower --allow-root install
RUN npm install
EXPOSE 3000
CMD node app.js
