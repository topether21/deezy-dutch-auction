FROM node:20 as base

# Create app directory
WORKDIR /usr/src/app

# Install pnpm
RUN npm install -g pnpm

# Add package file
COPY package.json pnpm-lock.yaml ./

# Install deps
RUN pnpm install

# Copy source
COPY src ./src
COPY tsconfig.json ./tsconfig.json

# Build dist
RUN pnpm run build

# Start production image build
FROM gcr.io/distroless/nodejs20-debian11

# Copy node modules and build directory
WORKDIR /usr/src/app
COPY --from=base /usr/src/app/node_modules ./node_modules
COPY --from=base /usr/src/app/dist ./dist

# Expose port 3000
EXPOSE 3000
CMD ["dist/server.js"]
