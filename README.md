<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

Backend services powering tf-app and tf-web

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment

Deployment is done manually, by pushing changes and then pulling them on the do droplet.
Once done so:

```bash
$ pm2 list
$ pm2 stop 0

yarn build
pm2 start 0
```

If changes were made to scheme we need to update database by running pre defined script
```bash
$ yarn typeorm migration:generate src/migrations/initial-migration -d src/config/dataSource.ts
$ yarn typeorm migration:run -d src/config/dataSource.ts
```


## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
