<template>
  <div>
    <!--顶部导航栏-->
    <NavBar/>
    <!--顶部图片部分-->
    <div style="display:flex;flex-shrink: 0;justify-content:center;margin-top: 100px">
      <img style="float: left;z-index: 100;" src="@/assets/swiper/zhence.png" />
      <div style="display:flex;flex-shrink: 0;z-index: 100;">
        <div class="box-body">
          <div class="box-title">相关政策</div>
          <div class="box-info">近年来，越来越多的政策都把多式联运发展纳入到了规划之中。多式联运与节能减排的关系也越来越紧密。
            大力发展货物多式联运。推进大宗货物和集装箱铁水联运系统建设，扩大铁水联运规模。以长江干线、西江航运干线为重点，提升江海联运组织水平。
            加快推进多式联运“一单制”，创新运单互认标准与规范，推动国际货运单证信息交换，探索国际铁路电子提单，逐步普及集装箱多式联运电子运单。
            等政策也显得愈来愈重要。</div>
        </div>
      </div>
    </div>
    <!--具体内容-->
    <div style="display: flex;flex-shrink: 0;justify-content:center">
      <!--内容介绍-->
      <div class="content-left-body">
        <div style="margin-top: -40px">
          <el-card v-for="(item , index) in list"  v-bind:key="index" class="card" :id="index">
            <div class="content-left-title">{{item.title}}</div>
            <div style="text-align: center;margin-top: 5px">{{item.department}}</div>
            <div style="text-align: center;margin-top: 5px">{{item.time}}</div>
            <div class="content-left-content" v-if="item.id===1||item.id===4||item.id===5||item.id===7" v-html="item.content"></div>
            <div class="content-left-content1" v-if="item.id===0||item.id===2||item.id===3||item.id===6" v-html="item.content"></div>
          </el-card>
        </div>
      </div>
      <!--右边导航-->
      <div class="content-right-body">
        <div class="policy-title">政策详情</div>
        <div class="content-right-list"><a style="text-decoration: none;display: block;text-align:left" href="#0">&nbsp;&nbsp;1.《“十四五”现代综合交通运输体系发展规划》</a></div>
        <div class="content-right-list"><a style="text-decoration: none;display: block;text-align:left" href="#1">&nbsp;&nbsp;2.《推进多式联运发展优化调整运输结构工作方案（2021—2025 年）》</a></div>
        <div class="content-right-list"><a style="text-decoration: none;display: block;text-align:left" href="#2">&nbsp;&nbsp;3.《综合运输服务“十四五”发展规划》</a></div>
        <div class="content-right-list"><a style="text-decoration: none;display: block;text-align:left" href="#3">&nbsp;&nbsp;4.《推动交通运输领域新型基础设施建设的指导意见》</a></div>
        <div class="content-right-list"><a style="text-decoration: none;display: block;text-align:left" href="#4">&nbsp;&nbsp;5.《关于服务构建新发展格局的指导意见》</a></div>
        <div class="content-right-list"><a style="text-decoration: none;display: block;text-align:left" href="#5">&nbsp;&nbsp;6.《推进运输结构调整三年行动计划（2018—2020年）》</a></div>
        <div class="content-right-list"><a style="text-decoration: none;display: block;text-align:left" href="#6">&nbsp;&nbsp;7.《“十三五”铁路集装箱多式联运发展规划》</a></div>
        <div class="content-right-list"><a style="text-decoration: none;display: block;text-align:left" href="#7">&nbsp;&nbsp;8.《关于进一步鼓励开展多式联运工作》</a></div>
      </div>
    </div>
    <!--底部导航栏-->
    <Footer/>
    <!--返回顶部-->
    <BackTop/>
    <!--粒子效果-->
    <Particles />
  </div>
</template>

