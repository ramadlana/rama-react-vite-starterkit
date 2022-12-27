# How to:
# git pull
# docker stop ramareactvite
# docker rm ramareactvite
# docker build -t rama-react-vite:1.0 .
# docker run -itd -p 3000:3000 --name ramareactvite rama-react-vite:1.0


# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:16-alpine 
# Set the working directory to /app inside the container
WORKDIR /app
# Copy ( current dir on host) to ( /app dir on container)
COPY . .
# ==== Install dependency =====
RUN yarn global add serve
RUN yarn

# Build the apps
RUN yarn run build
# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Start the app
CMD ["serve","-s", "dist"]