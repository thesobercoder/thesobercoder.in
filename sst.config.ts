/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "thesobercoder-stack",
      removal: input?.stage === "production" ? "retain" : "remove",
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
          }
        : {
            name: `${stage}.thesobercoder.in`,
          };

    new sst.aws.Nextjs("thesobercoder-website", {
      domain,
    });
  },
});
