import Component from "./../src/components/Component.vue";
import { mount } from "@vue/test-utils";

describe("Component", () => {
	it("renders properly", () => {
		const wrapper = mount(Component);
		wrapper.element.querySelector("div");

		expect(wrapper).toBeDefined();
	});
});
