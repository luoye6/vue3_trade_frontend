<template>
  <div class="commodity-page">
    <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 10px">
      商品列表
    </h1>
    <!-- 查询区域 -->
    <el-card style="margin-bottom: 10px">
      <el-row :gutter="10">
        <el-col :span="6">
          <el-form-item label="商品名称">
            <el-input
              v-model="queryParams.commodityName"
              placeholder="请输入商品名称"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="商品简介">
            <el-input
              v-model="queryParams.commodityDescription"
              placeholder="请输入商品简介"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="新旧程度">
            <el-input
              v-model="queryParams.degree"
              placeholder="请输入新旧程度"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="库存数量">
            <el-input
              v-model="queryParams.commodityInventory"
              placeholder="请输入库存数量"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="商品分类">
            <el-select
              v-model="queryParams.commodityTypeId"
              placeholder="请选择商品分类"
              clearable
            >
              <el-option
                v-for="type in commodityTypeList"
                :key="type.id"
                :label="type.typeName"
                :value="type.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-button @click="resetQuery">重置</el-button>
            <el-button type="primary" @click="getCommodityList">查询</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-card>

    <!-- 商品列表组件 -->
    <CommodityList :commodityList="commodityList" />

    <!-- 分页组件 -->
    <el-pagination
      style="margin-top: 20px; text-align: right"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :page-sizes="[5, 10, 15, 20]"
      :total="total"
      :page-size="pageSize"
      :current-page="currentPage"
      @size-change="handleSizeChange"
      @current-change="handlePageChange"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { listCommodityVoByPageUsingPost } from "@/api/commodityController";
import { listCommodityTypeVoByPageUsingPost } from "@/api/commodityTypeController";
import CommodityList from "@/components/CommodityList/index.vue";
import { ElMessage } from "element-plus";

// 商品列表数据
const commodityList = ref([]);
const total = ref(0); // 总条数
const pageSize = ref(10); // 每页条数
const currentPage = ref(1); // 当前页码

// 商品分类列表
const commodityTypeList = ref([]);

// 查询参数
const queryParams = ref({
  commodityName: "",
  commodityDescription: "",
  degree: "",
  commodityInventory: "",
  commodityTypeId: "" // 新增商品分类 ID
});

// 加载商品列表
const getCommodityList = async () => {
  try {
    const res = await listCommodityVoByPageUsingPost({
      current: currentPage.value,
      pageSize: pageSize.value,
      commodityName: queryParams.value.commodityName,
      commodityDescription: queryParams.value.commodityDescription,
      degree: queryParams.value.degree,
      commodityInventory: queryParams.value.commodityInventory,
      commodityTypeId: queryParams.value.commodityTypeId, // 新增商品分类 ID
      isListed: 1
    });
    if (res.code === 200) {
      commodityList.value = res.data.records;
      total.value = parseInt(res.data.total);
    } else {
      ElMessage.error("获取商品列表失败");
    }
  } catch (error: any) {
    ElMessage.error("获取商品列表失败", error);
  }
};

// 加载商品分类列表
const getCommodityTypeList = async () => {
  try {
    const res = await listCommodityTypeVoByPageUsingPost({
      pageSize: 1000, // 假设最多 1000 条分类
      current: 1
    });
    if (res.code === 200) {
      commodityTypeList.value = res.data.records;
    } else {
      ElMessage.error("获取商品分类列表失败");
    }
  } catch (error: any) {
    ElMessage.error("获取商品分类列表失败", error);
  }
};

// 重置查询条件
const resetQuery = () => {
  queryParams.value = {
    commodityName: "",
    commodityDescription: "",
    degree: "",
    commodityInventory: "",
    commodityTypeId: "" // 重置商品分类 ID
  };
  getCommodityList();
};

// 处理分页变化
const handlePageChange = (page: number) => {
  currentPage.value = page;
  getCommodityList();
};

// 处理每页条数变化
const handleSizeChange = (size: number) => {
  pageSize.value = size;
  getCommodityList();
};

// 初始化加载数据
onMounted(() => {
  getCommodityList();
  getCommodityTypeList(); // 加载商品分类列表
});
</script>

<style scoped lang="scss">
.commodity-page {
  padding: 20px;
}
</style>
