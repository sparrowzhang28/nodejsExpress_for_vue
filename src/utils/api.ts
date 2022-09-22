import request from "./request";
const getList = (req: any) => {
  return request({ url: req.url });
};
export { getList };
