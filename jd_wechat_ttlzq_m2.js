/*
小程序-超级省2
35 4,16 * * * jd_wechat_ttlzq_m2.js
*/
const $ = new Env("小程序超级省_m2");

const bdy_0x313777 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x355033 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x572ad8 = require("./USER_AGENTS");
let bdy_0x4d9fc9 = [],
  bdy_0x10d366 = "";
const bdy_0x12065d = require("./function/dylano.js");
if ($.isNode()) {
  var bdy_0x47c769 = new Buffer.from("44796c616e", "Hex").toString("utf8");
  Object.keys(bdy_0x313777).forEach(_0x2b1af7 => {
    bdy_0x4d9fc9.push(bdy_0x313777[_0x2b1af7]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  let bdy_0x514181 = $.getdata("CookiesJD") || "[]";
  bdy_0x514181 = JSON.parse(bdy_0x514181);
  bdy_0x4d9fc9 = bdy_0x514181.map(_0x2d31fe => _0x2d31fe.cookie);
  bdy_0x4d9fc9.reverse();
  bdy_0x4d9fc9.push(...[$.getdata("CookieJD2"), $.getdata("CookieJD")]);
  bdy_0x4d9fc9.reverse();
  bdy_0x4d9fc9 = bdy_0x4d9fc9.filter(_0x235683 => !!_0x235683);
}
let bdy_0xa1bb8f = true;
!(async () => {
  if (!bdy_0x4d9fc9[0]) {
    const _0x1149be = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x1149be);
    return;
  }
  console.log("\nTG问题反馈：https://t.me/dylan_jdpro");
  console.log("入口：微信小程序--超级省");
  const _0x3f63f1 = require("child_process").exec;
  _0x3f63f1("grep " + bdy_0x47c769 + " jdCookie.js", function (_0x50be15, _0x52c70e, _0x3adac9) {
    !_0x52c70e && (bdy_0xa1bb8f = false);
  });
  $.UA = " Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.42(0x18002a32) NetType/WIFI Language/zh_CN";
  await $.wait(100);
  for (let _0x62d3ef = 0; _0x62d3ef < bdy_0x4d9fc9.length; _0x62d3ef++) {
    {
      if (bdy_0x4d9fc9[_0x62d3ef]) {
        bdy_0x10d366 = bdy_0x4d9fc9[_0x62d3ef];
        $.UserName = decodeURIComponent(bdy_0x10d366.match(/pt_pin=(.+?);/) && bdy_0x10d366.match(/pt_pin=(.+?);/)[1]);
        $.index = _0x62d3ef + 1;
        $.isLogin = true;
        $.nickName = "";
        console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
        if (!$.isLogin) {
          const _0xe33c14 = {
            "open-url": "https://bean.m.jd.com/bean/signIndex.action"
          };
          $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0xe33c14);
          $.isNode() && (await bdy_0x355033.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
          continue;
        }
        await bdy_0x3b5e59();
        if($.index % 10 === 0){
          console.log("为了帝国第"+$.index+"个号休息10分钟-->"+new Date());
          await $.wait(600000); 
        }else{
          let n = parseInt(Math.random() * 1000 + 10000, 10);
          console.log("为了可持续发展随机休息"+n);
          await $.wait(n); 
        }
      }
    }
  }
})().catch(_0x1b9f0e => {
  console.log("", "❌ " + $.name + ", 失败! 原因: " + _0x1b9f0e + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0x3b5e59() {
  try {
    $.taskList = [];
    await bdy_0x5a1c52();
    if (!$.isLogin) {
      console.log("未登录");
      return;
    }
    await $.wait(500);
    if (bdy_0xa1bb8f || 1) {
      if ($.signInfo && Object.keys($.signInfo).length !== 0) {
        let _0x1b592c = $.signInfo.signTaskList.find(_0x32e10d => _0x32e10d.currentDay);
        if (_0x1b592c.signStatus == 0) {
          console.log("\n去签到... ");
          await bdy_0x185166($.signscene);
          await $.wait(parseInt(Math.random() * 500 + 500, 10));
        } else {
          _0x1b592c.signStatus == 1 && console.log("\n今日已签到完成，已签" + $.signInfo.signDays + "天");
        }
      }
    }
    console.log("\n去做任务...");
    $.runList = [];
    for (let _0x2d1434 of $.taskList) {
      if (_0x2d1434.type == 6 || _0x2d1434.type == 3) {
        if (_0x2d1434.status === 1) {
          await bdy_0x2d172b(_0x2d1434.type, _0x2d1434.scanAssignmentId);
          await $.wait(1000);
          continue;
        } else {
          continue;
        }
      }
      if (_0x2d1434.status === 0) {
        console.log("开始 ---" + _0x2d1434.title);
        await bdy_0x35ecca(_0x2d1434.itemId, _0x2d1434.scanAssignmentId, 1, _0x2d1434.type);
        $.runList.push({
          startTime: Date.now(),
          waitTime: _0x2d1434.times * 1000,
          scanAssignmentId: _0x2d1434.scanAssignmentId,
          itemId: _0x2d1434.itemId,
          tupe: _0x2d1434.type
        });
        await $.wait(2000);
      } else {
        _0x2d1434.status === 1 ? (await bdy_0xe441e3(_0x2d1434.scanAssignmentId, _0x2d1434.type), await $.wait(2000)) : console.log(_0x2d1434.title + "---已完成");
      }
    }
    for (let _0x10fa09 of $.runList) {
      await $.wait(_0x10fa09.waitTime - (Date.now() - _0x10fa09.startTime));
      await bdy_0x35ecca(_0x10fa09.itemId, _0x10fa09.scanAssignmentId, 0, _0x10fa09.type);
      console.log("领取奖励...");
      await $.wait(1000);
      await bdy_0xe441e3(_0x10fa09.scanAssignmentId, _0x10fa09.type);
      await $.wait(1000);
    }
    $.runList = [];
    await $.wait(2000);
  } catch (_0x4bf2b2) {
    $.logErr(_0x4bf2b2);
  }
}
async function bdy_0x185166(_0x241131) {
  let _0x594948 = "mini_doSign";
  let _0x6b5284 = {
    itemId: "1"
  };
  let _0x59d711 = {
    appId: "60d61",
    fn: _0x594948,
    body: _0x6b5284,
    apid: "hot_channel",
    ver: "9.16.240",
    cl: "apple",
    user: $.UserName,
    code: 1,
    ua: $.UA
  };
  _0x6b5284 = await bdy_0x12065d.getbody(_0x59d711);
  if (!_0x6b5284) {
    return;
  }
  return new Promise(async _0x20ce52 => {
    const _0x38819d = {
      Host: "api.m.jd.com",
      Referer: "https://servicewechat.com/wx91d27dbf599dff74/749/page-frame.html",
      "User-Agent": $.UA,
      cookie: bdy_0x10d366,
      wqreferer: "http://wq.jd.com/wxapp/pages/marketing/entry_task/index",
      "x-rp-client": "mini_2.0.0",
      "accept-language": "zh-CN,zh;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
      "x-referer-page": "/pages/marketing/entry_task/index",
      "x-referer-package": "wx91d27dbf599dff74",
      accept: "application/json, text/plain, */*"
    };
    const _0x3d6b2b = {
      url: "https://api.m.jd.com/mini_doSign?" + _0x6b5284,
      headers: _0x38819d
    };
    $.post(_0x3d6b2b, (_0x38d565, _0x1e6691, _0x479972) => {
      {
        try {
          _0x38d565 ? ($.logErr(_0x38d565), console.log("dailysign api请求失败，请检查网路重试")) : (_0x479972 = JSON.parse(_0x479972), _0x479972.subCode == 0 ? console.log("签到成功: " + _0x479972.data.signDays + "天, " + _0x479972.data.toastMsg) : console.log("签到失败：" + JSON.stringify(_0x479972) + "\n"));
        } catch (_0x420224) {
          $.logErr(_0x420224);
        } finally {
          _0x20ce52();
        }
      }
    });
  });
}
async function bdy_0x2d172b(_0x52bdc7, _0x322171) {
  let _0x31f3cc = "miniTask_getDrainageTaskReward";
  let _0x54ac12 = {
    rewardAssignmentId: _0x322171
  };
  let _0x5ccbdc = {
    appId: "60d61",
    fn: _0x31f3cc,
    body: _0x54ac12,
    apid: "hot_channel",
    ver: "9.16.240",
    cl: "apple",
    user: $.UserName,
    code: 1,
    ua: $.UA
  };
  _0x54ac12 = await bdy_0x12065d.getbody(_0x5ccbdc);
  if (!_0x54ac12) {
    return;
  }
  return new Promise(async _0x3e2582 => {
    const _0x481d60 = {
      Host: "api.m.jd.com",
      Referer: "https://servicewechat.com/wx91d27dbf599dff74/749/page-frame.html",
      wqreferer: "http://wq.jd.com/wxapp/pages/yixiaoshida/index/index",
      "User-Agent": $.UA,
      cookie: bdy_0x10d366,
      "x-rp-client": "mini_2.0.0",
      "accept-language": "zh-CN,zh;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
      "x-referer-page": "/pages/marketing/entry_task/index",
      "x-referer-package": "wx91d27dbf599dff74",
      accept: "application/json, text/plain, */*"
    };
    const _0x36c57d = {
      url: "https://api.m.jd.com/miniTask_getDrainageTaskReward?" + _0x54ac12 + "&clientType=wxapp&loginType=0&_ste=2",
      headers: _0x481d60
    };
    $.post(_0x36c57d, (_0x525937, _0xbae26d, _0x1d391f) => {
      try {
        if (_0x525937) {
          $.logErr(_0x525937);
          console.log("taskone api请求失败，请检查网路重试");
        } else {
          _0x1d391f = JSON.parse(_0x1d391f);
          if (_0x1d391f.subCode == 0) {
            console.log("指定入口获得: " + _0x1d391f.data.rewardAmount + "省钱币");
          } else {
            console.log("失败：" + JSON.stringify(_0x1d391f) + "\n");
          }
        }
      } catch (_0x1ec221) {
        $.logErr(_0x1ec221);
      } finally {
        _0x3e2582();
      }
    });
  });
}
switch ($.type) {
  case "nb":
    const bdy_0x25561f = {
      nb: nb
    };
    _0xf1f6le = bdy_0x25561f;
    break;
}
async function bdy_0x5a1c52() {
  let _0x31713f = "miniTask_hbChannelPage";
  let _0x3e119c = {
    source: "task",
    businessSource: "cjs"
  };
  let _0x35c597 = {
    appId: "60d61",
    fn: _0x31713f,
    body: _0x3e119c,
    apid: "hot_channel",
    ver: "9.16.240",
    cl: "apple",
    user: $.UserName,
    code: 1,
    ua: $.UA
  };
  _0x3e119c = await bdy_0x12065d.getbody(_0x35c597);
  if (!_0x3e119c) {
    return;
  }
  return new Promise(async _0x5c6a0b => {
    const _0x21571c = {
      Host: "api.m.jd.com",
      Referer: "https://servicewechat.com/wx91d27dbf599dff74/749/page-frame.html",
      "User-Agent": $.UA,
      cookie: bdy_0x10d366,
      wqreferer: "http://wq.jd.com/wxapp/pages/marketing/entry_task/index",
      "x-rp-client": "mini_2.0.0",
      "accept-language": "zh-CN,zh;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
      "x-referer-page": "/pages/marketing/entry_task/index",
      "x-referer-package": "wx91d27dbf599dff74",
      accept: "application/json, text/plain, */*"
    };
    const _0x3be46b = {
      url: "https://api.m.jd.com/miniTask_hbChannelPage",
      body: "loginType=2&clientType=wxapp&" + _0x3e119c,
      headers: _0x21571c
    };
    $.post(_0x3be46b, (_0x528739, _0x32e455, _0x49691a) => {
      {
        try {
          _0x528739 ? ($.logErr(_0x528739), console.log("MiniTask_ChannelPage 请求失败，请检查网路重试")) : (_0x49691a = JSON.parse(_0x49691a), _0x49691a.subCode == 0 ? ($.isLogin = _0x49691a.data.hasLogin, $.taskList = _0x49691a.data.scanTaskList, $.signscene = _0x49691a.data?.["userSignScene"], $.taskone = $.taskList[0]?.["scene"] ? $.taskList[0] : "", $.exchangeTaskList = _0x49691a.data.exchangeTaskList || [], $.signInfo = _0x49691a.data.signInfo || {}, $.exchangeTaskList.length != 0 && (console.log("兑换列表："), $.exchangeTaskList.forEach(_0x5407ab => {
            console.log(_0x5407ab.rewardName + "---需" + _0x5407ab.point + "省钱币----" + (_0x5407ab.status == 0 ? "有库存" : "无库存"));
          })), console.log("\n当前省钱币余额：" + _0x49691a.data.point), _0x5c6a0b($.taskList)) : console.log(JSON.stringify(_0x49691a)));
        } catch (_0x59133c) {
          $.logErr(_0x59133c);
        } finally {
          {
            _0x5c6a0b();
          }
        }
      }
    });
  });
}
async function bdy_0xfd1f03(_0x18d18c) {
  let _0x47be3e = "MiniTask_ChannelPage";
  let _0x58dcd3 = {
    source: "task",
    versionFlag: "new"
  };
  let _0xe40535 = {
    appId: "60d61",
    fn: _0x47be3e,
    body: _0x58dcd3,
    apid: "hot_channel",
    ver: "9.16.240",
    cl: "apple",
    user: $.UserName,
    code: 1,
    ua: $.UA
  };
  _0x58dcd3 = await bdy_0x12065d.getbody(_0xe40535);
  if (!_0x58dcd3) {
    return;
  }
  let _0x10a09f = bdy_0x10d366.match(/pt_pin=(.+?);/)[1];
  return new Promise(async _0x981bdd => {
    const _0x35588d = {
      Host: "api.m.jd.com",
      Referer: "https://servicewechat.com/wx91d27dbf599dff74/749/page-frame.html",
      "User-Agent": $.UA,
      cookie: bdy_0x10d366 + ("wxapp_type=1;wxapp_version=9.16.240;wxapp_scene=" + _0x18d18c + ";cid=5;gender=0;province=;city=;country=;nickName=" + _0x10a09f + ";wxNickName=" + _0x10a09f),
      wqreferer: "http://wq.jd.com/wxapp/pages/marketing/entry_task/index",
      "x-rp-client": "mini_2.0.0",
      "accept-language": "zh-CN,zh;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
      "x-referer-page": "/pages/marketing/entry_task/index",
      "x-referer-package": "wx91d27dbf599dff74",
      accept: "application/json, text/plain, */*"
    };
    const _0x2f429a = {
      url: "https://api.m.jd.com/MiniTask_ChannelPage?loginType=0&clientType=wxapp&" + _0x58dcd3,
      headers: _0x35588d
    };
    $.post(_0x2f429a, (_0x3b7c80, _0x1916dd, _0x3b51e4) => {
      {
        try {
          {
            if (_0x3b7c80) {
              $.logErr(_0x3b7c80);
              console.log("querySignList 请求失败，请检查网路重试");
            } else {
              {
                _0x3b51e4 = JSON.parse(_0x3b51e4);
                if (!(_0x3b51e4.subCode == 0)) {
                  console.log(JSON.stringify(_0x3b51e4));
                }
              }
            }
          }
        } catch (_0x22097c) {
          $.logErr(_0x22097c);
        } finally {
          _0x981bdd();
        }
      }
    });
  });
}
async function bdy_0x35ecca(_0x1a01b1, _0x5a5df4, _0x542e70, _0x1cb4c9) {
  let _0x2a1d60 = "MiniTask_ScanTask";
  let _0x3cb409 = {
    itemId: _0x1a01b1,
    scanAssignmentId: _0x5a5df4,
    actionType: _0x542e70,
    type: _0x1cb4c9
  };
  let _0x15def9 = {
    appId: "60d61",
    fn: _0x2a1d60,
    body: _0x3cb409,
    apid: "hot_channel",
    ver: "9.16.240",
    cl: "apple",
    user: $.UserName,
    code: 1,
    ua: $.UA
  };
  _0x3cb409 = await bdy_0x12065d.getbody(_0x15def9);
  if (!_0x3cb409) {
    return;
  }
  return new Promise(async _0x5896d1 => {
    const _0x46ed37 = {
      Host: "api.m.jd.com",
      Referer: "https://servicewechat.com/wx91d27dbf599dff74/738/page-frame.html",
      "User-Agent": $.UA,
      cookie: bdy_0x10d366,
      wqreferer: "http://wq.jd.com/wxapp/pages/marketing/entry_task/index",
      "x-rp-client": "mini_2.0.0",
      "accept-language": "zh-CN,zh;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
      "x-referer-page": "/pages/marketing/entry_task/index",
      "x-referer-package": "wx91d27dbf599dff74",
      accept: "application/json, text/plain, */*"
    };
    const _0x18b393 = {
      url: "https://api.m.jd.com/MiniTask_ScanTask",
      body: "loginType=2&clientType=wxapp&" + _0x3cb409,
      headers: _0x46ed37
    };
    $.post(_0x18b393, async (_0x40b78a, _0x28eaf6, _0x3a5cab) => {
      try {
        {
          if (_0x40b78a) {
            $.logErr(_0x40b78a);
            console.log("dotask 请求失败，请检查网路重试");
          } else {
            {
              if (_0x3a5cab.includes("火爆")) {
                await $.wait(2000);
                await bdy_0x35ecca(_0x1a01b1, _0x5a5df4, _0x542e70, _0x1cb4c9);
                return;
              }
              _0x3a5cab && (_0x3a5cab = JSON.parse(_0x3a5cab), _0x3a5cab.subCode === 0 ? _0x1cb4c9 ? "" : console.log("任务完成！") : console.log(_0x3a5cab.message));
            }
          }
        }
      } catch (_0x254552) {
        $.logErr(_0x254552);
      } finally {
        _0x5896d1();
      }
    });
  });
}
async function bdy_0xe441e3(_0x4eee8d, _0x150096) {
  let _0x37bb1c = "MiniTask_ScanReward";
  let _0x3aef6d = {
    scanAssignmentId: _0x4eee8d,
    type: _0x150096
  };
  let _0xec7cc7 = {
    appId: "60d61",
    fn: _0x37bb1c,
    body: _0x3aef6d,
    apid: "hot_channel",
    ver: "9.16.240",
    cl: "apple",
    user: $.UserName,
    code: 1,
    ua: $.UA
  };
  _0x3aef6d = await bdy_0x12065d.getbody(_0xec7cc7);
  if (!_0x3aef6d) {
    return;
  }
  return new Promise(async _0x2ca6a2 => {
    const _0x2802ec = {
      Host: "api.m.jd.com",
      Referer: "https://servicewechat.com/wx91d27dbf599dff74/749/page-frame.html",
      "User-Agent": $.UA,
      cookie: bdy_0x10d366,
      wqreferer: "http://wq.jd.com/wxapp/pages/marketing/entry_task/index",
      "x-rp-client": "mini_2.0.0",
      "accept-language": "zh-CN,zh;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
      "x-referer-page": "/pages/marketing/entry_task/index",
      "x-referer-package": "wx91d27dbf599dff74",
      accept: "application/json, text/plain, */*"
    };
    const _0x45d550 = {
      url: "https://api.m.jd.com/MiniTask_ScanReward",
      body: "loginType=2&clientType=wxapp&" + _0x3aef6d,
      headers: _0x2802ec
    };
    $.post(_0x45d550, async (_0x3f9c84, _0x3de2b3, _0x6b92f8) => {
      try {
        if (_0x3f9c84) {
          $.logErr(_0x3f9c84);
          console.log("reward 请求失败，请检查网路重试");
        } else {
          if (_0x6b92f8.includes("火爆")) {
            await $.wait(2000);
            await bdy_0xe441e3(_0x4eee8d, _0x150096);
            return;
          }
          _0x6b92f8 && (_0x6b92f8 = JSON.parse(_0x6b92f8), _0x6b92f8.subCode === 0 ? console.log("获得" + _0x6b92f8.data[0].discount + "省钱币！") : console.log(_0x6b92f8.message));
        }
      } catch (_0x50b60d) {
        $.logErr(_0x50b60d);
      } finally {
        _0x2ca6a2();
      }
    });
  });
}
function bdy_0x4450e9() {
  return new Promise(async _0x5f0959 => {
    const _0x179798 = {
      url: "https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2",
      headers: {
        Accept: "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        Connection: "keep-alive",
        Cookie: bdy_0x10d366,
        Referer: "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
        "User-Agent": $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require("./USER_AGENTS").USER_AGENT : $.getdata("JDUA") ? $.getdata("JDUA") : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"
      }
    };
    $.post(_0x179798, (_0x1b59c9, _0x4b161f, _0x2d1c0d) => {
      try {
        if (_0x1b59c9) {
          console.log("" + JSON.stringify(_0x1b59c9));
          console.log($.name + " API请求失败，请检查网路重试");
        } else {
          if (_0x2d1c0d) {
            _0x2d1c0d = JSON.parse(_0x2d1c0d);
            if (_0x2d1c0d.retcode === 13) {
              $.isLogin = false;
              return;
            }
            _0x2d1c0d.retcode === 0 ? $.nickName = _0x2d1c0d.base && _0x2d1c0d.base.nickname || $.UserName : $.nickName = $.UserName;
          } else {
            console.log("京东服务器返回空数据");
          }
        }
      } catch (_0x1b799b) {
        {
          $.logErr(_0x1b799b, _0x4b161f);
        }
      } finally {
        _0x5f0959();
      }
    });
  });
}

function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }