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

    // TODO: Visit this later when/if WAF is availble for other regions
    // because we are deploying to ap-south-1 and WAF is only available in us-east-1

    // const waf = new aws.wafv2.WebAcl("thesobercoder-waf", {
    //   description: "WAF rules for CloudFront distribution",
    //   scope: "CLOUDFRONT",
    //   defaultAction: {
    //     allow: {},
    //   },
    //   rules: [
    //     // Rate limiting rule
    //     {
    //       name: "RateLimit",
    //       priority: 1,
    //       statement: {
    //         rateBasedStatement: {
    //           limit: 300, // Requests per 5 minutes per IP
    //           aggregateKeyType: "IP",
    //         },
    //       },
    //       action: {
    //         block: {},
    //       },
    //       visibilityConfig: {
    //         cloudwatchMetricsEnabled: true,
    //         metricName: "RateLimitRule",
    //         sampledRequestsEnabled: true,
    //       },
    //     },
    //     // Common Rule Set (protects against common web exploits)
    //     {
    //       name: "CommonRules",
    //       priority: 2,
    //       overrideAction: {
    //         none: {},
    //       },
    //       statement: {
    //         managedRuleGroupStatement: {
    //           name: "AWSManagedRulesCommonRuleSet",
    //           vendorName: "AWS",
    //         },
    //       },
    //       visibilityConfig: {
    //         cloudwatchMetricsEnabled: true,
    //         metricName: "CommonRules",
    //         sampledRequestsEnabled: true,
    //       },
    //     },
    //   ],
    //   visibilityConfig: {
    //     cloudwatchMetricsEnabled: true,
    //     metricName: "thesobercoder-waf",
    //     sampledRequestsEnabled: true,
    //   },
    // });

    const site = new sst.aws.Nextjs("thesobercoder", {
      domain,
      transform: {
        cdn: {
          transform: {
            distribution(args) {
              args.webAclId = undefined;
            },
          },
        },
      },
      buildCommand: "bun run sst:build",
    });

    return {
      url: site.url,
    };
  },
});
