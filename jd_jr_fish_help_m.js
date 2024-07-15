/*
活动名称：金融捕鱼助力

环境变量：
jd_jr_fish_inviteCode_m // 指定助力码 非必须，不填默认助力账号一

cron:1 1 1 1 *

*/

const $ = new Env('金融捕鱼助力_m')
const jdCookie = require("./jdCookie"),
  notify = require("./utils/Rebels_sendJDNotify"),
  common = require("./utils/Rebels_jdCommon"),
  jsdom = require("jsdom"),
  isNotify = process.env.jd_jr_fish_notify === "true",
  inviteCode = process.env.jd_jr_fish_inviteCode || "",
  fishnum = process.env.jd_jr_fish_num;
let waitTimes = 1000,
  cookie = "";
const cookiesArr = Object.keys(jdCookie).map(IlII1 => jdCookie[IlII1]).filter(IiI11 => IiI11);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
!(async () => {
  authorCodeList = await getAuthorCodeList("http://code.257999.xyz/fish.json");
  authorCodeList ? (console.log("❖ 测试连通性中...\n❖ 服务状态正常...\n"), $.authorCode = authorCodeList[random(0, authorCodeList.length)]) : console.log("❖ 准备就绪...\n");
  fishnum ? console.log("❖ 已填写指定人数变量，指定人数 [" + fishnum + "]") : null;
  inviteCode ? console.log("❖ 已填写指定助力变量，开始助力 [" + inviteCode + "]") : console.log("❖ 未填写指定助力变量，开始助力账号[1]");
  console.log("\n❖ 若多次风控未通过，可能此助力码已黑~");
  notify.config({
    "title": $.name
  });
  for (let IlIllI = 0; IlIllI < cookiesArr.length; IlIllI++) {
    $.index = IlIllI + 1;
    cookie = cookiesArr[IlIllI];
    common.setCookie(cookie);
    $.UserName = decodeURIComponent(common.getCookieValue(cookie, "pt_pin"));
    $.UA = common.genUA($.UserName);
    $.message = notify.create($.index, $.UserName);
    $.nickName = "";
    console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "******\n");
    await Main();
    common.unsetCookie();
    if ($.runEnd) break;
    let n = parseInt(Math.random() * 1000 + 200000, 10);
    console.log("为了可持续发展随机休息"+n);
    await $.wait(n); 
  }
  isNotify && notify.getMessage() && (notify.appendContent("\n"), await notify.push());
})().catch(il1i1I => $.logErr(il1i1I)).finally(() => $.done());
async function Main() {
  try {
    $.retry = 0;
    await jstoken2();
    !$.getid && $.retry < 10 && ($.retry++, console.log("必须参数未成功获取，重新获取中"), await $.wait(5000), await jstoken2());
    if (!$.getid) {
      console.log("必须参数未成功获取，请重新运行");
      return;
    }
    if (inviteCode) {
      $.index == 1 ? (console.log("账号[1]默认去助力作者"), await inviteFissionhelp($.authorCode), await $.wait(parseInt(waitTimes * 1 + 2000, 10))) : (await inviteFissionhelp(inviteCode), await $.wait(parseInt(waitTimes * 1 + 2000, 10)));
    } else {
      if ($.index == 1) {
        console.log("账号[1]默认去助力作者");
        await inviteFissionhelp($.authorCode);
        await $.wait(parseInt(waitTimes * 1 + 2000, 10));
        $.queryInviterHelpInfo = "";
        await sendRequest("queryInviterHelpInfo");
        await $.wait(parseInt(waitTimes * 1 + 2000, 10));
        if ($.queryInviterHelpInfo && $.queryInviterHelpInfo.data) {
          $.finishHelpNum = $.queryInviterHelpInfo.data.finishHelpNum;
          $.inviteCode = $.queryInviterHelpInfo.data.inviteCode;
          if ($.finishHelpNum >= 10) {
            console.log("\n助力人数已满，退出执行~");
            $.runEnd = true;
            return;
          } else console.log("已有助力人数：" + $.finishHelpNum + "，助力码：" + $.inviteCode);
        } else {
          console.log("\n❌ 未能正确获取助力码，退出执行！");
          $.runEnd = true;
          return;
        }
      } else await inviteFissionhelp($.inviteCode), await $.wait(parseInt(waitTimes * 1 + 2000, 10));
    }
  } catch (lllli) {
    console.log("❌ 脚本运行遇到了错误\n" + lllli);
  }
}
async function inviteFissionhelp(iiili1) {
  $.inviter = iiili1;
  await sendRequest("completeFissionHelp4JKL");
}
async function handleResponse(I1lIiI, lllili) {
  try {
    switch (I1lIiI) {
      case "queryInviterHelpInfo":
        if (lllili.resultData && lllili.resultCode === 0) {
          if (lllili.resultData && lllili.resultData.success && lllili.resultData.code === "0000") $.queryInviterHelpInfo = lllili.resultData;else {
            console.log("\n失败: " + lllili.resultData.message);
          }
        } else {
          let ilil1I = common.getErrorMsg(lllili);
          console.log("\n邀请码获取失败: " + ilil1I);
        }
        break;
      case "completeFissionHelp4JKL":
        if (lllili.resultData && lllili.resultCode === 0) lllili.resultData && lllili.resultData.success && lllili.resultData.code === "0000" ? ($.finishHelpNum++, console.log("助力成功 ✅，已有助力人数：" + $.finishHelpNum), $.finishHelpNum >= 10 && (console.log("助力人数已满，退出执行~"), $.runEnd = true)) : console.log("助力失败: " + lllili.resultData.message);else {
          let lllilI = common.getErrorMsg(lllili);
          console.log("失败: " + lllilI);
        }
        break;
    }
  } catch (ilil11) {
    console.log("❌ 未能正确处理 " + I1lIiI + " 请求响应 " + (ilil11.message || ilil11));
  }
}
async function sendRequest(illlI1) {
  if ($.runEnd) return;
  let I1lIi1 = "",
    liiIIi = null,
    lil11I = null,
    Iliii1 = "POST";
  switch (illlI1) {
    case "queryInviterHelpInfo":
      I1lIi1 = "https://ms.jr.jd.com/gw2/generic/mkWeapons/h5/m/queryInviterHelpInfo?_t=" + Date.now(), bodystr = {
        "clientType": "jdjr",
        "clientVersion": "6.8.90",
        "deviceInfo": JSON.stringify({
          "eid": $.getid.eid,
          "fp": $.getid.fp,
          "sdkToken": $.getid.sdkToken,
          "token": $.getid.token,
          "jstub": $.getid.jstub,
          "os": "ios",
          "osv": "14.8"
        })
      }, liiIIi = "reqData=" + encodeURIComponent(JSON.stringify(bodystr));
      break;
    case "completeFissionHelp4JKL":
      const lllI1l = {
        "clientType": "jdjr",
        "clientVersion": "6.8.90",
        "fissionCode": "20230816150Q0dyd",
        "inviteCode": $.inviter,
        "deviceInfo": JSON.stringify({
          "eid": $.getid.eid,
          "fp": $.getid.fp,
          "sdkToken": $.getid.sdkToken,
          "token": $.getid.token,
          "jstub": $.getid.jstub,
          "os": "ios",
          "osv": "14.8"
        })
      };
      nonce = $.ar2.nonce(), signArr = $.ar2.sign(JSON.stringify(lllI1l), nonce), bodystr = {
        "signData": JSON.stringify(lllI1l),
        "nonce": nonce,
        "signature": signArr,
        "clientType": lllI1l.clientType,
        "clientVersion": lllI1l.clientVersion,
        "fissionCode": lllI1l.fissionCode,
        "inviteCode": lllI1l.inviteCode,
        "deviceInfo": lllI1l.deviceInfo
      }, liiIIi = "reqData=" + JSON.stringify(bodystr), I1lIi1 = "https://ms.jr.jd.com/gw2/generic/mkWeapons/h5/m/completeFissionHelp4JKL?_t=" + Date.now();
      break;
    default:
      console.log("❌ 未知请求 " + illlI1);
      return;
  }
  const iIiIi = {
    "url": I1lIi1,
    "method": Iliii1,
    "headers": {
      "Host": "ms.jr.jd.com",
      "Connection": "keep-alive",
      "Accept": "application/json",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148/application=JDJR-App&clientType=ios&iosType=iphone&clientVersion=6.8.90&HiClVersion=6.8.90&isUpdate=0&osVersion=14.8&osName=iOS&screen=736*414&src=App Store&netWork=1&netWorkType=1&CpayJS=UnionPay/1.0 JDJR&stockSDK=stocksdk-iphone_4.2.3&sPoint=&jdPay=(*#@jdPaySDK*#@jdPayChannel=jdfinance&jdPayChannelVersion=6.8.90&jdPaySdkVersion=4.01.23.00&jdPayClientName=iOS*#@jdPaySDK*#@)",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      "Origin": "https://u.jr.jd.com",
      "Referer": "https://u.jr.jd.com/",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9,th-CN;q=0.8,th;q=0.7,vi-CN;q=0.6,vi;q=0.5,en-US;q=0.4,en;q=0.3",
      "cookie": cookie
    },
    "params": lil11I,
    "data": liiIIi,
    "timeout": 20000
  };
  Iliii1 === "GET" && (delete iIiIi.data, delete iIiIi.headers["Content-Type"]);
  const iil1ll = 1;
  let iiilil = 0,
    iil1li = null,
    lillIl = false;
  while (iiilil < iil1ll) {
    iiilil > 0 && (await $.wait(1000));
    const llI1Ii = await common.request(iIiIi);
    if (!llI1Ii.success) {
      iil1li = "🚫 " + illlI1 + " 请求失败 ➜ " + llI1Ii.error;
      iiilil++;
      continue;
    }
    if (!llI1Ii?.["data"]) {
      iil1li = "🚫 " + illlI1 + " 请求失败 ➜ 无响应数据";
      iiilil++;
      continue;
    }
    handleResponse(illlI1, llI1Ii.data);
    lillIl = false;
    break;
  }
  if (iiilil >= iil1ll) {
    console.log(iil1li);
    lillIl && ($.outFlag = true, $.message && $.message.fix(iil1li));
  }
}
async function getAuthorCodeList(iIiII) {
  const iil1lI = await common.request({
      "url": iIiII,
      "method": "GET",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
      },
      "proxy": null,
      "debug": false,
      "timeout": 30000
    }),
    iiiliI = iil1lI.data;
  return iiiliI;
}
async function jstoken2() {
  const {
    JSDOM: illIii
  } = jsdom;
  let ii1il1 = new jsdom.ResourceLoader({
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:91.0) Gecko/20100101 Firefox/91.0",
      "referrer": "https://eco.jr.jd.com/"
    }),
    lI1llI = new jsdom.VirtualConsole(),
    illIil = {
      "url": "https://eco.jr.jd.com/baitiao_lottery/#/?actNo=211213202243400000003999&channel=w01",
      "referrer": "https://eco.jr.jd.com/",
      "userAgent": "Mozilla/5.0 (Linux; Android 10; HarmonyOS; WLZ-AN00; HMSCore 6.2.0.302) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.105 HuaweiBrowser/12.0.2.301 Mobile Safari/537.36",
      "runScripts": "dangerously",
      "resources": ii1il1,
      "includeNodeLocations": true,
      "storageQuota": 10000000,
      "pretendToBeVisual": true,
      "virtualConsole": lI1llI
    };
  const Ill1I = new illIii("<body>\n  <script src=\"https://jrsecstatic.jdpay.com/jr-sec-dev-static/aar2.min.js\"></script>\n  <script src=\"https://m.jr.jd.com/common/jssdk/jrbridge/2.0.0/jrbridge.js\"></script>\n  <script src=\"https://jrsecstatic.jdpay.com/jr-sec-dev-static/cryptico.min.js\"></script>\n  <script src=\"//gia.jd.com/m.html\"></script>\n  <script src=\"//gias.jd.com/js/m.js\"></script>\n  </body>", illIil);
  await $.wait(1500);
  try {
    $.getid = Ill1I.window.getJdEid();
    Ill1I.window.AAR2.init();
    $.ar2 = new Ill1I.window.AAR2();
    $.cry = Ill1I.window.cryptico;
  } catch (lillI1) {}
}
function random(IlIlii, i1l1i1) {
  return Math.floor(Math.random() * (i1l1i1 - IlIlii)) + IlIlii;
}

function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
