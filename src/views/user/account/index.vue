<template>
  <div class="personalHomePage">
    <el-card>
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="个人信息" name="first">
          <el-card style="margin-bottom: 20px">
            <template #header>
              <el-row>
                <el-col :span="22" style="font-weight: bold"
                  >个人信息设置
                </el-col>
                <el-col :span="2">
                  <el-button size="default" @click="updateUserInfo"
                    >提交修改
                  </el-button>
                </el-col>
              </el-row>
            </template>
            <el-row :gutter="20" style="margin-bottom: 20px">
              <el-col>
                用户头像：
                <img
                  v-if="user.userAvatar"
                  :src="user.userAvatar"
                  class="avatar"
                  style="height: 64px; width: 64px; border-radius: 50%"
                />
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                修改用户头像：
                <el-input
                  style="margin: 10px 0"
                  placeholder="请输入一个http在线图片链接，例如:https://www.xiaobaitiao.top/logo.png"
                  v-model="newUserAvatar"
                ></el-input>
              </el-col>
            </el-row>
            <!--        id-->
            <el-row style="margin-bottom: 20px"> 用户ID: {{ user.id }}</el-row>
            <!--        昵称设置-->
            <el-row style="margin-bottom: 20px">
              <el-col>
                昵称:
                <el-text v-if="!isEditing">{{ user.userName }}</el-text>
                <el-input
                  v-else
                  v-model="newUserName"
                  style="width: 200px"
                  @blur="saveEdit"
                ></el-input>
                <el-button
                  style="margin-left: 10px"
                  size="small"
                  type="primary"
                  v-if="!isEditing"
                  icon="Edit"
                  @click="startEditing"
                ></el-button>
              </el-col>
            </el-row>

            <!--        用户简介-->
            <el-row style="margin-bottom: 20px">
              用户简介：
              <el-input
                type="textarea"
                v-model="user.userProfile"
                style="margin-top: 20px"
              ></el-input>
            </el-row>
            <!--        用户角色-->
            <!--        用户简介-->
            <el-row style="margin-bottom: 20px">
              用户身份：
              <el-input
                disabled
                v-model="user.userRole"
                style="margin-top: 20px"
              ></el-input>
            </el-row>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="收藏攻略" name="second">
          <Post></Post>
        </el-tab-pane>
        <el-tab-pane label="我的评论" name="third">
          <MyComment></MyComment>
        </el-tab-pane>
        <el-tab-pane label="个人订单" name="fourth">
          <CommodityOrderList
            :commodity-order-list="commodityOrderList"
            @pay="handlePay"
          ></CommodityOrderList>
          <!-- 分页器 -->
          <el-pagination
            v-model:current-page="queryParams.current"
            v-model:page-size="queryParams.pageSize"
            :total="total"
            layout="total, prev, pager, next, jumper"
            @current-change="fetchCommodityOrders"
            @size-change="fetchCommodityOrders"
          />
        </el-tab-pane>
        <el-tab-pane label="购物日历" name="fifth">
          <HeatmapChart :data="chartData" :year="selectedYear" />
        </el-tab-pane>
        <!-- 收藏商品 -->
        <el-tab-pane label="收藏商品" name="sixth">
          <CommodityList :commodity-list="commodityList"></CommodityList>
          <!-- 分页器 -->
          <el-pagination
            v-model:current-page="favoritesQueryParams.current"
            v-model:page-size="favoritesQueryParams.pageSize"
            :total="favoritesTotal"
            layout="total, prev, pager, next, jumper"
            @current-change="loadCommodityFavoritesList"
            @size-change="loadCommodityFavoritesList"
          />
        </el-tab-pane>
        <el-tab-pane label="聊天室" name="seventh">
          <PrivateMessage></PrivateMessage>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { GET_ID } from "@/utils/token";
