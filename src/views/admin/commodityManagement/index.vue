<template>
  <div class="commodity-admin">
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
          <el-form-item label="分类ID">
            <el-input
              v-model="queryParams.commodityTypeId"
              placeholder="请输入分类ID"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="是否上架">
            <el-select
              v-model="queryParams.isListed"
              placeholder="请选择"
              clearable
            >
              <el-option label="未上架" :value="0" />
              <el-option label="已上架" :value="1" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-button @click="resetQuery">重置</el-button>
            <el-button type="primary" @click="getCommodityList">查询</el-button>
            <el-button type="primary" @click="showAddDialog" :icon="Promotion">
              添加商品
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-card>

    <!-- 商品列表表格 -->
    <el-card>
      <el-table :data="commodityList" style="width: 100%" :loading="loading">
        <el-table-column prop="commodityName" label="商品名称" />
        <el-table-column
          prop="commodityDescription"
          label="商品简介"
          width="150px"
          show-overflow-tooltip
        />
        <el-table-column label="商品封面" prop="commodityAvatar" width="100px">
          <template #default="{ row }">
            <el-image :src="row.commodityAvatar" style="width: 64px" />
          </template>
        </el-table-column>
        <el-table-column prop="degree" label="新旧程度" />
        <el-table-column
          prop="commodityTypeId"
          label="分类ID"
          show-overflow-tooltip
        />
        <el-table-column prop="commodityTypeName" label="分类名称" />
        <el-table-column prop="isListed" label="是否上架">
          <template #default="{ row }">
            <el-tag :type="row.isListed === 1 ? 'success' : 'danger'">
              {{ row.isListed === 1 ? "已上架" : "未上架" }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="价格" />
        <el-table-column
          prop="commodityInventory"
          label="商品库存"
          width="60px"
        />
        <el-table-column prop="favourNum" label="收藏数" width="50px" />
        <el-table-column prop="viewNum" label="浏览量" width="50px" />
        <el-table-column prop="updateTime" label="更新时间" />
        <el-table-column label="操作" width="180px">
          <template #default="{ row }">
            <el-button type="primary" @click="showEditDialog(row.id)"
              >修改
            </el-button>
            <el-popconfirm
              title="你确定要删除该商品吗？"
              @confirm="deleteCommodity(row)"
              @cancel="cancelEvent"
            >
              <template #reference>
                <el-button type="danger">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        style="margin-top: 20px"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes="[5, 10, 15, 20]"
        :current-page="paginationConfig.current"
        :total="paginationConfig.total"
        :page-size="paginationConfig.pageSize"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>

    <!-- 修改商品的对话框 -->
    <el-dialog
      title="修改商品"
      v-model="editDialogVisible"
      width="50%"
      @close="resetEditField(editFormRef)"
    >
      <el-form :model="editForm" ref="editFormRef" label-width="100px">
        <el-form-item label="商品名称" prop="commodityName">
          <el-input v-model="editForm.commodityName" />
        </el-form-item>
        <el-form-item label="商品简介" prop="commodityDescription">
          <el-input type="textarea" v-model="editForm.commodityDescription" />
        </el-form-item>
        <el-form-item label="商品封面" prop="commodityAvatar">
          <el-input
            v-model="editForm.commodityAvatar"
            placeholder="请输入图片URL"
            class="avatar-input"
          />
          <el-image
            v-if="editForm.commodityAvatar"
            :src="editForm.commodityAvatar"
            style="width: 128px; height: 128px; margin-top: 10px"
            :preview-src-list="[editForm.commodityAvatar]"
          />
        </el-form-item>
        <el-form-item label="新旧程度" prop="degree">
          <el-input v-model="editForm.degree" />
        </el-form-item>
        <el-form-item label="商品分类" prop="commodityTypeId">
          <el-select
            v-model="editForm.commodityTypeId"
            placeholder="请选择商品分类"
          >
            <el-option
              v-for="type in commodityTypeList"
              :key="type.id"
              :label="type.typeName"
              :value="type.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="是否上架" prop="isListed">
          <el-select v-model="editForm.isListed" placeholder="请选择">
            <el-option label="未上架" :value="0" />
            <el-option label="已上架" :value="1" />
          </el-select>
        </el-form-item>
        <el-form-item label="价格" prop="price">
          <el-input v-model="editForm.price" />
        </el-form-item>
        <el-form-item label="商品库存" prop="commodityInventory">
          <el-input-number
            v-model="editForm.commodityInventory"
            :min="0"
            :step="1"
            controls-position="right"
          />
        </el-form-item>
      </el-form>
      <span class="dialog-footer">
        <slot name="footer">
          <el-button @click="resetEditField(editFormRef)">取消</el-button>
          <el-button type="primary" @click="editCommodity">确定</el-button>
        </slot>
      </span>
    </el-dialog>

    <!-- 添加商品的对话框 -->
    <el-dialog
      title="添加商品"
      v-model="addDialogVisible"
      width="50%"
      @close="addDialogClosed"
    >
      <el-form :model="addForm" ref="addFormRef" label-width="100px">
        <el-form-item label="商品名称" prop="commodityName">
          <el-input v-model="addForm.commodityName" />
        </el-form-item>
        <el-form-item label="商品简介" prop="commodityDescription">
          <el-input type="textarea" v-model="addForm.commodityDescription" />
        </el-form-item>
        <el-form-item label="商品封面" prop="commodityAvatar">
          <el-input
            v-model="addForm.commodityAvatar"
            placeholder="请输入图片URL"
            class="avatar-input"
          />
          <el-image
            v-if="addForm.commodityAvatar"
            :src="addForm.commodityAvatar"
            style="width: 128px; height: 128px; margin-top: 10px"
            :preview-src-list="[addForm.commodityAvatar]"
          />
        </el-form-item>
        <el-form-item label="新旧程度" prop="degree">
          <el-input v-model="addForm.degree" />
        </el-form-item>
        <el-form-item label="商品分类" prop="commodityTypeId">
          <el-select
            v-model="addForm.commodityTypeId"
            placeholder="请选择商品分类"
          >
            <el-option
              v-for="type in commodityTypeList"
              :key="type.id"
              :label="type.typeName"
              :value="type.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="是否上架" prop="isListed">
          <el-select v-model="addForm.isListed" placeholder="请选择">
            <el-option label="未上架" :value="0" />
            <el-option label="已上架" :value="1" />
          </el-select>
        </el-form-item>
        <el-form-item label="价格" prop="price">
          <el-input v-model="addForm.price" />
        </el-form-item>
        <el-form-item label="商品库存" prop="commodityInventory">
          <el-input-number
            v-model="addForm.commodityInventory"
            :min="1"
            :step="1"
            controls-position="right"
          />
        </el-form-item>
      </el-form>
      <span class="dialog-footer" style="margin-left: 100px">
        <slot name="footer">
          <el-button @click="addDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="addCommodity">添加</el-button>
        </slot>
      </span>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  ElButton,
  ElDialog,
  ElForm,
  ElFormItem,
  ElInput,
  ElMessage,
  ElTag,
  ElSelect,
  ElOption,
  FormInstance,
  ElImage,
  ElTableColumn
} from "element-plus";
import { Promotion } from "@element-plus/icons-vue";
import {
  addCommodityUsingPost,
  deleteCommodityUsingPost,
  getCommodityVoByIdUsingGet,
  listCommodityVoByPageUsingPost,
  updateCommodityUsingPost
} from "@/api/commodityController";
import { listCommodityTypeVoByPageUsingPost } from "@/api/commodityTypeController";

