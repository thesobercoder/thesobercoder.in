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

    const site = new sst.aws.Nextjs("thesobercoder-website", {
      domain,
    });

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

    // $transform(aws.cloudfront.Distribution, (distribution, opts, name) => {
    //   // Add WAF to CloudFront distribution
    //   distribution.webAclId = $app.stage === "production" ? waf.arn : undefined;
    // });

    return {
      url: site.url,
    };
  },
});
