import { Component, KnitServer as Knit } from "@rbxts/knit";
import { ServerScriptService } from "@rbxts/services";

Component.Auto(ServerScriptService.TS.components);
Knit.AddServices(ServerScriptService.TS.services);

Knit.Start().catch(warn);
