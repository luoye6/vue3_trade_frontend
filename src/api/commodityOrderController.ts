// @ts-ignore
/* eslint-disable */
import request from "@/utils/request";

/** addCommodityOrder POST /api/commodityOrder/add */
export async function addCommodityOrderUsingPost(
  body: API.CommodityOrderAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/commodityOrder/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** deleteCommodityOrder POST /api/commodityOrder/delete */
export async function deleteCommodityOrderUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/commodityOrder/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** editCommodityOrder POST /api/commodityOrder/edit */
export async function editCommodityOrderUsingPost(
  body: API.CommodityOrderEditRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/commodityOrder/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** getCommodityOrderVOById GET /api/commodityOrder/get/vo */
export async function getCommodityOrderVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCommodityOrderVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseCommodityOrderVO_>(
    "/api/commodityOrder/get/vo",
    {
      method: "GET",
      params: {
        ...params
      },
      ...(options || {})
    }
  );
}

/** getCommodityOrderHeatmapData GET /api/commodityOrder/getCommodityOrderHeatmapData */
export async function getCommodityOrderHeatmapDataUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCommodityOrderHeatmapDataUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListMapStringObject_>(
    "/api/commodityOrder/getCommodityOrderHeatmapData",
    {
      method: "GET",
      params: {
        ...params
      },
      ...(options || {})
    }
  );
}

/** listCommodityOrderByPage POST /api/commodityOrder/list/page */
export async function listCommodityOrderByPageUsingPost(
  body: API.CommodityOrderQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCommodityOrder_>(
    "/api/commodityOrder/list/page",
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

/** listCommodityOrderVOByPage POST /api/commodityOrder/list/page/vo */
export async function listCommodityOrderVoByPageUsingPost(
  body: API.CommodityOrderQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCommodityOrderVO_>(
    "/api/commodityOrder/list/page/vo",
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

/** listMyCommodityOrderVOByPage POST /api/commodityOrder/my/list/page/vo */
export async function listMyCommodityOrderVoByPageUsingPost(
  body: API.CommodityOrderQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCommodityOrderVO_>(
    "/api/commodityOrder/my/list/page/vo",
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

/** updateCommodityOrder POST /api/commodityOrder/update */
export async function updateCommodityOrderUsingPost(
  body: API.CommodityOrderUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/commodityOrder/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}
