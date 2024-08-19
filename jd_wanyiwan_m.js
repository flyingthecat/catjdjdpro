/*
23 5,10 * * * jd_wanyiwan_m.js
*/

const $ = new Env('玩一玩_任务_m');

const _0x31ae4d = $.isNode() ? require("./jdCookie.js") : "",
  _0x45f1b2 = $.isNode() ? require("./sendNotify") : "",
  _0x2d371f = require("./function/dylans"),
  _0x3b8618 = require("./function/dylib.js"),
  _0x24755d = require("./USER_AGENTS"),
  _0xf79de8 = process.env.WYW_DBNUM ? process.env.WYW_DBNUM : "100",
  _0x597197 = process.env.WYW_AUTOBAN ? process.env.WYW_AUTOBAN : "false";
  helpCode = process.env.WYW_HELPCODE;
let _0xfc02fd = "",
  _0x2d28d3 = {};
if (process.env.DY_PROXY) try {
  require("https-proxy-agent");
  _0x2d28d3 = require("./function/proxy.js");
  $.dget = _0x2d28d3.intoRequest($.get.bind($));
  $.dpost = _0x2d28d3.intoRequest($.post.bind($));
} catch {
  $.log("未安装https-proxy-agent依赖，无法启用代理");
  $.dget = $.get;
  $.dpost = $.post;
} else $.dpost = $.post, $.dget = $.get;
let _0x2ccb0a = [],
  _0x4c1e7b = "",
  _0x51e263 = 0;
const {
    execSync: _0x4d9a11
  } = require("child_process"),
  _0x3c6c04 = require("fs");
