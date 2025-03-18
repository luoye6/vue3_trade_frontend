<template>
  <div class="chat-room">
    <!-- 左侧联系人列表 -->
    <div class="contact-list">
      <el-scrollbar>
        <el-menu :default-active="activeContact" @select="handleContactSelect">
          <el-menu-item
            v-for="contact in contacts"
            :key="contact.id"
            :index="contact.id.toString()"
          >
            <span>{{ contact.userName }}</span>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </div>

    <!-- 右侧聊天区域 -->
    <div class="chat-area">
      <!-- 聊天内容展示区 -->
      <div class="message-list">
        <el-scrollbar>
          <div
            v-for="message in messages"
            :key="message.id"
            class="message-item"
          >
            <div
              :class="[
                'message-content',
                message.senderId === currentUserId ? 'sent' : 'received'
              ]"
            >
              {{ message.content }}
            </div>
          </div>
        </el-scrollbar>
      </div>

      <!-- 输入框和表情包选择区 -->
      <div class="message-input">
        <el-input
          v-model="inputMessage"
          type="textarea"
          :rows="2"
          placeholder="请输入消息"
          @keyup.enter="sendMessage"
        ></el-input>
        <el-button type="primary" @click="sendMessage">发送</el-button>
        <el-button @click="toggleEmojiPicker">😀</el-button>

        <EmojiPicker
          :native="true"
          @select="onEmojiSelect"
          v-if="showEmojiPicker"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import EmojiPicker from "vue3-emoji-picker";
import "vue3-emoji-picker/css";
import { listUserVoByPageUsingPost } from "@/api/userController";
import {
  addPrivateMessageUsingPost,
  listMyPrivateMessageVoByPageUsingPost
} from "@/api/privateMessageController";
import { GET_ID, GET_ROLE } from "@/utils/token";

// 当前用户角色
const userRole = GET_ROLE();

// 当前用户ID
const currentUserId = ref(GET_ID());

// 联系人列表
const contacts = ref([]);

// 当前选中的联系人
const activeContact = ref("");

// 消息列表
const messages = ref([]);

// 输入框内容
const inputMessage = ref("");

// 是否显示表情包选择器
const showEmojiPicker = ref(false);

// 加载联系人列表
const loadContacts = async () => {
  try {
    // 根据当前用户角色设置查询条件
    const queryRole = userRole === "admin" ? "user" : "admin";
    const response = await listUserVoByPageUsingPost({
      userRole: queryRole // 动态查询条件
    });
    if (response.data?.records) {
      contacts.value = response.data.records;
      console.log("联系人列表:", contacts.value);
    }
  } catch (error) {
    console.error("加载联系人失败:", error);
  }
};

// 加载与选中联系人的聊天记录
const loadMessages = async (recipientId) => {
  try {
    // 查询当前用户作为发送者的消息
    const response1 = await listMyPrivateMessageVoByPageUsingPost({
      senderId: currentUserId.value,
      recipientId
    });

    // 查询当前用户作为接收者的消息
    const response2 = await listMyPrivateMessageVoByPageUsingPost({
      senderId: recipientId,
      recipientId: currentUserId.value
    });

    // 合并两次查询结果
    const sentMessages = response1.data?.records || [];
    const receivedMessages = response2.data?.records || [];
    const allMessages = [...sentMessages, ...receivedMessages];

    // 根据 createTime 排序
    allMessages.sort((a, b) => new Date(a.createTime) - new Date(b.createTime));

    // 设置消息类型
    messages.value = allMessages.map((message) => {
      if (message.senderId === currentUserId.value) {
        message.type = "sent"; // 发送的消息
      } else {
        message.type = "received"; // 接收的消息
      }
      return message;
    });
  } catch (error) {
    console.error("加载聊天记录失败:", error);
  }
};

// 处理联系人选择
const handleContactSelect = (index: string) => {
  activeContact.value = index;
  loadMessages(index); // 加载与选中联系人的聊天记录
};

// 发送消息
const sendMessage = async () => {
  if (inputMessage.value.trim()) {
    try {
      const recipientId = activeContact.value;
      await addPrivateMessageUsingPost({
        senderId: currentUserId.value,
        recipientId,
        content: inputMessage.value,
        type: userRole
      });
      // 发送成功后清空输入框并重新加载消息
      inputMessage.value = "";
      loadMessages(recipientId);
    } catch (error) {
      console.error("发送消息失败:", error);
    }
  }
};

// 切换表情包选择器显示状态
const toggleEmojiPicker = () => {
  showEmojiPicker.value = !showEmojiPicker.value;
};

// 选择表情包
const onEmojiSelect = (event: any) => {
  const emoji = event.i;
  if (emoji) {
    inputMessage.value += emoji; // 将表情符号添加到输入框中
  }
};

// 组件挂载时加载联系人列表
onMounted(() => {
  loadContacts();
});
</script>

<style scoped>
.chat-room {
  display: flex;
  height: 100vh;
  background-color: #f5f5f5;
}

.contact-list {
  width: 200px;
  border-right: 1px solid #e4e7ed;
  background-color: #fff;
}

/* 联系人菜单项默认样式 */
.contact-list .el-menu-item {
  background-color: #f8f8f8; /* 淡灰色背景 */
  margin: 4px 0; /* 增加间距 */
  border-radius: 4px; /* 圆角 */
  transition: background-color 0.3s ease; /* 背景色过渡效果 */
}

/* 联系人菜单项选中样式 */
.contact-list .el-menu-item.is-active {
  background-color: #e6f7ff; /* 淡蓝色背景 */
  color: #1890ff; /* 选中文字颜色 */
}

/* 鼠标悬停样式 */
.contact-list .el-menu-item:hover {
  background-color: #e6f7ff; /* 淡蓝色背景 */
}

.chat-area {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.message-list {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  background-color: #fff;
}

.message-item {
  margin-bottom: 10px;
}

.message-content {
  max-width: 60%;
  padding: 10px;
  border-radius: 5px;
}

.message-content.sent {
  background-color: #95ec69;
  margin-left: auto;
}

.message-content.received {
  background-color: #f0f0f0;
  margin-right: auto;
}

.message-input {
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #e4e7ed;
  background-color: #fff;
}

.el-textarea {
  flex: 1;
  margin-right: 10px;
}

emoji-picker {
  position: absolute;
  bottom: 60px;
  right: 10px;
  z-index: 1000;
}
</style>
