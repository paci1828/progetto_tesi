### STAGE 1: Build ###
FROM node:latest AS build
WORKDIR /usr/src/app
RUN rm -rf /usr/src/app/*
COPY / ./
COPY package*.json ./

RUN npm install -g @angular/cli && \
    npm install && \
    ng build
COPY . .


### STAGE 2:RUN ###
# Defining nginx image to be used
FROM nginx:latest AS ngi
# Copying compiled code and nginx config to different folder
# NOTE: This path may change according to your project's output folder
RUN rm -rf /usr/share/nginx/html/sea

COPY --from=build /usr/src/app/dist/kc-sea /usr/share/nginx/html/sea
COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf
# Exposing a port, here it means that inside the container
# the app will be using Port 4200 while running
EXPOSE 4200
ENTRYPOINT ["nginx", "-g", "daemon off;"]



# ### STAGE 2: Run ###
# FROM nginx:1.22
# COPY --from=build /usr/src/app/dist/kc-crm /usr/share/nginx/html
# EXPOSE 70
