/** 工作台 */
const workPlatform = () => import("@/views/main/work-platform/index.vue")

/** 数据分析 */
const dataAnalysis = () => import("@/views/main/data-analysis/index.vue")

/** 捐款管理 */
const donationM = () => import("@/views/main/donation-m/index.vue")

/** 财务管理 */
const financeM = () => import("@/views/main/finance-m/index.vue")
const bank = () => import("@/views/main/finance-m/cpns/bank.vue")
const wechat = () => import("@/views/main/finance-m/cpns/wechat.vue")
const alipay = () => import("@/views/main/finance-m/cpns/alipay.vue")

/** 捐赠票据管理 */
const donationBillM = () => import("@/views/main/donation-bill-m/index.vue")

/** 项目管理 */
const projectM = () => import("@/views/main/project-m/index.vue")
const list = () => import("@/views/main/project-m/cpns/list.vue")
const comment = () => import("@/views/main/project-m/cpns/comment.vue")
const process = () => import("@/views/main/project-m/cpns/process.vue")
const fund = () => import("@/views/main/project-m/cpns/fund.vue")

/** 项目分类管理 */
const projectClassifyM = () => import("@/views/main/project-classify-m/index.vue")

/** 内容中心 */
const contentCenter = () => import("@/views/main/content-center/index.vue")
const news = () => import("@/views/main/content-center/cpns/news.vue")
const notice = () => import("@/views/main/content-center/cpns/notice.vue")
const cooperation = () => import("@/views/main/content-center/cpns/cooperation.vue")
const publicity = () => import("@/views/main/content-center/cpns/publicity.vue")
const information = () => import("@/views/main/content-center/cpns/information.vue")
const aboutUs = () => import("@/views/main/content-center/cpns/about-us.vue")
const joinUs = () => import("@/views/main/content-center/cpns/join-us.vue")
const dowmload = () => import("@/views/main/content-center/cpns/download.vue")
const banner = () => import("@/views/main/content-center/cpns/banner.vue")

/** 用户管理 */
const userM = () => import("@/views/main/user-m/index.vue")

/** 系统设置 */
const system = () => import("@/views/main/system-set/index.vue")
const framework = () => import("@/views/main/system-set/cpns/framework.vue")
const user = () => import("@/views/main/system-set/cpns/user.vue")
const manager = () => import("@/views/main/system-set/cpns/manager.vue")
const operationRecord = () => import("@/views/main/system-set/cpns/operation-record.vue")
const browseRecord = () => import("@/views/main/system-set/cpns/browse-record.vue")

