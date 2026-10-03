export const formatResponseSuccess = (
  message,
  code = 200,
  apiResponse
) => {
  return {
    success: true,
    code,
    message,
    data: apiResponse,
  };
};

export const formatResponseError = (
  errorMessage,
  code = 500
) => {
  return {
    success: false,
    code,
    errorMessage,
  };
};

export const vapiResponseFormat = (
  toolId,
  apiResponse
) => {
  return {
    results: [
      {
        toolCallId: toolId,
        result: apiResponse,
      },
    ],
  };
};
