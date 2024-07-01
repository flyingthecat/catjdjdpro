/*
一次性，手动执行
自行运行，有水无水自测。

第一个账号助力作者 其他依次助力CK1
注意：第一个CK黑号会全部助力所填写的助力码
33 1 1 7 * jd_dplh0701.js
*/

const $ = new Env("大牌0701");

const _0x4e958c = $.isNode() ? require("./jdCookie.js") : "",
  _0x58ca13 = $.isNode() ? require("./sendNotify") : "",
  _0x67c534 = require("crypto-js"),
  _0x332aee = require("./function/dylank"),
  _0x3e69bb = require("./function/dylany"),
  _0x3bb7cf = require("./function/dylib.js");
let _0x3e7ed5 = [],
  _0x5ecb3d = "",
  _0x5a8fe8 = "",
  _0x359201 = "",
  _0x35cf07 = "3";
if (process.env.DY_PROXY) {
  const _0x494182 = require("./function/proxy.js");
  $.get = _0x494182.intoRequest($.get.bind($));
  $.post = _0x494182.intoRequest($.post.bind($));
}
if ($.isNode()) {
  Object.keys(_0x4e958c).forEach(_0x49864c => {
    _0x3e7ed5.push(_0x4e958c[_0x49864c]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else _0x3e7ed5 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x21e313 => _0x21e313.cookie)].filter(_0x5e0f87 => !!_0x5e0f87);
let _0x30a872 = process.env.DPLH_BSHOP || "false",
  _0x413b4c = process.env.DPLH_OPENCARD || "true",
  _0x473c71 = "https://jinggengjcq-isv.isvjcloud.com";
$.Url = " https://jinggengjcq-isv.isvjcloud.com/jdbeverage/pages/oC20240612dda/oC20240612dda?actId=6580d19d07e8473d935d404bc_240701";
$.bianh = $.Url.match(/oC[0-9a-z]+/)[0];
$.actId = $.Url.match(/actId=([0-9a-f]+_\d+)/)[1];
$.appkey = "94854284";
$.userId = "10299171";
$.outFlag = false;
let _0x2a878e = ["OsiH6Sic/uTxioPBG6hh5K9AMkY4oJ31vhy6nI5LWbOiIw7XUQOP/Btn03/M1TYH"];
$.inviteNick = _0x2a878e[_0x59b4e4(0, _0x2a878e.length)];
$.awardId = process.env.DPLH_AWID || "";
$.bwater = false;
!(async () => {
  $.log("\n💬 有水的时候跑，浏览店铺任务每天刷新");
  $.log("💬 代理API，DY_PROXY='url'");
  $.log("💬 默认开卡，关闭DPLH_OPENCARD='false'");
  if (!_0x3e7ed5[0]) {
    $.msg($.name, "【提示】请先获取cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/", {
      "open-url": "https://bean.m.jd.com/"
    });
    return;
  }
  for (let _0x1a13f7 = 0; _0x1a13f7 < _0x3e7ed5.length; _0x1a13f7++) {
    _0x5ecb3d = _0x3e7ed5[_0x1a13f7];
    if (_0x5ecb3d) {
      $.UserName = decodeURIComponent(_0x5ecb3d.match(/pt_pin=([^; ]+)(?=;?)/) && _0x5ecb3d.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x1a13f7 + 1;
      $.bean = 0;
      $.nickName = "";
      _0x405aaf();
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      await _0x5cbac6();
      await $.wait(parseInt(Math.random() * 1000 + 1500, 10));
      if ($.outFlag) break;
    }
  }
  if ($.outFlag) {
    let _0x29ebd6 = "此ip已被限制，请过10分钟后再执行脚本";
    $.msg($.name, "", "" + _0x29ebd6);
    if ($.isNode()) await _0x58ca13.sendNotify("" + $.name, "" + _0x29ebd6);
  }
  if($.index % 7 === 0){
    console.log("为了帝国第"+$.index+"个号休息10分钟-->"+new Date());
    await $.wait(600000); 
  }else{
    let n = parseInt(Math.random() * 1000 + 10000, 10);
    console.log("为了可持续发展随机休息"+n);
    await $.wait(n); 
  }
})().catch(_0x3a0bff => $.logErr(_0x3a0bff)).finally(() => $.done());
async function _0x5cbac6() {
  try {
    $.okFlag = false;
    $.endTime = 0;
    $.Token = "";
    $.Pin = "";
    $.MixNick = "";
    $.openList = [];
    if ($.outFlag) {
      console.log("此ip已被限制，请过10分钟后再执行脚本\n");
      return;
    }
    $.Token = await _0x332aee(_0x5ecb3d, _0x473c71);
    if (!$.Token) {
      console.log("❌ 获取TOKEN失败");
      return;
    }
    for (let _0x232c3c = 0; _0x232c3c < _0x35cf07; _0x232c3c++) {
      await _0x2ab249("activity_load");
      if ($.okFlag) break;
    }
    if ($.endTime < Date.now()) {
      $.log("活动已结束!!!");
      process.exit();
    } else {
      if ($.sTime > Date.now()) {
        $.log("活动未开始!!!");
        process.exit();
      } else $.index == 1 && console.log("活动结束时间：" + _0x13c58d($.endTime));
    }
    if ($.MixNick == "") {
      console.log("❌ 获取[活动信息]失败，可能是黑号");
      return;
    }
    for (let _0x1c22b4 = 0; _0x1c22b4 < _0x35cf07; _0x1c22b4++) {
      await _0x2ab249("绑定");
      if ($.okFlag) break;
    }
    for (let _0x4213b0 = 0; _0x4213b0 < _0x35cf07; _0x4213b0++) {
      await _0x2ab249("shopList");
      if ($.okFlag) break;
    }
    if ($.offList.length != 0) {
      $.log("总共" + $.openList.length + "个店铺，还需开卡" + $.offList.length + "个");
      if (_0x413b4c !== "false") {
        $.log("\n去开卡...");
        for (let _0x2c1c19 of $.openList) {
          $.missionType = "openCard";
          if (_0x2c1c19.open != true && _0x2c1c19.openCardUrl) {
            $.openCard = false;
            $.joinVenderId = _0x2c1c19.userId;
            for (let _0x29096d = 0; _0x29096d < _0x35cf07; _0x29096d++) {
              await _0x2ab249("mission");
              if ($.okFlag) break;
            }
            await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
            if ($.openCard == true) {
              $.errorJoinShop = "";
              await _0x54fb67();
              if ($.errorJoinShop.indexOf("您的手机号已被其他账号绑定本店会员，请先登陆原账号解绑") > -1) return;
              $.errorJoinShop.indexOf("活动太火爆，请稍后再试") > -1 && (console.log("😤 呜呜呜，重试开卡"), await $.wait(1000), await _0x54fb67(), await $.wait(parseInt(Math.random() * 1000 + 1000, 10)));
              if ($.errorJoinShop.indexOf("活动太火爆，请稍后再试") > -1) {
                console.log("💔 无法开卡,跳过运行");
                return;
              }
              for (let _0x4f22cb = 0; _0x4f22cb < _0x35cf07; _0x4f22cb++) {
                await _0x2ab249("activity_load");
                if ($.okFlag) break;
              }
              for (let _0x125324 = 0; _0x125324 < _0x35cf07; _0x125324++) {
                await _0x2ab249("shopList");
                if ($.okFlag) break;
              }
            }
          }
        }
      } else console.log("\n🔊 已设置不开卡,也无法助力哦!");
    } else $.log("\n🔊 已全部开卡!");
    if ($.hasCollectShop === 0) {
      $.missionType = "uniteCollectShop";
      for (let _0x2a1bba = 0; _0x2a1bba < _0x35cf07; _0x2a1bba++) {
        await _0x2ab249("mission");
        if ($.okFlag) break;
      }
      await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    } else console.log("\n🔊 已完成关注任务!");
    if (process.env.DPLH_ADDCAR == "true") {
      $.log("\n去一键加购...");
      if ($.hasAddCart === 0) {
        $.missionType = "uniteAddCart";
        for (let _0x59e6f2 = 0; _0x59e6f2 < _0x35cf07; _0x59e6f2++) {
          await _0x2ab249("mission");
          if ($.okFlag) break;
        }
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
      } else console.log("\n🔊 已完成加购任务!");
    } else console.log("\n🔊 默认不做加购任务，可设置变量DPLH_ADDCAR='true'开启");
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    if (!$.nowater || 1) {
      if (_0x30a872 == "true") {
        $.nojifen = false;
        $.nobeans = false;
        $.log("\n去浏览店铺...");
        $.missionType = "viewShop";
        if (!$.bwater) {
          let _0x21c794 = _0x3bb7cf.getRandomEle($.openList, 1);
          $.goodsNumId = _0x21c794[0].userId;
          await _0x2ab249("mission");
          await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
          if ($.nojifen && $.nobeans) console.log("可能没水,换个时间再试试");else {
            for (let _0x1cef79 of $.openList) {
              $.goodsNumId = _0x1cef79.userId;
              await _0x2ab249("mission");
              await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
            }
            $.bwater = true;
          }
        } else for (let _0x368c64 of $.openList) {
          $.goodsNumId = _0x368c64.userId;
          await _0x2ab249("mission");
          await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
        }
      } else console.log("\n默认不做浏览店铺，设置变量DPLH_BSHOP='true'");
    }
    await _0x2ab249("myAward");
    await _0x2ab249("inviteList");
    $.index == 1 && _0x413b4c !== "false" && ($.inviteNick = $.MixNick, console.log("\n车头助力作者，后面都会助力 -> " + $.UserName));
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
  } catch (_0x29fb66) {
    console.log(_0x29fb66);
  }
}
async function _0x2ab249(_0x12c138) {
  if ($.outFlag) return;
  let _0x3bf995 = "https://jinggengjcq-isv.isvjcloud.com",
    _0x4f6722 = "",
    _0x4ad975 = "POST",
    _0xe73e13 = "";
  switch (_0x12c138) {
    case "activity_load":
      url = _0x3bf995 + "/dm/front/jdJoinCardtf/activity/load?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "") + "&user_id=" + $.userId, _0xe73e13 = {
        "jdToken": $.Token,
        "source": "01",
        "ak": "",
        "sk": "",
        "inviteNick": $.inviteNick || ""
      };
      if ($.joinVenderId) _0xe73e13 = {
        ..._0xe73e13,
        "shopId": "" + $.joinVenderId
      };
      _0x4f6722 = _0x549422("/jdJoinCardtf/activity/load", _0xe73e13);
      break;
    case "shopList":
      url = _0x3bf995 + "/dm/front/jdJoinCardtf/shop/shopList?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || ""), _0xe73e13 = {}, _0x4f6722 = _0x549422("/jdJoinCardtf/shop/shopList", _0xe73e13);
      break;
    case "绑定":
      url = _0x3bf995 + "/dm/front/jdJoinCardtf/customer/inviteRelation?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "") + "&user_id=" + $.userId, _0xe73e13 = {
        "inviterNick": $.inviteNick || ""
      }, _0x4f6722 = _0x549422("/jdJoinCardtf/customer/inviteRelation", _0xe73e13);
      break;
    case "mission":
      url = _0x3bf995 + "/dm/front/jdJoinCardtf/mission/completeMission?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || ""), _0xe73e13 = {
        "missionType": $.missionType
      };
      if ($.joinVenderId) _0xe73e13 = {
        ..._0xe73e13,
        "shopId": $.joinVenderId
      };
      if ($.goodsId) _0xe73e13 = {
        ..._0xe73e13,
        "goodsId": $.goodsId
      };
      if ($.goodsNumId) _0xe73e13 = {
        ..._0xe73e13,
        "goodsNumId": $.goodsNumId
      };
      _0x4f6722 = _0x549422("/jdJoinCardtf/mission/completeMission", _0xe73e13);
      break;
    case "抽奖":
      url = _0x3bf995 + "/dm/front/jdJoinCardtf/interactive/drawPos?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || ""), _0xe73e13 = {
        "dataType": "draw",
        "usedGameNum": "2"
      }, _0x4f6722 = _0x549422("/jdJoinCardtf/interactive/drawPos", _0xe73e13);
      break;
    case "followShop":
      url = _0x3bf995 + "/dm/front/jdJoinCardtf/followShop?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || ""), _0xe73e13 = {
        "actId": $.actId,
        "missionType": "collectShop"
      }, _0x4f6722 = _0x549422("/jdJoinCardtf/followShop", _0xe73e13);
      break;
    case "getAwardSettingList":
      url = _0x3bf995 + "/dm/front/jdJoinCardtf/awards/getAwardSettingList?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || ""), _0xe73e13 = {
        "dataType": "exchange"
      }, _0x4f6722 = _0x549422("/jdJoinCardtf/awards/getAwardSettingList", _0xe73e13);
      break;
    case "exchangePost":
      url = _0x3bf995 + "/dm/front/jdJoinCardtf/interactive/exchangePost?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || ""), _0xe73e13 = {
        "dataType": "exchange",
        "awardId": $.awardId
      }, _0x4f6722 = _0x549422("/jdJoinCardtf/interactive/exchangePost", _0xe73e13);
      break;
    case "addCart":
      url = _0x3bf995 + "/dm/front/jdJoinCardtf/addCart?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || ""), _0xe73e13 = {
        "actId": $.actId,
        "missionType": "addCart"
      }, _0x4f6722 = _0x549422("/jdJoinCardtf/addCart", _0xe73e13);
      break;
    case "myAward":
      url = _0x3bf995 + "/dm/front/jdJoinCardtf/awards/list?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || ""), _0xe73e13 = {
        "passes": "",
        "pageNo": 1,
        "pageSize": 9999
      }, _0x4f6722 = _0x549422("/jdJoinCardtf/awards/list", _0xe73e13);
      break;
    case "inviteList":
      url = _0x3bf995 + "/dm/front/jdJoinCardtf/customer/inviteList?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || ""), _0xe73e13 = {
        "missionType": "shareAct",
        "pageNo": 1,
        "pageSize": 10
      }, _0x4f6722 = _0x549422("/jdJoinCardtf/customer/inviteList", _0xe73e13);
      break;
    default:
      console.log("错误" + _0x12c138);
  }
  let _0x389ec2 = _0x4d7180(url, _0x4f6722, _0x4ad975);
  return new Promise(async _0x53c3ad => {
    $.post(_0x389ec2, (_0x5cb371, _0x81eb1a, _0x267f55) => {
      try {
        _0x5cb371 ? (_0x81eb1a && _0x81eb1a.statusCode && _0x81eb1a.statusCode == 493 && (console.log("此ip已被限制，请过10分钟后再执行脚本\n"), $.outFlag = true), $.okFlag = false) : _0x2a6d53(_0x12c138, _0x267f55);
      } catch (_0x483b1c) {
        console.log(_0x483b1c, _0x81eb1a);
      } finally {
        _0x53c3ad();
      }
    });
  });
}
function _0x540986(_0x4b0f5b) {
  let _0x239d8c = "";
  switch (_0x4b0f5b) {
    case "bdy_0x154ed0":
      const _0x11e60c = {
        "bdy_0x154ed0": _0x11e60c
      };
      _0x239d8c = _0x11e60c;
      break;
    case "bdy_0x2c605c":
      const _0xa5c4a7 = {
        "bdy_0x2c605c": _0xa5c4a7
      };
      _0x239d8c = _0xa5c4a7;
      break;
    case "bdy_0x5ade7a":
      const _0x3b1911 = {
        "bdy_0x5ade7a": _0x3b1911
      };
      _0x239d8c = _0x3b1911;
      break;
  }
}
async function _0x2a6d53(_0x4f3976, _0x3cacb9) {
  let _0x2ed64a = "";
  try {
    $.okFlag = true;
    (_0x4f3976 != "accessLogWithAD" || _0x4f3976 != "drawContent") && (_0x2ed64a = JSON.parse(_0x3cacb9));
  } catch (_0x24191e) {
    console.log("🤬 " + _0x4f3976 + " 数据异常");
    $.runFalag = false;
  }
  try {
    switch (_0x4f3976) {
      case "accessLogWithAD":
      case "drawContent":
      case "绑定":
        break;
      case "shopList":
        if (_0x2ed64a.success === true && _0x2ed64a.data) _0x2ed64a.data.status == 200 && ($.openList = _0x2ed64a.data.data || [], $.offList = $.openList.filter(_0x3a6e54 => !_0x3a6e54.open));else {}
        break;
      case "getAwardSettingList":
        if (_0x2ed64a.success === true && _0x2ed64a.data) {
          if (_0x2ed64a.data?.["status"] == 200) {
            _0x2ed64a = _0x2ed64a.data;
            for (let _0x1d7110 of _0x2ed64a.data.awardSettings) {
              console.log(_0x1d7110.awardName + ": id(" + _0x1d7110.id + ")--库存(" + _0x1d7110.remainNum + ")--需积分(" + _0x1d7110.awardDes + ")--" + _0x1d7110.exchangeFlag);
            }
          } else {
            $.log("" + (_0x2ed64a.errorMessage || _0x2ed64a.data.msg));
          }
        } else {}
        break;
      case "exchangePost":
        if (_0x2ed64a.success === true && _0x2ed64a.data) _0x2ed64a.data?.["status"] == 200 ? (_0x2ed64a = _0x2ed64a.data, $.log("兑换成功：" + _0x2ed64a.data.awardSendLog.awardName), _0x2ed64a.data.awardSendLog.awardType == "goods" && $.log("实物请手动填地址：" + $.Url)) : $.log("" + (_0x2ed64a.errorMessage || _0x2ed64a.data.msg));else {}
        break;
      case "activity_load":
        if (_0x2ed64a.success === true && _0x2ed64a.data) {
          if (_0x2ed64a.data?.["status"] == 200) {
            _0x2ed64a = _0x2ed64a.data;
            if (_0x2ed64a.msg || _0x2ed64a.data.isOpenCard) {
              if ((_0x2ed64a.msg || _0x2ed64a.data.isOpenCard || "").indexOf("绑定成功") > -1) $.toBind = 1;
            }
            $.endTime = _0x2ed64a.data.cusActivity.endTime || 0;
            $.sTime = _0x2ed64a.data.cusActivity.startTime || 0;
            $.MixNick = _0x2ed64a.data.missionCustomer.buyerNick || "";
            $.usedChance = _0x2ed64a.data.missionCustomer.usedChance || 0;
            $.hasCollectShop = _0x2ed64a.data.missionCustomer.hasCollectShop || 0;
            $.hasAddCart = _0x2ed64a.data.missionCustomer.hasAddCart || 0;
            $.remainPoint = _0x2ed64a.data.missionCustomer.remainPoint || 0;
            $.totalPoint = _0x2ed64a.data.missionCustomer.totalPoint || 0;
            _0x2ed64a.data.openCardMsg && console.log("🔊 " + _0x2ed64a.data.openCardMsg);
          } else $.log("" + (_0x2ed64a.errorMessage || _0x2ed64a.data.msg));
        } else {
          console.log(_0x3cacb9);
        }
        break;
      case "mission":
        if (_0x2ed64a.success === true && _0x2ed64a.data) {
          if (_0x2ed64a.data?.["status"] == 200) {
            _0x2ed64a = _0x2ed64a.data;
            if (_0x2ed64a.msg || _0x2ed64a.data.isOpenCard || _0x2ed64a.data.remark) console.log("🔊 " + (_0x2ed64a.msg || _0x2ed64a.data.isOpenCard || _0x2ed64a.data.remark || ""));
            $.openCard = _0x2ed64a.data.remark.includes("不是会员") ? true : false;
            $.nojifen = !_0x2ed64a.data.remark.includes("积分") ? true : false;
            $.nobeans = !_0x2ed64a.data.remark.includes("京豆") ? true : false;
          } else $.log("" + (_0x2ed64a.errorMessage || _0x2ed64a.data.msg));
        } else console.log(_0x3cacb9);
        break;
      case "inviteList":
        _0x2ed64a.success === true && _0x2ed64a.data ? _0x2ed64a.data?.["status"] == 200 ? (_0x2ed64a = _0x2ed64a.data, _0x2ed64a.data.inviteNum > 0 && console.log("\n已邀请：" + _0x2ed64a.data.inviteNum)) : $.log("" + (_0x2ed64a.errorMessage || _0x2ed64a.data.msg)) : console.log(_0x3cacb9);
        break;
      case "myAward":
        if (_0x2ed64a.success === true && _0x2ed64a.data) {
          if (_0x2ed64a.data?.["status"] == 200) {
            _0x2ed64a = _0x2ed64a.data;
            let _0x495c1c = 0;
            try {
              _0x495c1c = eval(_0x3cacb9.match(/\d+个?京豆/g).map(_0x5b47ba => _0x5b47ba.replace(/[\u4e00-\u9fa5]/g, "")).join("+"));
            } catch {}
            _0x495c1c > 0 && console.log("\n共获得 " + _0x495c1c + " 京豆🥔");
          } else $.log("" + (_0x2ed64a.errorMessage || _0x2ed64a.data.msg));
        } else console.log(_0x3cacb9);
        break;
      default:
        console.log(_0x4f3976 + "-> " + _0x3cacb9);
    }
    if (typeof _0x2ed64a == "object") {
      if (_0x2ed64a.errorMessage) {
        if (_0x2ed64a.errorMessage.indexOf("火爆") > -1) {}
      }
    }
  } catch {}
}
function _0x4d7180(_0x1309f1, _0x4c5d07, _0x4ec4d0 = "POST") {
  let _0x120f87 = {
    "Accept": "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-cn",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Cookie": _0x5ecb3d,
    "User-Agent": $.UA,
    "X-Requested-With": "XMLHttpRequest"
  };
  return _0x1309f1.indexOf("https://jinggengjcq-isv.isvjcloud.com") > -1 && (_0x120f87.Origin = "https://jinggengjcq-isv.isvjcloud.com", _0x120f87["Content-Type"] = "application/json; charset=utf-8", delete _0x120f87.Cookie), {
    "url": _0x1309f1,
    "method": _0x4ec4d0,
    "headers": _0x120f87,
    "body": _0x4c5d07,
    "timeout": 10 * 1000
  };
}
function _0x549422(_0x56074f, _0x576a38) {
  d = {
    "actId": $.actId,
    ..._0x576a38,
    "method": _0x56074f,
    "userId": $.userId,
    "buyerNick": $.MixNick || ""
  };
  sign2 = _0x436869(d);
  const _0x295ca0 = {
    "jsonRpc": "2.0",
    "params": {
      "commonParameter": {
        "m": "POST",
        "oba": sign2.sign,
        "timestamp": sign2.timeStamp,
        "userId": $.userId
      },
      "admJson": d
    }
  };
  return $.toStr(_0x295ca0, _0x295ca0);
}
function _0x436869(_0x5e8495) {
  return AppSecret = _0x359201 || "6cc5dbd8900e434b94c4bdb0c16348ed", key = _0x5a8fe8 || "c1614da9ac68", time2 = new Date().valueOf(), s2 = encodeURIComponent(JSON.stringify(_0x5e8495)), c = new RegExp("'", "g"), A = new RegExp("~", "g"), s2 = s2.replace(c, "%27"), s2 = s2.replace(A, "%7E"), signBody = "f" + key + "D" + s2 + "c" + time2 + AppSecret, sign = _0x67c534.MD5(signBody.toLowerCase()).toString(), {
    "sign": sign,
    "timeStamp": time2
  };
}
async function _0x475e2d() {
  id = _0x67c534.MD5(Date.now()).toString().substring(0, 16);
  _0x67c534.enc.Base64._map = "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/";
  const _0x1a6aa0 = _0x67c534.enc.Utf8.parse(id),
    _0x384206 = _0x67c534.enc.Base64.stringify(_0x1a6aa0);
  return ep = encodeURIComponent(JSON.stringify({
    "hdid": "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
    "ts": new Date().getTime(),
    "ridx": -1,
    "cipher": {
      "sv": "EG==",
      "ad": _0x384206,
      "od": "",
      "ov": "Ctq=",
      "ud": _0x384206
    },
    "ciphertype": 5,
    "version": "1.2.0",
    "appname": "com.jingdong.app.mall"
  })), "jdapp;android;11.0.2;;;appBuild/97565;ef/1;ep/" + ep + ";jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 9; Note9 Build/PKQ1.181203.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046010 Mobile Safari/537.36";
}
function _0x17802b(_0x124236) {
  _0x124236 = _0x124236 || 32;
  let _0x4fc7a2 = "abcdef0123456789",
    _0x332c8b = _0x4fc7a2.length,
    _0x5db939 = "";
  for (let _0x41b9bc = 0; _0x41b9bc < _0x124236; _0x41b9bc++) _0x5db939 += _0x4fc7a2.charAt(Math.floor(Math.random() * _0x332c8b));
  return _0x5db939;
}
function _0x3e67df(_0x20591d) {
  if (typeof _0x20591d == "string") {
    try {
      return JSON.parse(_0x20591d);
    } catch (_0x833163) {
      return console.log(_0x833163), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
    }
  }
}
async function _0x54fb67() {
  if (!$.joinVenderId) return;
  return new Promise(async _0x17e7ba => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    let _0x15705b = "";
    if ($.shopactivityId) _0x15705b = ",\"activityId\":" + $.shopactivityId;
    const _0x4d54ad = "{\"venderId\":\"" + $.joinVenderId + "\",\"shopId\":\"" + $.joinVenderId + "\",\"bindByVerifyCodeFlag\":1,\"registerExtend\":{},\"writeChildFlag\":0" + _0x15705b + ",\"channel\":406}",
      _0xa0877d = {
        "appId": "27004",
        "apid": "shopmember_m_jd_com",
        "fn": "bindWithVender",
        "ver": "9.2.0",
        "cl": "H5",
        "body": JSON.parse(_0x4d54ad),
        "code": 0,
        "user": $.UserName,
        "ua": $.UA
      };
    for (var _0xe56ff3 = "", _0x1ebdfe = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", _0x10e419 = 0; _0x10e419 < 16; _0x10e419++) {
      var _0x4c80b9 = Math.round(Math.random() * (_0x1ebdfe.length - 1));
      _0xe56ff3 += _0x1ebdfe.substring(_0x4c80b9, _0x4c80b9 + 1);
    }
    uuid = Buffer.from(_0xe56ff3, "utf8").toString("base64");
    ep = encodeURIComponent(JSON.stringify({
      "hdid": "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
      "ts": new Date().getTime(),
      "ridx": -1,
      "cipher": {
        "screen": "CJS0CseyCtK4",
        "osVersion": "CJGkEK==",
        "uuid": uuid
      },
      "ciphertype": 5,
      "version": "1.0.3",
      "appname": "com.360buy.jdmobile"
    }));
    const _0x15ef1a = await _0x3e69bb.getbody(_0xa0877d),
      _0x379310 = {
        "url": "https://api.m.jd.com/client.action?" + _0x15ef1a + "&uuid=88888",
        "headers": {
          "accept": "*/*",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "cookie": _0x5ecb3d,
          "origin": "https://shopmember.m.jd.com/",
          "user-agent": $.UA
        }
      };
    $.get(_0x379310, async (_0x4fdc0a, _0x233bca, _0x36168d) => {
      try {
        if (_0x4fdc0a) _0x233bca && typeof _0x233bca.statusCode != "undefined" && _0x233bca.statusCode == 403 && console.log("此ip已无法开卡，请更换IP后再执行脚本\n");else {
          _0x36168d = _0x36168d && _0x36168d.match(/jsonp_.*?\((.*?)\);/) && _0x36168d.match(/jsonp_.*?\((.*?)\);/)[1] || _0x36168d;
          let _0x35f8c1 = $.toObj(_0x36168d, _0x36168d);
          if (_0x35f8c1 && typeof _0x35f8c1 == "object") {
            if (_0x35f8c1 && _0x35f8c1.success === true) {
              $.errorJoinShop = _0x35f8c1.message;
              if (_0x35f8c1.result && _0x35f8c1.result.giftInfo) for (let _0x25feea of _0x35f8c1.result.giftInfo.giftList) {
                console.log("🔊 入会获得：" + _0x25feea.discountString + _0x25feea.prizeName + _0x25feea.secondLineDesc);
              }
            } else _0x35f8c1 && typeof _0x35f8c1 == "object" && _0x35f8c1.message ? ($.errorJoinShop = _0x35f8c1.message, console.log("" + (_0x35f8c1.message || ""))) : console.log(_0x36168d);
          } else console.log(_0x36168d);
        }
      } catch (_0x1f0629) {
        $.logErr(_0x1f0629, _0x233bca);
      } finally {
        _0x17e7ba();
      }
    });
  });
}
async function _0x1f5399() {
  return new Promise(async _0x1541b8 => {
    const _0x1ffe54 = "{\"venderId\":\"" + $.joinVenderId + "\",\"channel\":406,\"payUpShop\":true}",
      _0x27be31 = {
        "appid": "jd_shop_member",
        "functionId": "bindWithVender",
        "clientVersion": "9.2.0",
        "client": "H5",
        "body": JSON.parse(_0x1ffe54)
      };
    await $.wait(1000);
    const _0x5768c5 = await _0x3e69bb("8adfb", _0x27be31),
      _0x3a9647 = {
        "url": "https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body=" + _0x1ffe54 + "&clientVersion=9.2.0&client=H5&uuid=88888&h5st=" + encodeURIComponent(_0x5768c5),
        "headers": {
          "accept": "*/*",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "cookie": _0x5ecb3d,
          "origin": "https://shopmember.m.jd.com/",
          "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
        }
      };
    $.get(_0x3a9647, async (_0x56263b, _0x4ce4e0, _0x115ea3) => {
      try {
        if (_0x56263b) _0x4ce4e0 && typeof _0x4ce4e0.statusCode != "undefined" && _0x4ce4e0.statusCode == 403 && console.log("此ip已无法开卡，请更换IP后再执行脚本\n");else {
          _0x115ea3 = _0x115ea3 && _0x115ea3.match(/jsonp_.*?\((.*?)\);/) && _0x115ea3.match(/jsonp_.*?\((.*?)\);/)[1] || _0x115ea3;
          let _0x16a61c = $.toObj(_0x115ea3, _0x115ea3);
          _0x16a61c && typeof _0x16a61c == "object" ? _0x16a61c && _0x16a61c.success == true && (console.log("去加入：" + (_0x16a61c.result.shopMemberCardInfo.venderCardName || "") + " (" + $.joinVenderId + ")"), $.shopactivityId = _0x16a61c.result.interestsRuleList && _0x16a61c.result.interestsRuleList[0] && _0x16a61c.result.interestsRuleList[0].interestsInfo && _0x16a61c.result.interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x115ea3);
        }
      } catch (_0xa71de9) {
        $.logErr(_0xa71de9, _0x4ce4e0);
      } finally {
        _0x1541b8();
      }
    });
  });
}
function _0x55a341(_0x262c82) {
  return new Promise(_0x2888ca => {
    const _0x345773 = {
      "url": _0x262c82 + "?" + new Date(),
      "timeout": 10000,
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
      }
    };
    $.get(_0x345773, async (_0x359012, _0x191233, _0x416acb) => {
      try {
        if (_0x359012) $.getAuthorCodeListerr = false;else {
          if (_0x416acb) _0x416acb = JSON.parse(_0x416acb);
          $.getAuthorCodeListerr = true;
        }
      } catch (_0xf2fcb0) {
        $.logErr(_0xf2fcb0, _0x191233);
        _0x416acb = null;
      } finally {
        _0x2888ca(_0x416acb);
      }
    });
  });
}
function _0x59b4e4(_0x44702c, _0x3d0b32) {
  return Math.floor(Math.random() * (_0x3d0b32 - _0x44702c)) + _0x44702c;
}
async function _0x405aaf() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + _0x762644(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function _0x762644(_0x4677d4) {
  _0x4677d4 = _0x4677d4 || 32;
  let _0x28fdab = "abcdef0123456789",
    _0x4589a9 = _0x28fdab.length,
    _0x5c5535 = "";
  for (let _0x25ee2d = 0; _0x25ee2d < _0x4677d4; _0x25ee2d++) {
    _0x5c5535 += _0x28fdab.charAt(Math.floor(Math.random() * _0x4589a9));
  }
  return _0x5c5535;
}
function _0x2a34f7() {
  let _0x400a85 = {
    "url": "https://jinggengjcq-isv.isvjcloud.com/jdbeverage/static/js/index." + $.jscode + ".js",
    "headers": {
      "User-Agent": $.UA
    }
  };
  return new Promise(_0x39fc08 => {
    $.get(_0x400a85, async (_0x34d6f0, _0x2baad3, _0x5204c6) => {
      try {
        if (_0x34d6f0) console.log("" + JSON.stringify(_0x34d6f0)), console.log("get请求失败，请检查网路重试");else {
          $.bianh = "pages-" + $.bianh + "-" + $.bianh;
          let _0x50ab3b = new RegExp("\"" + $.bianh + "\":\"([0-9a-f]{8})\"");
          $.bianh = $.bianh + "." + _0x5204c6.match(_0x50ab3b)[1];
          let _0x30183d = await _0x48226b("https://jinggengjcq-isv.isvjcloud.com/jdbeverage/static/js/" + $.bianh + ".js");
          _0x359201 = _0x30183d.match(/as:\"([0-9a-f]{32})\"/)[1];
          _0x5a8fe8 = _0x30183d.match(/ak:\"([0-9a-f]{12})\"/)[1];
        }
      } catch (_0x55c790) {} finally {
        _0x39fc08();
      }
    });
  });
}
function _0x13aa19(_0x46187f) {
  let _0x49561b = {
    "url": _0x46187f,
    "headers": {
      "User-Agent": $.UA
    }
  };
  return new Promise(_0x217996 => {
    $.get(_0x49561b, async (_0x12f354, _0xb01dfa, _0xf56664) => {
      try {
        _0x12f354 ? (console.log("" + JSON.stringify(_0x12f354)), console.log("get请求失败，请检查网路重试")) : $.jscode = _0xf56664.match(/index.([0-9a-f]{8}).js/)[1];
      } catch (_0x7eccd9) {} finally {
        _0x217996();
      }
    });
  });
}
function _0x13c58d(_0xd69053 = +new Date()) {
  var _0x2d5236 = new Date(_0xd69053 + 8 * 3600 * 1000);
  return _0x2d5236.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function _0x48226b(_0x4d0ca9) {
  let _0x4be486 = {
    "url": _0x4d0ca9,
    "headers": {
      "User-Agent": $.UA
    }
  };
  return new Promise(_0x595a51 => {
    $.get(_0x4be486, async (_0x22804f, _0x459076, _0x54485d) => {
      try {
        if (_0x22804f) {
          console.log("" + JSON.stringify(_0x22804f));
          console.log("get请求失败，请检查网路重试");
        } else {}
      } catch (_0x10f4cb) {} finally {
        _0x595a51(_0x54485d);
      }
    });
  });
}

function Env(o,t){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((r,i)=>{s.call(this,t,(t,e,s)=>{t?i(t):r(e)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.logLevels={debug:0,info:1,warn:2,error:3},this.logLevelPrefixs={debug:"[DEBUG] ",info:"[INFO] ",warn:"[WARN] ",error:"[ERROR] "},this.logLevel="info",this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null,...s){try{return JSON.stringify(t,...s)}catch{return e}}getjson(t,e){let s=e;if(this.getdata(t))try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(r=>{this.get({url:t},(t,e,s)=>r(s))})}runScript(a,o){return new Promise(r=>{let t=this.getdata("@chavy_boxjs_userCfgs.httpapi");t=t&&t.replace(/\n/g,"").trim();var e=(e=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"))?+e:20,[s,i]=(e=o&&o.timeout?o.timeout:e,t.split("@"));this.post({url:`http://${i}/v1/scripting/evaluate`,body:{script_text:a,mock_type:"cron",timeout:e},headers:{"X-Key":s,Accept:"*/*"},timeout:e},(t,e,s)=>r(s))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};this.fs=this.fs||require("fs"),this.path=this.path||require("path");var t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),r=!s&&this.fs.existsSync(e);if(!s&&!r)return{};r=s?t:e;try{return JSON.parse(this.fs.readFileSync(r))}catch(t){return{}}}writedata(){var t,e,s,r,i;this.isNode()&&(this.fs=this.fs||require("fs"),this.path=this.path||require("path"),t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),r=!(s=this.fs.existsSync(t))&&this.fs.existsSync(e),i=JSON.stringify(this.data),!s&&r?this.fs.writeFileSync(e,i):this.fs.writeFileSync(t,i))}lodash_get(t,e,s){let r=t;for(const t of e.replace(/\[(\d+)\]/g,".$1").split("."))if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,r,e){return Object(t)===t&&((r=Array.isArray(r)?r:r.toString().match(/[^.[\]]+/g)||[]).slice(0,-1).reduce((t,e,s)=>Object(t[e])===t[e]?t[e]:t[e]=Math.abs(r[s+1])>>0==+r[s+1]?[]:{},t)[r[r.length-1]]=e),t}getdata(t){let e=this.getval(t);if(/^@/.test(t)){var[,s,r]=/^@(.*?)\.(.*?)$/.exec(t);if(s=s?this.getval(s):"")try{const t=JSON.parse(s);e=t?this.lodash_get(t,r,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){var[,r,i]=/^@(.*?)\.(.*?)$/.exec(e),a=this.getval(r),a=r?"null"===a?null:a||"{}":"{}";try{const e=JSON.parse(a);this.lodash_set(e,i,t),s=this.setval(JSON.stringify(e),r)}catch(e){this.lodash_set(a={},i,t),s=this.setval(JSON.stringify(a),r)}}else s=this.setval(t,e);return s}getval(t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got||require("got"),this.cktough=this.cktough||require("tough-cookie"),this.ckjar=this.ckjar||new this.cktough.CookieJar,t&&(t.headers=t.headers||{},t)&&(t.headers=t.headers||{},void 0===t.headers.cookie)&&void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar)}tmout(){return new Promise((t,e)=>{this.tmoutId=setTimeout(()=>{this.prms.cancel(),e({message:"timemout",response:""})},5e4)})}get(t,a=()=>{}){switch(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"],delete t.headers["content-type"],delete t.headers["content-length"]),t.params&&(t.url+="?"+this.queryStr(t.params)),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,e,s)=>{!t&&e&&(e.body=s,e.statusCode=e.status||e.statusCode,e.status=e.statusCode),a(t,e,s)});break;case"Quantumult X":this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{var{statusCode:t,statusCode:e,headers:s,body:r,bodyBytes:i}=t;a(null,{status:t,statusCode:e,headers:s,body:r,bodyBytes:i},r,i)},t=>a(t&&t.error||"UndefinedError"));break;case"Node.js":this.initGotEnv(t),this.prms=this.got(t).on("redirect",(t,e)=>{try{var s;t.headers["set-cookie"]&&((s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString())&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar)}catch(t){this.logErr(t)}}),Promise.race([this.prms,this.tmout()]).then(t=>{var{statusCode:t,statusCode:e,headers:s,rawBody:r,body:i}=t;a(null,{status:t,statusCode:e,headers:s,rawBody:r,body:i},i),clearTimeout(this.tmoutId)},t=>{var{message:t,response:e}=t;clearTimeout(this.tmoutId),a(t,e,e&&e.body)})}}post(t,a=()=>{}){var e=t.method?t.method.toLocaleLowerCase():"post";switch(t.body&&t.headers&&!t.headers["Content-Type"]&&!t.headers["content-type"]&&(t.headers["content-type"]="application/x-www-form-urlencoded"),t.headers&&(delete t.headers["Content-Length"],delete t.headers["content-length"]),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[e](t,(t,e,s)=>{!t&&e&&(e.body=s,e.statusCode=e.status||e.statusCode,e.status=e.statusCode),a(t,e,s)});break;case"Quantumult X":t.method=e,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{var{statusCode:t,statusCode:e,headers:s,body:r,bodyBytes:i}=t;a(null,{status:t,statusCode:e,headers:s,body:r,bodyBytes:i},r,i)},t=>a(t&&t.error||"UndefinedError"));break;case"Node.js":this.initGotEnv(t);var{url:s,...r}=t;this.prms=this.got[e](s,r),Promise.race([this.prms,this.tmout()]).then(t=>{var{statusCode:t,statusCode:e,headers:s,rawBody:r,body:i}=t;a(null,{status:t,statusCode:e,headers:s,rawBody:r,body:i},i),clearTimeout(this.tmoutId)},t=>{var{message:t,response:e}=t;clearTimeout(this.tmoutId),a(t,e,e&&e.body)})}}time(t,e=null){var s,r={"M+":(e=e?new Date(e):new Date).getMonth()+1,"d+":e.getDate(),"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(s in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[s]:("00"+r[s]).substr((""+r[s]).length)));return t}queryStr(e){let s="";for(const r in e){let t=e[r];null!=t&&""!==t&&("object"==typeof t&&(t=JSON.stringify(t)),s+=`${r}=${t}&`)}return s=s.substring(0,s.length-1)}msg(t=o,e="",s="",r={}){var i,a=r=>{const{$open:t,$copy:e,$media:i,$mediaMime:a}=r;switch(typeof r){case void 0:return r;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:r};case"Loon":case"Shadowrocket":return r;case"Quantumult X":return{"open-url":r};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:var o={},s=r.openUrl||r.url||r["open-url"]||t;if(s&&Object.assign(o,{action:"open-url",url:s}),(s=r["update-pasteboard"]||r.updatePasteboard||e)&&Object.assign(o,{action:"clipboard",text:s}),i){let t,e,s;if(i.startsWith("http"))t=i;else if(i.startsWith("data:")){const[r]=i.split(";"),[,a]=i.split(",");e=a,s=r.replace("data:","")}else e=i,s=(t=>{var e,s={JVBERi0:"application/pdf",R0lGODdh:"image/gif",R0lGODlh:"image/gif",iVBORw0KGgo:"image/png","/9j/":"image/jpg"};for(e in s)if(0===t.indexOf(e))return s[e];return null})(i);Object.assign(o,{"media-url":t,"media-base64":e,"media-base64-mime":a??s})}return Object.assign(o,{"auto-dismiss":r["auto-dismiss"],sound:r.sound}),o;case"Loon":{const e={};(s=r.openUrl||r.url||r["open-url"]||t)&&Object.assign(e,{openUrl:s});var n=r.mediaUrl||r["media-url"];return(n=i?.startsWith("http")?i:n)&&Object.assign(e,{mediaUrl:n}),console.log(JSON.stringify(e)),e}case"Quantumult X":{const a={};(o=r["open-url"]||r.url||r.openUrl||t)&&Object.assign(a,{"open-url":o});n=r["media-url"]||r.mediaUrl;return(n=i?.startsWith("http")?i:n)&&Object.assign(a,{"media-url":n}),(s=r["update-pasteboard"]||r.updatePasteboard||e)&&Object.assign(a,{"update-pasteboard":s}),console.log(JSON.stringify(a)),a}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(t,e,s,a(r));break;case"Quantumult X":$notify(t,e,s,a(r));break;case"Node.js":}this.isMuteLog||((i=["","==============📣系统通知📣=============="]).push(t),e&&i.push(e),s&&i.push(s),console.log(i.join("\n")),this.logs=this.logs.concat(i))}debug(...t){this.logLevels[this.logLevel]<=this.logLevels.debug&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.debug+t.map(t=>t??String(t)).join(this.logSeparator)))}info(...t){this.logLevels[this.logLevel]<=this.logLevels.info&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.info+t.map(t=>t??String(t)).join(this.logSeparator)))}warn(...t){this.logLevels[this.logLevel]<=this.logLevels.warn&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.warn+t.map(t=>t??String(t)).join(this.logSeparator)))}error(...t){this.logLevels[this.logLevel]<=this.logLevels.error&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.error+t.map(t=>t??String(t)).join(this.logSeparator)))}log(...t){0<t.length&&(this.logs=[...this.logs,...t]),console.log(t.map(t=>t??String(t)).join(this.logSeparator))}logErr(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️${this.name}, 错误!`,t);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,void 0!==t.message?t.message:t)}}wait(e){return new Promise(t=>setTimeout(t,e))}done(t={}){var e=((new Date).getTime()-this.startTime)/1e3;switch(this.log("",`🔔${this.name}, 结束! 🕛 ${e} 秒`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}}(o,t)}