"use strict";
exports.__esModule = true;
var hello_1 = require("@functions/hello");
var health_1 = require("@functions/health");
var serverlessConfiguration = {
    service: "games",
    frameworkVersion: "3",
    plugins: ["serverless-esbuild", "serverless-offline"],
    provider: {
        name: "aws",
        runtime: "nodejs14.x",
        apiGateway: {
            minimumCompressionSize: 1024,
            shouldStartNameWithService: true
        },
        environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
            NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000"
        }
    },
    // import the function via paths
    functions: { hello: hello_1["default"], health: health_1["default"] },
    package: { individually: true },
    custom: {
        esbuild: {
            bundle: true,
            minify: false,
            sourcemap: true,
            exclude: ["aws-sdk"],
            target: "node14",
            define: { "require.resolve": undefined },
            platform: "node",
            concurrency: 10
        }
    }
};
module.exports = serverlessConfiguration;
