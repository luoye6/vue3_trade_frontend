declare namespace API {
  type Barrage = {
    createTime?: string;
    id?: number;
    isDelete?: number;
    isSelected?: number;
    message?: string;
    updateTime?: string;
    userAvatar?: string;
    userId?: number;
  };

  type BarrageAddRequest = {
    message?: string;
    userAvatar?: string;
  };

  type BarrageQueryRequest = {
    createTime?: string;
    current?: number;
    id?: number;
    isSelected?: number;
    message?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    updateTime?: string;
    userAvatar?: string;
    userId?: number;
  };

  type BarrageUpdateRequest = {
    id?: number;
    isSelected?: number;
    message?: string;
    userAvatar?: string;
    userId?: number;
  };

  type BarrageVO = {
    id?: number;
    isSelected?: number;
    message?: string;
    userAvatar?: string;
    userId?: number;
  };

  type BaseResponse = {
    code?: number;
    data?: Record<string, any>;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponseBarrageVO_ = {
    code?: number;
    data?: BarrageVO;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponseCommentVO_ = {
    code?: number;
    data?: CommentVO;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponseCommodityOrderVO_ = {
    code?: number;
    data?: CommodityOrderVO;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponseCommodityScoreVO_ = {
    code?: number;
    data?: CommodityScoreVO;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponseCommodityTypeVO_ = {
    code?: number;
    data?: CommodityTypeVO;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponseCommodityVO_ = {
    code?: number;
    data?: CommodityVO;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponseInt_ = {
    code?: number;
    data?: number;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponseListCommentVO_ = {
    code?: number;
    data?: CommentVO[];
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponseListCommodity_ = {
    code?: number;
    data?: Commodity[];
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponseListMapStringObject_ = {
    code?: number;
    data?: MapStringObject_[];
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponseListMyCommentVO_ = {
    code?: number;
    data?: MyCommentVO[];
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponseLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponseMapStringObject_ = {
    code?: number;
    data?: Record<string, any>;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponseNoticeVO_ = {
    code?: number;
    data?: NoticeVO;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageBarrage_ = {
    code?: number;
    data?: PageBarrage_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageBarrageVO_ = {
    code?: number;
    data?: PageBarrageVO_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageComment_ = {
    code?: number;
    data?: PageComment_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageCommentVO_ = {
    code?: number;
    data?: PageCommentVO_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageCommodity_ = {
    code?: number;
    data?: PageCommodity_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageCommodityOrder_ = {
    code?: number;
    data?: PageCommodityOrder_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageCommodityOrderVO_ = {
    code?: number;
    data?: PageCommodityOrderVO_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageCommodityScore_ = {
    code?: number;
    data?: PageCommodityScore_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageCommodityScoreVO_ = {
    code?: number;
    data?: PageCommodityScoreVO_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageCommodityType_ = {
    code?: number;
    data?: PageCommodityType_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageCommodityTypeVO_ = {
    code?: number;
    data?: PageCommodityTypeVO_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageCommodityVO_ = {
    code?: number;
    data?: PageCommodityVO_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageNotice_ = {
    code?: number;
    data?: PageNotice_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageNoticeVO_ = {
    code?: number;
    data?: PageNoticeVO_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePagePost_ = {
    code?: number;
    data?: PagePost_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePagePostVO_ = {
    code?: number;
    data?: PagePostVO_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePagePrivateMessage_ = {
    code?: number;
    data?: PagePrivateMessage_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePagePrivateMessageVO_ = {
    code?: number;
    data?: PagePrivateMessageVO_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageUserAiMessage_ = {
    code?: number;
    data?: PageUserAiMessage_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageUserAiMessageVO_ = {
    code?: number;
    data?: PageUserAiMessageVO_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageUserCommodityFavorites_ = {
    code?: number;
    data?: PageUserCommodityFavorites_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageUserCommodityFavoritesVO_ = {
    code?: number;
    data?: PageUserCommodityFavoritesVO_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePostVO_ = {
    code?: number;
    data?: PostVO;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePrivateMessageVO_ = {
    code?: number;
    data?: PrivateMessageVO;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: User;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponseUserAiMessage_ = {
    code?: number;
    data?: UserAiMessage;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponseUserAiMessageVO_ = {
    code?: number;
    data?: UserAiMessageVO;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponseUserCommodityFavoritesVO_ = {
    code?: number;
    data?: UserCommodityFavoritesVO;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    hashMap?: Record<string, any>;
    message?: string;
  };

  type BuyCommodityRequest = {
    buyNumber?: number;
    commodityId?: number;
    payStatus?: number;
    paymentAmount?: number;
    remark?: string;
  };

  type checkUsingGETParams = {
    /** echostr */
    echostr?: string;
    /** nonce */
    nonce?: string;
    /** signature */
    signature?: string;
    /** timestamp */
    timestamp?: string;
  };

  type Comment = {
    ancestorId?: number;
    content?: string;
    createTime?: string;
    id?: number;
    isDelete?: number;
    parentId?: number;
    postId?: number;
    updateTime?: string;
    userId?: number;
  };

  type CommentAddRequest = {
    content?: string;
    parentId?: number;
    postId?: number;
  };

  type CommentEditRequest = {
    content?: string;
    id?: number;
  };

  type CommentQueryRequest = {
    ancestorId?: number;
    content?: string;
    current?: number;
    id?: number;
    pageSize?: number;
    parentId?: number;
    postId?: number;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type CommentUpdateRequest = {
    content?: string;
    id?: number;
    parentId?: number;
    postId?: number;
    userId?: number;
  };

  type CommentVO = {
    ancestorId?: number;
    content?: string;
    createTime?: string;
    id?: number;
    parentId?: number;
    postId?: number;
    repliedUser?: UserVO;
    replies?: CommentVO[];
    updateTime?: string;
    user?: UserVO;
    userId?: number;
  };

  type Commodity = {
    adminId?: number;
    commodityAvatar?: string;
    commodityDescription?: string;
    commodityInventory?: number;
    commodityName?: string;
    commodityTypeId?: number;
    createTime?: string;
    degree?: string;
    favourNum?: number;
    id?: number;
    isDelete?: number;
    isListed?: number;
    price?: number;
    updateTime?: string;
    viewNum?: number;
  };

  type CommodityAddRequest = {
    adminId?: number;
    commodityAvatar?: string;
    commodityDescription?: string;
    commodityInventory?: number;
    commodityName?: string;
    commodityTypeId?: number;
    degree?: string;
    favourNum?: number;
    isListed?: number;
    price?: number;
    viewNum?: number;
  };

  type CommodityEditRequest = {
    adminId?: number;
    commodityAvatar?: string;
    commodityDescription?: string;
    commodityInventory?: number;
    commodityName?: string;
    commodityTypeId?: number;
    degree?: string;
    favourNum?: number;
    id?: number;
    isListed?: number;
    price?: number;
    viewNum?: number;
  };

  type CommodityOrder = {
    buyNumber?: number;
    commodityId?: number;
    createTime?: string;
    id?: number;
    isDelete?: number;
    payStatus?: number;
    paymentAmount?: number;
    remark?: string;
    updateTime?: string;
    userId?: number;
  };

  type CommodityOrderAddRequest = {
    buyNumber?: number;
    commodityId?: number;
    payStatus?: number;
    paymentAmount?: number;
    remark?: string;
    userId?: number;
  };

  type CommodityOrderEditRequest = {
    id?: number;
    payStatus?: number;
    remark?: string;
  };

  type CommodityOrderQueryRequest = {
    buyNumber?: number;
    commodityId?: number;
    current?: number;
    id?: number;
    pageSize?: number;
    payStatus?: number;
    paymentAmount?: number;
    remark?: string;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
    userName?: string;
    userPhone?: string;
  };

  type CommodityOrderUpdateRequest = {
    buyNumber?: number;
    commodityId?: number;
    id?: number;
    payStatus?: number;
    paymentAmount?: number;
    remark?: string;
    userId?: number;
  };

  type CommodityOrderVO = {
    buyNumber?: number;
    commodityId?: number;
    commodityName?: string;
    createTime?: string;
    id?: number;
    isDelete?: number;
    payStatus?: number;
    paymentAmount?: number;
    remark?: string;
    updateTime?: string;
    userId?: number;
    userName?: string;
    userPhone?: string;
  };

  type CommodityQueryRequest = {
    adminId?: number;
    commodityDescription?: string;
    commodityInventory?: number;
    commodityName?: string;
    commodityTypeId?: number;
    current?: number;
    degree?: string;
    favourNum?: number;
    id?: number;
    isListed?: number;
    pageSize?: number;
    price?: number;
    sortField?: string;
    sortOrder?: string;
    viewNum?: number;
  };

  type CommodityScore = {
    commodityId?: number;
    createTime?: string;
    id?: number;
    isDelete?: number;
    score?: number;
    updateTime?: string;
    userId?: number;
  };

  type CommodityScoreAddRequest = {
    commodityId?: number;
    score?: number;
    userId?: number;
  };

  type CommodityScoreEditRequest = {
    commodityId?: number;
    id?: number;
    score?: number;
    userId?: number;
  };

  type CommodityScoreQueryRequest = {
    commodityId?: number;
    current?: number;
    id?: number;
    pageSize?: number;
    score?: number;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type CommodityScoreUpdateRequest = {
    commodityId?: number;
    id?: number;
    score?: number;
    userId?: number;
  };

  type CommodityScoreVO = {
    commodityId?: number;
    createTime?: string;
    id?: number;
    score?: number;
    updateTime?: string;
    userId?: number;
    userVO?: UserVO;
  };

  type CommodityType = {
    createTime?: string;
    id?: number;
    isDelete?: number;
    typeName?: string;
    updateTime?: string;
  };

  type CommodityTypeAddRequest = {
    typeName?: string;
  };

  type CommodityTypeEditRequest = {
    id?: number;
    typeName?: string;
  };

  type CommodityTypeQueryRequest = {
    current?: number;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    typeName?: string;
  };

  type CommodityTypeUpdateRequest = {
    id?: number;
    typeName?: string;
  };

  type CommodityTypeVO = {
    createTime?: string;
    id?: number;
    typeName?: string;
    updateTime?: string;
  };

  type CommodityUpdateRequest = {
    adminId?: number;
    commodityAvatar?: string;
    commodityDescription?: string;
    commodityInventory?: number;
    commodityName?: string;
    commodityTypeId?: number;
    degree?: string;
    favourNum?: number;
    id?: number;
    isListed?: number;
    price?: number;
    viewNum?: number;
  };

  type CommodityVO = {
    adminId?: number;
    adminName?: string;
    commodityAvatar?: string;
    commodityDescription?: string;
    commodityInventory?: number;
    commodityName?: string;
    commodityTypeId?: number;
    commodityTypeName?: string;
    createTime?: string;
    degree?: string;
    favourNum?: number;
    id?: number;
    isListed?: number;
    price?: number;
    updateTime?: string;
    viewNum?: number;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getAverageScoreUsingGETParams = {
    /** commodityId */
    commodityId: number;
  };

  type getBarrageVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getCommentByPostIdUsingGETParams = {
    /** postId */
    postId?: number;
  };

  type getCommentVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getCommodityOrderHeatmapDataUsingGETParams = {
    /** payStatus */
    payStatus: number;
    /** userId */
    userId: number;
  };

  type getCommodityOrderVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getCommodityScoreVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getCommodityTypeVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getCommodityVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getNoticeVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getPostVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getPrivateMessageVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserAiMessageVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserCommodityFavoritesVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type LoginUserVO = {
    balance?: number;
    createTime?: string;
    id?: number;
    updateTime?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type MapStringObject_ = true;

  type MyCommentVO = {
    content?: string;
    id?: number;
    postContent?: string;
    postId?: number;
    postTitle?: string;
    updateTime?: string;
  };

  type Notice = {
    createTime?: string;
    id?: number;
    isDelete?: number;
    noticeAdminId?: number;
    noticeContent?: string;
    noticeTitle?: string;
    updateTime?: string;
  };

  type NoticeAddRequest = {
    noticeAdminId?: number;
    noticeContent?: string;
    noticeTitle?: string;
  };

  type NoticeQueryRequest = {
    current?: number;
    id?: number;
    noticeAdminId?: number;
    noticeContent?: string;
    noticeTitle?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
  };

  type NoticeUpdateRequest = {
    id?: number;
    noticeAdminId?: number;
    noticeContent?: string;
    noticeTitle?: string;
  };

  type NoticeVO = {
    createTime?: string;
    id?: number;
    noticeAdminId?: number;
    noticeContent?: string;
    noticeTitle?: string;
    updateTime?: string;
    user?: UserVO;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageBarrage_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Barrage[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageBarrageVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: BarrageVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageComment_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Comment[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCommentVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CommentVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCommodity_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Commodity[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCommodityOrder_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CommodityOrder[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCommodityOrderVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CommodityOrderVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCommodityScore_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CommodityScore[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCommodityScoreVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CommodityScoreVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCommodityType_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CommodityType[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCommodityTypeVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CommodityTypeVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCommodityVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CommodityVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageNotice_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Notice[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageNoticeVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: NoticeVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PagePost_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Post[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PagePostVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: PostVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PagePrivateMessage_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: PrivateMessage[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PagePrivateMessageVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: PrivateMessageVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserAiMessage_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserAiMessage[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserAiMessageVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserAiMessageVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserCommodityFavorites_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserCommodityFavorites[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserCommodityFavoritesVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserCommodityFavoritesVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PayCommodityOrderRequest = {
    commodityOrderId?: number;
  };

  type Post = {
    content?: string;
    createTime?: string;
    favourNum?: number;
    id?: number;
    isDelete?: number;
    tags?: string;
    thumbNum?: number;
    title?: string;
    updateTime?: string;
    userId?: number;
  };

  type PostAddRequest = {
    content?: string;
    tags?: string[];
    title?: string;
  };

  type PostEditRequest = {
    content?: string;
    id?: number;
    tags?: string[];
    title?: string;
  };

  type PostFavourAddRequest = {
    postId?: number;
  };

  type PostFavourQueryRequest = {
    current?: number;
    pageSize?: number;
    postQueryRequest?: PostQueryRequest;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type PostQueryRequest = {
    content?: string;
    current?: number;
    favourUserId?: number;
    id?: number;
    notId?: number;
    orTags?: string[];
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    tags?: string[];
    title?: string;
    userId?: number;
  };

  type PostThumbAddRequest = {
    postId?: number;
  };

  type PostUpdateRequest = {
    content?: string;
    id?: number;
    tags?: string[];
    title?: string;
  };

  type PostVO = {
    content?: string;
    createTime?: string;
    favourNum?: number;
    hasFavour?: boolean;
    hasThumb?: boolean;
    id?: number;
    tagList?: string[];
    thumbNum?: number;
    title?: string;
    updateTime?: string;
    user?: UserVO;
    userId?: number;
  };

  type PrivateMessage = {
    alreadyRead?: number;
    content?: string;
    createTime?: string;
    id?: number;
    isDelete?: number;
    isRecalled?: number;
    recipientId?: number;
    senderId?: number;
    type?: string;
    updateTime?: string;
  };

  type PrivateMessageAddRequest = {
    alreadyRead?: number;
    content?: string;
    isRecalled?: number;
    recipientId?: number;
    senderId?: number;
    type?: string;
  };

  type PrivateMessageEditRequest = {
    alreadyRead?: number;
    content?: string;
    id?: number;
    isRecalled?: number;
    recipientId?: number;
    senderId?: number;
    type?: string;
  };

  type PrivateMessageQueryRequest = {
    alreadyRead?: number;
    content?: string;
    current?: number;
    id?: number;
    isRecalled?: number;
    pageSize?: number;
    recipientId?: number;
    senderId?: number;
    sortField?: string;
    sortOrder?: string;
    type?: string;
  };

  type PrivateMessageUpdateRequest = {
    alreadyRead?: number;
    content?: string;
    id?: number;
    isRecalled?: number;
    recipientId?: number;
    senderId?: number;
    type?: string;
  };

  type PrivateMessageVO = {
    alreadyRead?: number;
    content?: string;
    createTime?: string;
    id?: number;
    isRecalled?: number;
    recipientId?: number;
    senderId?: number;
    type?: string;
    updateTime?: string;
  };

  type recommendCommoditiesUsingGETParams = {
    /** userId */
    userId: number;
  };

  type uploadFileUsingPOSTParams = {
    biz?: string;
  };

  type User = {
    aiRemainNumber?: number;
    balance?: number;
    createTime?: string;
    editTime?: string;
    id?: number;
    isDelete?: number;
    mpOpenId?: string;
    unionId?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userPhone?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserAddRequest = {
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type UserAiMessage = {
    aiGenerateText?: string;
    createTime?: string;
    id?: number;
    isDelete?: number;
    updateTime?: string;
    userId?: number;
    userInputText?: string;
  };

  type UserAiMessageAddRequest = {
    aiGenerateText?: string;
    userId?: number;
    userInputText?: string;
  };

  type UserAiMessageEditRequest = {
    aiGenerateText?: string;
    createTime?: string;
    id?: number;
    updateTime?: string;
    userId?: number;
    userInputText?: string;
  };

  type UserAiMessageQueryRequest = {
    aiGenerateText?: string;
    createTime?: string;
    current?: number;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    updateTime?: string;
    userId?: number;
    userInputText?: string;
  };

  type UserAiMessageUpdateRequest = {
    aiGenerateText?: string;
    createTime?: string;
    id?: number;
    updateTime?: string;
    userId?: number;
    userInputText?: string;
  };

  type UserAiMessageVO = {
    aiGenerateText?: string;
    createTime?: string;
    id?: number;
    updateTime?: string;
    userId?: number;
    userInputText?: string;
  };

  type UserCommodityFavorites = {
    commodityId?: number;
    createTime?: string;
    id?: number;
    isDelete?: number;
    remark?: string;
    status?: number;
    updateTime?: string;
    userId?: number;
  };

  type UserCommodityFavoritesAddRequest = {
    commodityId?: number;
    remark?: string;
    status?: number;
    userId?: number;
  };

  type UserCommodityFavoritesEditRequest = {
    commodityId?: number;
    id?: number;
    remark?: string;
    status?: number;
    userId?: number;
  };

  type UserCommodityFavoritesQueryRequest = {
    commodityId?: number;
    current?: number;
    id?: number;
    pageSize?: number;
    remark?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    userId?: number;
  };

  type UserCommodityFavoritesUpdateRequest = {
    commodityId?: number;
    id?: number;
    remark?: string;
    status?: number;
    userId?: number;
  };

  type UserCommodityFavoritesVO = {
    adminId?: number;
    commodityAvatar?: string;
    commodityDescription?: string;
    commodityId?: number;
    commodityInventory?: number;
    commodityName?: string;
    commodityTypeId?: number;
    createTime?: string;
    degree?: string;
    favourNum?: number;
    id?: number;
    isListed?: number;
    price?: number;
    remark?: string;
    status?: number;
    updateTime?: string;
    userId?: number;
    viewNum?: number;
  };

  type userLoginByWxOpenUsingGETParams = {
    /** code */
    code: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    aiRemainNumber?: number;
    balance?: number;
    current?: number;
    id?: number;
    mpOpenId?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    unionId?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateMyRequest = {
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    aiRemainNumber?: number;
    balance?: number;
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserVO = {
    aiRemainNumber?: number;
    balance?: number;
    createTime?: string;
    id?: number;
    userAvatar?: string;
    userName?: string;
    userPhone?: string;
    userProfile?: string;
    userRole?: string;
  };
}
