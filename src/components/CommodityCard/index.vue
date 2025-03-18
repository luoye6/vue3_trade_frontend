<template>
  <div class="commodity-detail">
    <el-card style="margin-bottom: 10px">
      <!-- 标题和头像在同一行 -->
      <div class="header">
        <h1 style="margin: 0; font-weight: 700; font-size: 24px">
          {{ commodity.commodityName }}
        </h1>
        <el-avatar
          :src="commodity.commodityAvatar"
          :size="64"
          style="border-radius: 8px; margin-left: 16px"
        />
      </div>

      <!-- 状态信息 -->
      <div class="status-info" style="margin-top: 16px">
        <el-tag type="info" style="margin-right: 8px">
          新旧程度: {{ commodity.degree || "未知" }}
        </el-tag>
        <el-tag type="success" style="margin-right: 8px">
          所属类别: {{ commodity.commodityTypeName || "-" }}
        </el-tag>
        <el-tag type="primary">
          创建者: {{ commodity.adminName || "-" }}
        </el-tag>
        <el-tag
          v-if="commodity.isListed === 0"
          type="danger"
          style="margin-left: 12px"
          >未上架
        </el-tag>
        <el-tag
          v-if="commodity.isListed === 1"
          type="success"
          style="margin-left: 12px"
          >已上架
        </el-tag>
      </div>

      <!-- 价格和库存 -->
      <p style="font-size: 16px; color: #666; margin: 16px 0 0 0">
        价格：{{ commodity.price }} 元 | 库存：{{
          commodity.commodityInventory
        }}
      </p>
      <!-- 操作按钮 -->
      <div class="action-buttons" style="margin-top: 20px">
        <el-button type="primary" @click="handleBuy" :icon="Coin"
          >购买商品
        </el-button>
      </div>

      <!-- 分割线 -->
      <el-divider />

      <!-- 三个图标 -->
      <div class="icon-container">
        <div class="icon-item">
          <el-icon :size="20">
            <View />
          </el-icon>
          <span>{{ viewCount }}</span>
        </div>
        <div class="icon-item" @click="handleCollect">
          <el-icon :size="20">
            <Star v-if="initStatus === 0" />
            <StarFilled v-if="initStatus === 1" color="#fadb14" :size="20" />
          </el-icon>
          <span>{{ favourCount }}</span>
        </div>
        <div class="icon-item" @click="handleShare">
          <el-icon :size="20">
            <Share />
          </el-icon>
          <span>分享</span>
        </div>
      </div>
    </el-card>

    <!-- 新增的详情卡片 -->
    <el-card style="margin-bottom: 10px">
      <el-tabs v-model="detailActiveName" class="demo-tabs">
        <!-- 商品详情 -->
        <el-tab-pane label="商品详情" name="first">
          <div style="font-size: 16px; line-height: 1.8; color: #666">
            {{ commodity.commodityDescription }}
          </div>
        </el-tab-pane>
        <!--        商品评分-->
        <el-tab-pane label="商品评分" name="second">
          <div style="padding: 20px">
            <CommodityScore />
            <CommodityScoreList />
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>

    <!-- 分享对话框 -->
    <el-dialog v-model="shareDialogVisible" width="400px">
      <div class="share-dialog-content">
        <!-- 标题 -->
        <h3
          style="
            font-weight: 700;
            font-size: 24px;
            margin: 0;
            text-align: center;
          "
        >
          分享此商品
        </h3>
        <el-divider />
        <!-- 分享链接 -->
        <div class="share-section">
          <p style="margin: 0 0 10px 0; font-weight: 700; font-size: 20px">
            分享链接：
          </p>
          <el-card>
            <div class="link-container">
              <span>{{ currentPageUrl }}</span>
              <el-button type="primary" @click="copyLink">复制</el-button>
            </div>
          </el-card>
        </div>
        <el-divider />
        <!-- 二维码分享 -->
        <div class="share-section">
          <p style="margin: 0 0 10px 0; font-weight: 700; font-size: 20px">
            二维码分享：
          </p>
          <el-card style="margin: 0 auto">
            <QRCodeVue3
              :value="currentPageUrl"
              :width="200"
              :height="200"
              :imageOptions="{
                hideBackgroundDots: false,
                imageSize: 0.4,
                margin: 0
              }"
            />
          </el-card>
        </div>
      </div>
    </el-dialog>

    <!-- 购买对话框 -->
    <el-dialog v-model="buyDialogVisible" title="购买商品" width="500px">
      <el-form :model="buyForm" label-width="120px">
        <el-form-item label="购买数量" prop="buyNumber">
          <el-input-number
            v-model="buyForm.buyNumber"
            :min="1"
            :max="commodity.commodityInventory"
            @change="updatePaymentAmount"
          />
        </el-form-item>
        <el-form-item label="支付金额" prop="paymentAmount">
          <el-input-number
            v-model="buyForm.paymentAmount"
            :min="0"
            :precision="2"
            readonly
          />
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input
            v-model="buyForm.remark"
            type="textarea"
            placeholder="请输入备注"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="buyDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitBuy">提交</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { Coin } from "@element-plus/icons-vue";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import { Share, Star, StarFilled, View } from "@element-plus/icons-vue";
