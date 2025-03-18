<template>
  <div>
    <el-text type="primary" style="font-size: 24px"
      >基于协同过滤算法推荐商品
    </el-text>
    <!-- 商品列表组件 -->
    <CommodityList :commodityList="commodityList" style="margin-top: 10px" />
  </div>
</template>

<script>
import { recommendCommoditiesUsingGet } from "@/api/commodityController"; // 导入后端接口方法
import CommodityList from "@/components/CommodityList/index.vue";
import { GET_ID } from "@/utils/token";
import { ElMessage } from "element-plus"; // 导入商品列表组件

export default {
  name: "RecommendCommodities",
  components: {
    CommodityList // 注册商品列表组件
  },
  data() {
    return {
      commodityList: [] // 商品列表数据
    };
  },
  created() {
    this.fetchRecommendCommodities(); // 组件创建时调用接口获取推荐商品
  },
  methods: {
    /**
     * 调用后端接口获取推荐商品列表
     */
    async fetchRecommendCommodities() {
      try {
        // 调用后端接口，假设需要传递 userId
        const response = await recommendCommoditiesUsingGet({
          userId: GET_ID() // 替换为实际的用户 ID
        });

        // 判断接口是否成功返回数据
        if (response.code === 200 && response.data) {
          this.commodityList = response.data; // 绑定商品列表数据
          ElMessage.success({
            duration: 1500,
            message: "获取推荐商品列表成功"
          });
        } else {
          console.error("获取推荐商品失败：", response.message);
        }
      } catch (error) {
        console.error("调用接口失败：", error);
      }
    }
  }
};
</script>

<style scoped>
/* 样式可以根据需要添加 */
</style>
