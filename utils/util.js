const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

function getTimeStrByStamp(timeStamp) {
  let nowTime = new Date()
  let tranTime = new Date(timeStamp)
  let chaTime = nowTime.getTime() - tranTime.getTime();
  let tempValue = 0;
  let distanceTimeStr = "刚刚"
  if (chaTime < 60000) {
    distanceTimeStr = "刚刚";
  } else if (chaTime < 3600000) {
    //小时内 用分钟
    if (chaTime < 60000) {
      distanceTimeStr = "1分钟前";
    } else {
      tempValue = parseInt(chaTime / 60000);
      distanceTimeStr = tempValue + "分钟前";
    }
  } else if (chaTime < 86400000) {
    //1天内 用小时
    if (chaTime < 3600000) {
      distanceTimeStr = "1小时前";
    } else {
      tempValue = parseInt(chaTime / 3600000);
      distanceTimeStr = tempValue + "小时前";
    }
  } else if (chaTime < 172800000) {
    //2天内
    distanceTimeStr = "昨天 " + tranTime.getHours() + ':' + tranTime.getMinutes();
  } else if (chaTime < 259200000) {
    //3天内
    distanceTimeStr = "前天 " + tranTime.getHours() + ':' + tranTime.getMinutes();
  } else if (chaTime - 31536299594 < 0) {
    //一年内
    distanceTimeStr = (tranTime.getMonth() + 1) + '-' + tranTime.getDate() + ' ' + tranTime.getHours() + ':' + tranTime.getMinutes()
  } else {
    distanceTimeStr = tranTime.getFullYear() + '-' + (tranTime.getMonth() + 1) + ':' + '-' + tranTime.getDate();
  }
  return distanceTimeStr;
}

module.exports = {
  formatTime,
  getTimeStrByStamp
}
