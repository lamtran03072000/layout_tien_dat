FROM nginx
WORKDIR  /usr/share/nginx/html
COPY . .



# docker build . -t img_tiendat_fe 
#docker run -d -p 3030:80 --name cons_tiendat_fe img_tiendat_fe 
