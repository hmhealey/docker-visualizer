# syntax=docker/dockerfile:1
FROM node:12-alpine

RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]

WORKDIR /app

# Copy just the NPM config files first and then install those dependencies. Doing this apparently makes it so that
# dependencies are only re-installed when the NPM config changes instead of having that happen when any code changes.
COPY package*.json ./
RUN npm ci

# Download the web server
RUN npm install -g serve

# Copy the remaining source code and build it
COPY . .
RUN npm run build

# Run the web server on port 3000
EXPOSE 3000
CMD ["serve", "-s", "build"]