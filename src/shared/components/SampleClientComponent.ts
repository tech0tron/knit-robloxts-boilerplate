import { Component } from "@rbxts/knit";

class SampleClientComponent implements Component.ComponentClass {
	public static Tag = "SampleClientComponent";

	constructor(instance: Instance) {}

	public Destroy() {}
}

export = SampleClientComponent;
