const { After, Before } = require('@cucumber/cucumber');
const { AndroidClient } = require('kraken-node');
const dns = require("dns");

Before(async function () {
  dns.setDefaultResultOrder("ipv4first");
  this.deviceClient = new AndroidClient(
    this.device.id, this.apkPath,
    this.apkPackage, this.apkLaunchActivity,
    {}, this.userId
  );
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
})

After(async function () {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});
