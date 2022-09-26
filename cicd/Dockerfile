FROM node:14.17-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json  ./
RUN npm install --frozen-lockfile

FROM node:14.17-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV production

ENV API_HOST=http://0.0.0.0:3000/api

RUN npm run build

FROM node:14.17-alpine AS runner
WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