if ($.isNode()) {
  var _0xda8834 = new Buffer.from("64796C616E", "Hex").toString("utf8");
  Object.keys(_0x31ae4d).forEach(_0x7b1988 => {
    _0x2ccb0a.push(_0x31ae4d[_0x7b1988]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else _0x2ccb0a = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x5319c8 => _0x5319c8.cookie)].filter(_0x67f6eb => !!_0x67f6eb);
const _0x160302 = process.env.WYW_HELPTM ? process.env.WYW_HELPTM : "23",
  _0x521339 = new Date().setHours(_0x160302);
$.helpId = [];
$.fullId = [];
$.apiTokenObj = {};
$.banpin = [];
!(async () => {
  if (!_0x2ccb0a[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  console.log("当前版本：20240817");
  console.log("问题建议：https://t.me/dylan_jdpro");
  console.log("环境变量：\n    WYW_HELPTM='15' 几点后关闭助力");
  console.log("只做任务和助力");
  for (let _0x151338 = 0; _0x151338 < _0x2ccb0a.length; _0x151338++) {
    {
      $.UA = _0x24755d.UARAM ? _0x24755d.UARAM("", _0x4c1e7b) : _0x24755d.USER_AGENT;
      _0x4c1e7b = _0x3b8618.buildck(_0x2ccb0a[_0x151338]);
      if (_0x4c1e7b) try {
        $.UserName = decodeURIComponent(_0x4c1e7b.match(/pt_pin=([^; ]+)(?=;?)/) && _0x4c1e7b.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.index = _0x151338 + 1;
        $.hotFlag = false;
        $.nickName = "";
        $.isLogin = true;
        $.outFlag = false;
        $.isban = false;
        $.hasRisk = false;
        _0xfc02fd = _0xf79de8;
        _0x51e263 = 0;
        console.log("\n******开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
        let _0x3234c4 = await _0x3b8618.jddToken($.UA);
        if (_0x3234c4) $.apitoken = _0x3234c4.token;
        $.apiTokenObj[$.UserName] = $.apitoken;
        $.UUID = _0x3b8618.UUID("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        if (!$.isLogin) {
          $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
            "open-url": "https://bean.m.jd.com/bean/signIndex.action"
          });
          $.isNode() && (await _0x45f1b2.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
          continue;
        }
        $.index != 1 && _0x2d28d3.swip && (await _0x2d28d3.swip());
        await _0x43e786();
        if ($.outFlag) break;
        if($.index % 10 === 0){
          console.log("为了帝国第"+$.index+"个号休息6分钟-->"+new Date());
          await $.wait(360000);  
        }else{
          let n = parseInt(Math.random() * 1000 + 25000, 10);
          console.log("为了可持续发展随机休息"+n);
          await $.wait(n); 
        }
      } catch (_0x3be846) {}
    }
  }
  if ($.banpin.length > 0 && 0) {
    const _0x3cd89c = $.banpin.join(",");
    $.banpin.length > 0 && console.log("\n" + JSON.stringify($.banpin.join(",")) + "这些pin的账号是是黑子，不要执行翻翻乐, 禁用变量export BANPIN=\"wyw_ffl@pin1,pin2\"");
    const _0x301632 = "/ql/data/config/config.sh",
      _0x55e052 = "tempblock_ck_envs5",
      _0x3aa2f6 = "export tempblock_ck_envs5=\"wyw_ffl@-@" + _0x3cd89c + "\"";
    if (_0x3c6c04.existsSync(_0x301632)) {
      if (_0x597197 === "true") {
        {
          console.log("自动添加黑名单变量完成，禁止上述pin的账号执行翻翻乐");
          try {
            const _0x56dc9 = "grep -q \"tempblock_ck_envs_num\" " + _0x301632;
            _0x4d9a11(_0x56dc9);
            const _0x157a8a = "sed  -i -r 's/(tempblock_ck_envs_num=)\"[^\"]*\"/\\1\"5\"/g' " + _0x301632;
            _0x4d9a11(_0x157a8a);
          } catch (_0x3bc552) {
            if ($.banpin.length > 0) {
              const _0x27e00f = "echo '\nexport tempblock_ck_envs_num=\"5\"' >> " + _0x301632;
              _0x4d9a11(_0x27e00f);
            }
          }
          try {
            {
              const _0x2e804b = "grep -q " + _0x55e052 + " " + _0x301632;
              _0x4d9a11(_0x2e804b);
              const _0xa5adb0 = "sed  -i -r 's/(" + _0x55e052 + "=)\"[^\"]*\"/\\1\"wyw_ffl@--@" + _0x3cd89c + "\"/g' " + _0x301632;
              _0x4d9a11(_0xa5adb0);
            }
          } catch (_0x3ab99c) {
            if ($.banpin.length > 0) {
              {
                const _0x4cfb13 = "echo '\n#禁用黑号翻翻乐\n" + _0x3aa2f6 + "' >> " + _0x301632;
                _0x4d9a11(_0x4cfb13);
              }
            }
          }
        }
      } else _0x4d9a11("sed -i '/tempblock_ck_envs5/d' " + _0x301632);
    }
  }
  Date.now() > _0x521339 ? console.log("\n\n已设置" + _0x160302 + "点后关闭助力") : $.helpId.length > 1 && (console.log("\n\n开始内部助力..."), await _0x1d8486());
})().catch(_0x2f0c52 => {
  return $.logErr(_0x2f0c52);
}).finally(() => {
  return $.done();
});
async function _0x1d8486() {
  if(helpCode){
		$.helpId = helpCode.split('&')
	}
	console.log("助力码 --> " + $.helpId);
  for (let _0x271b13 = 0; _0x271b13 < _0x2ccb0a.length; _0x271b13++) {
    $.UA = _0x24755d.UARAM ? _0x24755d.UARAM("", _0x4c1e7b) : _0x24755d.USER_AGENT;
    _0x4c1e7b = _0x3b8618.buildck(_0x2ccb0a[_0x271b13]);
    if (_0x4c1e7b) {
      $.UserName = decodeURIComponent(_0x4c1e7b.match(/pt_pin=([^; ]+)(?=;?)/) && _0x4c1e7b.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x271b13 + 1;
      console.log("\n-------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "------\n");
      $.apitoken = $.apiTokenObj[$.UserName];
      $.nonum = false;
      $.hphotflag = false;
      _0x51e263 = 0;
      $.UUID = _0x3b8618.UUID("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      $.fullId.length != 0 && ($.helpId = $.helpId.filter(_0x4382f0 => !$.fullId.includes(_0x4382f0)), $.fullId = []);
      _0x2d28d3.swip && (await _0x2d28d3.swip());
      for (let _0x27bb2e of $.helpId) {
        $.itemId = _0x27bb2e;
        console.log("去助力 --> " + $.itemId);
        await _0x56d334("wanyiwan_assist");
        if ($.nonum || $.hphotflag || !$.isLogin) break;
        let n = parseInt(Math.random() * 1000 + 10000, 10);
        console.log("为了多助力随机休息"+n);
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
async function _0x43e786() {
  try {
    {
      $.taskList = [];
      $.isBan = false;
      $.signstatus = 0;
      await _0x56d334("wanyiwan_home");
      await $.wait(parseInt(Math.random() * 500 + 600, 10));
      if ($.signstatus == 0) {
        console.log("\n去签到...");
        await _0x56d334("wanyiwan_sign");
      } else {
        console.log("\n今日以签过!");
      }
      if ($.isBan) {
        $.banpin.push($.UserName);
        return;
      }
      console.log("\n去做任务...");
      await _0x56d334("wanyiwan_task_list");
      for (let _0x3864c5 of $.taskList) {
        $.itemId = 0;
        $.encryptAssignmentId = _0x3864c5.encryptAssignmentId;
        $.taskType = _0x3864c5.taskType;
        let _0x53774a = _0x3864c5.maxTimes - _0x3864c5.finishTimes;
        _0x3864c5.title.includes("邀请") && _0x3864c5.status != 3 && ($.helpId.push(_0x3864c5.taskDetail[0].itemId), console.log("入列邀请码：" + _0x3864c5.taskDetail[0].itemId));
        if (_0x3864c5.status == 2) {
          {
            console.log("领取 " + _0x3864c5.title + " 奖励...");
            $.endflag = false;
            for (let _0x57521e of Array(_0x3864c5.finishTimes)) {
              await _0x56d334("award");
              if ($.endflag) break;
              await $.wait(1500);
            }
            continue;
          }
        } else {
          if (_0x3864c5.status == 3) {
            console.log(_0x3864c5.title + " ---- 已完成");
            continue;
          } else {
            if (/邀请|下单/.test(_0x3864c5.title)) continue;
          }
        }
        console.log("去做 " + _0x3864c5.title);
        for (let _0x2d7766 = 0; _0x2d7766 < _0x53774a; _0x2d7766++) {
          if (_0x3864c5.taskDetail) {
            $.itemId = _0x3864c5.taskDetail[_0x2d7766].itemId;
          }
          await _0x56d334("startTask");
          if (_0x3864c5.limitTime != 0) {
            await $.wait(_0x3864c5.limitTime * 1000);
            await _0x56d334("endTask");
          }
          await $.wait(parseInt(Math.random() * 500 + 1000, 10));
          await _0x56d334("award");
          await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
        }
        await $.wait(parseInt(Math.random() * 500 + 1500, 10));
      }
      await $.wait(parseInt(Math.random() * 500 + 2000, 10));
    }
  } catch (_0x28fa8d) {
    console.log(_0x28fa8d);
  }
}
async function _0x56d334(_0x59fca7) {
  if ($.outFlag || $.isban) return;
  let _0x25118a = "",
    _0x12d62a,
    _0x9ada46,
    _0x4ecf61 = "post",
    _0x13ffb7 = "https://api.m.jd.com/client.action",
    _0x3a4612 = "signed_wh5";
  switch (_0x59fca7) {
    case "wanyiwan_sign":
      _0x25118a = {
        "version": 3
      };
      _0x9ada46 = "wanyiwan_sign";
      break;
    case "wanyiwan_home":
      _0x25118a = {
        "outsite": 0,
        "firstCall": 1,
        "version": 3,
        "lbsSwitch": true,
        "babelChannel": "ttt4"
      };
      _0x9ada46 = "wanyiwan_home";
      break;
    case "wanyiwan_task_list":
      _0x25118a = {
        "version": 1,
        "lbsSwitch": false
      };
      _0x9ada46 = "wanyiwan_task_list";
      break;
    case "apTaskList":
      _0x13ffb7 = "https://api.m.jd.com/api?functionId=apTaskList&body=%7B%22linkId%22%3A%22Fl1LmxG_f0poD7w1ycZqnw%22%7D&t=1715170975269&appid=activities_platform&client=android&clientVersion=6.24.0&loginType=2&loginWQBiz=wegame&h5st=null&build=22779&screen=393*873&networkType=wifi&eufv=1&cthr=1";
      _0x4ecf61 = "get";
      break;
    case "startTask":
      _0x25118a = {
        "itemId": $.itemId,
        "taskType": $.taskType,
        "assignmentId": $.encryptAssignmentId,
        "actionType": 1,
        "version": 3
      };
      _0x12d62a = "89db2";
      _0x9ada46 = "wanyiwan_do_task";
      break;
    case "endTask":
      _0x25118a = {
        "itemId": $.itemId,
        "taskType": $.taskType,
        "assignmentId": $.encryptAssignmentId,
        "actionType": 0,
        "version": 3
      };
      _0x12d62a = "89db2";
      _0x9ada46 = "wanyiwan_do_task";
      break;
    case "award":
      _0x25118a = {
        "taskType": $.taskType,
        "assignmentId": $.encryptAssignmentId,
        "version": 3
      };
      _0x12d62a = "d12dd";
      _0x9ada46 = "wanyiwan_task_receive_award";
      break;
    case "wanyiwan_assist":
      _0x25118a = {
        "inviteCode": $.itemId,
        "version": 3
      };
      _0x9ada46 = "wanyiwan_assist";
      break;
    case "turnHappyHome":
      _0x13ffb7 = "https://api.m.jd.com/api";
      _0x25118a = {
        "linkId": "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x3a4612 = "activities_platform";
      _0x9ada46 = "turnHappyHome";
      break;
    case "turnHappyDouble":
      _0x13ffb7 = "https://api.m.jd.com/api";
      _0x25118a = {
        "linkId": "CDv-TaCmVcD0sxAI_HE2RQ",
        "turnNum": parseInt(_0xfc02fd)
      };
      _0x12d62a = "614f1";
      _0x3a4612 = "activities_platform";
      _0x9ada46 = "turnHappyDouble";
      break;
    case "turnHappyReceive":
      _0x13ffb7 = "https://api.m.jd.com/api";
      _0x25118a = {
        "linkId": "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x12d62a = "25fac";
      _0x3a4612 = "activities_platform";
      _0x9ada46 = "turnHappyReceive";
      break;
    case "superRedBagHome":
      _0x13ffb7 = "https://api.m.jd.com/api";
      _0x25118a = {
        "linkId": "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x12d62a = "5be1b";
      _0x3a4612 = "activity_platform_se";
      _0x9ada46 = "superRedBagHome";
      break;
    case "superRedBagDraw":
      _0x13ffb7 = "https://api.m.jd.com/api";
      _0x25118a = {
        "linkId": "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x12d62a = "89cfe";
      _0x3a4612 = "activity_platform_se";
      _0x9ada46 = "superRedBagDraw";
      break;
    default:
      console.log("错误" + _0x59fca7);
  }
  if (_0x12d62a) {
    {
      let _0x378d57 = {
        "appId": _0x12d62a,
        "functionId": _0x9ada46,
        "body": _0x25118a,
        "appid": _0x3a4612,
        "clientVersion": $.UA.split(";")[2],
        "client": "apple",
        "user": $.UserName,
        "code": 1,
        "ua": $.UA
      };
      _0x25118a = await _0x1fced0(_0x378d57);
      if (!_0x25118a) return;
    }
  } else _0x25118a && (_0x25118a = "functionId=" + _0x9ada46 + "&body=" + encodeURIComponent(JSON.stringify(_0x25118a)) + "&t=" + Date.now() + "&appid=" + _0x3a4612 + "&client=apple&clientVersion=" + $.UA.split(";")[2] + "&h5st=null");
  let _0x5138c9 = _0x1d08ad(_0x13ffb7, _0x25118a),
    _0x44a39b = await _0x467feb(_0x5138c9, _0x4ecf61);
  do {
    if (JSON.stringify(_0x44a39b).includes("重试")) _0x51e263++, await $.wait(1000), _0x44a39b = await _0x467feb(_0x5138c9, _0x4ecf61);else {
      _0x51e263 = 0;
    }
  } while (_0x51e263 > 0 & _0x51e263 < 4);
  _0x4ea768(_0x59fca7, _0x44a39b);
}
async function _0x467feb(_0x7a709e, _0xfe977f) {
  return new Promise(async _0x2523f4 => {
    $["d" + _0xfe977f](_0x7a709e, async (_0x2e0528, _0x16e12f, _0x4f32ed) => {
      try {
        if (_0x2e0528) console.log("" + $.toStr(_0x2e0528, _0x2e0528));else {
          if (_0x4f32ed.includes("登录")) $.isLogin = false;
        }
      } catch (_0x371d7f) {
        console.log(_0x371d7f, _0x16e12f);
      } finally {
        _0x2523f4(_0x4f32ed);
      }
    });
  });
}
function _0x278b8c(_0x5b5ca7) {
  let _0x13b977 = "";
  switch (type) {
    case [_0x13b977]:
      const _0x4947e8 = {
        "ed": ed
      };
      _0xf1f6le = _0x4947e8;
      break;
    case [_0x13b977]:
      const _0xd73b8b = {
        "bd": bd
      };
      _0xf1f6lc = _0xd73b8b;
      break;
    case [_0x13b977]:
      const _0x5d8661 = {
        "ed": ed
      };
      _0xf1f6lf = _0x5d8661;
      break;
    case [_0x13b977]:
      const _0x15ebff = {
        "ed": ed
      };
      _0xf1f6lg = _0x15ebff;
      break;
    case [_0x13b977]:
      const _0x4c135f = {
        "ed": ed
      };
      _0xf1f6lv = _0x4c135f;
      break;
  }
}
async function _0x4ea768(_0x3b61a7, _0xd270a) {
  let _0x18db5a = "";
  try {
    _0x18db5a = JSON.parse(_0xd270a);
  } catch (_0x5818e3) {
    console.log(_0x3b61a7 + " 执行任务异常");
  }
  try {
    {
      switch (_0x3b61a7) {
        case "award":
          _0x18db5a.code == 0 ? _0x18db5a.data.bizCode == 0 ? console.log("任务完成，获得" + _0x18db5a.data.result.rewardCount + "奖票 🎫") : (console.log(_0x18db5a.data.bizCode, _0x18db5a.data.bizMsg), $.endflag = true) : console.log(_0x18db5a.message);
          break;
        case "wanyiwan_sign":
          if (_0x18db5a.code == 0) {
            if (_0x18db5a.data.bizCode == 0) console.log("签到成功,获得" + _0x18db5a.data.result.getScore + "奖票 🎫");else _0x18db5a.data.bizCode == -10001 ? (console.log("该账户可能黑子！无法签到和任务！"), $.isBan = true) : console.log(_0x18db5a.data.bizMsg);
          } else console.log(_0x18db5a.message);
          break;
        case "wanyiwan_assist":
          if (_0x18db5a.code == 0) {
            {
              if (_0x18db5a.data.bizCode == 0) console.log("✔️ 助力成功"), $.nonum = true;else {
                if (_0x18db5a.data.bizMsg.includes("太多人") || _0x18db5a.data.bizMsg.includes("重复")) console.log("❌", _0x18db5a.data.bizCode, _0x18db5a.data.bizMsg), $.nonum = true;else {
                  if (_0x18db5a.data.bizMsg.includes("已经完成")) console.log("❌", _0x18db5a.data.bizCode, _0x18db5a.data.bizMsg), $.fullId.push($.itemId);else /火爆|无法/.test(_0x18db5a.data.bizMsg) ? (console.log("❌", _0x18db5a.data.bizCode, _0x18db5a.data.bizMsg), $.hphotflag = true) : console.log("❌", _0x18db5a.data.bizCode, _0x18db5a.data.bizMsg);
                }
              }
            }
          } else console.log("❌", _0x18db5a.code, _0x18db5a.message), _0x18db5a.message.includes("火爆") && ($.hphotflag = true);
          break;
        case "wanyiwan_home":
          if (_0x18db5a.code == 0) {
            if (_0x18db5a.data.bizCode == 0) {
              _0x18db5a.data.result.popWindows.length != 0 && console.log("获得新手奖励：", _0x18db5a.data.result.popWindows[0].getScore, "奖票 🎫");
              console.log("当前奖票总量：" + _0x18db5a.data.result.score + " 🎫");
              $.isLogin = _0x18db5a.data?.["result"]?.["isLogin"];
              $.taskList = _0x18db5a.data?.["result"]?.["taskBoard"] || [];
              $.signstatus = _0x18db5a.data?.["result"]?.["signBoard"]?.["status"] || 0;
            } else console.log(_0x18db5a.data.bizMsg);
          } else console.log(_0x18db5a.message);
          break;
        case "wanyiwan_task_list":
          if (_0x18db5a.code == 0) _0x18db5a.data.bizCode == 0 ? $.taskList = _0x18db5a.data?.["result"]?.["taskList"] || [] : console.log(_0x18db5a.data.bizMsg);else {
            console.log(_0x18db5a.message);
          }
          break;
        case "turnHappyHome":
          _0x18db5a.success ? $.leftTime = _0x18db5a.data.leftTime : console.log(_0x18db5a.errMsg);
          break;
        case "turnHappyDouble":
          if (_0x18db5a.success) {
            if (_0x18db5a.data.rewardState == 1) {
              console.log("翻倍成功，获得 " + _0x18db5a.data.rewardValue + "奖票 🎫");
              $.dbsuc = true;
            } else $.dbsuc = false, console.log("叼了，翻倍失败！再接再厉！");
          } else {
            console.log(_0x18db5a.errMsg);
            $.dbsuc = false;
          }
          break;
        case "superRedBagHome":
          _0x18db5a.success ? ($.sceneStatus = _0x18db5a.data.sceneStatus, $.nextLeftTime = _0x18db5a.data.nextLeftTime) : console.log(_0x18db5a.errMsg);
          break;
        case "superRedBagDraw":
          if (_0x18db5a.success) {
            $.shakeLeftTime = _0x18db5a.data.shakeLeftTime;
            const {
              prizeDrawVo = ""
            } = _0x18db5a.data;
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
            } else console.log(_0xd270a);
          } else console.log(_0x18db5a.errMsg);
          break;
        case "startTask":
        case "turnHappyReceive":
        case "endTask":
          break;
        default:
          console.log(_0x3b61a7 + " -> " + _0xd270a);
      }
      if (typeof _0x18db5a == "object") {
        _0x18db5a.errorMessage && _0x18db5a.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
      }
    }
  } catch (_0x5136bd) {
    console.log(_0x3b61a7 + " " + _0x5136bd);
  }
}
function _0x1d08ad(_0x2d5ac6, _0x139a9f) {
  _0x139a9f = _0x139a9f + "&rfs=0000&x-api-eid-token=" + $.apitoken;
  let _0x7a289c = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/x-www-form-urlencoded",
    "Origin": "https://pro.m.jd.com",
    "Referer": "https://pro.m.jd.com/",
    "Cookie": _0x4c1e7b,
    "User-Agent": $.UA,
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "x-referer-page": "https://pro.m.jd.com/mall/active/3fcyrvLZALNPWCEDRvaZJVrzek8v/index.html",
    "request-from": "native",
    "x-rp-client": "h5_1.0.0"
  };
  return {
    "url": _0x2d5ac6,
    "headers": _0x7a289c,
    "timeout": 30000,
    "ciphers": _0x3b8618.cpstr,
    ...(_0x139a9f ? {
      "body": _0x139a9f
    } : {})
  };
}
async function _0x3fcd1c() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + _0x89b320(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function _0x89b320(_0x21f6f0) {
  _0x21f6f0 = _0x21f6f0 || 32;
  let _0x35c160 = "abcdef0123456789",
    _0xe91d81 = _0x35c160.length,
    _0x352ed4 = "";
  for (i = 0; i < _0x21f6f0; i++) {
    _0x352ed4 += _0x35c160.charAt(Math.floor(Math.random() * _0xe91d81));
  }
  return _0x352ed4;
}
function _0x596679(_0x2bd204) {
  if (typeof _0x2bd204 == "string") try {
    return JSON.parse(_0x2bd204);
  } catch (_0x55bd07) {
    console.log(_0x55bd07);
    $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
    return [];
  }
}
async function _0x440eb4() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x37e880 => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    let _0x2c9e25 = {
      "venderId": "" + $.joinVenderId + "",
      "shopId": "" + $.joinVenderId + "",
      "bindByVerifyCodeFlag": 1,
      "registerExtend": {},
      "writeChildFlag": 0,
      "channel": 406
    };
    $.shopactivityId == "" && delete _0x2c9e25.activityId;
    let _0x4981f5 = {
      "appId": "27004",
      "fn": "bindWithVender",
      "body": _0x2c9e25,
      "apid": "shopmember_m_jd_com",
      "ver": "9.2.0",
      "cl": "H5",
      "user": $.UserName,
      "code": 0,
      "ua": $.UA
    };
    _0x2c9e25 = await dyy.getbody(_0x4981f5);
    const _0x34f96a = {
      "url": "https://api.m.jd.com/client.action?" + _0x2c9e25 + "&uuid=88888",
      "headers": {
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "cookie": _0x4c1e7b,
        "origin": "https://shopmember.m.jd.com/",
        "user-agent": $.UA
      },
      "timeout": 30000
    };
    $.dget(_0x34f96a, async (_0x1eafdf, _0x1f1230, _0x2803e1) => {
      try {
        {
          _0x2803e1 = _0x2803e1 && _0x2803e1.match(/jsonp_.*?\((.*?)\);/) && _0x2803e1.match(/jsonp_.*?\((.*?)\);/)[1] || _0x2803e1;
          let _0x30e156 = $.toObj(_0x2803e1, _0x2803e1);
          if (_0x30e156 && typeof _0x30e156 == "object") {
            if (_0x30e156 && _0x30e156.success === true) {
              {
                console.log("    " + _0x30e156.message);
                $.errorJoinShop = _0x30e156.message;
                if (_0x30e156.result && _0x30e156.result.giftInfo) for (let _0x5f339d of _0x30e156.result.giftInfo.giftList) {
                  console.log("入会获得:" + _0x5f339d.discountString + _0x5f339d.prizeName + _0x5f339d.secondLineDesc);
                }
              }
            } else _0x30e156 && typeof _0x30e156 == "object" && _0x30e156.message ? ($.errorJoinShop = _0x30e156.message, console.log("" + (_0x30e156.message || ""))) : console.log(_0x2803e1);
          } else console.log(_0x2803e1);
        }
      } catch (_0x50252e) {
        $.logErr(_0x50252e, _0x1f1230);
      } finally {
        _0x37e880();
      }
    });
  });
}
async function _0x392dd7() {
  return new Promise(async _0x3c2755 => {
    {
      let _0x2b80e0 = {
          "venderId": $.joinVenderId,
          "payUpShop": true,
          "queryVersion": "10.5.2",
          "appid": "ef79a",
          "needSecurity": true,
          "bizId": "shop_view_app",
          "channel": 406
        },
        _0x173407 = {
          "appId": "ef79a",
          "fn": "getShopOpenCardInfo",
          "body": _0x2b80e0,
          "apid": "jd_shop_member",
          "ver": "9.2.0",
          "cl": "H5",
          "user": $.UserName,
          "code": 0,
          "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
        };
      _0x2b80e0 = await dyy.getbody(_0x173407);
      const _0x4c71e8 = {
        "url": "https://api.m.jd.com/client.action?" + _0x2b80e0 + "&uuid=88888",
        "headers": {
          "accept": "*/*",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "cookie": _0x4c1e7b,
          "origin": "https://shopmember.m.jd.com/",
          "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
        },
        "timeout": 60000
      };
      $.get(_0x4c71e8, async (_0x2942be, _0xabc589, _0x4eb87d) => {
        try {
          {
            _0x4eb87d = _0x4eb87d && _0x4eb87d.match(/jsonp_.*?\((.*?)\);/) && _0x4eb87d.match(/jsonp_.*?\((.*?)\);/)[1] || _0x4eb87d;
            let _0x5203be = $.toObj(_0x4eb87d, _0x4eb87d);
            if (_0x5203be && typeof _0x5203be == "object") {
              _0x5203be && _0x5203be.success == true && (console.log("去加入 -> " + (_0x5203be.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x5203be.result[0].interestsRuleList && _0x5203be.result[0].interestsRuleList[0] && _0x5203be.result[0].interestsRuleList[0].interestsInfo && _0x5203be.result[0].interestsRuleList[0].interestsInfo.activityId || "");
            } else console.log(_0x4eb87d);
          }
        } catch (_0x2d27eb) {
          $.logErr(_0x2d27eb, _0xabc589);
        } finally {
          _0x3c2755();
        }
      });
    }
  });
}
function _0x1fced0(_0x5bcd8a) {
  let _0x47c659 = {
      "url": "http://121.40.162.127:9000/bdy_h5",
      "body": JSON.stringify(_0x5bcd8a),
      "headers": {
        "Content-Type": "application/json"
      },
      "timeout": 10000
    },
    _0x23d4a5 = "";
  return new Promise(_0x3b3f92 => {
    $.post(_0x47c659, (_0x18bdda, _0x50442c, _0x3c7149) => {
      try {
        {
          if (_0x18bdda) {} else _0x3c7149 = JSON.parse(_0x3c7149), _0x3c7149.code == 200 ? _0x23d4a5 = _0x3c7149.data : $.log(_0x3c7149.msg);
        }
      } catch (_0x4e653c) {
        console.log(_0x4e653c, _0x50442c);
      } finally {
        _0x3b3f92(_0x23d4a5);
      }
    });
  });
}
function _0x418a60(_0x2726e8, _0x1d524d) {
  return Math.floor(Math.random() * (_0x1d524d - _0x2726e8)) + _0x2726e8;
}
function _0x5add71(_0x23cb6b = +new Date()) {
  var _0x9057f8 = new Date(_0x23cb6b + 28800000);
  return _0x9057f8.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function _0x5ee79c() {
  return new Promise(_0x454571 => {
    {
      const _0x13b186 = {
        "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
        "headers": {
          "Cookie": _0x4c1e7b,
          "referer": "https://h5.m.jd.com/",
          "User-Agent": $.UA
        },
        "timeout": 10000
      };
      $.get(_0x13b186, (_0x4f0927, _0x530b04, _0x1b9843) => {
        try {
          {
            if (_0x1b9843) {
              {
                _0x1b9843 = JSON.parse(_0x1b9843);
                if (_0x1b9843.islogin === "1") {} else _0x1b9843.islogin === "0" && ($.isLogin = false);
              }
            }
          }
        } catch (_0xf41776) {
          console.log(_0xf41776);
        } finally {
          _0x454571();
        }
      });
    }
  });
}

function Env(o, t) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((r, i) => { s.call(this, t, (t, e, s) => { t ? i(t) : r(e) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.logLevels = { debug: 0, info: 1, warn: 2, error: 3 }, this.logLevelPrefixs = { debug: "[DEBUG] ", info: "[INFO] ", warn: "[WARN] ", error: "[ERROR] " }, this.logLevel = "info", this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } getEnv() { return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0 } isNode() { return "Node.js" === this.getEnv() } isQuanX() { return "Quantumult X" === this.getEnv() } isSurge() { return "Surge" === this.getEnv() } isLoon() { return "Loon" === this.getEnv() } isShadowrocket() { return "Shadowrocket" === this.getEnv() } isStash() { return "Stash" === this.getEnv() } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null, ...s) { try { return JSON.stringify(t, ...s) } catch { return e } } getjson(t, e) { let s = e; if (this.getdata(t)) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(r => { this.get({ url: t }, (t, e, s) => r(s)) }) } runScript(a, o) { return new Promise(r => { let t = this.getdata("@chavy_boxjs_userCfgs.httpapi"); t = t && t.replace(/\n/g, "").trim(); var e = (e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout")) ? +e : 20, [s, i] = (e = o && o.timeout ? o.timeout : e, t.split("@")); this.post({ url: `http://${i}/v1/scripting/evaluate`, body: { script_text: a, mock_type: "cron", timeout: e }, headers: { "X-Key": s, Accept: "*/*" }, timeout: e }, (t, e, s) => r(s)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; this.fs = this.fs || require("fs"), this.path = this.path || require("path"); var t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), r = !s && this.fs.existsSync(e); if (!s && !r) return {}; r = s ? t : e; try { return JSON.parse(this.fs.readFileSync(r)) } catch (t) { return {} } } writedata() { var t, e, s, r, i; this.isNode() && (this.fs = this.fs || require("fs"), this.path = this.path || require("path"), t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), r = !(s = this.fs.existsSync(t)) && this.fs.existsSync(e), i = JSON.stringify(this.data), !s && r ? this.fs.writeFileSync(e, i) : this.fs.writeFileSync(t, i)) } lodash_get(t, e, s) { let r = t; for (const t of e.replace(/\[(\d+)\]/g, ".$1").split(".")) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, r, e) { return Object(t) === t && ((r = Array.isArray(r) ? r : r.toString().match(/[^.[\]]+/g) || []).slice(0, -1).reduce((t, e, s) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(r[s + 1]) >> 0 == +r[s + 1] ? [] : {}, t)[r[r.length - 1]] = e), t } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { var [, s, r] = /^@(.*?)\.(.*?)$/.exec(t); if (s = s ? this.getval(s) : "") try { const t = JSON.parse(s); e = t ? this.lodash_get(t, r, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { var [, r, i] = /^@(.*?)\.(.*?)$/.exec(e), a = this.getval(r), a = r ? "null" === a ? null : a || "{}" : "{}"; try { const e = JSON.parse(a); this.lodash_set(e, i, t), s = this.setval(JSON.stringify(e), r) } catch (e) { this.lodash_set(a = {}, i, t), s = this.setval(JSON.stringify(a), r) } } else s = this.setval(t, e); return s } getval(t) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.read(t); case "Quantumult X": return $prefs.valueForKey(t); case "Node.js": return this.data = this.loaddata(), this.data[t]; default: return this.data && this.data[t] || null } } setval(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.write(t, e); case "Quantumult X": return $prefs.setValueForKey(t, e); case "Node.js": return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0; default: return this.data && this.data[e] || null } } initGotEnv(t) { this.got = this.got || require("got"), this.cktough = this.cktough || require("tough-cookie"), this.ckjar = this.ckjar || new this.cktough.CookieJar, t && (t.headers = t.headers || {}, t) && (t.headers = t.headers || {}, void 0 === t.headers.cookie) && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar) } tmout() { return new Promise((t, e) => { this.tmoutId = setTimeout(() => { this.prms.cancel(), e({ message: "timemout", response: "" }) }, 5e4) }) } get(t, a = () => { }) { switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t), this.prms = this.got(t).on("redirect", (t, e) => { try { var s; t.headers["set-cookie"] && ((s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString()) && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar) } catch (t) { this.logErr(t) } }), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } post(t, a = () => { }) { var e = t.method ? t.method.toLocaleLowerCase() : "post"; switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[e](t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": t.method = e, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t); var { url: s, ...r } = t; this.prms = this.got[e](s, r), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } time(t, e = null) { var s, r = { "M+": (e = e ? new Date(e) : new Date).getMonth() + 1, "d+": e.getDate(), "H+": e.getHours(), "m+": e.getMinutes(), "s+": e.getSeconds(), "q+": Math.floor((e.getMonth() + 3) / 3), S: e.getMilliseconds() }; for (s in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), r) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[s] : ("00" + r[s]).substr(("" + r[s]).length))); return t } queryStr(e) { let s = ""; for (const r in e) { let t = e[r]; null != t && "" !== t && ("object" == typeof t && (t = JSON.stringify(t)), s += `${r}=${t}&`) } return s = s.substring(0, s.length - 1) } msg(t = o, e = "", s = "", r = {}) { var i, a = r => { const { $open: t, $copy: e, $media: i, $mediaMime: a } = r; switch (typeof r) { case void 0: return r; case "string": switch (this.getEnv()) { case "Surge": case "Stash": default: return { url: r }; case "Loon": case "Shadowrocket": return r; case "Quantumult X": return { "open-url": r }; case "Node.js": return }case "object": switch (this.getEnv()) { case "Surge": case "Stash": case "Shadowrocket": default: var o = {}, s = r.openUrl || r.url || r["open-url"] || t; if (s && Object.assign(o, { action: "open-url", url: s }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(o, { action: "clipboard", text: s }), i) { let t, e, s; if (i.startsWith("http")) t = i; else if (i.startsWith("data:")) { const [r] = i.split(";"), [, a] = i.split(","); e = a, s = r.replace("data:", "") } else e = i, s = (t => { var e, s = { JVBERi0: "application/pdf", R0lGODdh: "image/gif", R0lGODlh: "image/gif", iVBORw0KGgo: "image/png", "/9j/": "image/jpg" }; for (e in s) if (0 === t.indexOf(e)) return s[e]; return null })(i); Object.assign(o, { "media-url": t, "media-base64": e, "media-base64-mime": a ?? s }) } return Object.assign(o, { "auto-dismiss": r["auto-dismiss"], sound: r.sound }), o; case "Loon": { const e = {}; (s = r.openUrl || r.url || r["open-url"] || t) && Object.assign(e, { openUrl: s }); var n = r.mediaUrl || r["media-url"]; return (n = i?.startsWith("http") ? i : n) && Object.assign(e, { mediaUrl: n }), console.log(JSON.stringify(e)), e } case "Quantumult X": { const a = {}; (o = r["open-url"] || r.url || r.openUrl || t) && Object.assign(a, { "open-url": o }); n = r["media-url"] || r.mediaUrl; return (n = i?.startsWith("http") ? i : n) && Object.assign(a, { "media-url": n }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(a, { "update-pasteboard": s }), console.log(JSON.stringify(a)), a } case "Node.js": return }default: return } }; if (!this.isMute) switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: $notification.post(t, e, s, a(r)); break; case "Quantumult X": $notify(t, e, s, a(r)); break; case "Node.js": }this.isMuteLog || ((i = ["", "==============📣系统通知📣=============="]).push(t), e && i.push(e), s && i.push(s), console.log(i.join("\n")), this.logs = this.logs.concat(i)) } debug(...t) { this.logLevels[this.logLevel] <= this.logLevels.debug && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.debug + t.map(t => t ?? String(t)).join(this.logSeparator))) } info(...t) { this.logLevels[this.logLevel] <= this.logLevels.info && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.info + t.map(t => t ?? String(t)).join(this.logSeparator))) } warn(...t) { this.logLevels[this.logLevel] <= this.logLevels.warn && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.warn + t.map(t => t ?? String(t)).join(this.logSeparator))) } error(...t) { this.logLevels[this.logLevel] <= this.logLevels.error && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.error + t.map(t => t ?? String(t)).join(this.logSeparator))) } log(...t) { 0 < t.length && (this.logs = [...this.logs, ...t]), console.log(t.map(t => t ?? String(t)).join(this.logSeparator)) } logErr(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: this.log("", `❗️${this.name}, 错误!`, t); break; case "Node.js": this.log("", `❗️${this.name}, 错误!`, void 0 !== t.message ? t.message : t) } } wait(e) { return new Promise(t => setTimeout(t, e)) } done(t = {}) { var e = ((new Date).getTime() - this.startTime) / 1e3; switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: $done(t); break; case "Node.js": process.exit(1) } } }(o, t) }