/*
23 5,10 * * * jd_wanyiwan_m.js
*/

const $ = new Env('玩一玩_任务_m');

const bdy_0x11a0bb = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0xea0dc4 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x3f7259 = require("./function/dylib.js"),
  bdy_0x139bf1 = require("./USER_AGENTS"),
  bdy_0x4af7aa = process.env.WYW_DBNUM ? process.env.WYW_DBNUM : "100";
  helpCode = process.env.WYW_HELPCODE;
let bdy_0x3bb0f3 = "",
  bdy_0x497e2a = {};
if (process.env.DY_PROXY) {
  try {
    require("https-proxy-agent");
    bdy_0x497e2a = require("./function/proxy.js");
    $.dget = bdy_0x497e2a.intoRequest($.get.bind($));
    $.dpost = bdy_0x497e2a.intoRequest($.post.bind($));
  } catch {
    $.log("未安装https-proxy-agent依赖，无法启用代理");
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
let bdy_0x26fec9 = [],
  bdy_0x55967f = "",
  bdy_0x18f932 = 0;
if ($.isNode()) {
  Object.keys(bdy_0x11a0bb).forEach(_0x1241a3 => {
    bdy_0x26fec9.push(bdy_0x11a0bb[_0x1241a3]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x26fec9 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x41fc93 => _0x41fc93.cookie)].filter(_0x19a363 => !!_0x19a363);
}
const bdy_0x10ec9c = process.env.WYW_HELPTM ? process.env.WYW_HELPTM : "23",
  bdy_0xd600b7 = new Date().setHours(bdy_0x10ec9c);
$.helpId = [];
$.fullId = [];
$.apiTokenObj = {};
!(async () => {
  if (!bdy_0x26fec9[0]) {
    const _0x4eda2e = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x4eda2e);
    return;
  }
  console.log("当前版本：20240706");
  console.log("问题建议：https://t.me/dylan_jdpro");
  console.log("环境变量：\n    WYW_HELPTM='15' 几点后关闭助力");
  console.log("只做助力");
  
  Date.now() > bdy_0xd600b7 ? console.log("\n\n已设置" + bdy_0x10ec9c + "点后关闭助力") : $.helpId.length > 1 && (console.log("\n\n开始内部助力..."), await bdy_0x1ae56f());
})().catch(_0x256baf => {
  return $.logErr(_0x256baf);
}).finally(() => {
  return $.done();
});
async function bdy_0x1ae56f() {
  if(helpCode){
    $.helpId = helpCode.split('&')
  }
  console.log("助力码 --> " + $.helpId);
  for (let _0x1aec57 = 0; _0x1aec57 < bdy_0x26fec9.length; _0x1aec57++) {
    $.UA = bdy_0x139bf1.UARAM ? bdy_0x139bf1.UARAM("", bdy_0x55967f) : bdy_0x139bf1.USER_AGENT;
    bdy_0x55967f = bdy_0x3f7259.buildck(bdy_0x26fec9[_0x1aec57]);
    if (bdy_0x55967f) {
      $.UserName = decodeURIComponent(bdy_0x55967f.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x55967f.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x1aec57 + 1;
      console.log("\n-------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "------\n");
      $.apitoken = $.apiTokenObj[$.UserName];
      $.nonum = false;
      $.hphotflag = false;
      bdy_0x18f932 = 0;
      $.UUID = bdy_0x3f7259.UUID("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      $.fullId.length != 0 && ($.helpId = $.helpId.filter(_0x52076b => !$.fullId.includes(_0x52076b)), $.fullId = []);
      bdy_0x497e2a.swip && (await bdy_0x497e2a.swip());
      for (let _0x32fca5 of $.helpId) {
        $.itemId = _0x32fca5;
        console.log("去助力 --> " + $.itemId);
        await bdy_0x265d31("wanyiwan_assist");
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
async function bdy_0x201cb4() {
  try {
    $.taskList = [];
    $.isBan = false;
    $.signstatus = 0;
    await bdy_0x265d31("wanyiwan_home");
    await $.wait(parseInt(Math.random() * 500 + 600, 10));
    $.signstatus == 0 ? (console.log("\n去签到..."), await bdy_0x265d31("wanyiwan_sign")) : console.log("\n今日以签过!");
    if ($.isBan) {
      return;
    }
    console.log("\n去做任务...");
    await bdy_0x265d31("wanyiwan_task_list");
    for (let _0x289cb1 of $.taskList) {
      $.itemId = 0;
      $.encryptAssignmentId = _0x289cb1.encryptAssignmentId;
      $.taskType = _0x289cb1.taskType;
      let _0x8d2831 = _0x289cb1.maxTimes - _0x289cb1.finishTimes;
      if (_0x289cb1.status == 2) {
        console.log("领取 " + _0x289cb1.title + " 奖励...");
        $.endflag = false;
        for (let _0x21db79 of Array(_0x289cb1.finishTimes)) {
          await bdy_0x265d31("award");
          if ($.endflag) {
            break;
          }
          await $.wait(_0x289cb1.limitTime * 1000 + 500, 10);
        }
        continue;
      } else {
        if (_0x289cb1.status == 3) {
          console.log(_0x289cb1.title + " ---- 已完成");
          continue;
        } else {
          if (_0x289cb1.title.includes("下单")) {
            continue;
          }
        }
      }
      if (_0x289cb1.title.includes("邀请")) {
        console.log("富强码-->:" + _0x289cb1.taskDetail[0].itemId);
        $.helpId.push(_0x289cb1.taskDetail[0].itemId);
        continue;
      }
      console.log("去做 " + _0x289cb1.title);
      for (let _0x1baf38 = 0; _0x1baf38 < _0x8d2831; _0x1baf38++) {
        _0x289cb1.taskDetail && ($.itemId = _0x289cb1.taskDetail[_0x1baf38].itemId);
        await bdy_0x265d31("startTask");
        if (_0x289cb1.limitTime != 0) {
          await $.wait(_0x289cb1.limitTime * 1000);
          await bdy_0x265d31("endTask");
        }
        await $.wait(parseInt(Math.random() * 500 + 1000, 10));
        await bdy_0x265d31("award");
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
      }
      await $.wait(parseInt(Math.random() * 500 + 1500, 10));
    }
    await $.wait(parseInt(Math.random() * 500 + 1500, 10));
    await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
  } catch (_0x405c94) {
    console.log(_0x405c94);
  }
}
async function bdy_0x265d31(_0xb724f) {
  if ($.outFlag || $.isban) {
    return;
  }
  let _0xae3efd = "",
    _0x232840,
    _0x42762e,
    _0x3da25f = "post",
    _0x40a833 = "https://api.m.jd.com/client.action",
    _0x5da948 = "signed_wh5";
  switch (_0xb724f) {
    case "wanyiwan_sign":
      const _0x5b696d = {
        version: 1
      };
      _0xae3efd = _0x5b696d;
      _0x232840 = "d12dd";
      _0x42762e = "wanyiwan_sign";
      break;
    case "wanyiwan_home":
      const _0x4cb96f = {
        outsite: 0,
        firstCall: 1,
        version: 1,
        lbsSwitch: true
      };
      _0xae3efd = _0x4cb96f;
      _0x232840 = "c81ad";
      _0x42762e = "wanyiwan_home";
      break;
    case "wanyiwan_task_list":
      const _0xa544a = {
        version: 1,
        lbsSwitch: false
      };
      _0xae3efd = _0xa544a;
      _0x42762e = "wanyiwan_task_list";
      break;
    case "apTaskList":
      _0x40a833 = "https://api.m.jd.com/api?functionId=apTaskList&body=%7B%22linkId%22%3A%22Fl1LmxG_f0poD7w1ycZqnw%22%7D&t=1715170975269&appid=activities_platform&client=android&clientVersion=6.24.0&loginType=2&loginWQBiz=wegame&h5st=null&build=22779&screen=393*873&networkType=wifi&eufv=1&cthr=1";
      _0x3da25f = "get";
      break;
    case "startTask":
      const _0x2c504f = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 1,
        version: 1
      };
      _0xae3efd = _0x2c504f;
      _0x232840 = "89db2";
      _0x42762e = "wanyiwan_do_task";
      break;
    case "endTask":
      const _0x151bb3 = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 0,
        version: 1
      };
      _0xae3efd = _0x151bb3;
      _0x232840 = "89db2";
      _0x42762e = "wanyiwan_do_task";
      break;
    case "award":
      const _0x1a5df4 = {
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        version: 1
      };
      _0xae3efd = _0x1a5df4;
      _0x232840 = "d12dd";
      _0x42762e = "wanyiwan_task_receive_award";
      break;
    case "wanyiwan_assist":
      const _0x5cc686 = {
        inviteCode: $.itemId,
        version: 1
      };
      _0xae3efd = _0x5cc686;
      _0x232840 = "ba505";
      _0x42762e = "wanyiwan_assist";
      break;
    case "turnHappyHome":
      _0x40a833 = "https://api.m.jd.com/api";
      const _0x2f8103 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0xae3efd = _0x2f8103;
      _0x5da948 = "activities_platform";
      _0x42762e = "turnHappyHome";
      break;
    case "turnHappyDouble":
      _0x40a833 = "https://api.m.jd.com/api";
      _0xae3efd = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ",
        turnNum: parseInt(bdy_0x3bb0f3)
      };
      _0x232840 = "614f1";
      _0x5da948 = "activities_platform";
      _0x42762e = "turnHappyDouble";
      break;
    case "turnHappyReceive":
      _0x40a833 = "https://api.m.jd.com/api";
      const _0x35dd39 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0xae3efd = _0x35dd39;
      _0x232840 = "25fac";
      _0x5da948 = "activities_platform";
      _0x42762e = "turnHappyReceive";
      break;
    case "superRedBagHome":
      _0x40a833 = "https://api.m.jd.com/api";
      const _0x9f2e78 = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0xae3efd = _0x9f2e78;
      _0x232840 = "5be1b";
      _0x5da948 = "activity_platform_se";
      _0x42762e = "superRedBagHome";
      break;
    case "superRedBagDraw":
      _0x40a833 = "https://api.m.jd.com/api";
      const _0x142ebb = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0xae3efd = _0x142ebb;
      _0x232840 = "89cfe";
      _0x5da948 = "activity_platform_se";
      _0x42762e = "superRedBagDraw";
      break;
    default:
      console.log("错误" + _0xb724f);
  }
  if (_0x232840) {
    let _0xef34b = {
      appId: _0x232840,
      functionId: _0x42762e,
      body: _0xae3efd,
      appid: _0x5da948,
      clientVersion: $.UA.split(";")[2],
      client: "apple",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
    _0xae3efd = await bdy_0x4ad315(_0xef34b);
    if (!_0xae3efd) {
      return;
    }
  } else {
    _0xae3efd && (_0xae3efd = "functionId=" + _0x42762e + "&body=" + encodeURIComponent(JSON.stringify(_0xae3efd)) + "&t=" + Date.now() + "&appid=" + _0x5da948 + "&client=apple&clientVersion=" + $.UA.split(";")[2] + "&h5st=null");
  }
  let _0x110cb1 = bdy_0x1110ef(_0x40a833, _0xae3efd),
    _0x5cae36 = await bdy_0x10eae3(_0x110cb1, _0x3da25f);
  do {
    JSON.stringify(_0x5cae36).includes("重试") ? (bdy_0x18f932++, console.log(JSON.stringify(_0x5cae36)), await $.wait(1000), _0x5cae36 = await bdy_0x10eae3(_0x110cb1, _0x3da25f)) : bdy_0x18f932 = 0;
  } while (bdy_0x18f932 > 0 & bdy_0x18f932 < 4);
  bdy_0x418ab1(_0xb724f, _0x5cae36);
}
async function bdy_0x10eae3(_0x56d02f, _0xe7f1aa) {
  return new Promise(async _0x3c399e => {
    $["d" + _0xe7f1aa](_0x56d02f, async (_0x2aa2b9, _0x559d90, _0x10aee9) => {
      try {
        if (_0x2aa2b9) {
          console.log("" + $.toStr(_0x2aa2b9, _0x2aa2b9));
        }
      } catch (_0x4a7d85) {
        console.log(_0x4a7d85, _0x559d90);
      } finally {
        _0x3c399e(_0x10aee9);
      }
    });
  });
}
function bdy_0x263477(_0x13b0bd) {
  let _0x1212be = "";
  switch (type) {
    case [_0x1212be]:
      const _0x2f9007 = {
        ed: ed
      };
      _0xf1f6le = _0x2f9007;
      break;
    case [_0x1212be]:
      const _0x170217 = {
        bd: bd
      };
      _0xf1f6lc = _0x170217;
      break;
    case [_0x1212be]:
      const _0x5461d6 = {
        ed: ed
      };
      _0xf1f6lf = _0x5461d6;
      break;
    case [_0x1212be]:
      const _0x1bf52e = {
        ed: ed
      };
      _0xf1f6lg = _0x1bf52e;
      break;
    case [_0x1212be]:
      const _0x25fcf8 = {
        ed: ed
      };
      _0xf1f6lv = _0x25fcf8;
      break;
  }
}
async function bdy_0x418ab1(_0x12374c, _0x40c3ed) {
  let _0x14fbc7 = "";
  try {
    _0x14fbc7 = JSON.parse(_0x40c3ed);
  } catch (_0x3d5794) {
    console.log(_0x12374c + " 执行任务异常");
  }
  try {
    switch (_0x12374c) {
      case "award":
        if (_0x14fbc7.code == 0) {
          if (_0x14fbc7.data.bizCode == 0) {
            console.log("任务完成，获得" + _0x14fbc7.data.result.rewardCount + "奖票 🎫");
          } else {
            console.log(_0x14fbc7.data.bizCode, _0x14fbc7.data.bizMsg);
            $.endflag = true;
          }
        } else {
          console.log(_0x14fbc7.message);
        }
        break;
      case "wanyiwan_sign":
        if (_0x14fbc7.code == 0) {
          if (_0x14fbc7.data.bizCode == 0) {
            console.log("签到成功,获得" + _0x14fbc7.data.result.getScore + "奖票 🎫");
          } else {
            _0x14fbc7.data.bizCode == -10001 ? (console.log("该账户可能黑子！无法签到和任务！"), $.isBan = true) : console.log(_0x14fbc7.data.bizMsg);
          }
        } else {
          console.log(_0x14fbc7.message);
        }
        break;
      case "wanyiwan_assist":
        if (_0x14fbc7.code == 0) {
          if (_0x14fbc7.data.bizCode == 0) {
            console.log("✔️ 助力成功");
            $.nonum = true;
          } else {
            if (_0x14fbc7.data.bizMsg.includes("太多人") || _0x14fbc7.data.bizMsg.includes("重复")) {
              console.log("❌", _0x14fbc7.data.bizCode, _0x14fbc7.data.bizMsg);
              $.nonum = true;
            } else {
              if (_0x14fbc7.data.bizMsg.includes("已经完成")) {
                console.log("❌", _0x14fbc7.data.bizCode, _0x14fbc7.data.bizMsg);
                $.fullId.push($.itemId);
              } else {
                _0x14fbc7.data.bizMsg.includes("火爆") ? (console.log("❌", _0x14fbc7.data.bizCode, _0x14fbc7.data.bizMsg), $.hphotflag = true) : console.log("❌", _0x14fbc7.data.bizCode, _0x14fbc7.data.bizMsg);
              }
            }
          }
        } else {
          console.log("❌", _0x14fbc7.code, _0x14fbc7.message);
          _0x14fbc7.message.includes("火爆") && ($.hphotflag = true);
        }
        break;
      case "wanyiwan_home":
        _0x14fbc7.code == 0 ? _0x14fbc7.data.bizCode == 0 ? (_0x14fbc7.data.result.popWindows.length != 0 && console.log("获得新手奖励：", _0x14fbc7.data.result.popWindows[0].getScore, "奖票 🎫"), console.log("当前奖票总量：" + _0x14fbc7.data.result.score + " 🎫"), $.isLogin = _0x14fbc7.data?.["result"]?.["isLogin"], $.taskList = _0x14fbc7.data?.["result"]?.["taskBoard"] || [], $.signstatus = _0x14fbc7.data?.["result"]?.["signBoard"]?.["status"] || 0) : console.log(_0x14fbc7.data.bizMsg) : console.log(_0x14fbc7.message);
        break;
      case "wanyiwan_task_list":
        _0x14fbc7.code == 0 ? _0x14fbc7.data.bizCode == 0 ? $.taskList = _0x14fbc7.data?.["result"]?.["taskList"] || [] : console.log(_0x14fbc7.data.bizMsg) : console.log(_0x14fbc7.message);
        break;
      case "turnHappyHome":
        _0x14fbc7.success ? $.leftTime = _0x14fbc7.data.leftTime : console.log(_0x14fbc7.errMsg);
        break;
      case "turnHappyDouble":
        _0x14fbc7.success ? _0x14fbc7.data.rewardState == 1 ? (console.log("翻倍成功，获得 " + _0x14fbc7.data.rewardValue + "奖票 🎫"), $.dbsuc = true) : ($.dbsuc = false, console.log("叼了，翻倍失败！再接再厉！")) : (console.log(_0x14fbc7.errMsg), $.dbsuc = false);
        break;
      case "superRedBagHome":
        _0x14fbc7.success ? ($.sceneStatus = _0x14fbc7.data.sceneStatus, $.nextLeftTime = _0x14fbc7.data.nextLeftTime) : console.log(_0x14fbc7.errMsg);
        break;
      case "superRedBagDraw":
        if (_0x14fbc7.success) {
          $.shakeLeftTime = _0x14fbc7.data.shakeLeftTime;
          const {
            prizeDrawVo = ""
          } = _0x14fbc7.data;
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
            console.log(_0x40c3ed);
          }
        } else {
          console.log(_0x14fbc7.errMsg);
        }
        break;
      case "startTask":
      case "turnHappyReceive":
      case "endTask":
        break;
      default:
        console.log(_0x12374c + " -> " + _0x40c3ed);
    }
    typeof _0x14fbc7 == "object" && _0x14fbc7.errorMessage && _0x14fbc7.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (_0x565e54) {
    console.log(_0x12374c + " " + _0x565e54);
  }
}
function bdy_0x1110ef(_0x2d4ec8, _0x5194fb) {
  _0x5194fb = _0x5194fb + "&rfs=0000&x-api-eid-token=" + $.apitoken;
  const _0x246028 = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/x-www-form-urlencoded",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    Cookie: bdy_0x55967f,
    "User-Agent": $.UA,
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "x-referer-page": "https://pro.m.jd.com/mall/active/3fcyrvLZALNPWCEDRvaZJVrzek8v/index.html",
    "request-from": "native",
    "x-rp-client": "h5_1.0.0"
  };
  const _0x515fff = {
    url: _0x2d4ec8,
    headers: _0x246028,
    timeout: 30000,
    ciphers: "TLS_AES_256_GCM_SHA384",
    ...(_0x5194fb ? {
      body: _0x5194fb
    } : {})
  };
  return _0x515fff;
}
async function bdy_0x215bb1() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0x2acc73(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0x2acc73(_0x2170fc) {
  _0x2170fc = _0x2170fc || 32;
  let _0x45f1bc = "abcdef0123456789",
    _0x101393 = _0x45f1bc.length,
    _0x181f74 = "";
  for (i = 0; i < _0x2170fc; i++) {
    _0x181f74 += _0x45f1bc.charAt(Math.floor(Math.random() * _0x101393));
  }
  return _0x181f74;
}
function bdy_0x55b683(_0x104387) {
  if (typeof _0x104387 == "string") {
    try {
      return JSON.parse(_0x104387);
    } catch (_0x35a83f) {
      console.log(_0x35a83f);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function bdy_0x2b5b8c() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x241d3c => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    let _0x20e4ec = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    $.shopactivityId == "" && delete _0x20e4ec.activityId;
    const _0x1a1330 = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0x20e4ec,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x20e4ec = await dyy.getbody(_0x1a1330);
    const _0x4cd786 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x55967f,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x13fc93 = {
      url: "https://api.m.jd.com/client.action?" + _0x20e4ec + "&uuid=88888",
      headers: _0x4cd786,
      timeout: 30000
    };
    $.dget(_0x13fc93, async (_0xbb4a5d, _0xe8fd74, _0x3f4024) => {
      try {
        _0x3f4024 = _0x3f4024 && _0x3f4024.match(/jsonp_.*?\((.*?)\);/) && _0x3f4024.match(/jsonp_.*?\((.*?)\);/)[1] || _0x3f4024;
        let _0x27f49e = $.toObj(_0x3f4024, _0x3f4024);
        if (_0x27f49e && typeof _0x27f49e == "object") {
          if (_0x27f49e && _0x27f49e.success === true) {
            console.log("    " + _0x27f49e.message);
            $.errorJoinShop = _0x27f49e.message;
            if (_0x27f49e.result && _0x27f49e.result.giftInfo) {
              for (let _0x33d6bb of _0x27f49e.result.giftInfo.giftList) {
                console.log("入会获得:" + _0x33d6bb.discountString + _0x33d6bb.prizeName + _0x33d6bb.secondLineDesc);
              }
            }
          } else {
            _0x27f49e && typeof _0x27f49e == "object" && _0x27f49e.message ? ($.errorJoinShop = _0x27f49e.message, console.log("" + (_0x27f49e.message || ""))) : console.log(_0x3f4024);
          }
        } else {
          console.log(_0x3f4024);
        }
      } catch (_0x2964af) {
        $.logErr(_0x2964af, _0xe8fd74);
      } finally {
        _0x241d3c();
      }
    });
  });
}
async function bdy_0x47841e() {
  return new Promise(async _0x230ffe => {
    const _0x5e8d0c = {
      venderId: $.joinVenderId,
      payUpShop: true,
      queryVersion: "10.5.2",
      appid: "ef79a",
      needSecurity: true,
      bizId: "shop_view_app",
      channel: 406
    };
    let _0x3add69 = _0x5e8d0c;
    const _0x58340d = {
      appId: "ef79a",
      fn: "getShopOpenCardInfo",
      body: _0x3add69,
      apid: "jd_shop_member",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    _0x3add69 = await dyy.getbody(_0x58340d);
    const _0x455fc1 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0x55967f,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    const _0x185c6c = {
      url: "https://api.m.jd.com/client.action?" + _0x3add69 + "&uuid=88888",
      headers: _0x455fc1,
      timeout: 60000
    };
    $.get(_0x185c6c, async (_0x411e92, _0x2f089d, _0x1a717d) => {
      try {
        _0x1a717d = _0x1a717d && _0x1a717d.match(/jsonp_.*?\((.*?)\);/) && _0x1a717d.match(/jsonp_.*?\((.*?)\);/)[1] || _0x1a717d;
        let _0x1be1ea = $.toObj(_0x1a717d, _0x1a717d);
        _0x1be1ea && typeof _0x1be1ea == "object" ? _0x1be1ea && _0x1be1ea.success == true && (console.log("去加入 -> " + (_0x1be1ea.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x1be1ea.result[0].interestsRuleList && _0x1be1ea.result[0].interestsRuleList[0] && _0x1be1ea.result[0].interestsRuleList[0].interestsInfo && _0x1be1ea.result[0].interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x1a717d);
      } catch (_0x563370) {
        $.logErr(_0x563370, _0x2f089d);
      } finally {
        _0x230ffe();
      }
    });
  });
}
function bdy_0x4ad315(_0xc01e28) {
  const _0x417f35 = {
    "Content-Type": "application/json"
  };
  let _0x23b7d7 = {
      url: "http://121.40.162.127:9000/bdy_h5",
      body: JSON.stringify(_0xc01e28),
      headers: _0x417f35,
      timeout: 10000
    },
    _0x24ea03 = "";
  return new Promise(_0x2ba0e5 => {
    $.post(_0x23b7d7, (_0x33a71d, _0x24ccc7, _0x31491f) => {
      try {
        if (!_0x33a71d) {
          _0x31491f = JSON.parse(_0x31491f);
          _0x31491f.code == 200 ? _0x24ea03 = _0x31491f.data : $.log(_0x31491f.msg);
        }
      } catch (_0x4fa4a4) {
        console.log(_0x4fa4a4, _0x24ccc7);
      } finally {
        _0x2ba0e5(_0x24ea03);
      }
    });
  });
}
function bdy_0x597b3c(_0xd3f6cb, _0x31876a) {
  return Math.floor(Math.random() * (_0x31876a - _0xd3f6cb)) + _0xd3f6cb;
}
function bdy_0x42065e(_0x5e8e07 = +new Date()) {
  var _0x14a7a9 = new Date(_0x5e8e07 + 28800000);
  return _0x14a7a9.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function bdy_0x4fa2bf() {
  return new Promise(_0x455f5c => {
    const _0x4f7f49 = {
      Cookie: bdy_0x55967f,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x5606c5 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x4f7f49,
      timeout: 10000
    };
    $.get(_0x5606c5, (_0x5dd7c9, _0x5f49e5, _0x1d0b2a) => {
      try {
        if (_0x1d0b2a) {
          _0x1d0b2a = JSON.parse(_0x1d0b2a);
          if (!(_0x1d0b2a.islogin === "1")) {
            _0x1d0b2a.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x18c181) {
        console.log(_0x18c181);
      } finally {
        _0x455f5c();
      }
    });
  });
}

function Env(o, t) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((r, i) => { s.call(this, t, (t, e, s) => { t ? i(t) : r(e) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.logLevels = { debug: 0, info: 1, warn: 2, error: 3 }, this.logLevelPrefixs = { debug: "[DEBUG] ", info: "[INFO] ", warn: "[WARN] ", error: "[ERROR] " }, this.logLevel = "info", this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } getEnv() { return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0 } isNode() { return "Node.js" === this.getEnv() } isQuanX() { return "Quantumult X" === this.getEnv() } isSurge() { return "Surge" === this.getEnv() } isLoon() { return "Loon" === this.getEnv() } isShadowrocket() { return "Shadowrocket" === this.getEnv() } isStash() { return "Stash" === this.getEnv() } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null, ...s) { try { return JSON.stringify(t, ...s) } catch { return e } } getjson(t, e) { let s = e; if (this.getdata(t)) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(r => { this.get({ url: t }, (t, e, s) => r(s)) }) } runScript(a, o) { return new Promise(r => { let t = this.getdata("@chavy_boxjs_userCfgs.httpapi"); t = t && t.replace(/\n/g, "").trim(); var e = (e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout")) ? +e : 20, [s, i] = (e = o && o.timeout ? o.timeout : e, t.split("@")); this.post({ url: `http://${i}/v1/scripting/evaluate`, body: { script_text: a, mock_type: "cron", timeout: e }, headers: { "X-Key": s, Accept: "*/*" }, timeout: e }, (t, e, s) => r(s)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; this.fs = this.fs || require("fs"), this.path = this.path || require("path"); var t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), r = !s && this.fs.existsSync(e); if (!s && !r) return {}; r = s ? t : e; try { return JSON.parse(this.fs.readFileSync(r)) } catch (t) { return {} } } writedata() { var t, e, s, r, i; this.isNode() && (this.fs = this.fs || require("fs"), this.path = this.path || require("path"), t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), r = !(s = this.fs.existsSync(t)) && this.fs.existsSync(e), i = JSON.stringify(this.data), !s && r ? this.fs.writeFileSync(e, i) : this.fs.writeFileSync(t, i)) } lodash_get(t, e, s) { let r = t; for (const t of e.replace(/\[(\d+)\]/g, ".$1").split(".")) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, r, e) { return Object(t) === t && ((r = Array.isArray(r) ? r : r.toString().match(/[^.[\]]+/g) || []).slice(0, -1).reduce((t, e, s) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(r[s + 1]) >> 0 == +r[s + 1] ? [] : {}, t)[r[r.length - 1]] = e), t } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { var [, s, r] = /^@(.*?)\.(.*?)$/.exec(t); if (s = s ? this.getval(s) : "") try { const t = JSON.parse(s); e = t ? this.lodash_get(t, r, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { var [, r, i] = /^@(.*?)\.(.*?)$/.exec(e), a = this.getval(r), a = r ? "null" === a ? null : a || "{}" : "{}"; try { const e = JSON.parse(a); this.lodash_set(e, i, t), s = this.setval(JSON.stringify(e), r) } catch (e) { this.lodash_set(a = {}, i, t), s = this.setval(JSON.stringify(a), r) } } else s = this.setval(t, e); return s } getval(t) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.read(t); case "Quantumult X": return $prefs.valueForKey(t); case "Node.js": return this.data = this.loaddata(), this.data[t]; default: return this.data && this.data[t] || null } } setval(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.write(t, e); case "Quantumult X": return $prefs.setValueForKey(t, e); case "Node.js": return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0; default: return this.data && this.data[e] || null } } initGotEnv(t) { this.got = this.got || require("got"), this.cktough = this.cktough || require("tough-cookie"), this.ckjar = this.ckjar || new this.cktough.CookieJar, t && (t.headers = t.headers || {}, t) && (t.headers = t.headers || {}, void 0 === t.headers.cookie) && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar) } tmout() { return new Promise((t, e) => { this.tmoutId = setTimeout(() => { this.prms.cancel(), e({ message: "timemout", response: "" }) }, 5e4) }) } get(t, a = () => { }) { switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t), this.prms = this.got(t).on("redirect", (t, e) => { try { var s; t.headers["set-cookie"] && ((s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString()) && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar) } catch (t) { this.logErr(t) } }), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } post(t, a = () => { }) { var e = t.method ? t.method.toLocaleLowerCase() : "post"; switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[e](t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": t.method = e, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t); var { url: s, ...r } = t; this.prms = this.got[e](s, r), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } time(t, e = null) { var s, r = { "M+": (e = e ? new Date(e) : new Date).getMonth() + 1, "d+": e.getDate(), "H+": e.getHours(), "m+": e.getMinutes(), "s+": e.getSeconds(), "q+": Math.floor((e.getMonth() + 3) / 3), S: e.getMilliseconds() }; for (s in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), r) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[s] : ("00" + r[s]).substr(("" + r[s]).length))); return t } queryStr(e) { let s = ""; for (const r in e) { let t = e[r]; null != t && "" !== t && ("object" == typeof t && (t = JSON.stringify(t)), s += `${r}=${t}&`) } return s = s.substring(0, s.length - 1) } msg(t = o, e = "", s = "", r = {}) { var i, a = r => { const { $open: t, $copy: e, $media: i, $mediaMime: a } = r; switch (typeof r) { case void 0: return r; case "string": switch (this.getEnv()) { case "Surge": case "Stash": default: return { url: r }; case "Loon": case "Shadowrocket": return r; case "Quantumult X": return { "open-url": r }; case "Node.js": return }case "object": switch (this.getEnv()) { case "Surge": case "Stash": case "Shadowrocket": default: var o = {}, s = r.openUrl || r.url || r["open-url"] || t; if (s && Object.assign(o, { action: "open-url", url: s }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(o, { action: "clipboard", text: s }), i) { let t, e, s; if (i.startsWith("http")) t = i; else if (i.startsWith("data:")) { const [r] = i.split(";"), [, a] = i.split(","); e = a, s = r.replace("data:", "") } else e = i, s = (t => { var e, s = { JVBERi0: "application/pdf", R0lGODdh: "image/gif", R0lGODlh: "image/gif", iVBORw0KGgo: "image/png", "/9j/": "image/jpg" }; for (e in s) if (0 === t.indexOf(e)) return s[e]; return null })(i); Object.assign(o, { "media-url": t, "media-base64": e, "media-base64-mime": a ?? s }) } return Object.assign(o, { "auto-dismiss": r["auto-dismiss"], sound: r.sound }), o; case "Loon": { const e = {}; (s = r.openUrl || r.url || r["open-url"] || t) && Object.assign(e, { openUrl: s }); var n = r.mediaUrl || r["media-url"]; return (n = i?.startsWith("http") ? i : n) && Object.assign(e, { mediaUrl: n }), console.log(JSON.stringify(e)), e } case "Quantumult X": { const a = {}; (o = r["open-url"] || r.url || r.openUrl || t) && Object.assign(a, { "open-url": o }); n = r["media-url"] || r.mediaUrl; return (n = i?.startsWith("http") ? i : n) && Object.assign(a, { "media-url": n }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(a, { "update-pasteboard": s }), console.log(JSON.stringify(a)), a } case "Node.js": return }default: return } }; if (!this.isMute) switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: $notification.post(t, e, s, a(r)); break; case "Quantumult X": $notify(t, e, s, a(r)); break; case "Node.js": }this.isMuteLog || ((i = ["", "==============📣系统通知📣=============="]).push(t), e && i.push(e), s && i.push(s), console.log(i.join("\n")), this.logs = this.logs.concat(i)) } debug(...t) { this.logLevels[this.logLevel] <= this.logLevels.debug && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.debug + t.map(t => t ?? String(t)).join(this.logSeparator))) } info(...t) { this.logLevels[this.logLevel] <= this.logLevels.info && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.info + t.map(t => t ?? String(t)).join(this.logSeparator))) } warn(...t) { this.logLevels[this.logLevel] <= this.logLevels.warn && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.warn + t.map(t => t ?? String(t)).join(this.logSeparator))) } error(...t) { this.logLevels[this.logLevel] <= this.logLevels.error && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.error + t.map(t => t ?? String(t)).join(this.logSeparator))) } log(...t) { 0 < t.length && (this.logs = [...this.logs, ...t]), console.log(t.map(t => t ?? String(t)).join(this.logSeparator)) } logErr(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: this.log("", `❗️${this.name}, 错误!`, t); break; case "Node.js": this.log("", `❗️${this.name}, 错误!`, void 0 !== t.message ? t.message : t) } } wait(e) { return new Promise(t => setTimeout(t, e)) } done(t = {}) { var e = ((new Date).getTime() - this.startTime) / 1e3; switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: $done(t); break; case "Node.js": process.exit(1) } } }(o, t) }