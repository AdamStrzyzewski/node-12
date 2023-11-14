docker build . -t adam/test -> build image
docker run -p 42234:3000 -d adam/test
// -d detached (daemon)

docker ps -> lista containers

docker logs <CONTAINER ID>

docker stop <CONTAINER ID>

docker rm <CONTAINER ID>

// after creating docker-compose.yml

docker-compose up -d // build and image and start a container

docker-compose up -d --build // rebuild a container

docker-compose stop // stop a container
docker-compose rm -f // remove all stoppped container
