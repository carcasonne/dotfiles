# Docker

Each directory got its own docker compose. fools at docker should make it possible to compose docker-compose files. To boot up all services run:
```
docker-compose -f .\nginx\docker-compose.yml -f .\navidrome\docker-compose.yml up -d
```

# Secrets

Put secrets in the /secrets directory, using whatever structure you like. Just make sure the docker-compose paths are correct in the "secrets" sections.

# Nginx

The basic auth requires a file called .htpasswd in the /nginx/ directory. Make one however you want and put it there. 