<template>
  <div class="detail">
    <ul id="menu">
      <img src="../../src/assets//image/logo.png" class="logo" alt="logo" />
      <li data-menuanchor="page1">
        <a href="#page1">首页</a>
      </li>
      <li data-menuanchor="page2"><a href="#page2">新闻资讯</a></li>
      <li data-menuanchor="page3"><a href="#page3">关于雨辰</a></li>
      <li data-menuanchor="page4" class="active">
        <a href="#page4">业务内容</a>
      </li>
      <li data-menuanchor="page5"><a href="#page5">雨辰优势</a></li>
      <li data-menuanchor="page6"><a href="#page6">招聘岗位</a></li>
    </ul>
    <div class="image"></div>
    <div class="content">
      <el-breadcrumb class="breadCrumb" separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          ><a href="/">{{ name }}</a></el-breadcrumb-item
        >
      </el-breadcrumb>
      <div class="title">
        <div class="project">
          <div class="chinise">公司项目</div>
          <div class="english">/ Company projects</div>
        </div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="HIS项目" name="first">HIS项目</el-tab-pane>
          <el-tab-pane label="医废项目" name="second">医废项目</el-tab-pane>
          <el-tab-pane label="银医通项目" name="third">银医通项目</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Detail",
  data() {
    return {
      activeName: "first",
      name: ""
    };
  },
  created() {
    this.getProjectIndex();
  },
  methods: {
    getProjectIndex() {
      this.activeName = this.$route.query.index;
      this.name = this.$route.query.name;
      console.log(this.activeName, this.name);
    },
    handleClick(tab, event) {
      console.log(tab, event);
      this.name = tab.label;
    }
  }
};
</script>
<style lang="scss" scoped>
.detail {
  .image {
    width: 100%;
    height: 737px;
    background-image: url("../../src/assets/image/detail.png");
    background-size: cover;
  }
  .content {
    width: 1199px;
    margin: 0 auto;
    .breadCrumb {
      margin: 30px 0;
    }
    .title {
      display: flex;
      justify-content: space-between;
      .project {
        font-size: 22px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #1f2123;
        line-height: 18px;
        .english {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #999999;
          line-height: 18px;
        }
      }
      .button {
        display: flex;
        .buttonItem {
          width: 105px;
          height: 34px;
          border: 1px solid #bdbdbd;
          border-radius: 10px;
          text-align: center;
          line-height: 34px;
          cursor: pointer;
        }
        .buttonItem:hover {
          background: linear-gradient(180deg, #49a3ff, #036cd8);
        }
        .active {
          background: linear-gradient(180deg, #49a3ff, #036cd8);
        }
      }
    }
  }
}
</style>
<style lang="scss">
#menu {
  position: fixed;
  z-index: 70;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  letter-spacing: 1px;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  padding-left: 300px;
  .active {
    font-weight: bold;
    border-bottom: 1px solid #ffffff;
  }
  .logo {
    margin-right: 300px;
  }

  li {
    display: inline-block;
    margin: 0 20px;
    height: 50px;
    line-height: 50px;
  }

  a {
    color: #ffffff;
    font-size: 18px;
    text-decoration: none;
  }
}
</style>