<script>
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import BackTop from '../../components/BackTop'
import Particles from '../../components/Particles'
export default {
  name: 'Policy',
  components: { Footer, NavBar, BackTop, Particles },
  created () {
    window.scrollTo(0, 0)
  },
  data () {
    return {
      list: [
        {
          id: 0,
          title: '《“十四五”现代综合交通运输体系发展规划》',
          department: '交通运输部',
          content: '大力发展货物多式联运。推进大宗货物和集装箱铁水联运系统建设，扩大铁水联运规模。以长江干线、西江航运干线为重点，提升江海联运组织水平。加快推进多式联运“一单制”，创新运单互认标准与规范，推动国际货运单证信息交换，探索国际铁路电子提单，逐步普及集装箱多式联运电子运单。加快多式联运信息共享，强化不同运输方式标准和规则的衔接。深入推广甩挂运输，创新货车租赁、挂车共享、定制化服务等模式。推动集装箱、标准化托盘、周转箱（筐）等在不同运输方式间共享共用，提高多式联运换装效率，发展单元化物流。鼓励铁路、港航、道路运输等企业成为多式联运经营人。',
          time: '2022 年 01月'
        },
        {
          id: 1,
          title: '《推进多式联运发展优化调整运输结构工作方案（2021—2025 年）》',
          department: '国务院',
          content: '一是提升多式联运承载能力和衔接水平。加快建设综合立体交通网。加快港口物流枢纽建设，完善铁路物流基地布局，有序推进专业性货运枢纽机场建设。<br><br>二是创新多式联运组织模式。丰富多式联运服务产品，大力发展铁路快运，推动冷链、危化品、国内邮件快件等专业化联运发展。培育多式联运市场主体，鼓励港口航运、铁路货运、航空寄递、货代企业及平台型企业等加快向多式联运经营人转型。<br><br>三是促进重点区域运输结构调整。推动大宗物资“公转铁、公转水”。推进京津冀及周边地区、晋陕蒙煤炭主产区运输绿色低碳转型。<br><br>四是加快技术装备升级。',
          time: '2022 年 01月'
        },
        {
          id: 2,
          title: '《综合运输服务“十四五”发展规划》',
          department: '交通运输部',
          content: '到2025年，“全国123出行交通圈”（都市区1小时通勤、城市群2小时通达、主要城市3小时覆盖）和“全球123快货物流圈”（国内1天送达、周边国家2天送达、全球主要城市3天送达）加快构建，多式联运占比、换装效率显著提升，多式联运“一单制”加快发展，运输结构更趋合理，物流成本进一步降低。国际物流供应链服务体系更加完善，国际海运连接度持续领先。',
          time: '2021 年 11月'
        },
        {
          id: 3,
          title: '《推动交通运输领域新型基础设施建设的指导意见》',
          department: '交通运输部',
          content: '智慧枢纽。推进综合客运枢纽智能化升级，推动旅客联程运输服务设施建设，鼓励建设智能联程导航、自助行李直挂、票务服务、安检互认、标识引导、换乘通道等服务设施，实现不同运输方式的有效衔接。引导建设绿色智慧货运枢纽（物流园区）多式联运等设施，提供跨方式、跨区域的全程物流信息服务，推进枢纽间资源共享共用。',
          time: '2020 年 08月'
        },
        {
          id: 4,
          title: '《关于服务构建新发展格局的指导意见》',
          department: '交通运输部',
          content: '（1）进一步优化运输结构：以多式联运为重点，以基础设施立体互联为基础，努力推动形成“宜铁则铁、宜公则公、宜水则水、宜空则空”的运输局面。<br><br>（2）推进交通物流与制造业深度融合。<br><br>（3）持续提升专业物流服务能力：促进冷链物流、电商物流发展。',
          time: '2020 年 03月'
        },
        {
          id: 5,
          title: '《推进运输结构调整三年行动计划（2018—2020年）》',
          department: '国务院办公厅',
          content: '（十五）加快联运枢纽建设和装备升级。推进具有多式联运功能的物流园区建设，加快铁路物流基地、铁路集装箱办理站、港口物流枢纽、航空转运中心、快递物流园区等规划建设和升级改造，加强不同运输方式间的有效衔接。<br><br>（十六）加快发展集装箱铁水联运。鼓励铁路、港口、航运等企业加强合作，促进海运集装箱通过铁路集疏港。<br><br>（十七）深入实施多式联运示范工程。加大对多式联运示范工程项目建设的支持力度，加强示范工程运行监测，推动运输组织模式创新。',
          time: '2018 年 09月'
        },
        {
          id: 6,
          title: '《“十三五”铁路集装箱多式联运发展规划》',
          department: '交通运输部',
          content: '完善联运通道功能，包括：一提升传统运输通道能力;研究构建双层集装箱运输通道;推进国际运输通道建设； 二、加强综合枢纽建设；三、扩大服务有效供给；四、加快技术装备升级；五、推动信息开放共享；<br><br>保障措施：一、健全工作体制机制；二、加大政策支持力度；三、拓展投资融资渠道；四、健全运价调节机制。到 2020 年集装箱运量占铁路货运量 20%左右，集装箱铁水联运量年均增长 10%以上，中欧班列开行 5000 列左右，成为铁路货运增长的新引擎',
          time: '2017 年 04月'
        },
        {
          id: 7,
          title: '《关于进一步鼓励开展多式联运工作》',
          department: '交通运输部等14个部门',
          content: '（十一）培育多式联运经营企业。组织开展多式联运示范工程建设，积极培育具有跨运输方式货运组织能力并承担全程责任的企业开展多式联运经营，引导企业建立全程 “一次委托”、运单“一单到底”、结算“一次收取”的服务方式，支持企业应用电子运单、网上结算等互联网服务新模式。探索建立基于碳核算的多式联运绩效评估机制，促进交通运输行业结构性节能减排。<br><br>（十二）丰富联运服务产品。鼓励运输企业按照资源共享、网络共建、风险共担原则，以资本、产品、信息为纽带开展联盟合作，加强冷藏集装箱、罐式集装箱等专业化多式联运，发展集装箱箱管、半挂车车管、标准托盘和运输包装循环共用，以及铁路长距离危险品专业化运输。',
          time: '2017 年 01月'
        }
      ]
    }
  }
}
</script>

