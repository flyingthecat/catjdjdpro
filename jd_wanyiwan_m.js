/*
23 5,10 * * * jd_wanyiwan_m.js
*/

const $ = new Env('玩一玩_任务_m');

const _0x3ccf47 = $.isNode() ? require("./jdCookie.js") : "",
  _0x5a1e03 = $.isNode() ? require("./sendNotify") : "",
  _0x4972a4 = require("./function/dylib.js"),
  _0x21a417 = require("./USER_AGENTS"),
  _0x35edd2 = process.env.WYW_DBNUM ? process.env.WYW_DBNUM : "100",
  _0x10ede5 = process.env.WYW_AUTOBAN ? process.env.WYW_AUTOBAN : "false";
  helpCode = process.env.WYW_HELPCODE;
let _0x3739ba = "",
  _0x461d33 = {};
if (process.env.DY_PROXY) try {
  require("https-proxy-agent");
  _0x461d33 = require("./function/proxy.js");
  $.dget = _0x461d33.intoRequest($.get.bind($));
  $.dpost = _0x461d33.intoRequest($.post.bind($));
} catch {
  $.log("未安装https-proxy-agent依赖，无法启用代理");
  $.dget = $.get;
  $.dpost = $.post;
} else $.dpost = $.post, $.dget = $.get;
let _0x37717f = [],
  _0x2459ab = "",
  _0x4195f9 = 0;
const {
    execSync: _0xb8d9e
  } = require("child_process"),
  _0x478cfd = require("fs");
