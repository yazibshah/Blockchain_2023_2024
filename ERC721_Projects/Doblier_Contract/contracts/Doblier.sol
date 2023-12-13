const { expect } = require("chai");

describe("Doblier Smart contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const hardhatToken = await ethers.deployContract("Doblier");
    expect(await hardhatToken.maxSupply()).to.equal(5);
  });
});