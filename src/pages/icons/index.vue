<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Icons</view>
      <view class="page__desc">图标</view>
    </view>

    <view class="page__bd page__bd_spacing">
      <view
        v-for="item in messageIcons"
        :key="item.title"
        class="icon-box"
      >
        <weui-icon :type="item.type" :size="item.size" :label="item.title" />
        <view class="icon-box__ctn">
          <view class="icon-box__title">{{ item.title }}</view>
          <view class="icon-box__desc">{{ item.desc }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      messageIcons: [
        {
          title: '成功',
          desc: '用于表示操作顺利达成',
          type: 'success',
          size: 'msg',
        },
        {
          title: '提示',
          desc: '用于表示信息提示，也常用于操作拦截提示用户所需信息',
          type: 'info',
          size: 'msg',
        },
        {
          title: '普通警告',
          desc: '用于表示操作后将引起一定后果的情况',
          type: 'warn',
          size: 'msg-primary',
        },
        {
          title: '强烈警告',
          desc: '用于表示操作后将引起严重不可挽回后果的情况',
          type: 'warn',
          size: 'msg',
        },
        {
          title: '等待',
          desc: '用于表示等待',
          type: 'waiting',
          size: 'msg',
        },
      ],
    };
  },
};
</script>

<style>
.page {
  min-height: 100vh;
  color: var(--weui-FG-0);
  text-align: center;
}

.page__hd {
  padding: 40px;
}

.page__title {
  text-align: left;
  font-size: 20px;
  font-weight: 400;
}

.page__desc {
  margin-top: 4px;
  color: var(--weui-FG-1);
  text-align: left;
  font-size: 14px;
}

.page__bd {
  padding: 0 40px;
  text-align: left;
}

.icon-box {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}

.icon-box__ctn {
  flex-shrink: 100;
}

.icon-box [class*="weui-icon-"] {
  margin-right: 18px;
}

.icon-box__title {
  color: var(--weui-FG-0);
  font-size: 17px;
  font-weight: 400;
}

.icon-box__desc {
  margin-top: 6px;
  color: var(--weui-FG-1);
  font-size: 12px;
  line-height: 1.5;
}
</style>
