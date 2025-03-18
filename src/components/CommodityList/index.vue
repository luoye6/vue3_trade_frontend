<template>
  <div class="commodity-list">
    <el-row :gutter="16">
      <el-col :span="8" v-for="item in props.commodityList" :key="item.id">
        <el-card style="margin-bottom: 16px">
          <el-link @click="goCommodityDetail(item.id)" :underline="false">
            <el-avatar
              :src="item.commodityAvatar"
              size="large"
              style="margin-right: 10px"
            />
            <div class="content">
              <div class="title">{{ item.commodityName }}</div>
              <div class="description">
                {{ item.commodityDescription }}
              </div>
              <div class="tags">
                <el-tag type="info" style="margin-right: 5px">
                  {{ item.degree }}
                </el-tag>
                <el-tag type="success" style="margin-right: 5px">
                  库存: {{ item.commodityInventory }}
                </el-tag>
                <el-tag type="primary" style="margin-right: 5px">
                  所属类别：{{ item.commodityTypeName }}
                </el-tag>
              </div>
              <div class="stats">
                <div class="icon-item">
                  <el-icon :size="16">
                    <View />
                  </el-icon>
                  <span>{{ item.viewNum || 0 }}</span>
                </div>
                <div class="icon-item">
                  <el-icon :size="16">
                    <Star />
                  </el-icon>
                  <span>{{ item.favourNum || 0 }}</span>
                </div>
              </div>
            </div>
          </el-link>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import { ElTag, ElIcon } from "element-plus";
import { View, Star } from "@element-plus/icons-vue";

let $router = useRouter();
const props = defineProps({
  commodityList: {
    type: Array,
    required: true
  }
});

// 跳转到商品详情页
const goCommodityDetail = (id: number) => {
  $router.push("/user/commodity/detail/" + id);
};
</script>

<style scoped lang="scss">
.commodity-list .content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.commodity-list .title {
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
}

.commodity-list .description {
  font-size: 14px;
  margin: 10px 0 0 10px;
  color: #888;
}

.commodity-list .tags {
  margin: 10px 0 0 10px;
}

.commodity-list .stats {
  display: flex;
  align-items: center;
  margin: 10px 0 0 10px;
}

.commodity-list .icon-item {
  display: flex;
  align-items: center;
  margin-right: 16px;
  color: #666;

  span {
    margin-left: 4px;
    font-size: 14px;
  }
}
</style>