<style scoped>
/*头部*/
.box-body{
  display: block;
  padding: 1px 0;
  height: 337px;
  width: 800px;
  background-color: whitesmoke;
}
.box-title{
  margin-top: 20px;
  text-align: center;
  font-size: 32px;
  font-weight: bolder;
}
.box-info{
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 20px;
  line-height: 50px;
  text-align: justify;
  text-justify: inter-ideograph;
  text-indent: 2em;
  padding: 2px;
}
/*左侧正文*/
.content-left-body{
  z-index: 100;
  margin-top: 47px;
  padding: 1px 0;
  height: 1000px;
  width: 1000px;
  max-height: 2000px;
  text-justify: inter-ideograph;
  overflow: auto;
}
.card{
  height: 300px;
  margin-top: 40px;
  filter: drop-shadow(8px 8px 10px seashell);
}
/*右侧正文*/
.content-right-body{
  z-index: 100;
  margin-top: 50px;
  margin-left: 35px;
  padding: 1px 0;
  height: 500px;
  width: 300px;
}
.content-right-list{
  text-align: center;
  margin-top: 20px;
}
.policy-title{
  text-align: center;
  font-size: 32px;
  font-weight: bolder;
  margin-top: 10px;
}
.content-left-title{
  font-size: 20px;
  text-align: center;
  font-weight: bolder;
}
.content-left-content{
  margin-top: 15px;
  text-align: justify;
  text-justify: inter-ideograph;
  padding: 2px;
}
.content-left-content1{
  margin-top: 15px;
  text-align: justify;
  text-justify: inter-ideograph;
  padding: 2px;
  text-justify: inter-ideograph;
  text-indent: 2em;
}
</style>