import QRCodeVue3 from "qrcode-vue3";
import {
  editCommodityUsingPost,
  getCommodityVoByIdUsingGet,
  buyCommodityUsingPost
} from "@/api/commodityController";
import useClipboard from "vue-clipboard3";
import {
  addUserCommodityFavoritesUsingPost,
  editUserCommodityFavoritesUsingPost,
  listMyUserCommodityFavoritesVoByPageUsingPost
} from "@/api/userCommodityFavoritesController";
import CommodityScore from "@/components/CommodityScore/index.vue";
import CommodityScoreList from "@/components/CommodityScoreList/index.vue";
// 使用 `useRoute` 获取当前路由对象
const route = useRoute();
// 获取路由参数中的 id
const commodityId = route.params.id as string;
// 新增的响应式变量
const detailActiveName = ref("first");
// 商品详情数据
const commodity = ref({
  commodityName: "",
  tags: [],
  commodityAvatar: "",
  price: 0,
  commodityInventory: 0,
  commodityDescription: "",
  viewNum: 0,
  favourNum: 0,
  commodityTypeName: ""
});

// 浏览量
const viewCount = ref(0);
// 收藏量
const favourCount = ref(0);
// 原来的收藏情况 1收藏 0未收藏
const initStatus = ref(0);
// 记录原来是否有关联记录
const alreadyRecord = ref(0);
// 保存原来的关联 id
const id = ref();

// 分享对话框的显示状态
const shareDialogVisible = ref(false);
// 购买对话框的显示状态
const buyDialogVisible = ref(false);
// 当前页面地址
const currentPageUrl = ref(window.location.href);

// 购买表单数据
const buyForm = ref({
  buyNumber: 1,
  paymentAmount: 0, // 支付金额初始为 0
  remark: ""
});
// 在现有代码中添加 watch 监听
watch(
  () => buyForm.value.buyNumber,
  (newVal) => {
    // 计算精确金额（保留两位小数）
    const total = (newVal * commodity.value.price).toFixed(2);
    buyForm.value.paymentAmount = parseFloat(total);

    // 可选：添加库存校验
    if (newVal > commodity.value.commodityInventory) {
      ElMessage.warning("购买数量超过库存！");
      buyForm.value.buyNumber = commodity.value.commodityInventory;
    }
  }
);
// 获取商品详情
const fetchCommodityDetail = async () => {
  try {
    const res = await getCommodityVoByIdUsingGet({ id: commodityId });
    if (res.code === 200) {
      commodity.value = res.data;
      viewCount.value = res.data.viewNum || 0;
      favourCount.value = res.data.favourNum || 0;
      // 初始化支付金额
      buyForm.value.paymentAmount =
        buyForm.value.buyNumber * commodity.value.price;
    } else {
      ElMessage.error("获取商品详情失败");
    }
  } catch (error) {
    ElMessage.error("获取商品详情失败");
  }
};

// 更新支付金额
const updatePaymentAmount = () => {
  buyForm.value.paymentAmount = buyForm.value.buyNumber * commodity.value.price;
};

// 更新浏览量
const updateViewCount = async () => {
  try {
    const res = await editCommodityUsingPost({
      id: commodityId,
      viewNum: (commodity.value.viewNum || 0) + 1
    });
    if (res.code === 200) {
      viewCount.value = (commodity.value.viewNum || 0) + 1;
    } else {
      ElMessage.error("更新浏览量失败");
    }
  } catch (error) {
    ElMessage.error("更新浏览量失败");
  }
};

