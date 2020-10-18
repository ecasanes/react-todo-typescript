FROM node:alpine as builder
WORKDIR '/app'
COPY package.json ./
RUN npm install
COPY ./ ./
RUN npm run build
# the folder that we needed is in /app/build/*

FROM nginx
# copy over from previous phase
COPY --from=builder /app/build /usr/share/nginx/html

# NGINX default startup starts NGINX server - no need to manually start NGINX

# NOTE for AWS elastic beanstalk
# use Amazon Linux instead of Amazon Linux 2
# AWS can now support docker-compose so use the original version of Amazon Linux for now