/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "thesobercoder-stack",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: input?.stage === "production",
      home: "aws",
    };
  },
  async run() {
    const stage = $app.stage ?? "dev";
    const domain =
      stage === "production"
        ? {
            name: "thesobercoder.in",
            redirects: ["www.thesobercoder.in"],
            dns: sst.cloudflare.dns(),
          }
        : {
            name: `${stage}.thesobercoder.in`,
            dns: sst.cloudflare.dns(),
          };

    const site = new sst.aws.Nextjs("thesobercoder", {
      domain,
      buildCommand: "bun run sst:build",
    });
    return {
      url: site.url,
    };
  },
});