import PrivateMessage from "@/components/PrivateMessage/index.vue";
import Post from "@/components/Post/index.vue";
import MyComment from "@/components/MyComment/index.vue";
import CommodityList from "@/components/CommodityList/index.vue";
import {
  getUserVoByIdUsingGet,
  updateMyUserUsingPost
} from "@/api/userController";
import { ElMessage, ElPagination } from "element-plus";
import useUserStore from "@/store/modules/user";
import CommodityOrderList from "@/components/CommodityOrderList/index.vue";
import {
  getCommodityOrderHeatmapDataUsingGet,
  listMyCommodityOrderVoByPageUsingPost
} from "@/api/commodityOrderController";
import { payCommodityOrderUsingPost } from "@/api/commodityController";
import HeatmapChart from "@/components/CalendarChart/index.vue";
import { listUserCommodityFavoritesVoByPageUsingPost } from "@/api/userCommodityFavoritesController";
// 定义响应式数据
const activeName = ref("first");
const userStore = useUserStore();
const newUserAvatar = ref();
const newUserName = ref("");
const isEditing = ref(false);
// 定义数据
const chartData = ref<{ date: string; value: number }[]>([]);
const selectedYear = ref("2025"); // 假设默认年份为 2025
// 总条数
const total = ref(0);
// 商品订单列表数据
const commodityOrderList = ref([]);
const user = ref({
  id: 0,
  userAvatar: "",
  userName: "",
  userProfile: "",
  userRole: ""
});
// 商品列表数据
const commodityList = ref([]);
// 分页参数
const queryParams = ref({
  current: 1,
  pageSize: 10
});
// 调用后端接口获取数据
const fetchTravelData = async (userId: number, payStatus: number) => {
  try {
    const res = await getCommodityOrderHeatmapDataUsingGet({
      userId,
      payStatus
    });
    if (res.code === 200) {
      chartData.value = res.data;
    } else {
      ElMessage.error("获取数据失败:", res.message);
    }
  } catch (error: any) {
    ElMessage.error("请求失败:", error);
  }
};

const favoritesQueryParams = ref({
  current: 1,
  pageSize: 10,
  userId: GET_ID(),
  status: 1 // 1 表示正常收藏
});
const favoritesTotal = ref(0);

// 加载收藏商品列表
const loadCommodityFavoritesList = async () => {
  try {
    const res = await listUserCommodityFavoritesVoByPageUsingPost(
      favoritesQueryParams.value
    );

    if (res.code === 200 && res.data?.records) {
      commodityList.value = res.data.records.map((item) => {
        return {
          ...item, // 保留其他字段
          id: item.commodityId // 将 spotId 重命名为 id
        };
      });
      favoritesTotal.value = res.data.total;
    } else {
      ElMessage.warning("暂无收藏商品");
    }
  } catch (error) {
    ElMessage.error("获取收藏商品失败");
  }
};
// 处理支付
const handlePay = async (orderId: number) => {
  try {
    const response = await payCommodityOrderUsingPost({
      commodityOrderId: orderId
    });
    if (response.code === 200) {
      ElMessage.success("支付成功");
      // 更新订单状态
      const order = commodityOrderList.value.find((o) => o.id === orderId);
      if (order) {
        order.payStatus = 1; // 1 表示支付成功
      }
    } else {
      ElMessage.error("支付失败，" + response.message);
    }
  } catch (error) {
    ElMessage.error("支付失败");
  }
};
// 获取商品订单数据
const fetchCommodityOrders = async () => {
  try {
    const response = await listMyCommodityOrderVoByPageUsingPost(
      queryParams.value
    );
    if (response.data?.records) {
      commodityOrderList.value = response.data.records;
      total.value = parseInt(response.data.total);
    } else {
      ElMessage.warning("暂无订单数据");
    }
  } catch (error) {
    ElMessage.error("获取订单数据失败");
  }
};
onMounted(() => {
  getUserInformationById();
  fetchCommodityOrders();
  fetchTravelData(GET_ID(), 1);
  loadCommodityFavoritesList();
});
const updateUserInfo = async () => {
  const res = await updateMyUserUsingPost({
    userAvatar: newUserAvatar.value || user.value.userAvatar,
    userName: user.value.userName,
    userProfile: user.value.userProfile
  });
  if (res.code !== 200) {
    return ElMessage.error({
      duration: 1000,
      message: "更新用户信息失败"
    });
  }
  // 调用 userStore 的 updateAvatar 方法
  await userStore.updateAvatar(newUserAvatar.value || user.value.userAvatar);
  ElMessage.success({
    duration: 1000,
    message: "更新用户信息成功"
  });
  await getUserInformationById();
};
const getUserInformationById = async () => {
  const id = GET_ID();
  let result: any = await getUserVoByIdUsingGet({
    id: id
  });
  if (result.code == 200) {
    user.value = result.data;
  }
};
const startEditing = () => {
  isEditing.value = true;
  newUserName.value = user.value.userName;
};
const saveEdit = () => {
  isEditing.value = false;
  user.value.userName = newUserName.value;
};
</script>

<style lang="scss">
.el-card__header {
  background-color: #fafafa;
}

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 96px;
  height: 96px;
  text-align: center;
}
</style>
