import { KnitServer as Knit } from "@rbxts/knit";

declare global {
	interface KnitServices {
		SampleService: typeof SampleService;
	}
}

const SampleService = Knit.CreateService({
	Name: "SampleService",

	Client: {},

	KnitInit() {
		print("Hello from the server!");
	},

	KnitStart() {},
});

export = SampleService;
