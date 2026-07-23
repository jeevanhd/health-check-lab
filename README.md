# Health Check Lab

## Setup
```bash
docker compose up -d
```

## Verify Service
```bash
curl localhost:3000/orders
```

## Stop Database
```bash
docker compose stop db
```

## Observe Behaviour
```bash
docker compose ps
```
