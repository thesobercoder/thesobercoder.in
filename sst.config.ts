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
            dns: sst.cloudflare.dns({
              proxy: true,
            }),
          }
        : {
            name: `${stage}.thesobercoder.in`,
            dns: sst.cloudflare.dns({
              proxy: true,
            }),
          };

    const site = new sst.aws.Nextjs("thesobercoder", {
      domain,
      buildCommand: "bun run sst:build",
      assets: {
        fileOptions: [
          {
            files: [
              "**/*.webp",
              "**/*.png",
              "**/*.jpg",
              "**/*.jpeg",
              "**/*.svg",
              "**/*.ico",
            ],
            cacheControl: "public,max-age=31536000,immutable",
          },
          {
            files: ["**/*.js", "**/*.css"],
            cacheControl: "public,max-age=31536000,immutable",
          },
        ],
      },
    });
    return {
      url: site.url,
    };
  },
});
