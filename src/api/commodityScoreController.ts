// @ts-ignore
/* eslint-disable */
import request from "@/utils/request";

/** addCommodityScore POST /api/commodityScore/add */
export async function addCommodityScoreUsingPost(
  body: API.CommodityScoreAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/commodityScore/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** getAverageScore GET /api/commodityScore/averageScore */
export async function getAverageScoreUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAverageScoreUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponse>("/api/commodityScore/averageScore", {
    method: "GET",
    params: {
      ...params
    },
    ...(options || {})
  });
}

/** deleteCommodityScore POST /api/commodityScore/delete */
export async function deleteCommodityScoreUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/commodityScore/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** editCommodityScore POST /api/commodityScore/edit */
export async function editCommodityScoreUsingPost(
  body: API.CommodityScoreEditRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/commodityScore/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** getCommodityScoreVOById GET /api/commodityScore/get/vo */
export async function getCommodityScoreVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCommodityScoreVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseCommodityScoreVO_>(
    "/api/commodityScore/get/vo",
    {
      method: "GET",
      params: {
        ...params
      },
      ...(options || {})
    }
  );
}

/** listCommodityScoreByPage POST /api/commodityScore/list/page */
export async function listCommodityScoreByPageUsingPost(
  body: API.CommodityScoreQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCommodityScore_>(
    "/api/commodityScore/list/page",
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

/** listCommodityScoreVOByPage POST /api/commodityScore/list/page/vo */
export async function listCommodityScoreVoByPageUsingPost(
  body: API.CommodityScoreQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCommodityScoreVO_>(
    "/api/commodityScore/list/page/vo",
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

/** listMyCommodityScoreVOByPage POST /api/commodityScore/my/list/page/vo */
export async function listMyCommodityScoreVoByPageUsingPost(
  body: API.CommodityScoreQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCommodityScoreVO_>(
    "/api/commodityScore/my/list/page/vo",
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

/** updateCommodityScore POST /api/commodityScore/update */
export async function updateCommodityScoreUsingPost(
  body: API.CommodityScoreUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/commodityScore/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}
