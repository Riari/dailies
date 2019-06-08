# Dailies

Lightly gamified, MMO-inspired day-to-day task prioritising. Built on golang boilerplate kindly shared by [darkliquid](https://github.com/darkliquid).

## Build Instructions

Dailies requires Go and Node.js. Run `go get -u .` to install dependencies.

### Dev

```bash
go generate
go build
```

This will create a dev build that **does not** bundle the frontend into the binary (and therefore requires the `frontend` folder to be in its working directory). To build a single binary that contains the frontend code as well, add `-tags="static"` to the `go build` line.