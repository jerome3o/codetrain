# Code along with CodeTrain

A little scratch pad for coding along with interactive FE js tutorials

## Getting set up

Any of the left folders in the p5js tree can be statically served. BrowserSync appears to be a nice live reloading static server for development.

### Browser Sync

Install:

```bash
npm install -g browser-sync
```

Run (from the respective the directory):

```bash
browser-sync start -s -f . --no-notify --host 0.0.0.0 --port 9000
```