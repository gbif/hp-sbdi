[![GBIF Hosted Portal](https://docs.gbif.org/style/gbif-hosted-portal.svg)](https://github.com/gbif/hosted-portals)
[![Build Status](https://builds.gbif.org/job/hp-sbdi/badge/icon)](https://builds.gbif.org/job/hp-sbdi/lastBuild/console)
<!-- License badge example: [![CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY%2D-SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/) -->

# GBIF Hosted Portal: SBDI

This Jekyll website, **[SBDI (Staging)](https://sbdi.hp.gbif-staging.org/)**, makes use of a theme and biodiversity widgets developed by the GBIF network.

> Powered by [GBIF](https://www.gbif.org/)

## Development
The local dev environment runs in Docker using [dev.Dockerfile](dev.Dockerfile) and [docker-compose.yml](docker-compose.yml).

Build and run locally on http://localhost:4000:
```
make run
```

Rebuild the development docker image:
```
make rebuild
```
