
# Scaling node app on Heroku using Throng

## Setup

    yarn install

## Run

    yarn start

## Configuration

### On Heroku
Add at menu `Settings` on `Config Variable` section, an item called `WEB_MEMORY` with value 64. It represents that our app use 64MB to safe work.

### On Heroku-cli (Command line interface)

    $ heroku labs:enable log-runtime-metrics

*Matains the `Heroku logs -t` running on `cli` while update the `config vars` to see the result on log.*

## Manual stress test on command line

    for ((i=1;i<=5;i++)); do   curl -v --header "Connection: keep-alive" "localhost:9000"; done

## Reference

- https://devcenter.heroku.com/articles/node-concurrency
- https://github.com/hunterloftis/throng
- https://devcenter.heroku.com/articles/log-runtime-metrics
