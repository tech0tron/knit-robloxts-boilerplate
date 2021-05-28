import { KnitClient as Knit } from "@rbxts/knit";

declare global {
	interface KnitControllers {
		SampleController: typeof SampleController;
	}
}

const SampleController = Knit.CreateController({
	Name: "SampleController",

	KnitInit() {
		print("Hello from the client!");
	},

	KnitStart() {},
});

export = SampleController;