// 获取初始收藏状态
const fetchInitFavour = async () => {
  const res = await listMyUserCommodityFavoritesVoByPageUsingPost({
    current: 1,
    pageSize: 1,
    commodityId: commodityId
  });
  if (res.code !== 200) {
    return ElMessage.error({
      duration: 1000,
      message: "获取用户收藏关联表失败"
    });
  }
  if (res.data.records.length > 0) {
    alreadyRecord.value = 1;
    initStatus.value = res.data.records[0].status;
    id.value = res.data.records[0].id;
  } else {
    alreadyRecord.value = 0;
    initStatus.value = 0;
  }
};

// 处理收藏的接口方法
const handleCollect = async () => {
  if (alreadyRecord.value === 0) {
    // 调用新增关联
    const res2 = await addUserCommodityFavoritesUsingPost({
      commodityId: commodityId
    });
    if (res2.code !== 200) {
      return ElMessage.error({
        duration: 1000,
        message: "添加收藏失败"
      });
    }
    ElMessage.success({
      duration: 1000,
      message: "添加收藏成功"
    });
  } else {
    // 有关联关系，直接取反
    const res3 = await editUserCommodityFavoritesUsingPost({
      id: id.value,
      status: initStatus.value === 1 ? 0 : 1
    });
    if (res3.code !== 200) {
      return ElMessage.error({
        duration: 1000,
        message: `${initStatus.value === 1 ? "取消" : "添加"}收藏失败`
      });
    }
    ElMessage.success({
      duration: 1000,
      message: `${initStatus.value === 1 ? "取消" : "添加"}收藏成功`
    });
  }
  // 更新该商品的收藏量信息
  const res4 = await editCommodityUsingPost({
    id: commodityId,
    favourNum:
      initStatus.value === 0 ? favourCount.value + 1 : favourCount.value - 1
  });
  if (res4.code !== 200) {
    return ElMessage.error({
      duration: 1000,
      message: "更新该商品收藏信息失败"
    });
  }
  // 重新获取该商品收藏量信息
  await fetchCommodityDetail();
  await fetchInitFavour();
};

// 处理分享的点击事件
const handleShare = () => {
  shareDialogVisible.value = true;
};

// 处理购买按钮点击事件
const handleBuy = () => {
  // 先检查商品库存是否充足
  if (commodity.value.commodityInventory <= 0) {
    return ElMessage.error({
      message: "商品库存不够，无法完成购买",
      duration: 1500
    });
  }
  buyDialogVisible.value = true;
};

// 提交购买请求
const submitBuy = async () => {
  try {
    const res = await buyCommodityUsingPost({
      ...buyForm.value,
      commodityId: commodityId
    });
    if (res.code === 200) {
      if (res.data.needPay) {
        ElMessage.info("订单已创建，余额不足，请尽快完成订单支付");
      } else {
        ElMessage.success("购买成功");
      }
      buyDialogVisible.value = false;
      await fetchCommodityDetail(); // 刷新商品信息
    } else {
      ElMessage.error("购买失败");
    }
  } catch (error) {
    ElMessage.error("购买失败");
  }
};

// 复制链接
const { toClipboard } = useClipboard();
const copyLink = async () => {
  try {
    await toClipboard(currentPageUrl.value);
    ElMessage.success({
      message: "链接已复制到剪贴板",
      duration: 1000
    });
  } catch (e) {
    ElMessage.error("复制失败", e);
  }
};

// 页面加载时触发
onMounted(async () => {
  await fetchCommodityDetail();
  await updateViewCount();
  await fetchInitFavour();
});
</script>

<style lang="scss">
.commodity-detail {
  padding: 20px;

  .header {
    display: flex;
    align-items: center;
  }

  .tags {
    margin-top: 16px;
  }

  .icon-container {
    display: flex;
    justify-content: space-around; /* 均匀分布 */
    align-items: center;
    margin-top: 20px;

    .icon-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      color: #666;
      transition: color 0.3s;

      &:hover {
        color: #409eff;
      }

      span {
        font-size: 14px;
      }
    }
  }

  .share-dialog-content {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .share-section {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .link-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;

      span {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