if ($.isNode()) {
  Object.keys(_0x3ccf47).forEach(_0x29cd81 => {
    _0x37717f.push(_0x3ccf47[_0x29cd81]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else _0x37717f = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x500b23 => _0x500b23.cookie)].filter(_0x390eec => !!_0x390eec);
const _0x1d5a10 = process.env.WYW_HELPTM ? process.env.WYW_HELPTM : "23",
  _0x328027 = new Date().setHours(_0x1d5a10);
$.helpId = [];
$.fullId = [];
$.apiTokenObj = {};
$.banpin = [];
!(async () => {
  if (!_0x37717f[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  console.log("当前版本：20240728");
  console.log("问题建议：https://t.me/dylan_jdpro");
  console.log("环境变量：\n    WYW_HELPTM='15' 几点后关闭助力\n    WYW_AUTOBAN='true' 自动管理黑名单，默认关闭");
  console.log("只做任务和助力");
  for (let _0x1270a1 = 0; _0x1270a1 < _0x37717f.length; _0x1270a1++) {
    $.UA = _0x21a417.UARAM ? _0x21a417.UARAM("", _0x2459ab) : _0x21a417.USER_AGENT;
    _0x2459ab = _0x4972a4.buildck(_0x37717f[_0x1270a1]);
    if (_0x2459ab) try {
      $.UserName = decodeURIComponent(_0x2459ab.match(/pt_pin=([^; ]+)(?=;?)/) && _0x2459ab.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x1270a1 + 1;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      $.outFlag = false;
      $.isban = false;
      $.hasRisk = false;
      _0x3739ba = _0x35edd2;
      _0x4195f9 = 0;
      console.log("\n******开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      let _0x3200ea = await _0x4972a4.jddToken($.UA);
      if (_0x3200ea) $.apitoken = _0x3200ea.token;
      $.apiTokenObj[$.UserName] = $.apitoken;
      $.UUID = _0x4972a4.UUID("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      if (!$.isLogin) {
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        });
        $.isNode() && (await _0x5a1e03.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      $.index != 1 && _0x461d33.swip && (await _0x461d33.swip());
      await _0x258d9e();
      if ($.outFlag) break;
      if($.index % 10 === 0){
        console.log("为了帝国第"+$.index+"个号休息6分钟-->"+new Date());
        await $.wait(360000);  
      }else{
        let n = parseInt(Math.random() * 1000 + 25000, 10);
        console.log("为了可持续发展随机休息"+n);
        await $.wait(n); 
      }
    } catch (_0x367ac0) {}
  }
  if ($.banpin.length > 0) {
    const _0x44efc3 = $.banpin.join(",");
    $.banpin.length > 0 && console.log("\n" + JSON.stringify($.banpin.join(",")) + "这些pin的账号是是黑子，不要执行翻翻乐, 禁用变量export BANPIN=\"wyw_ffl@pin1,pin2\"");
    const _0x45ce78 = "/ql/data/config/config.sh",
      _0x1d97a3 = "tempblock_ck_envs5",
      _0x20e8db = "export tempblock_ck_envs5=\"wyw_ffl@-@" + _0x44efc3 + "\"";
    if (_0x478cfd.existsSync(_0x45ce78)) {
      if (_0x10ede5 === "true") {
        console.log("自动添加黑名单变量完成，禁止上述pin的账号执行翻翻乐");
        try {
          const _0xf8c698 = "grep -q \"tempblock_ck_envs_num\" " + _0x45ce78;
          _0xb8d9e(_0xf8c698);
          const _0x15f6a8 = "sed  -i -r 's/(tempblock_ck_envs_num=)\"[^\"]*\"/\\1\"5\"/g' " + _0x45ce78;
          _0xb8d9e(_0x15f6a8);
        } catch (_0x5dc986) {
          if ($.banpin.length > 0) {
            const _0x2af247 = "echo '\nexport tempblock_ck_envs_num=\"5\"' >> " + _0x45ce78;
            _0xb8d9e(_0x2af247);
          }
        }
        try {
          const _0x13d1a1 = "grep -q " + _0x1d97a3 + " " + _0x45ce78;
          _0xb8d9e(_0x13d1a1);
          const _0x5130bb = "sed  -i -r 's/(" + _0x1d97a3 + "=)\"[^\"]*\"/\\1\"wyw_ffl@--@" + _0x44efc3 + "\"/g' " + _0x45ce78;
          _0xb8d9e(_0x5130bb);
        } catch (_0x240d81) {
          if ($.banpin.length > 0) {
            const _0x54e22b = "echo '\n#禁用黑号翻翻乐\n" + _0x20e8db + "' >> " + _0x45ce78;
            _0xb8d9e(_0x54e22b);
          }
        }
      } else _0xb8d9e("sed -i '/tempblock_ck_envs5/d' " + _0x45ce78);
    }
  }
  Date.now() > _0x328027 ? console.log("\n\n已设置" + _0x1d5a10 + "点后关闭助力") : $.helpId.length > 1 && (console.log("\n\n开始内部助力..."), await _0x1e3146());
})().catch(_0x3dddc2 => {
  return $.logErr(_0x3dddc2);
}).finally(() => {
  return $.done();
});
async function _0x1e3146() {
  if(helpCode){
		$.helpId = helpCode.split('&')
	}
	console.log("助力码 --> " + $.helpId);
  for (let _0x23fb7c = 0; _0x23fb7c < _0x37717f.length; _0x23fb7c++) {
    $.UA = _0x21a417.UARAM ? _0x21a417.UARAM("", _0x2459ab) : _0x21a417.USER_AGENT;
    _0x2459ab = _0x4972a4.buildck(_0x37717f[_0x23fb7c]);
    if (_0x2459ab) {
      $.UserName = decodeURIComponent(_0x2459ab.match(/pt_pin=([^; ]+)(?=;?)/) && _0x2459ab.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x23fb7c + 1;
      console.log("\n-------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "------\n");
      $.apitoken = $.apiTokenObj[$.UserName];
      $.nonum = false;
      $.hphotflag = false;
      _0x4195f9 = 0;
      $.UUID = _0x4972a4.UUID("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      $.fullId.length != 0 && ($.helpId = $.helpId.filter(_0x8b096d => !$.fullId.includes(_0x8b096d)), $.fullId = []);
      _0x461d33.swip && (await _0x461d33.swip());
      for (let _0x329602 of $.helpId) {
        $.itemId = _0x329602;
        console.log("去助力 --> " + $.itemId);
        await _0x49756d("wanyiwan_assist");
        if ($.nonum || $.hphotflag || !$.isLogin) break;
        let n = parseInt(Math.random() * 1000 + 10000, 10);
        console.log("为了多助力随机休息"+n);
        await $.wait(n);
      }
      if ($.outFlag) break;
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
async function _0x258d9e() {
  try {
    $.taskList = [];
    $.isBan = false;
    $.signstatus = 0;
    await _0x49756d("wanyiwan_home");
    await $.wait(parseInt(Math.random() * 500 + 600, 10));
    $.signstatus == 0 ? (console.log("\n去签到..."), await _0x49756d("wanyiwan_sign")) : console.log("\n今日以签过!");
    if ($.isBan) {
      $.banpin.push($.UserName);
      return;
    }
    console.log("\n去做任务...");
    await _0x49756d("wanyiwan_task_list");
    for (let _0x3730ea of $.taskList) {
      $.itemId = 0;
      $.encryptAssignmentId = _0x3730ea.encryptAssignmentId;
      $.taskType = _0x3730ea.taskType;
      let _0x2366e8 = _0x3730ea.maxTimes - _0x3730ea.finishTimes;
      if (_0x3730ea.title.includes("邀请")) {
        if (_0x3730ea.status != 3) {
          $.helpId.push(_0x3730ea.taskDetail[0].itemId);
          console.log("入列邀请码：" + _0x3730ea.taskDetail[0].itemId);
        }
      }
      if (_0x3730ea.status == 2) {
        console.log("领取 " + _0x3730ea.title + " 奖励...");
        $.endflag = false;
        for (let _0x2ac6c1 of Array(_0x3730ea.finishTimes)) {
          await _0x49756d("award");
          if ($.endflag) break;
          await $.wait(1500);
        }
        continue;
      } else {
        if (_0x3730ea.status == 3) {
          console.log(_0x3730ea.title + " ---- 已完成");
          continue;
        } else {
          if (/邀请|下单/.test(_0x3730ea.title)) continue;
        }
      }
      console.log("去做 " + _0x3730ea.title);
      for (let _0x4df762 = 0; _0x4df762 < _0x2366e8; _0x4df762++) {
        _0x3730ea.taskDetail && ($.itemId = _0x3730ea.taskDetail[_0x4df762].itemId);
        await _0x49756d("startTask");
        _0x3730ea.limitTime != 0 && (await $.wait(_0x3730ea.limitTime * 1000), await _0x49756d("endTask"));
        await $.wait(parseInt(Math.random() * 500 + 1000, 10));
        await _0x49756d("award");
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
      }
      await $.wait(parseInt(Math.random() * 500 + 1500, 10));
    }
    await $.wait(parseInt(Math.random() * 500 + 2000, 10));
  } catch (_0x99bec0) {
    console.log(_0x99bec0);
  }
}
async function _0x49756d(_0x35224d) {
  if ($.outFlag || $.isban) return;
  let _0x329566 = "",
    _0x2370ba,
    _0x4cd394,
    _0x1ca827 = "post",
    _0x51dca9 = "https://api.m.jd.com/client.action",
    _0x1a5de4 = "signed_wh5";
  switch (_0x35224d) {
    case "wanyiwan_sign":
      _0x329566 = {
        "version": 3
      }, _0x4cd394 = "wanyiwan_sign";
      break;
    case "wanyiwan_home":
      _0x329566 = {
        "outsite": 0,
        "firstCall": 1,
        "version": 3,
        "lbsSwitch": true,
        "babelChannel": "ttt4"
      }, _0x4cd394 = "wanyiwan_home";
      break;
    case "wanyiwan_task_list":
      _0x329566 = {
        "version": 1,
        "lbsSwitch": false
      }, _0x4cd394 = "wanyiwan_task_list";
      break;
    case "apTaskList":
      _0x51dca9 = "https://api.m.jd.com/api?functionId=apTaskList&body=%7B%22linkId%22%3A%22Fl1LmxG_f0poD7w1ycZqnw%22%7D&t=1715170975269&appid=activities_platform&client=android&clientVersion=6.24.0&loginType=2&loginWQBiz=wegame&h5st=null&build=22779&screen=393*873&networkType=wifi&eufv=1&cthr=1", _0x1ca827 = "get";
      break;
    case "startTask":
      _0x329566 = {
        "itemId": $.itemId,
        "taskType": $.taskType,
        "assignmentId": $.encryptAssignmentId,
        "actionType": 1,
        "version": 3
      }, _0x4cd394 = "wanyiwan_do_task";
      break;
    case "endTask":
      _0x329566 = {
        "itemId": $.itemId,
        "taskType": $.taskType,
        "assignmentId": $.encryptAssignmentId,
        "actionType": 0,
        "version": 3
      }, _0x4cd394 = "wanyiwan_do_task";
      break;
    case "award":
      _0x329566 = {
        "taskType": $.taskType,
        "assignmentId": $.encryptAssignmentId,
        "version": 3
      }, _0x2370ba = "d12dd", _0x4cd394 = "wanyiwan_task_receive_award";
      break;
    case "wanyiwan_assist":
      _0x329566 = {
        "inviteCode": $.itemId,
        "version": 3
      }, _0x4cd394 = "wanyiwan_assist";
      break;
    case "turnHappyHome":
      _0x51dca9 = "https://api.m.jd.com/api", _0x329566 = {
        "linkId": "CDv-TaCmVcD0sxAI_HE2RQ"
      }, _0x1a5de4 = "activities_platform", _0x4cd394 = "turnHappyHome";
      break;
    case "turnHappyDouble":
      _0x51dca9 = "https://api.m.jd.com/api", _0x329566 = {
        "linkId": "CDv-TaCmVcD0sxAI_HE2RQ",
        "turnNum": parseInt(_0x3739ba)
      }, _0x2370ba = "614f1", _0x1a5de4 = "activities_platform", _0x4cd394 = "turnHappyDouble";
      break;
    case "turnHappyReceive":
      _0x51dca9 = "https://api.m.jd.com/api", _0x329566 = {
        "linkId": "CDv-TaCmVcD0sxAI_HE2RQ"
      }, _0x2370ba = "25fac", _0x1a5de4 = "activities_platform", _0x4cd394 = "turnHappyReceive";
      break;
    case "superRedBagHome":
      _0x51dca9 = "https://api.m.jd.com/api", _0x329566 = {
        "linkId": "aE-1vg6_no2csxgXFuv3Kg"
      }, _0x2370ba = "5be1b", _0x1a5de4 = "activity_platform_se", _0x4cd394 = "superRedBagHome";
      break;
    case "superRedBagDraw":
      _0x51dca9 = "https://api.m.jd.com/api", _0x329566 = {
        "linkId": "aE-1vg6_no2csxgXFuv3Kg"
      }, _0x2370ba = "89cfe", _0x1a5de4 = "activity_platform_se", _0x4cd394 = "superRedBagDraw";
      break;
    default:
      console.log("错误" + _0x35224d);
  }
  if (_0x2370ba) {
    let _0x44bdab = {
      "appId": _0x2370ba,
      "functionId": _0x4cd394,
      "body": _0x329566,
      "appid": _0x1a5de4,
      "clientVersion": $.UA.split(";")[2],
      "client": "apple",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
    _0x329566 = await _0x43415e(_0x44bdab);
    if (!_0x329566) return;
  } else _0x329566 && (_0x329566 = "functionId=" + _0x4cd394 + "&body=" + encodeURIComponent(JSON.stringify(_0x329566)) + "&t=" + Date.now() + "&appid=" + _0x1a5de4 + "&client=apple&clientVersion=" + $.UA.split(";")[2] + "&h5st=null");
  let _0x165918 = _0x1f5680(_0x51dca9, _0x329566),
    _0x2f2e31 = await _0x2651d6(_0x165918, _0x1ca827);
  do {
    if (JSON.stringify(_0x2f2e31).includes("重试")) _0x4195f9++, await $.wait(1000), _0x2f2e31 = await _0x2651d6(_0x165918, _0x1ca827);else {
      _0x4195f9 = 0;
    }
  } while (_0x4195f9 > 0 & _0x4195f9 < 4);
  _0x1d4baa(_0x35224d, _0x2f2e31);
}
async function _0x2651d6(_0x11aac2, _0x216e3d) {
  return new Promise(async _0x36c72d => {
    $["d" + _0x216e3d](_0x11aac2, async (_0x228bbf, _0x1f0842, _0xdd8d99) => {
      try {
        if (_0x228bbf) console.log("" + $.toStr(_0x228bbf, _0x228bbf));else {
          if (_0xdd8d99.includes("登录")) $.isLogin = false;
        }
      } catch (_0x4b826a) {
        console.log(_0x4b826a, _0x1f0842);
      } finally {
        _0x36c72d(_0xdd8d99);
      }
    });
  });
}
function _0x3dc389(_0x1144dc) {
  let _0x3f86b7 = "";
  switch (type) {
    case [_0x3f86b7]:
      const _0x292f72 = {
        "ed": ed
      };
      _0xf1f6le = _0x292f72;
      break;
    case [_0x3f86b7]:
      const _0x273322 = {
        "bd": bd
      };
      _0xf1f6lc = _0x273322;
      break;
    case [_0x3f86b7]:
      const _0x2300c5 = {
        "ed": ed
      };
      _0xf1f6lf = _0x2300c5;
      break;
    case [_0x3f86b7]:
      const _0x533971 = {
        "ed": ed
      };
      _0xf1f6lg = _0x533971;
      break;
    case [_0x3f86b7]:
      const _0x2ca445 = {
        "ed": ed
      };
      _0xf1f6lv = _0x2ca445;
      break;
  }
}
async function _0x1d4baa(_0x2c6cc8, _0xb1206c) {
  let _0x1cb3bc = "";
  try {
    _0x1cb3bc = JSON.parse(_0xb1206c);
  } catch (_0x4f6bab) {
    console.log(_0x2c6cc8 + " 执行任务异常");
  }
  try {
    switch (_0x2c6cc8) {
      case "award":
        if (_0x1cb3bc.code == 0) {
          _0x1cb3bc.data.bizCode == 0 ? console.log("任务完成，获得" + _0x1cb3bc.data.result.rewardCount + "奖票 🎫") : (console.log(_0x1cb3bc.data.bizCode, _0x1cb3bc.data.bizMsg), $.endflag = true);
        } else console.log(_0x1cb3bc.message);
        break;
      case "wanyiwan_sign":
        if (_0x1cb3bc.code == 0) {
          if (_0x1cb3bc.data.bizCode == 0) console.log("签到成功,获得" + _0x1cb3bc.data.result.getScore + "奖票 🎫");else _0x1cb3bc.data.bizCode == -10001 ? (console.log("该账户可能黑子！无法签到和任务！"), $.isBan = true) : console.log(_0x1cb3bc.data.bizMsg);
        } else console.log(_0x1cb3bc.message);
        break;
      case "wanyiwan_assist":
        if (_0x1cb3bc.code == 0) {
          if (_0x1cb3bc.data.bizCode == 0) console.log("✔️ 助力成功"), $.nonum = true;else {
            if (_0x1cb3bc.data.bizMsg.includes("太多人") || _0x1cb3bc.data.bizMsg.includes("重复")) console.log("❌", _0x1cb3bc.data.bizCode, _0x1cb3bc.data.bizMsg), $.nonum = true;else {
              if (_0x1cb3bc.data.bizMsg.includes("已经完成")) console.log("❌", _0x1cb3bc.data.bizCode, _0x1cb3bc.data.bizMsg), $.fullId.push($.itemId);else /火爆|无法/.test(_0x1cb3bc.data.bizMsg) ? (console.log("❌", _0x1cb3bc.data.bizCode, _0x1cb3bc.data.bizMsg), $.hphotflag = true) : console.log("❌", _0x1cb3bc.data.bizCode, _0x1cb3bc.data.bizMsg);
            }
          }
        } else console.log("❌", _0x1cb3bc.code, _0x1cb3bc.message), _0x1cb3bc.message.includes("火爆") && ($.hphotflag = true);
        break;
      case "wanyiwan_home":
        if (_0x1cb3bc.code == 0) {
          if (_0x1cb3bc.data.bizCode == 0) {
            _0x1cb3bc.data.result.popWindows.length != 0 && console.log("获得新手奖励：", _0x1cb3bc.data.result.popWindows[0].getScore, "奖票 🎫");
            console.log("当前奖票总量：" + _0x1cb3bc.data.result.score + " 🎫");
            $.isLogin = _0x1cb3bc.data?.["result"]?.["isLogin"];
            $.taskList = _0x1cb3bc.data?.["result"]?.["taskBoard"] || [];
            $.signstatus = _0x1cb3bc.data?.["result"]?.["signBoard"]?.["status"] || 0;
          } else console.log(_0x1cb3bc.data.bizMsg);
        } else console.log(_0x1cb3bc.message);
        break;
      case "wanyiwan_task_list":
        _0x1cb3bc.code == 0 ? _0x1cb3bc.data.bizCode == 0 ? $.taskList = _0x1cb3bc.data?.["result"]?.["taskList"] || [] : console.log(_0x1cb3bc.data.bizMsg) : console.log(_0x1cb3bc.message);
        break;
      case "turnHappyHome":
        _0x1cb3bc.success ? $.leftTime = _0x1cb3bc.data.leftTime : console.log(_0x1cb3bc.errMsg);
        break;
      case "turnHappyDouble":
        _0x1cb3bc.success ? _0x1cb3bc.data.rewardState == 1 ? (console.log("翻倍成功，获得 " + _0x1cb3bc.data.rewardValue + "奖票 🎫"), $.dbsuc = true) : ($.dbsuc = false, console.log("叼了，翻倍失败！再接再厉！")) : (console.log(_0x1cb3bc.errMsg), $.dbsuc = false);
        break;
      case "superRedBagHome":
        _0x1cb3bc.success ? ($.sceneStatus = _0x1cb3bc.data.sceneStatus, $.nextLeftTime = _0x1cb3bc.data.nextLeftTime) : console.log(_0x1cb3bc.errMsg);
        break;
      case "superRedBagDraw":
        if (_0x1cb3bc.success) {
          $.shakeLeftTime = _0x1cb3bc.data.shakeLeftTime;
          const {
            prizeDrawVo = ""
          } = _0x1cb3bc.data;
          if (prizeDrawVo) switch (prizeDrawVo.prizeType) {
            case 24:
              console.log("获得：" + prizeDrawVo.amount + "票奖 🎫"), $.sucdraw++;
              break;
            case 1:
              console.log("获得:" + prizeDrawVo.prizeConfigName);
              break;
            default:
              console.log(prizeDrawVo);
              break;
          } else console.log(_0xb1206c);
        } else console.log(_0x1cb3bc.errMsg);
        break;
      case "startTask":
      case "turnHappyReceive":
      case "endTask":
        break;
      default:
        console.log(_0x2c6cc8 + " -> " + _0xb1206c);
    }
    typeof _0x1cb3bc == "object" && _0x1cb3bc.errorMessage && _0x1cb3bc.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (_0x4ef8a9) {
    console.log(_0x2c6cc8 + " " + _0x4ef8a9);
  }
}
function _0x1f5680(_0x4434e7, _0x5bdddf) {
  _0x5bdddf = _0x5bdddf + "&rfs=0000&x-api-eid-token=" + $.apitoken;
  let _0x12fe40 = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/x-www-form-urlencoded",
    "Origin": "https://pro.m.jd.com",
    "Referer": "https://pro.m.jd.com/",
    "Cookie": _0x2459ab,
    "User-Agent": $.UA,
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "x-referer-page": "https://pro.m.jd.com/mall/active/3fcyrvLZALNPWCEDRvaZJVrzek8v/index.html",
    "request-from": "native",
    "x-rp-client": "h5_1.0.0"
  };
  return {
    "url": _0x4434e7,
    "headers": _0x12fe40,
    "timeout": 30000,
    "ciphers": _0x4972a4.cpstr,
    ...(_0x5bdddf ? {
      "body": _0x5bdddf
    } : {})
  };
}
async function _0x45dc77() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + _0x4a24e0(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function _0x4a24e0(_0x126503) {
  _0x126503 = _0x126503 || 32;
  let _0x5db4b2 = "abcdef0123456789",
    _0x3962d0 = _0x5db4b2.length,
    _0x115ed1 = "";
  for (i = 0; i < _0x126503; i++) {
    _0x115ed1 += _0x5db4b2.charAt(Math.floor(Math.random() * _0x3962d0));
  }
  return _0x115ed1;
}
function _0x36565c(_0x5d1a1c) {
  if (typeof _0x5d1a1c == "string") try {
    return JSON.parse(_0x5d1a1c);
  } catch (_0x572003) {
    return console.log(_0x572003), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
  }
}
async function _0x33222b() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x4725e3 => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    let _0x36e439 = {
      "venderId": "" + $.joinVenderId + "",
      "shopId": "" + $.joinVenderId + "",
      "bindByVerifyCodeFlag": 1,
      "registerExtend": {},
      "writeChildFlag": 0,
      "channel": 406
    };
    $.shopactivityId == "" && delete _0x36e439.activityId;
    let _0x5e93e8 = {
      "appId": "27004",
      "fn": "bindWithVender",
      "body": _0x36e439,
      "apid": "shopmember_m_jd_com",
      "ver": "9.2.0",
      "cl": "H5",
      "user": $.UserName,
      "code": 0,
      "ua": $.UA
    };
    _0x36e439 = await dyy.getbody(_0x5e93e8);
    const _0x1e4394 = {
      "url": "https://api.m.jd.com/client.action?" + _0x36e439 + "&uuid=88888",
      "headers": {
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "cookie": _0x2459ab,
        "origin": "https://shopmember.m.jd.com/",
        "user-agent": $.UA
      },
      "timeout": 30000
    };
    $.dget(_0x1e4394, async (_0x369e9e, _0x320036, _0x523d7d) => {
      try {
        _0x523d7d = _0x523d7d && _0x523d7d.match(/jsonp_.*?\((.*?)\);/) && _0x523d7d.match(/jsonp_.*?\((.*?)\);/)[1] || _0x523d7d;
        let _0x1449b7 = $.toObj(_0x523d7d, _0x523d7d);
        if (_0x1449b7 && typeof _0x1449b7 == "object") {
          if (_0x1449b7 && _0x1449b7.success === true) {
            console.log("    " + _0x1449b7.message);
            $.errorJoinShop = _0x1449b7.message;
            if (_0x1449b7.result && _0x1449b7.result.giftInfo) for (let _0xf46074 of _0x1449b7.result.giftInfo.giftList) {
              console.log("\u5165\u4F1A\u83B7\u5F97:" + _0xf46074.discountString + _0xf46074.prizeName + _0xf46074.secondLineDesc);
            }
          } else _0x1449b7 && typeof _0x1449b7 == "object" && _0x1449b7.message ? ($.errorJoinShop = _0x1449b7.message, console.log("" + (_0x1449b7.message || ""))) : console.log(_0x523d7d);
        } else console.log(_0x523d7d);
      } catch (_0x25efc1) {
        $.logErr(_0x25efc1, _0x320036);
      } finally {
        _0x4725e3();
      }
    });
  });
}
async function _0xeeccca() {
  return new Promise(async _0x2b74c5 => {
    let _0x47e528 = {
        "venderId": $.joinVenderId,
        "payUpShop": true,
        "queryVersion": "10.5.2",
        "appid": "ef79a",
        "needSecurity": true,
        "bizId": "shop_view_app",
        "channel": 406
      },
      _0x29bd26 = {
        "appId": "ef79a",
        "fn": "getShopOpenCardInfo",
        "body": _0x47e528,
        "apid": "jd_shop_member",
        "ver": "9.2.0",
        "cl": "H5",
        "user": $.UserName,
        "code": 0,
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
      };
    _0x47e528 = await dyy.getbody(_0x29bd26);
    const _0x5253f4 = {
      "url": "https://api.m.jd.com/client.action?" + _0x47e528 + "&uuid=88888",
      "headers": {
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "cookie": _0x2459ab,
        "origin": "https://shopmember.m.jd.com/",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
      },
      "timeout": 60000
    };
    $.get(_0x5253f4, async (_0x82413f, _0x5ab12f, _0x2cfb93) => {
      try {
        _0x2cfb93 = _0x2cfb93 && _0x2cfb93.match(/jsonp_.*?\((.*?)\);/) && _0x2cfb93.match(/jsonp_.*?\((.*?)\);/)[1] || _0x2cfb93;
        let _0x4041a5 = $.toObj(_0x2cfb93, _0x2cfb93);
        _0x4041a5 && typeof _0x4041a5 == "object" ? _0x4041a5 && _0x4041a5.success == true && (console.log("去加入 -> " + (_0x4041a5.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x4041a5.result[0].interestsRuleList && _0x4041a5.result[0].interestsRuleList[0] && _0x4041a5.result[0].interestsRuleList[0].interestsInfo && _0x4041a5.result[0].interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x2cfb93);
      } catch (_0x3dede8) {
        $.logErr(_0x3dede8, _0x5ab12f);
      } finally {
        _0x2b74c5();
      }
    });
  });
}
function _0x43415e(_0x43c1b0) {
  let _0x2a33b6 = {
      "url": "http://121.40.162.127:9000/bdy_h5",
      "body": JSON.stringify(_0x43c1b0),
      "headers": {
        "Content-Type": "application/json"
      },
      "timeout": 10000
    },
    _0x28d1ca = "";
  return new Promise(_0x352a35 => {
    $.post(_0x2a33b6, (_0x3a18de, _0x22e8be, _0x45a1d4) => {
      try {
        if (_0x3a18de) {} else _0x45a1d4 = JSON.parse(_0x45a1d4), _0x45a1d4.code == 200 ? _0x28d1ca = _0x45a1d4.data : $.log(_0x45a1d4.msg);
      } catch (_0x1b3af1) {
        console.log(_0x1b3af1, _0x22e8be);
      } finally {
        _0x352a35(_0x28d1ca);
      }
    });
  });
}
function _0x5cfe89(_0x5db6cb, _0x31cad8) {
  return Math.floor(Math.random() * (_0x31cad8 - _0x5db6cb)) + _0x5db6cb;
}
function _0x38b5c7(_0x1ce623 = +new Date()) {
  var _0x1f15ac = new Date(_0x1ce623 + 8 * 3600 * 1000);
  return _0x1f15ac.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function _0xbb6c0f() {
  return new Promise(_0x25dde2 => {
    const _0x380b5c = {
      "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      "headers": {
        "Cookie": _0x2459ab,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x380b5c, (_0x5b099b, _0x699971, _0xcc0d3) => {
      try {
        if (_0xcc0d3) {
          _0xcc0d3 = JSON.parse(_0xcc0d3);
          if (_0xcc0d3.islogin === "1") {} else _0xcc0d3.islogin === "0" && ($.isLogin = false);
        }
      } catch (_0x414875) {
        console.log(_0x414875);
      } finally {
        _0x25dde2();
      }
    });
  });
}
function Env(o, t) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((r, i) => { s.call(this, t, (t, e, s) => { t ? i(t) : r(e) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.logLevels = { debug: 0, info: 1, warn: 2, error: 3 }, this.logLevelPrefixs = { debug: "[DEBUG] ", info: "[INFO] ", warn: "[WARN] ", error: "[ERROR] " }, this.logLevel = "info", this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } getEnv() { return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0 } isNode() { return "Node.js" === this.getEnv() } isQuanX() { return "Quantumult X" === this.getEnv() } isSurge() { return "Surge" === this.getEnv() } isLoon() { return "Loon" === this.getEnv() } isShadowrocket() { return "Shadowrocket" === this.getEnv() } isStash() { return "Stash" === this.getEnv() } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null, ...s) { try { return JSON.stringify(t, ...s) } catch { return e } } getjson(t, e) { let s = e; if (this.getdata(t)) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(r => { this.get({ url: t }, (t, e, s) => r(s)) }) } runScript(a, o) { return new Promise(r => { let t = this.getdata("@chavy_boxjs_userCfgs.httpapi"); t = t && t.replace(/\n/g, "").trim(); var e = (e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout")) ? +e : 20, [s, i] = (e = o && o.timeout ? o.timeout : e, t.split("@")); this.post({ url: `http://${i}/v1/scripting/evaluate`, body: { script_text: a, mock_type: "cron", timeout: e }, headers: { "X-Key": s, Accept: "*/*" }, timeout: e }, (t, e, s) => r(s)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; this.fs = this.fs || require("fs"), this.path = this.path || require("path"); var t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), r = !s && this.fs.existsSync(e); if (!s && !r) return {}; r = s ? t : e; try { return JSON.parse(this.fs.readFileSync(r)) } catch (t) { return {} } } writedata() { var t, e, s, r, i; this.isNode() && (this.fs = this.fs || require("fs"), this.path = this.path || require("path"), t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), r = !(s = this.fs.existsSync(t)) && this.fs.existsSync(e), i = JSON.stringify(this.data), !s && r ? this.fs.writeFileSync(e, i) : this.fs.writeFileSync(t, i)) } lodash_get(t, e, s) { let r = t; for (const t of e.replace(/\[(\d+)\]/g, ".$1").split(".")) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, r, e) { return Object(t) === t && ((r = Array.isArray(r) ? r : r.toString().match(/[^.[\]]+/g) || []).slice(0, -1).reduce((t, e, s) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(r[s + 1]) >> 0 == +r[s + 1] ? [] : {}, t)[r[r.length - 1]] = e), t } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { var [, s, r] = /^@(.*?)\.(.*?)$/.exec(t); if (s = s ? this.getval(s) : "") try { const t = JSON.parse(s); e = t ? this.lodash_get(t, r, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { var [, r, i] = /^@(.*?)\.(.*?)$/.exec(e), a = this.getval(r), a = r ? "null" === a ? null : a || "{}" : "{}"; try { const e = JSON.parse(a); this.lodash_set(e, i, t), s = this.setval(JSON.stringify(e), r) } catch (e) { this.lodash_set(a = {}, i, t), s = this.setval(JSON.stringify(a), r) } } else s = this.setval(t, e); return s } getval(t) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.read(t); case "Quantumult X": return $prefs.valueForKey(t); case "Node.js": return this.data = this.loaddata(), this.data[t]; default: return this.data && this.data[t] || null } } setval(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.write(t, e); case "Quantumult X": return $prefs.setValueForKey(t, e); case "Node.js": return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0; default: return this.data && this.data[e] || null } } initGotEnv(t) { this.got = this.got || require("got"), this.cktough = this.cktough || require("tough-cookie"), this.ckjar = this.ckjar || new this.cktough.CookieJar, t && (t.headers = t.headers || {}, t) && (t.headers = t.headers || {}, void 0 === t.headers.cookie) && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar) } tmout() { return new Promise((t, e) => { this.tmoutId = setTimeout(() => { this.prms.cancel(), e({ message: "timemout", response: "" }) }, 5e4) }) } get(t, a = () => { }) { switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t), this.prms = this.got(t).on("redirect", (t, e) => { try { var s; t.headers["set-cookie"] && ((s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString()) && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar) } catch (t) { this.logErr(t) } }), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } post(t, a = () => { }) { var e = t.method ? t.method.toLocaleLowerCase() : "post"; switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[e](t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": t.method = e, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t); var { url: s, ...r } = t; this.prms = this.got[e](s, r), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } time(t, e = null) { var s, r = { "M+": (e = e ? new Date(e) : new Date).getMonth() + 1, "d+": e.getDate(), "H+": e.getHours(), "m+": e.getMinutes(), "s+": e.getSeconds(), "q+": Math.floor((e.getMonth() + 3) / 3), S: e.getMilliseconds() }; for (s in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), r) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[s] : ("00" + r[s]).substr(("" + r[s]).length))); return t } queryStr(e) { let s = ""; for (const r in e) { let t = e[r]; null != t && "" !== t && ("object" == typeof t && (t = JSON.stringify(t)), s += `${r}=${t}&`) } return s = s.substring(0, s.length - 1) } msg(t = o, e = "", s = "", r = {}) { var i, a = r => { const { $open: t, $copy: e, $media: i, $mediaMime: a } = r; switch (typeof r) { case void 0: return r; case "string": switch (this.getEnv()) { case "Surge": case "Stash": default: return { url: r }; case "Loon": case "Shadowrocket": return r; case "Quantumult X": return { "open-url": r }; case "Node.js": return }case "object": switch (this.getEnv()) { case "Surge": case "Stash": case "Shadowrocket": default: var o = {}, s = r.openUrl || r.url || r["open-url"] || t; if (s && Object.assign(o, { action: "open-url", url: s }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(o, { action: "clipboard", text: s }), i) { let t, e, s; if (i.startsWith("http")) t = i; else if (i.startsWith("data:")) { const [r] = i.split(";"), [, a] = i.split(","); e = a, s = r.replace("data:", "") } else e = i, s = (t => { var e, s = { JVBERi0: "application/pdf", R0lGODdh: "image/gif", R0lGODlh: "image/gif", iVBORw0KGgo: "image/png", "/9j/": "image/jpg" }; for (e in s) if (0 === t.indexOf(e)) return s[e]; return null })(i); Object.assign(o, { "media-url": t, "media-base64": e, "media-base64-mime": a ?? s }) } return Object.assign(o, { "auto-dismiss": r["auto-dismiss"], sound: r.sound }), o; case "Loon": { const e = {}; (s = r.openUrl || r.url || r["open-url"] || t) && Object.assign(e, { openUrl: s }); var n = r.mediaUrl || r["media-url"]; return (n = i?.startsWith("http") ? i : n) && Object.assign(e, { mediaUrl: n }), console.log(JSON.stringify(e)), e } case "Quantumult X": { const a = {}; (o = r["open-url"] || r.url || r.openUrl || t) && Object.assign(a, { "open-url": o }); n = r["media-url"] || r.mediaUrl; return (n = i?.startsWith("http") ? i : n) && Object.assign(a, { "media-url": n }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(a, { "update-pasteboard": s }), console.log(JSON.stringify(a)), a } case "Node.js": return }default: return } }; if (!this.isMute) switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: $notification.post(t, e, s, a(r)); break; case "Quantumult X": $notify(t, e, s, a(r)); break; case "Node.js": }this.isMuteLog || ((i = ["", "==============📣系统通知📣=============="]).push(t), e && i.push(e), s && i.push(s), console.log(i.join("\n")), this.logs = this.logs.concat(i)) } debug(...t) { this.logLevels[this.logLevel] <= this.logLevels.debug && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.debug + t.map(t => t ?? String(t)).join(this.logSeparator))) } info(...t) { this.logLevels[this.logLevel] <= this.logLevels.info && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.info + t.map(t => t ?? String(t)).join(this.logSeparator))) } warn(...t) { this.logLevels[this.logLevel] <= this.logLevels.warn && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.warn + t.map(t => t ?? String(t)).join(this.logSeparator))) } error(...t) { this.logLevels[this.logLevel] <= this.logLevels.error && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.error + t.map(t => t ?? String(t)).join(this.logSeparator))) } log(...t) { 0 < t.length && (this.logs = [...this.logs, ...t]), console.log(t.map(t => t ?? String(t)).join(this.logSeparator)) } logErr(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: this.log("", `❗️${this.name}, 错误!`, t); break; case "Node.js": this.log("", `❗️${this.name}, 错误!`, void 0 !== t.message ? t.message : t) } } wait(e) { return new Promise(t => setTimeout(t, e)) } done(t = {}) { var e = ((new Date).getTime() - this.startTime) / 1e3; switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: $done(t); break; case "Node.js": process.exit(1) } } }(o, t) }