# moviedb

## BUILD

`docker build -t moviedb .`

## RUN

`docker run -d -p 5432:5432 -v moviedb:/var/lib/postgresql/data --name moviedb moviedb`

To print the log output of the container:

`docker logs -f moviedb`

To login to the running container:

`docker exec -it moviedb bash`

## STOP

`docker stop moviedb | xargs docker rm`
