# 366 Лабс — сайт (Next.js + Tailwind)

## Как запустить сайт локально
1. Установите Node.js (https://nodejs.org)
2. В терминале выполните:
   ```bash
   npm install
   npm run dev
   ```
3. Откройте http://localhost:3000

## Как запустить сайт в интернете (Vercel)
1. Создайте аккаунт на https://vercel.com и подключите GitHub.
2. Загрузите этот проект в новый репозиторий GitHub.
3. Импортируйте репозиторий в Vercel и нажмите **Deploy**.
4. Добавьте домен `366labs.ru` и настройте DNS:
   - A @ → 76.76.21.21
   - CNAME www → cname.vercel-dns.com
