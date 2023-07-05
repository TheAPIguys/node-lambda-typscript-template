import {
  APIGatewayEvent,
  Context,
  Handler,
  APIGatewayProxyResultV2,
} from "aws-lambda";

export const handler: Handler = async (
  event: APIGatewayEvent,
  context: Context
) => {
  // TODO: Implement your functions here

  const response: APIGatewayProxyResultV2 = {
    // APIGatewayProxyResultV2 is the type of the response object ensuring you reply with the correct format
    statusCode: 200,
    body: JSON.stringify("Hello World!"),
  };

  return response;
};
