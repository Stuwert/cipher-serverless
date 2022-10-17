import { middyfy } from "@libs/lambda";
import { formatJSONResponse } from "@libs/api-gateway";
import { repeatAString } from "cipher-test-orm";

const health = () => {
  return formatJSONResponse({
    success: true,
    string: repeatAString("test"),
  });
};

export const main = middyfy(health);
