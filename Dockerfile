FROM node:18-alpine

# Install openssl and postgresql-client
RUN apk add --no-cache openssl postgresql-client

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install
# Copy the rest of the application
COPY . .
# Generate Prisma client
RUN pnpm prisma generate
RUN pnpm prisma migrate dev --name init




EXPOSE 3000

# Default CMD to run the development server
CMD ["pnpm", "dev"]