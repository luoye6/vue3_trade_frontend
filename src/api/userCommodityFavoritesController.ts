// @ts-ignore
/* eslint-disable */
import request from "@/utils/request";

/** addUserCommodityFavorites POST /api/userCommodityFavorites/add */
export async function addUserCommodityFavoritesUsingPost(
  body: API.UserCommodityFavoritesAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/userCommodityFavorites/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** deleteUserCommodityFavorites POST /api/userCommodityFavorites/delete */
export async function deleteUserCommodityFavoritesUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>(
    "/api/userCommodityFavorites/delete",
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

/** editUserCommodityFavorites POST /api/userCommodityFavorites/edit */
export async function editUserCommodityFavoritesUsingPost(
  body: API.UserCommodityFavoritesEditRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/userCommodityFavorites/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** getUserCommodityFavoritesVOById GET /api/userCommodityFavorites/get/vo */
export async function getUserCommodityFavoritesVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserCommodityFavoritesVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseUserCommodityFavoritesVO_>(
    "/api/userCommodityFavorites/get/vo",
    {
      method: "GET",
      params: {
        ...params
      },
      ...(options || {})
    }
  );
}

/** listUserCommodityFavoritesByPage POST /api/userCommodityFavorites/list/page */
export async function listUserCommodityFavoritesByPageUsingPost(
  body: API.UserCommodityFavoritesQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageUserCommodityFavorites_>(
    "/api/userCommodityFavorites/list/page",
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

/** listUserCommodityFavoritesVOByPage POST /api/userCommodityFavorites/list/page/vo */
export async function listUserCommodityFavoritesVoByPageUsingPost(
  body: API.UserCommodityFavoritesQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageUserCommodityFavoritesVO_>(
    "/api/userCommodityFavorites/list/page/vo",
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

/** listMyUserCommodityFavoritesVOByPage POST /api/userCommodityFavorites/my/list/page/vo */
export async function listMyUserCommodityFavoritesVoByPageUsingPost(
  body: API.UserCommodityFavoritesQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageUserCommodityFavoritesVO_>(
    "/api/userCommodityFavorites/my/list/page/vo",
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

/** updateUserCommodityFavorites POST /api/userCommodityFavorites/update */
export async function updateUserCommodityFavoritesUsingPost(
  body: API.UserCommodityFavoritesUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>(
    "/api/userCommodityFavorites/update",
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
