"use strict";
exports.__esModule = true;
var schema_1 = require("./schema");
var handler_resolver_1 = require("@libs/handler-resolver");
exports["default"] = {
    handler: "".concat((0, handler_resolver_1.handlerPath)(__dirname), "/handler.main"),
    events: [
        {
            http: {
                method: 'post',
                path: 'hello',
                request: {
                    schemas: {
                        'application/json': schema_1["default"]
                    }
                }
            }
        },
    ]
};
