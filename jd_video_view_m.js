/*
1 1 1 1 * jd_video_view_m.js
 */
const $ = new Env('看视频赚现金-浏览_m');

const _0x107406 = $.isNode() ? require("./sendNotify") : "",
  _0x2b3634 = $.isNode() ? require("./jdCookie.js") : "",
  _0x465a84 = require("./function/dylans.js"),
  _0x575f19 = require("./function/dylanx.js"),
  _0x56abe7 = require("./USER_AGENTS");
let _0x118eb0 = true;
if (process.env.DY_PROXY) try {
  require("https-proxy-agent");
  ccc = require("./function/proxy.js");
  $.dget = ccc.intoRequest($.get.bind($));
  $.dpost = ccc.intoRequest($.post.bind($));
} catch {
  $.log("未安装https-proxy-agent依赖，无法启用代理");
  $.dget = $.get;
  $.dpost = $.post;
} else $.dpost = $.post, $.dget = $.get;
let _0x2112f4 = [],
  _0x1a7cb8 = "",
  _0x428e7a = "";
if ($.isNode()) {
  Object.keys(_0x2b3634).forEach(_0x2f5ee4 => {
    _0x2112f4.push(_0x2b3634[_0x2f5ee4]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else _0x2112f4 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0xd4c2ac($.getdata("CookiesJD") || "[]").map(_0x59f71a => _0x59f71a.cookie)].filter(_0x2db4f5 => !!_0x2db4f5);
!(async () => {
  if (!_0x2112f4[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  $.vdata = {};
  $.aidlist = [];
  console.log("每个账号差不多30分钟，无错误一次就好");
  $.WatchList = [{
    "id": 424925053,
    "jsLabel": "2SEwmbG6EXyaxwKQlHAtGT0Nel2BQWrmt5VYyuK5dMI67sudeG1g/ar+erJnNDJ8fT6QiBJP2/0Tt4qT/WOKDpg1c00DvZYxDlBQ3qDALV/xd/WL8V1jkFwpeZaliU5FByJdU0jEbxJQkR8IwXCb9g=="
  }, {
    "id": 424925053,
    "jsLabel": "/hUggxjJ5ReiEBsfeDSZcD0Nel2BQWrmt5VYyuK5dMI67sudeG1g/ar+erJnNDJ8fT6QiBJP2/0Tt4qT/WOKDpg1c00DvZYxDlBQ3qDALV/xd/WL8V1jkFwpeZaliU5FByJdU0jEbxJQkR8IwXCb9g=="
  }, {
    "id": 444637611,
    "jsLabel": "FUzY1rvCNsftw2lBU4YA7T0Nel2BQWrmt5VYyuK5dMI67sudeG1g/ar+erJnNDJ8fT6QiBJP2/0Tt4qT/WOKDpg1c00DvZYxDlBQ3qDALV/xd/WL8V1jkFwpeZaliU5FByJdU0jEbxJQkR8IwXCb9g=="
  }, {
    "id": 448912397,
    "jsLabel": "wQIWzfSmTMbYozE761Uy0D0Nel2BQWrmt5VYyuK5dMI67sudeG1g/ar+erJnNDJ8fT6QiBJP2/0Tt4qT/WOKDpg1c00DvZYxDlBQ3qDALV/xd/WL8V1jkFwpeZaliU5FByJdU0jEbxJQkR8IwXCb9g=="
  }, {
    "id": 482838269,
    "jsLabel": "6eprQn2rGCzy32jmcEEouj0Nel2BQWrmt5VYyuK5dMI67sudeG1g/ar+erJnNDJ8fT6QiBJP2/0Tt4qT/WOKDpg1c00DvZYxDlBQ3qDALV/xd/WL8V1jkFwpeZaliU5FByJdU0jEbxJQkR8IwXCb9g=="
  }];
  for (let _0x65d192 = 0; _0x65d192 < _0x2112f4.length; _0x65d192++) {
    if (_0x2112f4[_0x65d192]) {
      try {
        _0x1a7cb8 = _0x2112f4[_0x65d192];
        $.UserName = decodeURIComponent(_0x1a7cb8.match(/pt_pin=([^; ]+)(?=;?)/) && _0x1a7cb8.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.index = _0x65d192 + 1;
        $.isLogin = true;
        $.nickName = "";
        $.cointotal = 0;
        $.vdata[$.UserName] = [];
        $.nojpNum = 0;
        $.taskStatus = false;
        $.hasNext = true;
        $.UA = _0x56abe7.UARAM ? _0x56abe7.UARAM() : _0x56abe7.USER_AGENT;
        console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
        await _0x4c4e2b();
        if (!$.isLogin) {
          $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
            "open-url": "https://bean.m.jd.com/bean/signIndex.action"
          });
          $.isNode() && (await _0x107406.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
          continue;
        }
        if ($.taskStatus) {
          console.log("该账号已完成，明日再来！");
          continue;
        }
        await _0x2c5e19();
        let num = 1;
        for (let _0xed825a of Array(50)) {
          for (let _0x22e235 of $.WatchList) {
            if (!$.hasNext) {
              console.log("今日已完成看视频得金币");
              break;
            }
            console.log("第" + num + "次开始，20次后结束");
			      if(num > 20)break;
			      num++;
            if ($.nojpNum > 4) break;
            await _0x2699ea(_0x22e235.id, _0x22e235.jsLabel);
            await $.wait(parseInt(Math.random() * 500 + 5000, 10));
            await _0x2699ea(_0x22e235.id, _0x22e235.jsLabel);
            await $.wait(parseInt(Math.random() * 500 + 5000, 10));
          }
          if ($.nojpNum > 4) break;
          if (!$.hasNext) break;
          if(num > 20)break;
          await $.wait(parseInt(Math.random() * 500 + 5000, 10));
        }
      } catch (_0x22fa40) {
        console.log(_0x22fa40);
      }
      console.log("本次浏览获取" + $.cointotal + "个金币");
      await _0x3e71d9();
      await $.wait(parseInt(Math.random() * 500 + 1000, 10));
      await _0x49657f();
      await $.wait(parseInt(Math.random() * 500 + 2000, 10));
    }
  }
})().catch(_0x5da369 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x5da369 + "!", "");
}).finally(() => {
  $.done();
});
async function _0x307f9e() {
  let _0x1b0a04 = {
    "url": "https://pro.m.jd.com/mall/active/8WYa8CGWvkB5b3EC9TcyAbAobeo/index.html",
    "headers": {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
  };
  return new Promise(async _0x40beb6 => {
    $.get(_0x1b0a04, async (_0x37c429, _0x458c3d, _0x191673) => {
      try {
        if (_0x37c429) console.log("" + JSON.stringify(_0x37c429)), console.log("请求失败，请检查网路重试");else {
          let _0xcc0669 = _0x191673.match(/"scanTaskCode(?:_\d+)*":"(\w+)"/g),
            _0x3c5b83 = _0x191673.match(/"signInTaskCode(?:_\d+)*":"(\w+)"/g),
            _0x4efea1 = new Set([..._0xcc0669, ..._0x3c5b83]);
          for (let _0x5ef872 of Array.from(_0x4efea1)) {
            _0x5ef872 = _0x5ef872.replace(/"/g, "");
            let _0x3bf303 = _0x5ef872.split(":"),
              _0x260858 = _0x3bf303[0].split("_");
            if (_0x5ef872.includes("scanTaskCode")) $.aidlist.push({
              "type": "20",
              "assignmentId": _0x3bf303[1],
              "scanTaskCodeIndex": _0x260858 && _0x260858.length > 1 ? _0x260858[1] : "0",
              "activitySource": "1",
              "realClient": "ios"
            });else _0x5ef872.includes("signInTaskCode") && $.aidlist.push({
              "type": "21",
              "assignmentId": _0x3bf303[1],
              "activitySource": "1",
              "realClient": "ios"
            });
          }
        }
      } catch (_0x3ad3ac) {
        $.logErr(_0x3ad3ac, _0x458c3d);
      } finally {
        _0x40beb6(_0x191673);
      }
    });
  });
}
async function _0x49657f() {
  let _0x16ba0a = {
      "activitySource": "1"
    },
    _0x362ec1 = {
      "appId": "7f9c4",
      "functionId": "videoHbCw_homePage",
      "body": _0x16ba0a,
      "appid": "video-redbag-h5",
      "clientVersion": $.UA.split(";")[2],
      "client": "wh5",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x16ba0a = await _0x465a84.getbody(_0x362ec1);
  if (!_0x16ba0a) return;
  return new Promise(async _0x1f8fa3 => {
    $.dpost(_0x13eb07("videoHbCw_homePage", _0x16ba0a), async (_0x303e20, _0x17fd00, _0x53fe60) => {
      try {
        if (_0x303e20) console.log("" + JSON.stringify(_0x303e20)), console.log("videoHbCw_homePage 请求失败，请检查网路重试");else {
          _0x53fe60 = JSON.parse(_0x53fe60);
          if (_0x53fe60.code == 0) {
            console.log("现金总计：" + _0x53fe60.data.cashBalanceFloor.amount);
            for (let _0x329974 of _0x53fe60.data.cwCardFloor.cards.reverse()) {
              _0x329974.topDesc == "已连续来访0天" && (await _0x4c4e2b());
              if (_0x329974.cwStatus == 0 && _0x53fe60.data.cashBalanceFloor.amount >= _0x329974.amountStr) {
                console.log("有可提现的，去提现...");
                await _0x4f54da(_0x329974.bizTraceId, _0x329974.amountStr);
                break;
              }
            }
          } else console.log(_0x53fe60.message);
        }
      } catch (_0x322401) {
        $.logErr(_0x322401, _0x17fd00);
      } finally {
        _0x1f8fa3(_0x53fe60);
      }
    });
  });
}
async function _0x4c4e2b() {
  let _0x253f8e = {};
  _0x253f8e = await _0x575f19.getbody("videoHb_newCustomerHbLayer", _0x253f8e, "12.5.0", 0);
  if (!_0x253f8e) return;
  let _0xc5523b = {
    "url": "https://api.m.jd.com/client.action",
    "body": "functionId=videoHb_newCustomerHbLayer&" + _0x253f8e,
    "headers": {
      "Host": "api.m.jd.com",
      "accept": "application/json, text/plain, */*",
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": $.UA,
      "Cookie": _0x1a7cb8
    }
  };
  return new Promise(async _0x1e7e50 => {
    $.dpost(_0xc5523b, async (_0xdcd10, _0x197814, _0x467f51) => {
      try {
        _0xdcd10 ? (console.log("" + JSON.stringify(_0xdcd10)), console.log("videoHb_newCustomerHbLayer 请求失败，请检查网路重试")) : (_0x467f51 = JSON.parse(_0x467f51), _0x467f51.data ? (_0x467f51.data?.["popAlertInfo"] && console.log("获得新客红包：", _0x467f51.data.popAlertInfo.hbAmount), $.taskStatus = _0x467f51.data?.["layerGoldCoinCapsuleInfo"]?.["taskStatus"]) : (console.log(_0x467f51.message), _0x467f51.message.includes("登录") && ($.isLogin = false)));
      } catch (_0x18b8a3) {
        $.logErr(_0x18b8a3, _0x197814);
      } finally {
        _0x1e7e50(_0x467f51);
      }
    });
  });
}
async function _0x2699ea(_0x2d4cee, _0x1b41c5) {
  let _0x3cbc4a = {
    "contentId": _0x2d4cee,
    "jsLabel": _0x1b41c5,
    "playType": "163"
  };
  _0x3cbc4a = await _0x575f19.getbody("videoHbGoldCoin_done", _0x3cbc4a, "", 0);
  if (!_0x3cbc4a) return;
  let _0x303621 = {
    "url": "https://api.m.jd.com?functionId=videoHbGoldCoin_done",
    "body": _0x3cbc4a,
    "headers": {
      "Host": "api.m.jd.com",
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": $.UA,
      "Cookie": _0x1a7cb8
    }
  };
  return new Promise(async _0x409c29 => {
    $.dpost(_0x303621, async (_0xcc6781, _0x4c4569, _0x40aa11) => {
      try {
        _0xcc6781 ? (console.log("" + JSON.stringify(_0xcc6781)), console.log("videoHbGoldCoin_done 请求失败，请检查网路重试")) : (_0x40aa11 = JSON.parse(_0x40aa11), _0x40aa11.success ? _0x40aa11.data.rewardValue ? (console.log("浏览视频，获得" + _0x40aa11.data.rewardValue + "金币"), $.cointotal += parseInt(_0x40aa11.data.rewardValue), $.hasNext = _0x40aa11.data.hasNext, $.nojpNum = 0) : (console.log("无奖励"), $.nojpNum++) : console.log(_0x40aa11.message));
      } catch (_0x2f4676) {
        $.logErr(_0x2f4676, _0x4c4569);
      } finally {
        _0x409c29(_0x40aa11);
      }
    });
  });
}
async function _0x2ff54b() {
  let _0xde44f5 = {
    "adid": "",
    "emojisChangeStatus": 0,
    "extParam": "",
    "id": "",
    "modeid": "1",
    "monitorSource": "videodetailApp",
    "offset": "3_10",
    "playtype": "163",
    "projectid": "",
    "qaActivityId": "",
    "rec_broker": "",
    "referpageid": "",
    "style": ""
  };
  _0xde44f5 = await _0x575f19.getbody("video_videoDetail", _0xde44f5);
  if (!_0xde44f5) return;
  let _0x50b837 = {
    "url": "https://api.m.jd.com?functionId=video_videoDetail",
    "body": _0xde44f5,
    "headers": {
      "Host": "api.m.jd.com",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "User-Agent": "okhttp/3.12.16;jdmall;android;version/13.0.1;build/99192;",
      "x-referer-package": "com.jingdong.app.mall",
      "x-referer-page": "com.jingdong.app.mall.MainFrameActivity",
      "jdgs": {}
    }
  };
  return new Promise(async _0x9b6a0b => {
    $.dpost(_0x50b837, async (_0x4484be, _0x94da3f, _0x26eb25) => {
      try {
        _0x4484be ? (console.log("" + JSON.stringify(_0x4484be)), console.log("video_videoDetail 请求失败，请检查网路重试")) : (_0x26eb25 = JSON.parse(_0x26eb25), _0x26eb25.code == 0 ? $.WatchList = _0x26eb25.list : console.log(_0x26eb25.message));
      } catch (_0x52cf08) {
        $.logErr(_0x52cf08, _0x94da3f);
      } finally {
        _0x9b6a0b(_0x26eb25);
      }
    });
  });
}
async function _0x4947d2() {
  let _0x1cd5d2 = {},
    _0x3a5ea6 = {
      "appId": "2023f",
      "functionId": "videoHb_sign",
      "body": _0x1cd5d2,
      "appid": "video-redbag-h5",
      "clientVersion": $.UA.split(";")[2],
      "client": "wh5",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x1cd5d2 = await _0x465a84.getbody(_0x3a5ea6);
  if (!_0x1cd5d2) return;
  return new Promise(async _0x41e11f => {
    $.dpost(_0x13eb07("videoHb_sign", _0x1cd5d2), async (_0xf975d0, _0x55a9e6, _0x205aa5) => {
      try {
        if (_0xf975d0) console.log("" + JSON.stringify(_0xf975d0)), console.log("videoHb_sign 请求失败，请检查网路重试");else {
          _0x205aa5 = JSON.parse(_0x205aa5);
          if (_0x205aa5.code == 0) {
            if (_0x205aa5.busiCode == 0) console.log("签到成功：" + _0x205aa5.data.rewardMsg.msg);else {
              console.log("签到失败：" + _0x205aa5.message);
            }
          } else console.log(_0x205aa5.message);
        }
      } catch (_0x3eeba5) {
        $.logErr(_0x3eeba5, _0x55a9e6);
      } finally {
        _0x41e11f(_0x205aa5);
      }
    });
  });
}
async function _0x4f54da(_0x200ca8, _0x386f83) {
  let _0x7a2162 = "{\"bizTraceId\":\"" + _0x200ca8 + "\",\"amount\":" + _0x386f83 + "}",
    _0x1a5f5d = {
      "appId": "c5b74",
      "functionId": "videoHbCw_doCw",
      "body": _0x7a2162,
      "appid": "video-redbag-h5",
      "clientVersion": $.UA.split(";")[2],
      "client": "wh5",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x7a2162 = await _0x465a84.getbody(_0x1a5f5d);
  if (!_0x7a2162) return;
  return new Promise(async _0x5c8b6 => {
    $.dpost(_0x13eb07("videoHbCw_doCw", _0x7a2162), async (_0x4bf4b7, _0xac1e50, _0x324694) => {
      try {
        _0x4bf4b7 ? (console.log("" + JSON.stringify(_0x4bf4b7)), console.log("videoHbCw_doCw 请求失败，请检查网路重试")) : (_0x324694 = JSON.parse(_0x324694), _0x324694.success ? console.log("提现到余额成功 " + _0x386f83) : console.log(_0x324694.message));
      } catch (_0x3cb605) {
        $.logErr(_0x3cb605, _0xac1e50);
      } finally {
        _0x5c8b6(_0x324694);
      }
    });
  });
}
async function _0x3e71d9() {
  let _0x5d78cb = {
      "activitySource": "1",
      "realClient": "ios"
    },
    _0x15c1d4 = {
      "appId": "8c80c",
      "functionId": "videoRedPacketHomePage_exchangeCash",
      "body": _0x5d78cb,
      "appid": "video-redbag-h5",
      "clientVersion": $.UA.split(";")[2],
      "client": "wh5",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x5d78cb = await _0x465a84.getbody(_0x15c1d4);
  if (!_0x5d78cb) return;
  return new Promise(async _0x2240b3 => {
    $.dpost(_0x13eb07("videoRedPacketHomePage_exchangeCash", _0x5d78cb), async (_0x339bb9, _0x2a42f5, _0x1d6fdd) => {
      try {
        if (_0x339bb9) console.log("" + JSON.stringify(_0x339bb9)), console.log("videoRedPacketHomePage_exchangeCash 请求失败，请检查网路重试");else {
          _0x1d6fdd = JSON.parse(_0x1d6fdd);
          if (_0x1d6fdd.code == 0) {
            _0x1d6fdd.busiCode == 0 ? console.log("金币兑换完成") : console.log(_0x1d6fdd.message);
          } else console.log(_0x1d6fdd.message);
        }
      } catch (_0x4e7a38) {
        $.logErr(_0x4e7a38, _0x2a42f5);
      } finally {
        _0x2240b3(_0x1d6fdd);
      }
    });
  });
}
async function _0x57ce5b(_0x39677c, _0x3ddf9f) {
  let _0x5c1dd5 = "{\"type\":\"20\",\"assignmentId\":\"" + _0x39677c + "\",\"itemId\":\"" + _0x3ddf9f + "\"}",
    _0x362dbd = {
      "appId": "12bf2",
      "functionId": "videoRedPacketHomePage_done",
      "body": _0x5c1dd5,
      "appid": "video-redbag-h5",
      "clientVersion": $.UA.split(";")[2],
      "client": "wh5",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x5c1dd5 = await _0x465a84.getbody(_0x362dbd);
  if (!_0x5c1dd5) return;
  return new Promise(async _0x530e4b => {
    $.dpost(_0x13eb07("videoRedPacketHomePage_done", _0x5c1dd5), async (_0x13cec6, _0x4aff1d, _0x5d26b3) => {
      try {
        _0x13cec6 ? (console.log("" + JSON.stringify(_0x13cec6)), console.log("videoRedPacketHomePage_done 请求失败，请检查网路重试")) : (_0x5d26b3 = JSON.parse(_0x5d26b3), _0x5d26b3.code == 0 ? _0x5d26b3.busiCode == 0 ? console.log(_0x5d26b3.data.rewardMsg) : console.log(_0x5d26b3.message) : console.log(_0x5d26b3.message));
      } catch (_0x1a4c5f) {
        $.logErr(_0x1a4c5f, _0x4aff1d);
      } finally {
        _0x530e4b(_0x5d26b3);
      }
    });
  });
}
async function _0x2d6118(_0xb08995, _0x35f8ac) {
  let _0x362630 = "{\"type\":\"20\",\"assignmentId\":\"" + _0xb08995 + "\",\"itemId\":\"" + _0x35f8ac + "\"}",
    _0xffb578 = {
      "appId": "57a9c",
      "functionId": "videoRedPacketHomePage_accept",
      "body": _0x362630,
      "appid": "video-redbag-h5",
      "clientVersion": $.UA.split(";")[2],
      "client": "wh5",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x362630 = await _0x465a84.getbody(_0xffb578);
  if (!_0x362630) return;
  return new Promise(async _0x33479f => {
    let _0x33cb57 = "";
    $.dpost(_0x13eb07("videoRedPacketHomePage_accept", _0x362630), async (_0xb5da9f, _0x31d5d5, _0x3c20e3) => {
      try {
        if (_0xb5da9f) {
          console.log("" + JSON.stringify(_0xb5da9f));
          console.log("videoRedPacketHomePage_accept 请求失败，请检查网路重试");
        } else _0x3c20e3 = JSON.parse(_0x3c20e3), _0x3c20e3.success ? _0x33cb57 = _0x3c20e3 : console.log(_0x3c20e3.message);
      } catch (_0x5764b6) {
        $.logErr(_0x5764b6, _0x31d5d5);
      } finally {
        _0x33479f(_0x33cb57);
      }
    });
  });
}
async function _0x5f56db(_0x21e295) {
  let _0x431e6f = {
      "appId": "d51cc",
      "functionId": "videoRedPacketHomePage_info",
      "body": _0x21e295,
      "appid": "video-redbag-h5",
      "clientVersion": $.UA.split(";")[2],
      "client": "wh5",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    },
    _0x11c6da = await _0x465a84.getbody(_0x431e6f);
  if (!_0x11c6da) return;
  return new Promise(async _0x26c987 => {
    $.dpost(_0x13eb07("videoRedPacketHomePage_info", _0x11c6da), async (_0x4e0203, _0x23bc9e, _0x539f01) => {
      try {
        if (_0x4e0203) console.log("" + JSON.stringify(_0x4e0203)), console.log("videoRedPacketHomePage_info 请求失败，请检查网路重试");else {
          _0x539f01 = JSON.parse(_0x539f01);
          if (_0x539f01.code == 0) {
            if (_0x539f01.busiCode == 0) $.tasklist = _0x539f01.data;else _0x539f01.busiCode == 8015 && ($.log("账号火爆"), $.hotflag = true);
          } else {
            console.log(_0x539f01.message);
          }
        }
      } catch (_0x371320) {
        $.logErr(_0x371320, _0x23bc9e);
      } finally {
        _0x26c987(_0x539f01);
      }
    });
  });
}
async function _0x2c5e19() {
  let _0xaaba46 = {
      "activitySource": "1",
      "realClient": "ios"
    },
    _0x3875f7 = {
      "appId": "a3b98",
      "functionId": "videoRedPacketHomePage_queryMoney",
      "body": _0xaaba46,
      "appid": "video-redbag-h5",
      "clientVersion": $.UA.split(";")[2],
      "client": "wh5",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0xaaba46 = await _0x465a84.getbody(_0x3875f7);
  if (!_0xaaba46) return;
  return new Promise(async _0x349472 => {
    $.dpost(_0x13eb07("videoRedPacketHomePage_queryMoney", _0xaaba46), async (_0x21620a, _0x1543f8, _0x16b0e2) => {
      try {
        if (_0x21620a) console.log("" + JSON.stringify(_0x21620a)), console.log("videoRedPacketHomePage_queryMoney 请求失败，请检查网路重试");else {
          _0x16b0e2 = JSON.parse(_0x16b0e2);
          if (_0x16b0e2.code == 0) {
            console.log("当前金币：" + _0x16b0e2.data.goldCoin + ",当前现金：" + _0x16b0e2.data.cash);
          } else console.log(_0x16b0e2.message);
        }
      } catch (_0x2f57ea) {
        $.logErr(_0x2f57ea, _0x1543f8);
      } finally {
        _0x349472(_0x16b0e2);
      }
    });
  });
}
function _0x13eb07(_0x9b76a4, _0x50950f) {
  return {
    "url": "https://api.m.jd.com/" + _0x9b76a4,
    "body": _0x50950f,
    "headers": {
      "Host": "api.m.jd.com",
      "Origin": "https://pro.m.jd.com",
      "Referer": "https://pro.m.jd.com/mall/active/3jP124DeP3kK9Xj3s3MbxJTpKygp/index.html",
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": $.UA,
      "Cookie": _0x1a7cb8,
      "x-referer-page": "https://pro.m.jd.com/mall/active/3jP124DeP3kK9Xj3s3MbxJTpKygp/index.html",
      "x-rp-client": "h5_1.0.0",
      "request-from": "native",
      "Connection": "keep-alive"
    }
  };
}
function _0xb63f3c() {
  return new Promise(_0x1709e7 => {
    const _0x1c4b52 = {
      "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      "headers": {
        "Cookie": _0x1a7cb8,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x1c4b52, (_0x2b29b2, _0x161510, _0x56414b) => {
      try {
        if (_0x56414b) {
          _0x56414b = JSON.parse(_0x56414b);
          if (_0x56414b.islogin === "1") {} else _0x56414b.islogin === "0" && ($.isLogin = false);
        }
      } catch (_0x161f09) {
        console.log(_0x161f09);
      } finally {
        _0x1709e7();
      }
    });
  });
}
function _0x2ab62c() {
  return new Promise(_0x12a39f => {
    !_0x118eb0 ? $.msg($.name, "", "" + _0x428e7a) : $.log("京东账号" + $.index + $.nickName + "\n" + _0x428e7a);
    _0x12a39f();
  });
}
function _0x1cf21b(_0x4cd636) {
  try {
    if (typeof JSON.parse(_0x4cd636) == "object") {
      return true;
    }
  } catch (_0x87e416) {
    return console.log(_0x87e416), console.log("京东服务器访问数据为空，请检查自身设备网络情况"), false;
  }
}
function _0xd4c2ac(_0x5e963f) {
  if (typeof _0x5e963f == "string") try {
    return JSON.parse(_0x5e963f);
  } catch (_0x4991e2) {
    return console.log(_0x4991e2), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
  }
}

function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }