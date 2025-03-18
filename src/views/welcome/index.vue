<template>
  <div style="display: flex; justify-content: center">
    <el-card style="width: 100%">
      <el-row style="font-size: 28px"
        >欢迎使用智能 AI 校园二手交易平台 🎉
      </el-row>
      <el-row style="font-size: 20px; margin: 40px 0"
        >智能 AI
        校园二手交易平台！在这里，您可以通过我们强大的平台轻松买卖二手商品，享受便捷的校园二手交易体验。
        🛠
      </el-row>
      <!--      介绍-->
      <el-row>
        <el-row
          >😀
          作为用户，您可以通过注册登录账户，浏览商品轮播图，查看最新公告，分享您的二手商品攻略，与
          AI
          进行智能对话获取个性化商品推荐，探索商品列表，购买心仪商品，并管理您的个人主页。
        </el-row>
        <el-row style="margin: 20px 0">
          💻 作为管理者，我们提供了用户管理、公告管理、二手商品攻略管理、AI
          对话管理、商品管理、商品订单管理、商品评分管理、商品类别管理以及帖子管理功能。
        </el-row>
        <el-row>
          🤝
          我们提供多种精心设计的二手商品推荐功能，帮助您快速找到心仪的商品。您可以管理和跟踪每个商品的浏览和收藏情况，实时分析并优化您的购物策略。无论是购买还是出售，我们都将为您提供最全面的交易支持。
        </el-row>
        <el-row style="margin: 20px 0">
          👌
          我们还提供了个人购物日历、订单详情查看、评论查看、收藏的二手商品攻略查看以及个人详情信息查看功能。
        </el-row>
        <el-row style="margin-bottom: 20px"
          >🏁 无论您是用户还是管理者，智能 AI
          校园二手交易平台都致力于提供稳定、安全、高效的交易服务，帮助您实现更快速、便捷的校园二手交易体验。
        </el-row>
      </el-row>
      <el-row class="card_container" style="margin: 40px 0">
        <el-card>
          <el-row style="margin: 15px 0; font-size: 20px; font-weight: bold"
            >⭐全方位的商品推荐
          </el-row>
          <el-row style="font-size: 16px; font-weight: bold; line-height: 24px"
            >🐼平台提供丰富多样的二手商品推荐，涵盖从热门商品到冷门好物，帮助您全面提升购物体验，轻松找到心仪商品。
          </el-row>
        </el-card>
        <el-card>
          <el-row style="margin: 15px 0; font-size: 20px; font-weight: bold"
            >⭐智能AI商品推荐
          </el-row>
          <el-row style="font-size: 16px; font-weight: bold; line-height: 24px"
            >🐶️平台提供AI智能对话功能，实时评估您的购物偏好，分析您的购物需求，帮助您推荐个性化商品。
          </el-row>
        </el-card>
        <el-card>
          <el-row style="margin: 15px 0; font-size: 20px; font-weight: bold"
            >⭐个人购物进度跟踪
          </el-row>
          <el-row style="font-size: 16px; font-weight: bold; line-height: 24px"
            >🐰️平台为您提供个性化的购物进度跟踪，自动记录您的购物计划，帮助您了解购物进度并优化购物安排。
          </el-row>
        </el-card>
        <el-card>
          <el-row style="margin: 15px 0; font-size: 20px; font-weight: bold"
            >⭐详尽的商品解析
          </el-row>
          <el-row style="font-size: 16px; font-weight: bold; line-height: 24px"
            >🐨平台提供详细的商品解析，帮助您深入理解每个商品的特点与亮点，让您不仅仅了解商品，更懂得如何挑选商品。
          </el-row>
        </el-card>
        <el-card>
          <el-row style="margin: 15px 0; font-size: 20px; font-weight: bold"
            >⭐多种交易方式支持
          </el-row>
          <el-row style="font-size: 16px; font-weight: bold; line-height: 24px"
            >🐷平台支持多种交易方式的推荐，您可以根据个人需求选择相应的交易方式，全面提升您的购物体验。
          </el-row>
        </el-card>
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: rgb(37, 130, 255);
  font-weight: bold;
}

.card_container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .el-card {
    height: 250px;
    flex-basis: calc(20% - 1rem);
    margin: 0 0.5rem;
  }
}
</style>
