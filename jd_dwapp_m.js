/*
积分换话费
入口：首页-生活·缴费-积分换话费 
update：2024/5/6
10 1,14 * * * jd_dwapp_m.js
*/

const $ = new Env('积分换话费_m');

const _0x379af5 = $.isNode() ? require("./sendNotify") : "",
  _0x4e21ae = $.isNode() ? require("./jdCookie.js") : "";
CryptoJS = $.isNode() ? require("crypto-js") : CryptoJS;
const _0x5706ac = require("./function/dylib");
if (process.env.DY_PROXY) try {
  ccc = require("./function/proxy.js");
  $.dget = ccc.intoRequest($.get.bind($));
  $.dpost = ccc.intoRequest($.post.bind($));
} catch {
  $.dget = $.get;
  $.dpost = $.post;
} else $.dpost = $.post, $.dget = $.get;
let _0x3e43bb = [],
  _0x43da47 = "";
if ($.isNode()) {
  Object.keys(_0x4e21ae).forEach(_0x58f72d => {
    _0x3e43bb.push(_0x4e21ae[_0x58f72d]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else _0x3e43bb = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonformat($.getdata("CookiesJD") || "[]").map(_0x182d2a => _0x182d2a.cookie)].filter(_0x35d902 => !!_0x35d902);
!(async () => {
  if (!_0x3e43bb[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  console.log("版本 20240811");
  _0x5706ac.chanel();
  for (let _0x5127a2 = 0; _0x5127a2 < _0x3e43bb.length; _0x5127a2++) {
    if (_0x3e43bb[_0x5127a2]) {
      {
        _0x43da47 = _0x3e43bb[_0x5127a2];
        $.UserName = decodeURIComponent(_0x43da47.match(/pt_pin=([^; ]+)(?=;?)/) && _0x43da47.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.index = _0x5127a2 + 1;
        $.isLogin = true;
        $.nickName = "";
        message = "";
        console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
        if (!$.isLogin) {
          {
            $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
              "open-url": "https://bean.m.jd.com/bean/signIndex.action"
            });
            if ($.isNode()) {
              await _0x379af5.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie");
            }
            continue;
          }
        }
        $.UUID = _0xbeb38d("xxxxxxxxxxxxxxxx");
        await _0x5a7cf6();
        if($.index % 10 === 0){
          console.log("为了帝国第"+$.index+"个号休息10分钟-->"+new Date());
          await $.wait(600000); 
        }else{
          let n = parseInt(Math.random() * 1000 + 6000, 10);
          console.log("为了可持续发展随机休息"+n);
          await $.wait(n); 
        }
      }
    }
  }
})().catch(_0x4e6566 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x4e6566 + "!", "");
}).finally(() => {
  $.done();
});
async function _0x5a7cf6() {
  $.log("去签到");
  await _0x4b4bcc();
  await $.wait(2000);
  await _0x59196c();
  if ($.tasklist) {
    for (let _0x30e1e4 of $.tasklist) {
      {
        if (_0x30e1e4.viewStatus == 0) {
          console.log("去做 " + _0x30e1e4.taskDesc);
          await _0x1aa95d(_0x30e1e4.id);
          await $.wait(3000);
          console.log("去领积分");
          await _0x40014d(_0x30e1e4.id);
        } else {
          if (_0x30e1e4.viewStatus == 2) console.log("去领积分"), await _0x40014d(_0x30e1e4.id);else _0x30e1e4.viewStatus == 1 && $.log(_0x30e1e4.name + " 已完成浏览");
        }
      }
    }
  }
}
async function _0x1aa95d(_0x3a8acb) {
  enc = await _0x253bdc(_0x3a8acb + "1");
  let _0x25d713 = {
    "id": _0x3a8acb,
    "agentNum": "m",
    "taskType": 1,
    "followChannelStatus": "",
    ...enc
  };
  return new Promise(_0x348abc => {
    $.dpost(_0x492bdd("task/dwRecord", _0x25d713), (_0x332e86, _0x273683, _0x384175) => {
      try {
        {
          if (_0x332e86) console.log("" + _0x332e86), console.log($.name + " API请求失败，请检查网路重试");else {
            _0x384175 = JSON.parse(_0x384175);
            if (_0x384175) {
              if (_0x384175.code === 200) _0x384175.data.dwUserTask ? $.log("----领取任务成功") : $.log("----此任务已经领取过了");else {
                console.log(JSON.stringify(_0x384175));
              }
            }
          }
        }
      } catch (_0x2c082e) {
        $.logErr(_0x2c082e, _0x273683);
      } finally {
        _0x348abc(_0x384175);
      }
    });
  });
}
async function _0x40014d(_0x3062cc) {
  enc = await _0x253bdc(_0x3062cc);
  let _0x33c1c2 = {
    "id": _0x3062cc,
    ...enc
  };
  return new Promise(_0x3f1b12 => {
    $.dpost(_0x492bdd("task/dwReceive", _0x33c1c2), (_0x126b53, _0x52769a, _0xf94786) => {
      try {
        if (_0x126b53) console.log("" + _0x126b53), console.log($.name + " API请求失败，请检查网路重试");else {
          {
            _0xf94786 = JSON.parse(_0xf94786);
            if (_0xf94786) {
              {
                if (_0xf94786.code === 200 && _0xf94786.data.success) console.log("----领取成功：获得" + _0xf94786.data.giveScoreNum + "积分");else _0xf94786.code === 200 && !_0xf94786.data.success ? console.log("----积分已经领取完了") : console.log(JSON.stringify(_0xf94786));
              }
            }
          }
        }
      } catch (_0x29614f) {
        $.logErr(_0x29614f, _0x52769a);
      } finally {
        _0x3f1b12(_0xf94786);
      }
    });
  });
}
async function _0x4b4bcc() {
  body = await _0x253bdc();
  let _0x4a31df = {
    "url": "https://api.m.jd.com/api?functionId=DATAWALLET_USER_SIGN",
    "body": "appid=h5-sep&client=m&&body=" + encodeURIComponent(JSON.stringify(body)),
    "headers": {
      "Origin": "https://mypoint.jd.com",
      "Accept": "*/*",
      "User-Agent": "jdapp;iPhone;10.1.0;13.5;" + $.UUID + ";network/wifi;model/iPhone11,6;addressid/4596882376;appBuild/167774;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
      "Referer": "https://mypoint.jd.com/",
      "Cookie": _0x43da47
    },
    "ciphers": _0x5706ac.cpstr
  };
  return new Promise(_0x3e2ce9 => {
    $.dpost(_0x4a31df, (_0x701adc, _0x5050f5, _0x297a8c) => {
      try {
        if (_0x701adc) console.log("" + _0x701adc), console.log($.name + " API请求失败，请检查网路重试");else {
          {
            _0x297a8c = JSON.parse(_0x297a8c);
            if (_0x297a8c) {
              {
                if (_0x297a8c.code === 200) console.log("签到成功：获得积分" + _0x297a8c.data.signInfo.signNum), $.log("总积分：" + _0x297a8c.data.totalNum + "\n");else _0x297a8c.code === 302 ? console.log("已完成签到！！！\n") : $.log(JSON.stringify(_0x297a8c));
              }
            }
          }
        }
      } catch (_0x5ed57c) {
        $.logErr(_0x5ed57c, _0x5050f5);
      } finally {
        _0x3e2ce9(_0x297a8c);
      }
    });
  });
}
async function _0x59196c() {
  body = await _0x253bdc();
  body.channelSource = "txzs";
  let _0x831f74 = {
    "url": "https://api.m.jd.com/user/color/task/dwList",
    "body": "appid=txsm-m&client=h5&functionId=dwapp_task_dwList&body=" + encodeURIComponent(JSON.stringify(body)),
    "headers": {
      "Origin": "https://txsm-m.jd.com",
      "Accept": "*/*",
      "User-Agent": "jdapp;iPhone;10.1.0;13.5;" + $.UUID + ";network/wifi;model/iPhone11,6;addressid/4596882376;appBuild/167774;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
      "Referer": "https://txsm-m.jd.com/",
      "Cookie": _0x43da47
    }
  };
  return new Promise(_0xb53021 => {
    $.dpost(_0x831f74, (_0x47dffe, _0x1d40ad, _0x1f19a0) => {
      try {
        if (_0x47dffe) console.log("" + _0x47dffe), console.log($.name + " API请求失败，请检查网路重试");else {
          _0x1f19a0 = JSON.parse(_0x1f19a0);
          JSON.stringify(_0x1f19a0.data) != "{}" && ($.tasklist = _0x1f19a0.data);
        }
      } catch (_0x46a771) {
        $.logErr(_0x46a771, _0x1d40ad);
      } finally {
        _0xb53021(_0x1f19a0);
      }
    });
  });
}
function _0x492bdd(_0x271caf, _0xbaa02f) {
  return {
    "url": "https://dwapp.jd.com/user/" + _0x271caf,
    "body": JSON.stringify(_0xbaa02f),
    "headers": {
      "Host": "dwapp.jd.com",
      "Origin": "https://prodev.m.jd.com",
      "Connection": "keep-alive",
      "Accept": "*/*",
      "User-Agent": "jdapp;iPhone;10.1.0;13.5;" + $.UUID + ";network/wifi;model/iPhone11,6;addressid/4596882376;appBuild/167774;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
      "Accept-Language": "zh-cn",
      "Referer": "https://prodev.m.jd.com/mall/active/eEcYM32eezJB7YX4SBihziJCiGV/index.html",
      "Accept-Encoding": "gzip, deflate, br",
      "Content-Type": "application/json",
      "Cookie": _0x43da47
    }
  };
}
function _0x4c63f5() {
  return new Promise(async _0x27135a => {
    const _0x286def = {
      "url": "https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2",
      "headers": {
        "Accept": "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Cookie": _0x43da47,
        "Referer": "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
        "User-Agent": $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require("./USER_AGENTS").USER_AGENT : $.getdata("JDUA") ? $.getdata("JDUA") : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"
      }
    };
    $.post(_0x286def, (_0x49730a, _0x56870c, _0x59846f) => {
      try {
        if (_0x49730a) console.log("" + JSON.stringify(_0x49730a)), console.log($.name + " API请求失败，请检查网路重试");else {
          if (_0x59846f) {
            _0x59846f = JSON.parse(_0x59846f);
            if (_0x59846f.retcode === 13) {
              $.isLogin = false;
              return;
            }
            if (_0x59846f.retcode === 0) $.nickName = _0x59846f.base && _0x59846f.base.nickname || $.UserName;else {
              $.nickName = $.UserName;
            }
          } else console.log("京东服务器返回空数据");
        }
      } catch (_0x5f0201) {
        $.logErr(_0x5f0201, _0x56870c);
      } finally {
        _0x27135a();
      }
    });
  });
}
function _0xbeb38d(_0x34864c = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", _0x45c3e8 = 0) {
  return _0x34864c.replace(/[xy]/g, function (_0xc09350) {
    {
      var _0x4fcc8e = Math.random() * 16 | 0,
        _0x4a296c = _0xc09350 == "x" ? _0x4fcc8e : _0x4fcc8e & 3 | 8;
      _0x45c3e8 ? uuid = _0x4a296c.toString(36).toUpperCase() : uuid = _0x4a296c.toString(36);
      return uuid;
    }
  });
}
async function _0x253bdc(_0x47bbef) {
  time = new Date().getTime();
  let _0x5426a9 = _0x47bbef || "";
  const _0x53dec6 = time + "e9c398ffcb2d4824b4d0a703e38yffdd";
  _0x5426a9 = CryptoJS.MD5(_0x5426a9 + _0x53dec6).toString();
  return {
    "t": time,
    "encStr": _0x5426a9
  };
}

function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }