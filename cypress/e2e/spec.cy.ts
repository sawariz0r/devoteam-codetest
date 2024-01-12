describe("Just visit e2e test", () => {
	it("should visit", () => {
		cy.visit("/");
	});

	it("should find input field", () => {
		cy.visit("/");
		cy.get("[data-cy='command-input']").should("exist");
	});

	it("should find the run button", () => {
		cy.visit("/");
		cy.get("[data-cy='command-run']").should("exist");
	});

	it("should have default position of 1,1,E", () => {
		cy.visit("/");
		cy.wait(2000);
		cy.get("[data-cy='position']").should("have.text", "Position: 1,1,E");
	});

	it("When entering F it should move one space forward", () => {
		cy.visit("/");

		cy.get("[data-cy='command-input']").type("F");
		cy.get("[data-cy='command-run']").click();
		cy.wait(2000);
		cy.get("[data-cy='position']").should("have.text", "Position: 2,1,E");
	});

	it("When entering RFLFFLRF it should move to 4,0,E given it's starting point is still 1,1,E", () => {
		cy.visit("/");

		cy.get("[data-cy='command-input']").type("RFLFFLRF");
		cy.get("[data-cy='command-run']").click();
		cy.wait(9000); // 8 steps, one per second. 1 second extra to be sure
		cy.get("[data-cy='position']").should("have.text", "Position: 4,0,E");
	});
});
