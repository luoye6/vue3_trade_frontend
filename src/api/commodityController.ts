// @ts-ignore
/* eslint-disable */
import request from "@/utils/request";

/** addCommodity POST /api/commodity/add */
export async function addCommodityUsingPost(
  body: API.CommodityAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/commodity/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** buyCommodity POST /api/commodity/buy */
export async function buyCommodityUsingPost(
  body: API.BuyCommodityRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseMapStringObject_>("/api/commodity/buy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** recommendCommodities GET /api/commodity/commodityRecommendation */
export async function recommendCommoditiesUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.recommendCommoditiesUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListCommodity_>(
    "/api/commodity/commodityRecommendation",
    {
      method: "GET",
      params: {
        ...params
      },
      ...(options || {})
    }
  );
}

/** deleteCommodity POST /api/commodity/delete */
export async function deleteCommodityUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/commodity/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** editCommodity POST /api/commodity/edit */
export async function editCommodityUsingPost(
  body: API.CommodityEditRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/commodity/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** getCommodityVOById GET /api/commodity/get/vo */
export async function getCommodityVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCommodityVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseCommodityVO_>("/api/commodity/get/vo", {
    method: "GET",
    params: {
      ...params
    },
    ...(options || {})
  });
}

/** listCommodityByPage POST /api/commodity/list/page */
export async function listCommodityByPageUsingPost(
  body: API.CommodityQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCommodity_>("/api/commodity/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** listCommodityVOByPage POST /api/commodity/list/page/vo */
export async function listCommodityVoByPageUsingPost(
  body: API.CommodityQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCommodityVO_>(
    "/api/commodity/list/page/vo",
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

/** listMyCommodityVOByPage POST /api/commodity/my/list/page/vo */
export async function listMyCommodityVoByPageUsingPost(
  body: API.CommodityQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCommodityVO_>(
    "/api/commodity/my/list/page/vo",
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

/** payCommodityOrder POST /api/commodity/pay */
export async function payCommodityOrderUsingPost(
  body: API.PayCommodityOrderRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/commodity/pay", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** updateCommodity POST /api/commodity/update */
export async function updateCommodityUsingPost(
  body: API.CommodityUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/commodity/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}
