#!/bin/sh

npx prisma migrate dev --name init

npm run create_admin

exec "$@"