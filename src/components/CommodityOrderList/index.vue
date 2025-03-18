<template>
  <div class="order-list-container">
    <el-card
      v-for="order in props.commodityOrderList"
      :key="order.id"
      class="order-item"
    >
      <div class="order-header">
        <span class="order-id">订单号：{{ order.id }}</span>
        <el-tag :type="getPayStatusTagType(order.payStatus)">
          {{ getPayStatusText(order.payStatus) }}
        </el-tag>
      </div>

      <el-divider />

      <div class="order-body">
        <div class="order-field">
          <span class="field-label">商品名称：</span>
          <span class="field-value">{{ order.commodityName }}</span>
        </div>
        <div class="order-field">
          <span class="field-label">购买数量：</span>
          <span class="field-value">{{ order.buyNumber }}</span>
        </div>
        <div class="order-field">
          <span class="field-label">支付金额：</span>
          <span class="field-value">{{ order.paymentAmount }} 元</span>
        </div>
        <div class="order-field">
          <span class="field-label">联系人：</span>
          <span class="field-value">{{ order.userName }}</span>
        </div>
        <div class="order-field">
          <span class="field-label">联系电话：</span>
          <span class="field-value">{{ order.userPhone }}</span>
        </div>
        <div class="order-field">
          <span class="field-label">创建时间：</span>
          <span class="field-value">{{ formatTime(order.createTime) }}</span>
        </div>
        <!-- 倒计时 -->
        <div class="order-field" v-if="order.payStatus === 0">
          <span class="field-label">剩余支付时间：</span>
          <span class="field-value">{{
            remainingTimes[order.id] || "计算中..."
          }}</span>
        </div>
      </div>

      <!-- 支付按钮 -->
      <div v-if="order.payStatus === 0" class="order-footer">
        <el-button type="primary" @click="showPayDialog(order)">支付</el-button>
      </div>
    </el-card>

    <!-- 支付对话框 -->
    <el-dialog v-model="dialogVisible" title="支付订单" width="30%">
      <div class="dialog-content">
        <p>订单号：{{ currentOrder?.id }}</p>
        <p>商品名称：{{ currentOrder?.commodityName }}</p>
        <p>支付金额：{{ currentOrder?.paymentAmount }} 元</p>
      </div>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmPay">确定支付</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import { ElCard, ElTag, ElDivider, ElButton, ElDialog } from "element-plus";
import dayjs from "dayjs";

// 定义 props
const props = defineProps({
  commodityOrderList: {
    type: Array,
    required: true
  }
});

// 定义 emit
const emit = defineEmits(["pay"]);

// 对话框状态
const dialogVisible = ref(false);
const currentOrder = ref(null);

// 剩余时间存储
const remainingTimes = ref<Record<number, string>>({});

// 显示支付对话框
const showPayDialog = (order) => {
  currentOrder.value = order;
  dialogVisible.value = true;
};

// 确认支付
const confirmPay = () => {
  if (currentOrder.value) {
    emit("pay", currentOrder.value.id);
    dialogVisible.value = false;
  }
};

// 格式化时间
const formatTime = (time?: string) => {
  return time ? dayjs(time).format("YYYY-MM-DD HH:mm") : "未知时间";
};

// 获取支付状态对应的标签类型
const getPayStatusTagType = (payStatus?: number) => {
  switch (payStatus) {
    case 1:
      return "success"; // 支付成功
    case 0:
      return "danger"; // 未支付
    default:
      return "info"; // 其他状态
  }
};

// 获取支付状态对应的文本
const getPayStatusText = (payStatus?: number) => {
  switch (payStatus) {
    case 1:
      return "支付成功";
    case 0:
      return "未支付";
    default:
      return "未知状态";
  }
};

// 计算剩余时间
const getRemainingTime = (createTime: string) => {
  const now = dayjs();
  const create = dayjs(createTime);
  const expireTime = create.add(15, "minute"); // 假设订单有效期为 15 分钟
  const diff = expireTime.diff(now, "second");

  if (diff <= 0) {
    return "订单已过期";
  }

  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;
  return `${minutes} 分 ${seconds} 秒`;
};

// 动态更新倒计时
const updateRemainingTimes = () => {
  props.commodityOrderList.forEach((order) => {
    if (order.payStatus === 0) {
      remainingTimes.value[order.id] = getRemainingTime(order.createTime);
    }
  });
};

// 定时器
let timer: number | null = null;

// 组件挂载时启动定时器
onMounted(() => {
  timer = setInterval(updateRemainingTimes, 1000); // 每秒更新一次
});

// 组件卸载时清除定时器
onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});

// 监听订单列表变化
watch(
  () => props.commodityOrderList,
  () => {
    updateRemainingTimes();
  },
  { immediate: true }
);
</script>

<style scoped lang="scss">
.order-list-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
}

.order-item {
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;

  .order-id {
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
}

.order-body {
  padding: 12px 16px;

  .order-field {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    .field-label {
      font-size: 14px;
      color: #666;
      min-width: 80px;
    }

    .field-value {
      font-size: 14px;
      color: #333;
    }
  }
}

.order-footer {
  display: flex;
  justify-content: flex-end;
  padding: 12px 16px;
}

.dialog-content {
  p {
    margin: 10px 0;
    font-size: 14px;
    color: #333;
  }
}
</style>
