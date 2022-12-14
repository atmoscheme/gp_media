const restAddress = "https://jsonplaceholder.typicode.com/posts/";

const exception = (expectedCode: number, response: any) => {
  if (response.status !== expectedCode) {
    throw new Error(
      `error when fetching users : ${response.statusText} (${response.status})`
    );
  }
};
const errorHandler = (err: any) => {
  console.log(err);
};

const request = async (params: any) => {
  let result;
  try {
    const response: any = await fetch(
      `${restAddress}${params.urlSuffix ? params.urlSuffix : ""}`,
      params
    );
    exception(params.exceptedCode ? params.exceptedCode : 200, response);
    result = await response.json();
    if (params.callback) {
      params.callback();
    }
  } catch (err) {
    errorHandler(err);
  }
  return result;
};

export const getTableData = async (table: any) =>
  await request({
    urlSuffix: `?_limit=${table.perPage}&_page=${table.currentPage}`,
  });

export const sendNewItem = async (data: {}, callback: any) =>
  await request({
    method: "POST",
    body: JSON.stringify(data),
    callback,
    exceptedCode: 201,
  });

export const sendItemNewComment = async (
  data: {},
  id: number,
  callback: Function
) =>
  await request({
    urlSuffix: `${id}/comments`,
    method: "POST",
    body: JSON.stringify(data),
    callback,
    exceptedCode: 201,
  });

export const getItem = async (id: number) =>
  await request({
    urlSuffix: `${id}`,
  });

export const getItemComments = async (id: number | string) =>
  await request({ urlSuffix: `${id}/comments` });
