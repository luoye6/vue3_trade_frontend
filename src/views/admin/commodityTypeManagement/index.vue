<template>
  <div class="commodity-type-admin">
    <!-- 查询区域 -->
    <el-card style="margin-bottom: 10px">
      <el-row :gutter="10">
        <el-col :span="6">
          <el-form-item label="类别ID" label-width="80px">
            <el-input v-model="queryParams.id" placeholder="请输入类别ID" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="类别名称" label-width="80px">
            <el-input
              v-model="queryParams.typeName"
              placeholder="请输入类别名称"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label-width="20px">
            <el-button @click="resetQuery">重置</el-button>
            <el-button type="primary" @click="getCommodityTypeList"
              >查询
            </el-button>
            <el-button type="primary" @click="showAddDialog" :icon="Promotion">
              添加新类别
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-card>

    <!-- 商品类别列表表格 -->
    <el-card>
      <el-table
        :data="commodityTypeList"
        style="width: 100%"
        :loading="loading"
      >
        <el-table-column prop="id" label="类别ID" />
        <el-table-column prop="typeName" label="类别名称" />
        <el-table-column prop="createTime" label="创建时间" />
        <el-table-column prop="updateTime" label="更新时间" />
        <el-table-column label="操作" width="200px">
          <template #default="{ row }">
            <el-button type="primary" @click="showEditDialog(row.id)"
              >修改
            </el-button>
            <el-popconfirm
              title="你确定要删除该类别吗？"
              @confirm="deleteCommodityType(row)"
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

    <!-- 修改类别的对话框 -->
    <el-dialog
      title="修改类别"
      v-model="editDialogVisible"
      width="50%"
      @close="resetEditField(editFormRef)"
    >
      <el-form :model="editForm" ref="editFormRef">
        <el-form-item label="类别名称" prop="typeName">
          <el-input v-model="editForm.typeName" />
        </el-form-item>
      </el-form>
      <span class="dialog-footer">
        <slot name="footer">
          <el-button @click="resetEditField(editFormRef)">取消</el-button>
          <el-button type="primary" @click="editCommodityType">确定</el-button>
        </slot>
      </span>
    </el-dialog>

    <!-- 添加类别的对话框 -->
    <el-dialog
      title="添加类别"
      v-model="addDialogVisible"
      width="50%"
      @close="addDialogClosed"
    >
      <el-form :model="addForm" ref="addFormRef">
        <el-form-item label="类别名称" prop="typeName">
          <el-input v-model="addForm.typeName" />
        </el-form-item>
      </el-form>
      <span class="dialog-footer">
        <slot name="footer">
          <el-button @click="addDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="addCommodityType">添加</el-button>
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
  FormInstance
} from "element-plus";
import { Promotion } from "@element-plus/icons-vue";
import {
  addCommodityTypeUsingPost,
  deleteCommodityTypeUsingPost,
  getCommodityTypeVoByIdUsingGet,
  listCommodityTypeVoByPageUsingPost,
  updateCommodityTypeUsingPost
} from "@/api/commodityTypeController";

// 查询参数
const queryParams = ref({
  id: undefined,
  typeName: ""
});

// 商品类别列表
const commodityTypeList = ref([]);
const loading = ref<boolean>(false);

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
  typeName: ""
});

// 添加表单数据
const addForm = ref({
  typeName: ""
});

// 获取商品类别列表
const getCommodityTypeList = async () => {
  loading.value = true;
  try {
    const res = await listCommodityTypeVoByPageUsingPost({
      ...queryParams.value,
      current: paginationConfig.value.current,
      pageSize: paginationConfig.value.pageSize
    });
    if (res.code === 200) {
      commodityTypeList.value = res.data.records;
      paginationConfig.value.total = parseInt(res.data.total);
    } else {
      ElMessage.error("获取商品类别列表失败");
    }
  } catch (error) {
    ElMessage.error("获取商品类别列表失败");
  } finally {
    loading.value = false;
  }
};

// 重置查询条件
const resetQuery = () => {
  queryParams.value = {
    id: undefined,
    typeName: ""
  };
  getCommodityTypeList();
};

// 显示修改对话框
const showEditDialog = async (id: number) => {
  loading.value = true;
  try {
    const res = await getCommodityTypeVoByIdUsingGet({ id });
    if (res.code === 200) {
      editForm.value.id = res.data.id;
      editForm.value.typeName = res.data.typeName;
      editDialogVisible.value = true;
    } else {
      ElMessage.error("获取商品类别信息失败");
    }
  } catch (error) {
    ElMessage.error("获取商品类别信息失败");
  } finally {
    loading.value = false;
  }
};

// 修改商品类别
const editCommodityType = async () => {
  try {
    const res = await updateCommodityTypeUsingPost(editForm.value);
    if (res.code === 200) {
      ElMessage.success("修改商品类别成功");
      editDialogVisible.value = false;
      await getCommodityTypeList();
    } else {
      ElMessage.error("修改商品类别失败");
    }
  } catch (error) {
    ElMessage.error("修改商品类别失败");
  }
};

// 添加商品类别
const addCommodityType = async () => {
  try {
    const res = await addCommodityTypeUsingPost(addForm.value);
    if (res.code === 200) {
      ElMessage.success("添加商品类别成功");
      addDialogVisible.value = false;
      await getCommodityTypeList();
    } else {
      ElMessage.error("添加商品类别失败");
    }
  } catch (error) {
    ElMessage.error("添加商品类别失败");
  }
};

// 删除商品类别
const deleteCommodityType = async (row) => {
  try {
    const res = await deleteCommodityTypeUsingPost({ id: row.id });
    if (res.code === 200) {
      ElMessage.success("删除商品类别成功");
      await getCommodityTypeList();
    } else {
      ElMessage.error(res.message || "删除商品类别失败");
    }
  } catch (error) {
    ElMessage.error(error.message || "删除商品类别失败");
  }
};

// 关闭添加对话框
const addDialogClosed = () => {
  addForm.value = {
    typeName: ""
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
  getCommodityTypeList();
};

const handleCurrentChange = (page: number) => {
  paginationConfig.value.current = page;
  getCommodityTypeList();
};

// 取消删除
const cancelEvent = () => {
  ElMessage.success("取消删除成功");
};

// 显示添加对话框
const showAddDialog = () => {
  addDialogVisible.value = true;
};

// 初始化加载商品类别列表
onMounted(() => {
  getCommodityTypeList();
});
</script>
<style scoped lang="scss">
.commodity-type-admin {
  padding: 20px;
}
</style>
