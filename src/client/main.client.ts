import { Component, KnitClient as Knit } from "@rbxts/knit";
import { ReplicatedStorage } from "@rbxts/services";

Component.Auto(ReplicatedStorage.TS.components);
Knit.AddControllers(ReplicatedStorage.TS.controllers);

Knit.Start().catch(warn);
