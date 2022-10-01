/*! Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: MIT-0
 */

exports.handler = async (event) => {
  console.log(JSON.stringify(event, null, 2));

  return {
    isBase64Encoded: true,
    statusCode: 200,
    headers: {},
    body: {
      bingBong: true,
    },
  };
};
