// @ts-ignore
/* eslint-disable */
import request from "@/utils/request";

/** addPrivateMessage POST /api/privateMessage/add */
export async function addPrivateMessageUsingPost(
  body: API.PrivateMessageAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/privateMessage/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** deletePrivateMessage POST /api/privateMessage/delete */
export async function deletePrivateMessageUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/privateMessage/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** editPrivateMessage POST /api/privateMessage/edit */
export async function editPrivateMessageUsingPost(
  body: API.PrivateMessageEditRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/privateMessage/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** getPrivateMessageVOById GET /api/privateMessage/get/vo */
export async function getPrivateMessageVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPrivateMessageVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePrivateMessageVO_>(
    "/api/privateMessage/get/vo",
    {
      method: "GET",
      params: {
        ...params
      },
      ...(options || {})
    }
  );
}

/** listPrivateMessageByPage POST /api/privateMessage/list/page */
export async function listPrivateMessageByPageUsingPost(
  body: API.PrivateMessageQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePagePrivateMessage_>(
    "/api/privateMessage/list/page",
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

/** listPrivateMessageVOByPage POST /api/privateMessage/list/page/vo */
export async function listPrivateMessageVoByPageUsingPost(
  body: API.PrivateMessageQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePagePrivateMessageVO_>(
    "/api/privateMessage/list/page/vo",
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

/** listMyPrivateMessageVOByPage POST /api/privateMessage/my/list/page/vo */
export async function listMyPrivateMessageVoByPageUsingPost(
  body: API.PrivateMessageQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePagePrivateMessageVO_>(
    "/api/privateMessage/my/list/page/vo",
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

/** updatePrivateMessage POST /api/privateMessage/update */
export async function updatePrivateMessageUsingPost(
  body: API.PrivateMessageUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/privateMessage/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}
