FROM nginx:1.21.4-alpine
ARG APP_NAME

RUN adduser -D -g 'www' www

COPY tools/deploy/nginx.conf /etc/nginx/nginx.conf
COPY dist/apps/$APP_NAME/browser /usr/share/nginx/html

# this is just a comment 👈️ should be enough 🍋
# geil

CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80
