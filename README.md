# Knit/Roblox-TS Boilerplate
A boilerplate for a Knit and TypeScript project. Big thanks to Osyris for helping me with a bunch of little kinks.

# How to install
Run in this order:
```
git clone <REPO_LINK> | clone the repo
npm install           | install all nessecary modules
npm update            | update modules bcuz they may be outdated
rbxtsc -w             | enter typescript watch mode
rojo serve            | hook up to rojo server
```
# What goes where
All code should only go in ```src```, don't edit anything else.

Within ```src```:
* ```client\main.client.ts```: Entry point for Knit on client.
* ```server\components```: Where any server-side Knit components go.
* ```server\services```: Where any Knit services go.
* ```server\main.server.ts```: Entry point for Knit on server.
* ```shared\components```: Where any client-side Knit components go.
* ```shared\controllers```: Where any Knit controllers go.

Due to my poor understanding of interfaces, any client-side code for components or controllers must go in ```shared``` (ReplicatedStorage) for now, not that this is any major issue. Make an issue if you have any bugs or suggestions for this boilerplate.