// 查询参数
const queryParams = ref({
  commodityName: "",
  commodityDescription: "",
  degree: "",
  commodityTypeId: "",
  isListed: ""
});

// 商品列表
const commodityList = ref([]);
const loading = ref<boolean>(false);

// 商品分类列表
const commodityTypeList = ref([]);

// 分页配置
const paginationConfig = ref({
  pageSize: 10,
  total: 0,
  current: 1
});

// 对话框状态
const editDialogVisible = ref(false);
const addDialogVisible = ref(false);

// 表单引用
const editFormRef = ref<FormInstance>();
const addFormRef = ref<FormInstance>();

// 编辑表单数据
const editForm = ref({
  id: 0,
  commodityName: "",
  commodityDescription: "",
  degree: "",
  commodityTypeId: "",
  isListed: 0,
  price: 0,
  commodityAvatar: "",
  commodityInventory: 1
});

// 添加表单数据
const addForm = ref({
  commodityName: "",
  commodityDescription: "",
  degree: "",
  commodityTypeId: "",
  isListed: 0,
  price: 0,
  commodityAvatar: "",
  commodityInventory: 1
});

// 获取商品列表
const getCommodityList = async () => {
  loading.value = true;
  try {
    const res = await listCommodityVoByPageUsingPost({
      ...queryParams.value,
      current: paginationConfig.value.current,
      pageSize: paginationConfig.value.pageSize
    });
    if (res.code === 200) {
      commodityList.value = res.data.records;
      paginationConfig.value.total = parseInt(res.data.total);
    } else {
      ElMessage.error("获取商品列表失败");
    }
  } catch (error) {
    ElMessage.error("获取商品列表失败");
  } finally {
    loading.value = false;
  }
};

