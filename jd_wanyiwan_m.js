/*
23 5,10 * * * jd_wanyiwan_m.js
*/

const $ = new Env('玩一玩_任务_m');

const bdy_0x270359 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x442afd = $.isNode() ? require("./sendNotify") : "",
  bdy_0x2ece8a = require("./function/dylans"),
  bdy_0x3845f9 = require("./function/dylib.js"),
  bdy_0x30a631 = require("./USER_AGENTS"),
  bdy_0x460167 = process.env.WYW_DBNUM ? process.env.WYW_DBNUM : "100";
  helpCode = process.env.WYW_HELPCODE;
let bdy_0x431efd = "",
  bdy_0x5423a6 = {};
if (process.env.DY_PROXY) {
  try {
    require("https-proxy-agent");
    bdy_0x5423a6 = require("./function/proxy.js");
    $.dget = bdy_0x5423a6.intoRequest($.get.bind($));
    $.dpost = bdy_0x5423a6.intoRequest($.post.bind($));
  } catch {
    $.log("未安装https-proxy-agent依赖，无法启用代理");
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
let bdy_0x97a0b5 = [],
  bdy_0x52ecdd = "",
  bdy_0x19476b = 0;
if ($.isNode()) {
  Object.keys(bdy_0x270359).forEach(_0x4e6add => {
    bdy_0x97a0b5.push(bdy_0x270359[_0x4e6add]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x97a0b5 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x40d3af => _0x40d3af.cookie)].filter(_0x1dd8f7 => !!_0x1dd8f7);
}
const bdy_0x199af4 = process.env.WYW_HELPTM ? process.env.WYW_HELPTM : "23",
  bdy_0x586a6e = new Date().setHours(bdy_0x199af4);
$.helpId = [];
$.fullId = [];
$.apiTokenObj = {};
!(async () => {
  if (!bdy_0x97a0b5[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  console.log("当前版本：20240629");
  console.log("问题建议：https://t.me/dylan_jdpro");
  console.log("环境变量：\n    WYW_HELPTM='15' 几点后关闭助力");
  console.log("只做任务和助力");
  for (let _0x483193 = 0; _0x483193 < bdy_0x97a0b5.length; _0x483193++) {
    bdy_0x52ecdd = bdy_0x97a0b5[_0x483193];
    originCookie = bdy_0x97a0b5[_0x483193];
    if (bdy_0x52ecdd) {
      $.UserName = decodeURIComponent(bdy_0x52ecdd.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x52ecdd.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x483193 + 1;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      $.outFlag = false;
      $.isban = false;
      $.hasRisk = false;
      bdy_0x431efd = bdy_0x460167;
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      bdy_0x2cd38f();
      $.UA = bdy_0x30a631.UARAM ? bdy_0x30a631.UARAM() : bdy_0x30a631.USER_AGENT;
      let _0x24211b = await bdy_0x3845f9.jddToken($.UA);
      if (_0x24211b) {
        $.apitoken = _0x24211b.token;
      }
      $.apiTokenObj[$.UserName] = $.apitoken;
      $.UUID = bdy_0x3845f9.UUID("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      if (!$.isLogin) {
        const _0x260fb8 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x260fb8);
        if ($.isNode()) {
          await bdy_0x442afd.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie");
        }
        continue;
      }
      $.index != 1 && bdy_0x5423a6.swip && (await bdy_0x5423a6.swip());
      await bdy_0x12f027();
      if ($.outFlag) {
        break;
      }
      if($.index % 10 === 0){
        console.log("为了帝国第"+$.index+"个号休息4分钟-->"+new Date());
        await $.wait(240000);  
      }else{
        let n = parseInt(Math.random() * 1000 + 15000, 10);
        console.log("为了可持续发展随机休息"+n);
        await $.wait(n); 
      } 
    }
  }
  Date.now() > bdy_0x586a6e ? console.log("\n\n已设置" + bdy_0x199af4 + "点后关闭助力") : $.helpId.length > 1 && (console.log("\n\n开始内部助力..."), await bdy_0x3fb62f());
})().catch(_0x2a85ec => {
  return $.logErr(_0x2a85ec);
}).finally(() => {
  return $.done();
});
async function bdy_0x3fb62f() {
  if(helpCode){
    $.helpId = helpCode.split('&')
  }
  console.log("助力码 --> " + $.helpId);
  for (let _0x280124 = 0; _0x280124 < bdy_0x97a0b5.length; _0x280124++) {
    bdy_0x52ecdd = bdy_0x3845f9.buildck(bdy_0x97a0b5[_0x280124]);
    if (bdy_0x52ecdd) {
      $.UserName = decodeURIComponent(bdy_0x52ecdd.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x52ecdd.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x280124 + 1;
      console.log("\n-------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "------\n");
      bdy_0x2cd38f();
      $.apitoken = $.apiTokenObj[$.UserName];
      $.nonum = false;
      $.hphotflag = false;
      $.UUID = bdy_0x3845f9.UUID("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      $.fullId.length != 0 && ($.helpId = $.helpId.filter(_0x4bb1ad => !$.fullId.includes(_0x4bb1ad)), $.fullId = []);
      bdy_0x5423a6.swip && (await bdy_0x5423a6.swip());
      for (let _0x269454 of $.helpId) {
        $.itemId = _0x269454;
        console.log("去助力 --> " + $.itemId);
        await bdy_0x5753c8("wanyiwan_assist");
        if ($.nonum || $.hphotflag) {
          break;
        }
        let n = parseInt(Math.random() * 1000 + 10000, 10);
        console.log("为了多助力随机休息"+n);
        await $.wait(n); 
      }
      if ($.outFlag) {
        break;
      }
      if($.index % 9 === 0){
        console.log("为了帝国第"+$.index+"个号休息3分钟-->"+new Date());
        await $.wait(180000); 
      }else{
        let n = parseInt(Math.random() * 1000 + 20000, 10);
        console.log("为了可持续发展随机休息"+n);
        await $.wait(n); 
      } 
    }
  }
}
async function bdy_0x12f027() {
  try {
    $.taskList = [];
    await bdy_0x5753c8("wanyiwan_home");
    await $.wait(i.limitTime * 1000 + 500, 10);
    if ($.signstatus != 1) {
      console.log("\n去签到...");
      await bdy_0x5753c8("wanyiwan_sign");
    } else {
      console.log("\n今日以签过!");
    }
    console.log("\n去做任务...");
    for (let _0x2e8bdf of $.taskList) {
      $.itemId = 0;
      $.encryptAssignmentId = _0x2e8bdf.encryptAssignmentId;
      $.taskType = _0x2e8bdf.taskType;
      let _0xd37f77 = _0x2e8bdf.maxTimes - _0x2e8bdf.finishTimes;
      if (_0x2e8bdf.status == 2) {
        console.log("领取 " + _0x2e8bdf.title + " 奖励...");
        $.endflag = false;
        for (let _0x366a58 of Array(_0x2e8bdf.finishTimes)) {
          await bdy_0x5753c8("award");
          if ($.endflag) {
            break;
          }
          await $.wait(_0x2e8bdf.limitTime * 1000 + 500, 10);
        }
        continue;
      } else {
        if (_0x2e8bdf.title.includes("下单")) {
          console.log("下单任务跳过");
          continue;
        }
      }
      if (_0x2e8bdf.title.includes("邀请")) {
        $.helpId.push(_0x2e8bdf.taskDetail[0].itemId);
        continue;
      }
      console.log("去做 " + _0x2e8bdf.title);
      for (let _0x3cc5f8 = 0; _0x3cc5f8 < _0xd37f77; _0x3cc5f8++) {
        _0x2e8bdf.taskDetail && ($.itemId = _0x2e8bdf.taskDetail[_0x3cc5f8].itemId);
        await bdy_0x5753c8("startTask");
        _0x2e8bdf.limitTime != 0 && (await $.wait(_0x2e8bdf.limitTime * 1000 + 500, 10), await bdy_0x5753c8("endTask"));
        await $.wait(parseInt(Math.random() * 500 + 500, 10));
        await bdy_0x5753c8("award");
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
      }
      await $.wait(parseInt(Math.random() * 500 + 1500, 10));
    }
    await $.wait(parseInt(Math.random() * 500 + 1500, 10));
    await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
  } catch (_0x4e6374) {
    console.log(_0x4e6374);
  }
}
async function bdy_0x5753c8(_0x3148fe) {
  if ($.outFlag || $.isban) {
    return;
  }
  let _0x390500 = "",
    _0x27d756,
    _0x3e783b,
    _0x393b6d = "post",
    _0x1dbc11 = "https://api.m.jd.com/client.action",
    _0x6d166d = "signed_wh5";
  switch (_0x3148fe) {
    case "wanyiwan_sign":
      const _0x468fef = {
        version: 1
      };
      _0x390500 = _0x468fef;
      _0x27d756 = "d12dd";
      _0x3e783b = "wanyiwan_sign";
      break;
    case "wanyiwan_home":
      const _0x3ddac7 = {
        outsite: 0,
        firstCall: 1,
        version: 1,
        lbsSwitch: true
      };
      _0x390500 = _0x3ddac7;
      _0x3e783b = "wanyiwan_home";
      break;
    case "apTaskList":
      _0x1dbc11 = "https://api.m.jd.com/api?functionId=apTaskList&body=%7B%22linkId%22%3A%22Fl1LmxG_f0poD7w1ycZqnw%22%7D&t=1715170975269&appid=activities_platform&client=android&clientVersion=6.24.0&loginType=2&loginWQBiz=wegame&h5st=null&build=22779&screen=393*873&networkType=wifi&eufv=1&cthr=1";
      _0x393b6d = "get";
      break;
    case "startTask":
      const _0x10b671 = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 1,
        version: 1
      };
      _0x390500 = _0x10b671;
      _0x27d756 = "89db2";
      _0x3e783b = "wanyiwan_do_task";
      break;
    case "endTask":
      const _0x2794c3 = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 0,
        version: 1
      };
      _0x390500 = _0x2794c3;
      _0x27d756 = "89db2";
      _0x3e783b = "wanyiwan_do_task";
      break;
    case "award":
      const _0x416aa6 = {
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        version: 1
      };
      _0x390500 = _0x416aa6;
      _0x3e783b = "wanyiwan_task_receive_award";
      break;
    case "wanyiwan_assist":
      const _0x4678d9 = {
        inviteCode: $.itemId,
        version: 1
      };
      _0x390500 = _0x4678d9;
      _0x3e783b = "wanyiwan_assist";
      break;
    case "turnHappyHome":
      _0x1dbc11 = "https://api.m.jd.com/api";
      const _0x510669 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x390500 = _0x510669;
      _0x6d166d = "activities_platform";
      _0x3e783b = "turnHappyHome";
      break;
    case "turnHappyDouble":
      _0x1dbc11 = "https://api.m.jd.com/api";
      _0x390500 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ",
        turnNum: parseInt(bdy_0x431efd)
      };
      _0x27d756 = "614f1";
      _0x6d166d = "activities_platform";
      _0x3e783b = "turnHappyDouble";
      break;
    case "turnHappyReceive":
      _0x1dbc11 = "https://api.m.jd.com/api";
      const _0x351c5b = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x390500 = _0x351c5b;
      _0x27d756 = "25fac";
      _0x6d166d = "activities_platform";
      _0x3e783b = "turnHappyReceive";
      break;
    case "superRedBagHome":
      _0x1dbc11 = "https://api.m.jd.com/api";
      const _0x1d2040 = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x390500 = _0x1d2040;
      _0x27d756 = "5be1b";
      _0x6d166d = "activity_platform_se";
      _0x3e783b = "superRedBagHome";
      break;
    case "superRedBagDraw":
      _0x1dbc11 = "https://api.m.jd.com/api";
      const _0x124cb8 = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x390500 = _0x124cb8;
      _0x27d756 = "89cfe";
      _0x6d166d = "activity_platform_se";
      _0x3e783b = "superRedBagDraw";
      break;
    default:
      console.log("错误" + _0x3148fe);
  }
  if (_0x27d756) {
    let _0x52588a = {
      appId: _0x27d756,
      functionId: _0x3e783b,
      body: _0x390500,
      appid: _0x6d166d,
      clientVersion: $.UA.split(";")[2],
      client: "apple",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
    _0x390500 = await bdy_0x2ece8a.getbody(_0x52588a);
    if (!_0x390500) {
      return;
    }
  } else {
    _0x390500 && (_0x390500 = "functionId=" + _0x3e783b + "&body=" + encodeURIComponent(JSON.stringify(_0x390500)) + "&t=" + Date.now() + "&appid=" + _0x6d166d + "&client=apple&clientVersion=" + $.UA.split(";")[2] + "&h5st=null");
  }
  let _0x32e9f8 = bdy_0x482ffe(_0x1dbc11, _0x390500);
  return new Promise(async _0x2f4af9 => {
    $["d" + _0x393b6d](_0x32e9f8, async (_0x15a016, _0x28f040, _0x5f5adc) => {
      try {
        if (_0x15a016) {
          if (_0x28f040 && typeof _0x28f040.statusCode != "undefined") {
            if (_0x28f040.statusCode == 493) {
              if (bdy_0x19476b < 6) {
                bdy_0x19476b++;
                await bdy_0x5753c8(_0x3148fe);
                return;
              }
              console.log("ip可能被限制，过10分钟后再执行脚本\n");
              $.outFlag = true;
            }
          }
          console.log("" + $.toStr(_0x15a016, _0x15a016));
        } else {
          if (_0x5f5adc.includes("doctype") && bdy_0x19476b < 6) {
            bdy_0x19476b++;
            await bdy_0x5753c8(_0x3148fe);
            return;
          }
          bdy_0x19476b = 0;
          bdy_0x5e5eb1(_0x3148fe, _0x5f5adc);
        }
      } catch (_0x4ea72a) {
        console.log(_0x4ea72a, _0x28f040);
      } finally {
        _0x2f4af9();
      }
    });
  });
}
function bdy_0x8176a9(_0x4ea954) {
  let _0x3071a7 = "";
  switch (type) {
    case [_0x3071a7]:
      const _0x543deb = {
        ed: ed
      };
      _0xf1f6le = _0x543deb;
      break;
    case [_0x3071a7]:
      const _0x20d8ad = {
        bd: bd
      };
      _0xf1f6lc = _0x20d8ad;
      break;
    case [_0x3071a7]:
      const _0x4f8af3 = {
        ed: ed
      };
      _0xf1f6lf = _0x4f8af3;
      break;
    case [_0x3071a7]:
      const _0x189922 = {
        ed: ed
      };
      _0xf1f6lg = _0x189922;
      break;
    case [_0x3071a7]:
      const _0x179248 = {
        ed: ed
      };
      _0xf1f6lv = _0x179248;
      break;
  }
}
async function bdy_0x5e5eb1(_0x226996, _0x170ae6) {
  let _0x1ef3a6 = "";
  try {
    _0x1ef3a6 = JSON.parse(_0x170ae6);
  } catch (_0x4c7646) {
    console.log(_0x226996 + " 执行任务异常");
  }
  try {
    switch (_0x226996) {
      case "award":
        _0x1ef3a6.code == 0 ? _0x1ef3a6.data.bizCode == 0 ? console.log("任务完成，获得" + _0x1ef3a6.data.result.rewardCount + "奖票 🎫") : $.endflag = true : console.log(_0x1ef3a6.message);
        break;
      case "wanyiwan_sign":
        _0x1ef3a6.code == 0 ? _0x1ef3a6.data.bizCode == 0 ? console.log("签到成功,获得" + _0x1ef3a6.data.result.getScore + "奖票 🎫") : console.log(_0x1ef3a6.data.bizMsg) : console.log(_0x1ef3a6.message);
        break;
      case "wanyiwan_assist":
        if (_0x1ef3a6.code == 0) {
          if (_0x1ef3a6.data.bizCode == 0) {
            console.log("✔️ 助力成功");
            $.nonum = true;
          } else {
            if (_0x1ef3a6.data.bizMsg.includes("太多人") || _0x1ef3a6.data.bizMsg.includes("重复")) {
              console.log("❌", _0x1ef3a6.data.bizCode, _0x1ef3a6.data.bizMsg);
              $.nonum = true;
            } else {
              if (_0x1ef3a6.data.bizMsg.includes("已经完成")) {
                console.log("❌", _0x1ef3a6.data.bizCode, _0x1ef3a6.data.bizMsg);
                $.fullId.push($.itemId);
              } else {
                _0x1ef3a6.data.bizMsg.includes("火爆") ? (console.log("❌", _0x1ef3a6.data.bizCode, _0x1ef3a6.data.bizMsg), $.hphotflag = true) : console.log("❌", _0x1ef3a6.data.bizCode, _0x1ef3a6.data.bizMsg);
              }
            }
          }
        } else {
          console.log(_0x1ef3a6.message);
          _0x1ef3a6.message.includes("火爆") && ($.hphotflag = true);
        }
        break;
      case "wanyiwan_home":
        if (_0x1ef3a6.code == 0) {
          _0x1ef3a6.data.bizCode == 0 ? (_0x1ef3a6.data.result.popWindows.length != 0 && console.log("获得新手奖励：", _0x1ef3a6.data.result.popWindows[0].getScore, "奖票 🎫"), console.log("当前奖票总量：" + _0x1ef3a6.data.result.score + " 🎫"), $.isLogin = _0x1ef3a6.data?.["result"]?.["isLogin"], $.taskList = _0x1ef3a6.data?.["result"]?.["taskBoard"] || [], $.signstatus = _0x1ef3a6.data?.["result"]?.["signBoard"]?.["status"] || 0) : console.log(_0x1ef3a6.data.bizMsg);
        } else {
          console.log(_0x1ef3a6.message);
        }
        break;
      case "turnHappyHome":
        _0x1ef3a6.success ? $.leftTime = _0x1ef3a6.data.leftTime : console.log(_0x1ef3a6.errMsg);
        break;
      case "turnHappyDouble":
        if (_0x1ef3a6.success) {
          if (_0x1ef3a6.data.rewardState == 1) {
            console.log("翻倍成功，获得 " + _0x1ef3a6.data.rewardValue + "奖票 🎫");
            $.dbsuc = true;
          } else {
            $.dbsuc = false;
            console.log("叼了，翻倍失败！再接再厉！");
          }
        } else {
          console.log(_0x1ef3a6.errMsg);
          $.dbsuc = false;
        }
        break;
      case "superRedBagHome":
        _0x1ef3a6.success ? ($.sceneStatus = _0x1ef3a6.data.sceneStatus, $.nextLeftTime = _0x1ef3a6.data.nextLeftTime) : console.log(_0x1ef3a6.errMsg);
        break;
      case "superRedBagDraw":
        if (_0x1ef3a6.success) {
          $.shakeLeftTime = _0x1ef3a6.data.shakeLeftTime;
          const {
            prizeDrawVo = ""
          } = _0x1ef3a6.data;
          if (prizeDrawVo) {
            switch (prizeDrawVo.prizeType) {
              case 24:
                console.log("获得：" + prizeDrawVo.amount + "票奖 🎫");
                $.sucdraw++;
                break;
              case 1:
                console.log("获得:" + prizeDrawVo.prizeConfigName);
                break;
              default:
                console.log(prizeDrawVo);
                break;
            }
          } else {
            console.log(_0x170ae6);
          }
        } else {
          console.log(_0x1ef3a6.errMsg);
        }
        break;
      case "startTask":
      case "turnHappyReceive":
      case "endTask":
        break;
      default:
        console.log(_0x226996 + " -> " + _0x170ae6);
    }
    typeof _0x1ef3a6 == "object" && _0x1ef3a6.errorMessage && _0x1ef3a6.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (_0x4c2fd) {
    console.log(_0x226996 + " " + _0x4c2fd);
  }
}
function bdy_0x482ffe(_0x56d376, _0x106005) {
  _0x106005 = _0x106005 + "&rfs=0000&openudid=" + $.UUID + "&build=169280&networkType=wifi&d_brand=iPhone&d_model=iPhone10%2C2&x-api-eid-token=" + $.apitoken;
  const _0x5d7ee0 = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/mall/active/3fcyrvLZALNPWCEDRvaZJVrzek8v/index.html",
    Cookie: bdy_0x52ecdd,
    "User-Agent": $.UA,
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "x-referer-page": "https://pro.m.jd.com/mall/active/3fcyrvLZALNPWCEDRvaZJVrzek8v/index.html",
    "request-from": "native",
    "x-rp-client": "h5_1.0.0"
  };
  const _0xa59721 = {
    url: _0x56d376,
    headers: _0x5d7ee0,
    timeout: 30000,
    ciphers: bdy_0x3845f9.cpstr,
    ...(_0x106005 ? {
      body: _0x106005
    } : {})
  };
  return _0xa59721;
}
async function bdy_0x2cd38f() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0x5cb38d(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0x5cb38d(_0x32612b) {
  _0x32612b = _0x32612b || 32;
  let _0x28b00d = "abcdef0123456789",
    _0x2ea7b9 = _0x28b00d.length,
    _0x9e197c = "";
  for (i = 0; i < _0x32612b; i++) {
    _0x9e197c += _0x28b00d.charAt(Math.floor(Math.random() * _0x2ea7b9));
  }
  return _0x9e197c;
}
function bdy_0x42121d(_0x4bfbe4) {
  if (typeof _0x4bfbe4 == "string") {
    try {
      return JSON.parse(_0x4bfbe4);
    } catch (_0x5dcbe6) {
      console.log(_0x5dcbe6);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function bdy_0x4234de() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x4d6c73 => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    let _0x549efe = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    $.shopactivityId == "" && delete _0x549efe.activityId;
    const _0x35a7bd = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0x549efe,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x549efe = await dyy.getbody(_0x35a7bd);
    const _0x314928 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x52ecdd,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x33a74b = {
      url: "https://api.m.jd.com/client.action?" + _0x549efe + "&uuid=88888",
      headers: _0x314928,
      timeout: 30000
    };
    $.dget(_0x33a74b, async (_0x11947e, _0x78500c, _0x1a63dc) => {
      try {
        _0x1a63dc = _0x1a63dc && _0x1a63dc.match(/jsonp_.*?\((.*?)\);/) && _0x1a63dc.match(/jsonp_.*?\((.*?)\);/)[1] || _0x1a63dc;
        let _0x4e40b2 = $.toObj(_0x1a63dc, _0x1a63dc);
        if (_0x4e40b2 && typeof _0x4e40b2 == "object") {
          if (_0x4e40b2 && _0x4e40b2.success === true) {
            console.log("    " + _0x4e40b2.message);
            $.errorJoinShop = _0x4e40b2.message;
            if (_0x4e40b2.result && _0x4e40b2.result.giftInfo) {
              for (let _0x1ecae8 of _0x4e40b2.result.giftInfo.giftList) {
                console.log("入会获得:" + _0x1ecae8.discountString + _0x1ecae8.prizeName + _0x1ecae8.secondLineDesc);
              }
            }
          } else {
            _0x4e40b2 && typeof _0x4e40b2 == "object" && _0x4e40b2.message ? ($.errorJoinShop = _0x4e40b2.message, console.log("" + (_0x4e40b2.message || ""))) : console.log(_0x1a63dc);
          }
        } else {
          console.log(_0x1a63dc);
        }
      } catch (_0x41f5d8) {
        $.logErr(_0x41f5d8, _0x78500c);
      } finally {
        _0x4d6c73();
      }
    });
  });
}
async function bdy_0x3cd5e7() {
  return new Promise(async _0x2f2694 => {
    const _0x2763c9 = {
      venderId: $.joinVenderId,
      payUpShop: true,
      queryVersion: "10.5.2",
      appid: "ef79a",
      needSecurity: true,
      bizId: "shop_view_app",
      channel: 406
    };
    let _0x1d46f3 = _0x2763c9;
    const _0x524400 = {
      appId: "ef79a",
      fn: "getShopOpenCardInfo",
      body: _0x1d46f3,
      apid: "jd_shop_member",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    _0x1d46f3 = await dyy.getbody(_0x524400);
    const _0x437e6a = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x52ecdd,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    const _0x4657ff = {
      url: "https://api.m.jd.com/client.action?" + _0x1d46f3 + "&uuid=88888",
      headers: _0x437e6a,
      timeout: 60000
    };
    $.get(_0x4657ff, async (_0x52cdd4, _0x3c969f, _0x3647b4) => {
      try {
        _0x3647b4 = _0x3647b4 && _0x3647b4.match(/jsonp_.*?\((.*?)\);/) && _0x3647b4.match(/jsonp_.*?\((.*?)\);/)[1] || _0x3647b4;
        let _0x5db429 = $.toObj(_0x3647b4, _0x3647b4);
        _0x5db429 && typeof _0x5db429 == "object" ? _0x5db429 && _0x5db429.success == true && (console.log("去加入 -> " + (_0x5db429.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x5db429.result[0].interestsRuleList && _0x5db429.result[0].interestsRuleList[0] && _0x5db429.result[0].interestsRuleList[0].interestsInfo && _0x5db429.result[0].interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x3647b4);
      } catch (_0x193603) {
        $.logErr(_0x193603, _0x3c969f);
      } finally {
        _0x2f2694();
      }
    });
  });
}
function bdy_0x12001e(_0x2d20b7, _0x3262ca) {
  return Math.floor(Math.random() * (_0x3262ca - _0x2d20b7)) + _0x2d20b7;
}
function bdy_0x367ea6(_0x2f4f38 = +new Date()) {
  var _0x4e55f4 = new Date(_0x2f4f38 + 28800000);
  return _0x4e55f4.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function bdy_0x2ed062() {
  return new Promise(_0x4546d7 => {
    const _0x563c48 = {
      Cookie: bdy_0x52ecdd,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x2d8f83 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x563c48,
      timeout: 10000
    };
    $.get(_0x2d8f83, (_0xfa5516, _0x1471a4, _0x1d15d6) => {
      try {
        if (_0x1d15d6) {
          _0x1d15d6 = JSON.parse(_0x1d15d6);
          if (!(_0x1d15d6.islogin === "1")) {
            _0x1d15d6.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x3e79a0) {
        console.log(_0x3e79a0);
      } finally {
        _0x4546d7();
      }
    });
  });
}

function Env(o, t) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((r, i) => { s.call(this, t, (t, e, s) => { t ? i(t) : r(e) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.logLevels = { debug: 0, info: 1, warn: 2, error: 3 }, this.logLevelPrefixs = { debug: "[DEBUG] ", info: "[INFO] ", warn: "[WARN] ", error: "[ERROR] " }, this.logLevel = "info", this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } getEnv() { return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0 } isNode() { return "Node.js" === this.getEnv() } isQuanX() { return "Quantumult X" === this.getEnv() } isSurge() { return "Surge" === this.getEnv() } isLoon() { return "Loon" === this.getEnv() } isShadowrocket() { return "Shadowrocket" === this.getEnv() } isStash() { return "Stash" === this.getEnv() } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null, ...s) { try { return JSON.stringify(t, ...s) } catch { return e } } getjson(t, e) { let s = e; if (this.getdata(t)) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(r => { this.get({ url: t }, (t, e, s) => r(s)) }) } runScript(a, o) { return new Promise(r => { let t = this.getdata("@chavy_boxjs_userCfgs.httpapi"); t = t && t.replace(/\n/g, "").trim(); var e = (e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout")) ? +e : 20, [s, i] = (e = o && o.timeout ? o.timeout : e, t.split("@")); this.post({ url: `http://${i}/v1/scripting/evaluate`, body: { script_text: a, mock_type: "cron", timeout: e }, headers: { "X-Key": s, Accept: "*/*" }, timeout: e }, (t, e, s) => r(s)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; this.fs = this.fs || require("fs"), this.path = this.path || require("path"); var t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), r = !s && this.fs.existsSync(e); if (!s && !r) return {}; r = s ? t : e; try { return JSON.parse(this.fs.readFileSync(r)) } catch (t) { return {} } } writedata() { var t, e, s, r, i; this.isNode() && (this.fs = this.fs || require("fs"), this.path = this.path || require("path"), t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), r = !(s = this.fs.existsSync(t)) && this.fs.existsSync(e), i = JSON.stringify(this.data), !s && r ? this.fs.writeFileSync(e, i) : this.fs.writeFileSync(t, i)) } lodash_get(t, e, s) { let r = t; for (const t of e.replace(/\[(\d+)\]/g, ".$1").split(".")) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, r, e) { return Object(t) === t && ((r = Array.isArray(r) ? r : r.toString().match(/[^.[\]]+/g) || []).slice(0, -1).reduce((t, e, s) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(r[s + 1]) >> 0 == +r[s + 1] ? [] : {}, t)[r[r.length - 1]] = e), t } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { var [, s, r] = /^@(.*?)\.(.*?)$/.exec(t); if (s = s ? this.getval(s) : "") try { const t = JSON.parse(s); e = t ? this.lodash_get(t, r, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { var [, r, i] = /^@(.*?)\.(.*?)$/.exec(e), a = this.getval(r), a = r ? "null" === a ? null : a || "{}" : "{}"; try { const e = JSON.parse(a); this.lodash_set(e, i, t), s = this.setval(JSON.stringify(e), r) } catch (e) { this.lodash_set(a = {}, i, t), s = this.setval(JSON.stringify(a), r) } } else s = this.setval(t, e); return s } getval(t) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.read(t); case "Quantumult X": return $prefs.valueForKey(t); case "Node.js": return this.data = this.loaddata(), this.data[t]; default: return this.data && this.data[t] || null } } setval(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.write(t, e); case "Quantumult X": return $prefs.setValueForKey(t, e); case "Node.js": return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0; default: return this.data && this.data[e] || null } } initGotEnv(t) { this.got = this.got || require("got"), this.cktough = this.cktough || require("tough-cookie"), this.ckjar = this.ckjar || new this.cktough.CookieJar, t && (t.headers = t.headers || {}, t) && (t.headers = t.headers || {}, void 0 === t.headers.cookie) && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar) } tmout() { return new Promise((t, e) => { this.tmoutId = setTimeout(() => { this.prms.cancel(), e({ message: "timemout", response: "" }) }, 5e4) }) } get(t, a = () => { }) { switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t), this.prms = this.got(t).on("redirect", (t, e) => { try { var s; t.headers["set-cookie"] && ((s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString()) && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar) } catch (t) { this.logErr(t) } }), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } post(t, a = () => { }) { var e = t.method ? t.method.toLocaleLowerCase() : "post"; switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[e](t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": t.method = e, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t); var { url: s, ...r } = t; this.prms = this.got[e](s, r), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } time(t, e = null) { var s, r = { "M+": (e = e ? new Date(e) : new Date).getMonth() + 1, "d+": e.getDate(), "H+": e.getHours(), "m+": e.getMinutes(), "s+": e.getSeconds(), "q+": Math.floor((e.getMonth() + 3) / 3), S: e.getMilliseconds() }; for (s in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), r) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[s] : ("00" + r[s]).substr(("" + r[s]).length))); return t } queryStr(e) { let s = ""; for (const r in e) { let t = e[r]; null != t && "" !== t && ("object" == typeof t && (t = JSON.stringify(t)), s += `${r}=${t}&`) } return s = s.substring(0, s.length - 1) } msg(t = o, e = "", s = "", r = {}) { var i, a = r => { const { $open: t, $copy: e, $media: i, $mediaMime: a } = r; switch (typeof r) { case void 0: return r; case "string": switch (this.getEnv()) { case "Surge": case "Stash": default: return { url: r }; case "Loon": case "Shadowrocket": return r; case "Quantumult X": return { "open-url": r }; case "Node.js": return }case "object": switch (this.getEnv()) { case "Surge": case "Stash": case "Shadowrocket": default: var o = {}, s = r.openUrl || r.url || r["open-url"] || t; if (s && Object.assign(o, { action: "open-url", url: s }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(o, { action: "clipboard", text: s }), i) { let t, e, s; if (i.startsWith("http")) t = i; else if (i.startsWith("data:")) { const [r] = i.split(";"), [, a] = i.split(","); e = a, s = r.replace("data:", "") } else e = i, s = (t => { var e, s = { JVBERi0: "application/pdf", R0lGODdh: "image/gif", R0lGODlh: "image/gif", iVBORw0KGgo: "image/png", "/9j/": "image/jpg" }; for (e in s) if (0 === t.indexOf(e)) return s[e]; return null })(i); Object.assign(o, { "media-url": t, "media-base64": e, "media-base64-mime": a ?? s }) } return Object.assign(o, { "auto-dismiss": r["auto-dismiss"], sound: r.sound }), o; case "Loon": { const e = {}; (s = r.openUrl || r.url || r["open-url"] || t) && Object.assign(e, { openUrl: s }); var n = r.mediaUrl || r["media-url"]; return (n = i?.startsWith("http") ? i : n) && Object.assign(e, { mediaUrl: n }), console.log(JSON.stringify(e)), e } case "Quantumult X": { const a = {}; (o = r["open-url"] || r.url || r.openUrl || t) && Object.assign(a, { "open-url": o }); n = r["media-url"] || r.mediaUrl; return (n = i?.startsWith("http") ? i : n) && Object.assign(a, { "media-url": n }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(a, { "update-pasteboard": s }), console.log(JSON.stringify(a)), a } case "Node.js": return }default: return } }; if (!this.isMute) switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: $notification.post(t, e, s, a(r)); break; case "Quantumult X": $notify(t, e, s, a(r)); break; case "Node.js": }this.isMuteLog || ((i = ["", "==============📣系统通知📣=============="]).push(t), e && i.push(e), s && i.push(s), console.log(i.join("\n")), this.logs = this.logs.concat(i)) } debug(...t) { this.logLevels[this.logLevel] <= this.logLevels.debug && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.debug + t.map(t => t ?? String(t)).join(this.logSeparator))) } info(...t) { this.logLevels[this.logLevel] <= this.logLevels.info && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.info + t.map(t => t ?? String(t)).join(this.logSeparator))) } warn(...t) { this.logLevels[this.logLevel] <= this.logLevels.warn && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.warn + t.map(t => t ?? String(t)).join(this.logSeparator))) } error(...t) { this.logLevels[this.logLevel] <= this.logLevels.error && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.error + t.map(t => t ?? String(t)).join(this.logSeparator))) } log(...t) { 0 < t.length && (this.logs = [...this.logs, ...t]), console.log(t.map(t => t ?? String(t)).join(this.logSeparator)) } logErr(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: this.log("", `❗️${this.name}, 错误!`, t); break; case "Node.js": this.log("", `❗️${this.name}, 错误!`, void 0 !== t.message ? t.message : t) } } wait(e) { return new Promise(t => setTimeout(t, e)) } done(t = {}) { var e = ((new Date).getTime() - this.startTime) / 1e3; switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: $done(t); break; case "Node.js": process.exit(1) } } }(o, t) }