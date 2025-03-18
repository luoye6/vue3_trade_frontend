// @ts-ignore
/* eslint-disable */
import request from "@/utils/request";

/** addCommodityType POST /api/commodityType/add */
export async function addCommodityTypeUsingPost(
  body: API.CommodityTypeAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/commodityType/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** deleteCommodityType POST /api/commodityType/delete */
export async function deleteCommodityTypeUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/commodityType/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** editCommodityType POST /api/commodityType/edit */
export async function editCommodityTypeUsingPost(
  body: API.CommodityTypeEditRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/commodityType/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** getCommodityTypeVOById GET /api/commodityType/get/vo */
export async function getCommodityTypeVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCommodityTypeVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseCommodityTypeVO_>(
    "/api/commodityType/get/vo",
    {
      method: "GET",
      params: {
        ...params
      },
      ...(options || {})
    }
  );
}

/** listCommodityTypeByPage POST /api/commodityType/list/page */
export async function listCommodityTypeByPageUsingPost(
  body: API.CommodityTypeQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCommodityType_>(
    "/api/commodityType/list/page",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: body,
      ...(options || {})
    }
  );
}

/** listCommodityTypeVOByPage POST /api/commodityType/list/page/vo */
export async function listCommodityTypeVoByPageUsingPost(
  body: API.CommodityTypeQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCommodityTypeVO_>(
    "/api/commodityType/list/page/vo",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: body,
      ...(options || {})
    }
  );
}

/** listMyCommodityTypeVOByPage POST /api/commodityType/my/list/page/vo */
export async function listMyCommodityTypeVoByPageUsingPost(
  body: API.CommodityTypeQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCommodityTypeVO_>(
    "/api/commodityType/my/list/page/vo",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: body,
      ...(options || {})
    }
  );
}

/** updateCommodityType POST /api/commodityType/update */
export async function updateCommodityTypeUsingPost(
  body: API.CommodityTypeUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/commodityType/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}