// 获取商品分类列表
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
  } catch (error) {
    ElMessage.error("获取商品分类列表失败");
  }
};

// 重置查询条件
const resetQuery = () => {
  queryParams.value = {
    commodityName: "",
    commodityDescription: "",
    degree: "",
    commodityTypeId: "",
    isListed: ""
  };
  getCommodityList();
};

// 显示修改对话框
const showEditDialog = async (id: number) => {
  loading.value = true;
  try {
    const res = await getCommodityVoByIdUsingGet({ id });
    if (res.code === 200) {
      // 过滤不需要的字段
      const filteredData = {};
      for (const [key, value] of Object.entries(res.data)) {
        if (!["createTime", "updateTime"].includes(key)) {
          filteredData[key] = value;
        }
      }
      editForm.value = filteredData;
      editDialogVisible.value = true;
    } else {
      ElMessage.error("获取商品信息失败");
    }
  } catch (error) {
    ElMessage.error("获取商品信息失败");
  } finally {
    loading.value = false;
  }
};

// 修改商品
const editCommodity = async () => {
  try {
    const res = await updateCommodityUsingPost(editForm.value);
    if (res.code === 200) {
      ElMessage.success("修改商品成功");
      editDialogVisible.value = false;
      await getCommodityList();
    } else {
      ElMessage.error("修改商品失败");
    }
  } catch (error) {
    ElMessage.error("修改商品失败");
  }
};

// 添加商品
const addCommodity = async () => {
  try {
    const res = await addCommodityUsingPost(addForm.value);
    if (res.code === 200) {
      ElMessage.success("添加商品成功");
      addDialogVisible.value = false;
      await getCommodityList();
    } else {
      ElMessage.error("添加商品失败");
    }
  } catch (error) {
    ElMessage.error("添加商品失败");
  }
};

// 删除商品
const deleteCommodity = async (row) => {
  try {
    const res = await deleteCommodityUsingPost({ id: row.id });
    if (res.code === 200) {
      ElMessage.success("删除商品成功");
      await getCommodityList();
    } else {
      ElMessage.error("删除商品失败");
    }
  } catch (error) {
    ElMessage.error("删除商品失败");
  }
};

// 关闭添加对话框
const addDialogClosed = () => {
  addForm.value = {
    commodityName: "",
    commodityDescription: "",
    degree: "",
    commodityTypeId: "",
    isListed: 0,
    price: 0,
    commodityAvatar: "",
    commodityInventory: 1
  };
};

// 关闭修改对话框
const resetEditField = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  editDialogVisible.value = false;
  formEl.resetFields();
};

// 分页处理
const handleSizeChange = (size: number) => {
  paginationConfig.value.pageSize = size;
  getCommodityList();
};

const handleCurrentChange = (page: number) => {
  paginationConfig.value.current = page;
  getCommodityList();
};

// 取消删除
const cancelEvent = () => {
  ElMessage.success("取消删除成功");
};

// 显示添加对话框
const showAddDialog = () => {
  addDialogVisible.value = true;
};

// 初始化加载商品列表和商品分类列表
onMounted(() => {
  getCommodityList();
  getCommodityTypeList();
});
</script>

<style scoped>
.commodity-admin {
  padding: 20px;
}
</style>
