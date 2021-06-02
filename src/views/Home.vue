<template>
  <div>
    <ul id="menu">
      <img src="../../src/assets//image/logo.png" class="logo" alt="logo" />
      <li data-menuanchor="page1" class="active">
        <a href="#page1">首页</a>
      </li>
      <li data-menuanchor="page2"><a href="#page2">新闻资讯</a></li>
      <li data-menuanchor="page3"><a href="#page3">关于雨辰</a></li>
      <li data-menuanchor="page4"><a href="#page4">业务内容</a></li>
      <li data-menuanchor="page5"><a href="#page5">雨辰优势</a></li>
      <li data-menuanchor="page6"><a href="#page6">招聘岗位</a></li>
    </ul>

    <full-page :options="options" ref="page" class="full-page">
      <!--      第一屏-->
      <div class="section">
        <div class="box1">
          <img class="fade-image" src="../../src/assets/image/detail.png" />
          <img class="image" src="../../src/assets/image/first.png" />
        </div>
      </div>
      <!--      第二屏-->
      <div class="section">
        <div class="box2">
          <div class="box2-title">
            <h3>新闻资讯</h3>
            <h5>Advantage of rain</h5>
            <div class="box2-title-image"></div>
          </div>
          <div class="box2-content">
            <div class="box2-content-image"></div>
            <div class="box2-content-text">
              <div class="text-item">
                <div class="index">01</div>
                <div class="content">
                  <header>
                    <div class="title">本月优秀员工奖励公式工奖励公式</div>
                    <div class="time">2021-05-26</div>
                  </header>
                  <div class="text">
                    团结互助的同事关系、自由和谐的工作环境，人性化的管理，弹性工作时间，能让员工
                    快速融入并为之奋斗。团结互助的同事关系、自由和谐的工作环境，人性化的管理，弹性工作时间，能让员工
                    快速融入并为之奋斗。团结互助的同事关系、自由和谐的工作环境，人性化的管理，弹性工作时间，能让员工
                    快速融入并为之奋斗。
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="box3">
          <div class="box2-title">
            <h3>关于雨辰</h3>
            <h5>About Yuchen</h5>
            <div class="box2-title-image"></div>
          </div>
          <div class="content">
            <div class="content-top">
              <div class="content-top-image"></div>
              <div class="content-top-text">
                <h4>公司简介//</h4>
                <div>
                  公司于2011年11月成立，专业从事IT规划、软件实施、网络工程信息化管理等一站式服务企业，已在邯郸市及周边发展成为极具规模的软件供应商。我公司主要致力于医疗卫生领域信息化系统软件的自主研发和推广应用，利用互联网医疗构建居民全息医疗保健服务模式，现已拥有多个成功合作案例。公司坚持“提高客户效益，与客户共同成长”的经营理念，全力为广大客户提供“及时、真诚、专业”的服务。
                </div>
              </div>
            </div>
            <div class="content-center">
              <div class="content-center-top"></div>
              <div class="content-center-box">
                <div class="content-center-position">
                  <div class="position-image1"></div>
                  <div class="position-title">雨辰定位</div>
                  <div class="position-text">医疗卫生领域信息化服务</div>
                </div>
                <div class="content-center-position">
                  <div class="position-image2"></div>
                  <div class="position-title">雨辰愿景</div>
                  <div class="position-text">成为国际知名互联网服务商</div>
                </div>
                <div class="content-center-position">
                  <div class="position-image3"></div>
                  <div class="position-title">雨辰文化</div>
                  <div class="position-text">创造价值，分享价值</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="box4">
          <div class="box2-title">
            <h3>业务内容</h3>
            <h5>Business content</h5>
            <div class="box2-title-image"></div>
          </div>
          <div class="content-project1">
            <div class="image"></div>
            <div class="content">
              <div class="title">HIS项目</div>
              <div class="text" @click="goProjectDetail('first', 'HIS项目')">
                HIS
                以实现医院信息化管理为设计原则，围绕病人在医院活动的各个环节，来构造系统的整体框架。系统覆盖医院业务的各个流程，按照系统职能的不同主要包括：临床诊疗分系统、药品管理分系统经济管理分系统、综合管理与统计分析分系统、后勤管理分系统等六大模块，并且具备操作便捷、查询灵活、整合度高等特点。
              </div>
            </div>
          </div>
          <div class="content-project2">
            <div class="content">
              <div class="title">医废项目</div>
              <div class="text" @click="goProjectDetail('second', '医废项目')">
                立医疗废弃物从分类投放、分类收集、分类贮存、分类交接、分类转运直至分类处置的定点定向、全流程、可追溯、闭环式管理体系实现医废信息实时上报和异常预警。通过标准化的平台接口灵活的部署配置方式及完善的软硬件定制化服务，我们的平台可以覆盖各级医疗机构、医废集中贮存点和医废集中处置单位的所有环节并能与各级卫生及环保监管部门实现信息共享协同。
                共享协同。
              </div>
            </div>
            <div class="image"></div>
          </div>
          <div class="content-project3">
            <div class="image"></div>
            <div class="content">
              <div class="title">银医通项目</div>
              <div class="text" @click="goProjectDetail('third', '银医通项目')">
                为医院建立统一的银医平台，实现统一的业务规划、网络规划、安全规划等，基于平台之上，实现门诊窗口和自助业务、住院窗口和自助业务、院外应用拓展业务等。
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="box5">
          <div class="box2-title">
            <h3>雨辰优势</h3>
            <h5>Advantages of rain</h5>
            <div class="box2-title-image"></div>
          </div>
          <div class="content">
            <div class="first-row">
              <div class="left">丰富的CP资源</div>
              <div class="right">海量质优渠道资源</div>
            </div>
            <div class="second-row">
              <div class="left">
                雨辰科技拥有多家CP资源，促进医疗行 业长期持久发展
              </div>
              <div class="right">
                与国内众多优质渠道深度合作，强势资源覆 盖全网。
              </div>
            </div>
            <div class="third-row">
              <div class="left">专业的团队支撑</div>
              <div class="right">丰富的行业经验</div>
            </div>
            <div class="forth-row">
              <div class="left">
                专业、顶尖的研发团队，具备多年互联网医疗行业开
                发经验；经验丰富的运营团队，具备医疗产品代理经验
              </div>
              <div class="right">
                技服务客户超 过200家，具有与各大运营商丰富的合作经验。
              </div>
            </div>
            <div class="fifth-row">
              <div class="left">精准高效的推广策略</div>
              <div class="right">强大的价格优势</div>
            </div>
            <div class="sixth-row">
              <div class="left">
                基于大数据前提下的专业分析，系统地为移动开发者提供更精准科
                学的参考，为移动产品找准最佳突破口，形成高效的推广营销解决方案
              </div>
              <div class="right">
                雨辰拥有极其丰富的行业经验及广阔的人脉，资源更优， 价格更优。
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="box6">
          <div class="box6-title">
            <h3>招聘岗位</h3>
            <div class="box6-title-image"></div>
            <div class="box6-title-email">
              有意加入雨辰者，请将个人简历发至yc_liyanyan@163.com，谢谢！
            </div>
          </div>
          <div class="box6-content">
            <div class="firm">
              <div class="first">
                <div class="logo"></div>
                <div class="name">
                  <div class="chineseName">河北雨辰同瑞信息科技有限公司</div>
                  <div class="englishName">
                    Hebei Yuchen Tongrui Information Technology Co., Ltd
                  </div>
                </div>
              </div>
              <div class="position">
                <div>地址：河北省石家庄市桥西区新石北路263号</div>
                <div>邮箱：yc_liyanyan@163.com</div>
              </div>
            </div>
            <div class="line"></div>
            <div class="about">
              <div>
                <a href="#page3">关于我们</a>
                <span>></span>
              </div>
              <div><a href="#page3">新闻资讯</a></div>
              <div><a href="#page3">新闻动态</a></div>
              <div><a href="#page3">雨辰团队</a></div>
            </div>
            <div class="about">
              <div>
                <a href="#page4">公司业务<span>></span></a>
              </div>
              <div><a href="#page4">HIS项目</a></div>
              <div><a href="#page4">医废项目</a></div>
              <div><a href="#page4">银医通项目</a></div>
            </div>
            <div class="about">
              <div>
                <a href="#page5">公司优势<span>></span></a>
              </div>
              <div><a href="#page5">丰富CP资源</a></div>
              <div><a href="#page5">质优渠道资源</a></div>
              <div><a href="#page5">专业团队支撑</a></div>
              <div><a href="#page5">丰富行业经验</a></div>
              <div><a href="#page5">精准推广策略</a></div>
            </div>
            <div class="about">
              <div>
                <a href="#page6">公司招聘<span>></span></a>
              </div>
              <div><a href="#page6">福利待遇</a></div>
              <div><a href="#page6">招聘岗位</a></div>
            </div>
          </div>
          <div class="box6-bottom">
            Copyright © 2011-2016 GZ JunBo. All Rights Reserved.
            河北雨辰同瑞信息科技有限公司 版权所有 备案号
          </div>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      options: {
        onLeave: this.onLeave,
        // 滚动到最顶部后是否连续滚动到底部
        loopTop: true,
        // 滚动到最底部后是否连续滚动到顶部
        loopBottom: true,
        // 绑定菜单，设定相关属性和anchors的值对应后，菜单可以控制幻灯片滚动
        menu: "#menu",
        // 是否显示导航，设为true会显示小圆点作为导航
        navigation: true,
        // 导航小圆点的位置，可以设置为left或者right
        navigationPosition: "right",
        // 是否显示横向幻灯片的导航
        slidesNavigation: true,
        // 横向幻灯片导航的位置，可以为top或者bottom
        slidesNavPosition: "top",
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        anchors: ["page1", "page2", "page3", "page4", "page5", "page6"],
        sectionsColor: [
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff"
        ]
      }
    };
  },
  created() {},
  methods: {
    onLeave(item, nextindex, direction) {
      console.log(nextindex);
      var tag = document.querySelectorAll("a");
      var logo = document.getElementsByClassName("logo");
      if (nextindex.index !== 0) {
        logo[0].style.background = "#444444";
        for (let i = 0; i < tag.length; i++) {
          tag[i].style.color = "#444444";
        }
      } else {
        logo[0].style.background = "none";
        for (let i = 0; i < tag.length; i++) {
          tag[i].style.color = "#ffffff";
        }
      }
      if (nextindex.index === 5) {
        logo[0].style.background = "none";
        for (let i = 0; i < tag.length; i++) {
          tag[i].style.color = "#ffffff";
        }
      }
    },

    goProjectDetail(index, name) {
      console.log(1);
      this.$router.push({
        path: "/detail",
        query: { index: index, name: name }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
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
.box1 {
  width: 100%;
  height: 100%;
  @keyframes fadeInOut {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
  }
  .fade-image {
    position: absolute;
    animation-name: fadeInOut;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 12s;
    animation-direction: alternate;
    width: 100%;
    height: 100%;
  }
  .image {
    width: 100%;
    height: 100%;
  }
}
.box2-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    margin: 0px;
    font-size: 30px;
  }
  h5 {
    margin: 0px;
  }
  .box2-title-image {
    width: 121px;
    height: 5px;
    background: #33a2f7;
  }
  margin-bottom: 50px;
}
.box2 {
  padding-top: 55px;
  display: flex;
  flex-direction: column;

  .box2-content {
    display: flex;
    justify-content: center;
    .box2-content-image {
      background-image: url("../../src/assets/image/news.png");
      width: 500px;
      height: 530px;
      transition: all 0.9s;
    }
    .box2-content-image:hover {
      cursor: pointer;
      transform: rotate(360deg) scale(1.1);
    }
    .box2-content-text {
      margin-left: 30px;
      height: 530px;
      overflow-y: auto;
      .text-item {
        display: flex;
        .index {
          width: 52px;
          height: 44px;
          font-size: 55px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #bdbdbd;
          line-height: 45px;
        }
        .content {
          margin-left: 30px;
          header {
            width: 550px;
            display: flex;
            justify-content: space-between;
            .title {
              font-size: 16px;
              font-family: Microsoft YaHei;
              font-weight: bold;
              color: #333333;
              line-height: 18px;
            }
            .time {
              font-size: 16px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #999999;
              line-height: 18px;
            }
          }
          .text {
            width: 550px;
          }
        }
      }
    }
  }
}
.box3 {
  padding-top: 55px;
  .box2-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      margin: 0px;
    }
    h5 {
      margin: 0px;
    }
    .box2-title-image {
      width: 121px;
      height: 5px;
      background: #33a2f7;
    }
    margin-bottom: 50px;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .content-top {
      position: absolute;
      width: 1198px;
      height: 398px;
      background-color: rgba(53, 137, 222, 1);
      .content-top-image {
        position: absolute;
        bottom: 30px;
        left: 30px;
        width: 551px;
        height: 400px;
        background-image: url("../../src/assets/image/about1.png");
      }
      .content-top-text {
        float: right;
        width: 555px;
        height: 209px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
        line-height: 38px;
      }
    }
    .content-center {
      height: 600px;
      .content-center-top {
        width: 1920px;
        height: 588px;
        background-image: url("../../src/assets/image/about2.png");
      }
    }
    .content-center-box {
      display: flex;
      position: absolute;
      bottom: -90px;
      left: 200px;
      width: 79%;
      justify-content: space-evenly;
    }
    .content-center-position {
      display: flex;
      flex-direction: column;
      width: 263px;
      height: 274px;
      background: #ffffff;
      box-shadow: 0px 2px 40px 0px rgba(0, 0, 0, 0.07);
      border-radius: 20px;
      transition: All 0.4s ease-in-out;
      :hover {
        cursor: pointer;
        transform: scale(1.2);
      }
      .position-image1 {
        width: 100px;
        height: 100px;
        background-size: cover;
        margin: 0 auto;
        background-image: url("../../src/assets/image/position.png");
        transition: All 0.4s ease-in-out;
      }
      .position-image1:hover {
        transform: rotate(360deg) scale(1.2);
      }
      .position-image2 {
        width: 100px;
        height: 100px;
        background-size: cover;
        margin: 0 auto;
        background-image: url("../../src/assets/image/future.png");
        transition: All 0.4s ease-in-out;
      }
      .position-image2:hover {
        transform: rotate(360deg) scale(1.2);
      }
      .position-image3 {
        width: 100px;
        height: 100px;
        background-size: cover;
        margin: 0 auto;
        background-image: url("../../src/assets/image/culture.png");
        transition: All 0.4s ease-in-out;
      }
      .position-image3:hover {
        transform: rotate(360deg) scale(1.2);
      }
      .position-title {
        text-align: center;
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #036cd8;
        line-height: 50px;
        height: 50px;
      }
      .position-text {
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        line-height: 50px;
        height: 50px;
        text-align: center;
      }
    }
  }
}
.box4 {
  .content-project1 {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    .image {
      width: 197px;
      height: 188px;
      background-image: url("../../src/assets/image/his.png");
      background-size: cover;
      background-size: 100% 100%;
    }
    .content {
      margin-left: 30px;
      .title {
        font-size: 25px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #000000;
        line-height: 80px;
      }
      .text {
        width: 704px;
        // height: 191px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        // font-weight: 400;
        color: #000000;
        line-height: 30px;
      }
    }
  }
  .content-project2 {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    .image {
      width: 197px;
      height: 188px;
      background-image: url("../../src/assets/image/abandon.png");
      background-size: cover;
      background-size: 100% 100%;
    }
    .content {
      margin-right: 30px;
      .title {
        font-size: 25px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #000000;
        line-height: 80px;
      }
      .text {
        width: 704px;
        // height: 191px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        // font-weight: 400;
        color: #000000;
        line-height: 30px;
      }
    }
  }
  .content-project3 {
    display: flex;
    justify-content: center;
    .image {
      width: 197px;
      height: 188px;
      background-image: url("../../src/assets/image/yinyitong.png");
      background-size: cover;
      background-size: 100% 100%;
    }
    .content {
      margin-left: 30px;
      .title {
        font-size: 25px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #000000;
        line-height: 80px;
      }
      .text {
        width: 704px;
        // height: 191px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        // font-weight: 400;
        color: #000000;
        line-height: 30px;
      }
    }
  }
}
.box5 {
  .content {
    margin: 0 auto;
    width: 896px;
    height: 513px;
    background-image: url("../../src/assets/image/advantage.png");
    background-size: cover;
    .first-row {
      margin: 0 auto;
      font-weight: bold;
      font-size: 20px;
      color: #ffffff;
      line-height: 91px;
      width: 750px;
      display: flex;
      justify-content: space-between;
    }
    .third-row {
      margin: 0 auto;
      font-weight: bold;
      font-size: 20px;
      color: #ffffff;
      width: 860px;
      display: flex;
      justify-content: space-between;
      height: 50px;
    }
    .second-row {
      margin: 0 auto;
      font-weight: bold;
      font-size: 16px;
      color: #666666;
      line-height: 38px;
      width: 910px;
      display: flex;
      justify-content: space-between;
      height: 143px;
      .left {
        width: 277px;
        height: 48px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        line-height: 27px;
      }
      .right {
        width: 277px;
        height: 48px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        line-height: 27px;
      }
    }
    .forth-row {
      font-weight: bold;
      font-size: 16px;
      color: #666666;
      line-height: 38px;
      width: 1050px;
      display: flex;
      justify-content: space-between;
      height: 143px;
      position: relative;
      right: 80px;
      .left {
        width: 362px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        line-height: 38px;
      }
      .right {
        width: 344px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        line-height: 38px;
      }
    }
    .fifth-row {
      margin: 0 auto;
      font-weight: bold;
      font-size: 20px;
      color: #ffffff;
      width: 800px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      .right {
        position: relative;
        right: 22px;
      }
    }
    .sixth-row {
      margin: 0 auto;
      font-weight: bold;
      font-size: 16px;
      color: #666666;
      line-height: 38px;
      width: 910px;
      display: flex;
      justify-content: space-between;
      height: 143px;
      .left {
        width: 277px;
        height: 48px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        line-height: 27px;
      }
      .right {
        width: 277px;
        height: 48px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        line-height: 27px;
      }
    }
  }
}
.box6 {
  .box6-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("../../src/assets/image/job.png");
    background-size: cover;
    width: 100%;
    height: 610px;
    h3 {
      margin: 0px;
      font-size: 30px;
      color: #ffffff;
      line-height: 51px;
    }
    .box6-title-image {
      width: 121px;
      height: 5px;
      background: #ffffff;
      border-radius: 3px;
    }
    .box6-title-email {
      font-size: 34px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #ffffff;
      line-height: 51px;
      margin-top: 150px;
    }
  }

  .box6-content {
    width: 100%;
    height: 275px;
    background: #154282;
    display: flex;
    align-items: flex-start;

    .firm {
      margin-top: 50px;
      margin-left: 250px;
      width: 350px;
      display: flex;
      flex-direction: column;
      .first {
        display: flex;
        margin-bottom: 50px;
        .logo {
          width: 51px;
          height: 33px;
          background-image: url("../../src/assets/logo.png");
        }
        .name {
          width: 225px;
          font-size: 15px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #ffffff;
          line-height: 25px;
          .englishName {
            font-size: 5px;
          }
        }
      }
      .position {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
        line-height: 31px;
      }
    }
    .line {
      margin-top: 50px;
      margin-right: 50px;
      width: 1px;
      height: 205px;
      background: #ffffff;
    }
    .about {
      margin-left: 50px;
      margin-top: 50px;
      width: 200px;
      font-size: 15px;
      color: #ffffff;
      a {
        text-decoration: none;
        line-height: 30px;
      }
    }
    .about {
      a:hover {
        font-weight: bold;
        // transform: scale(1.5);
      }
    }
  }
  .box6-bottom {
    width: 100%;
    height: 60px;
    background: #000000;
    color: #ffffff;
    text-align: center;
    line-height: 60px;
  }
}
</style>
