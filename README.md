# whizant (whizant-ui)

Whizant ui

## Local Development Setup

If it's not already done, clone the `local-traefik` repository

```console
$ mkdir -p ${PROJECT_BASE_DIR}/global/common-utils
$ cd ${PROJECT_BASE_DIR}/global/common-utils
$ git clone git@gitlab.com:cilalabs/global/common-utils/local-traefik.git
```

Run traefik
```console
$ cd local-traefik
$ make create-traefik-network-once
$ make up
```

Clone this repository
```
$ mkdir -p ${PROJECT_BASE_DIR}/whizant
$ git clone git@gitlab.com:cilalabs/whizant/whizant-ui.git
```

Run the application
```
$ cd whizant-ui
$ docker-compose up
```

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

### Maintainers

Rudra - @ramrudra

Pallavi - @pallavi4

Sowndarya - @sowndarya.5646
