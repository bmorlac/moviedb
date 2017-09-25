#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE USER moviedb WITH PASSWORD 'moviedb';
    CREATE DATABASE moviedb;
    CREATE DATABASE moviedb_test;
    GRANT ALL PRIVILEGES ON DATABASE moviedb TO moviedb;
    GRANT ALL PRIVILEGES ON DATABASE moviedb_test TO moviedb;
EOSQL