export const menuConfig = [
  {
    icon: "More",
    name: "工作台",
    sort: 1,
    type: 2,
    id: "1",
    path: "/main/workPlatform",
    component: workPlatform,
    children: []
  },
  {
    icon: "More",
    name: "数据分析",
    sort: 2,
    type: 2,
    id: "2",
    path: "/main/dataAnalysis",
    component: dataAnalysis,
    children: []
  },
  {
    icon: "More",
    name: "捐款管理",
    sort: 3,
    type: 2,
    id: "3",
    path: "/main/donationM",
    component: donationM,
    children: []
  },
  {
    icon: "More",
    name: "财务管理",
    sort: 4,
    type: 1,
    id: "4",
    path: "/main/financeM",
    component: financeM,
    children: [
      {
        name: "银行流水",
        sort: 1,
        type: 2,
        id: "4-1",
        path: "/main/projectClassifyM/bank",
        component: bank
      },
      {
        name: "微信流水",
        sort: 2,
        type: 2,
        id: "4-2",
        path: "/main/projectClassifyM/wechat",
        component: wechat
      },
      {
        name: "支付宝流水",
        sort: 3,
        type: 2,
        id: "4-3",
        path: "/main/projectClassifyM/alipay",
        component: alipay
      }
    ]
  },
  {
    icon: "More",
    name: "捐赠票据管理",
    sort: 5,
    type: 2,
    id: "5",
    path: "/main/donationBillM",
    component: donationBillM,
    children: []
  },
  {
    icon: "More",
    name: "项目管理",
    sort: 6,
    type: 1,
    id: "6",
    path: "/main/projectM",
    component: projectM,
    children: [
      {
        name: "项目列表",
        sort: 1,
        type: 2,
        id: "6-1",
        path: "/main/projectClassifyM/list",
        component: list
      },
      {
        name: "评论管理",
        sort: 2,
        type: 2,
        id: "6-2",
        path: "/main/projectClassifyM/comment",
        component: comment
      },
      {
        name: "项目进展管理",
        sort: 3,
        type: 2,
        id: "6-3",
        path: "/main/projectClassifyM/process",
        component: process
      },
      {
        name: "资金拨付管理",
        sort: 4,
        type: 2,
        id: "6-4",
        path: "/main/projectClassifyM/fund",
        component: fund
      }
    ]
  },
  {
    icon: "More",
    name: "项目分类管理",
    sort: 7,
    type: 2,
    id: "7",
    path: "/main/projectClassifyM",
    component: projectClassifyM,
    children: []
  },
  {
    icon: "More",
    name: "内容中心",
    sort: 8,
    type: 1,
    id: "8",
    path: "/main/contentCenter",
    component: contentCenter,
    children: [
      {
        name: "新闻管理",
        sort: 1,
        type: 2,
        id: "8-1",
        path: "/main/projectClassifyM/newsM",
        component: news
      },
      {
        name: "公告公示管理",
        sort: 2,
        type: 2,
        id: "8-2",
        path: "/main/projectClassifyM/noticeM",
        component: notice
      },
      {
        name: "合作机构管理",
        sort: 3,
        type: 2,
        id: "8-3",
        path: "/main/projectClassifyM/cooperationM",
        component: cooperation
      },
      {
        name: "宣传视频管理",
        sort: 4,
        type: 2,
        id: "8-4",
        path: "/main/projectClassifyM/publicityM",
        component: publicity
      },
      {
        name: "信息披露管理",
        sort: 5,
        type: 2,
        id: "8-5",
        path: "/main/projectClassifyM/informationM",
        component: information
      },
      {
        name: "关于我们",
        sort: 1,
        type: 2,
        id: "8-6",
        path: "/main/projectClassifyM/aboutUs",
        component: aboutUs
      },
      {
        name: "加入我们",
        sort: 1,
        type: 2,
        id: "8-7",
        path: "/main/projectClassifyM/joinUs",
        component: joinUs
      },
      {
        name: "下载中心",
        sort: 1,
        type: 2,
        id: "8-8",
        path: "/main/projectClassifyM/download",
        component: dowmload
      },
      {
        name: "轮播图管理",
        sort: 1,
        type: 2,
        id: "8-9",
        path: "/main/projectClassifyM/bannerM",
        component: banner
      }
    ]
  },
  {
    icon: "More",
    name: "用户管理",
    sort: 9,
    type: 2,
    id: "9",
    path: "/main/system",
    component: userM,
    children: []
  },
  {
    icon: "More",
    name: "系统设置",
    sort: 10,
    type: 1,
    id: "10",
    path: "/main/system",
    component: system,
    children: [
      {
        name: "组织架构",
        sort: 1,
        type: 2,
        id: "10-1",
        path: "/main/projectClassifyM/framework",
        component: framework
      },
      {
        name: "角色管理",
        sort: 2,
        type: 2,
        id: "10-2",
        path: "/main/projectClassifyM/userM",
        component: user
      },
      {
        name: "管理员管理",
        sort: 3,
        type: 2,
        id: "10-3",
        path: "/main/projectClassifyM/managerM",
        component: manager
      },
      {
        name: "操作记录",
        sort: 4,
        type: 2,
        id: "10-4",
        path: "/main/projectClassifyM/operationRecord",
        component: operationRecord
      },
      {
        name: "访问记录",
        sort: 5,
        type: 2,
        id: "10-5",
        path: "/main/projectClassifyM/browseRecord",
        component: browseRecord
      }
    ]
  }
]
