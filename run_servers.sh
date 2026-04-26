#!/bin/bash
set -e

# Frontend
cd /app/frontend
npm install
npm run build && npx vite preview --port 3000 --host 0.0.0.0 --strictPort &
