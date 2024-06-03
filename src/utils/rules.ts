/**
 * 邮箱
 * @param {string} s
 */
export function isEmail(s: string): boolean {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

/**
 * 手机号码
 * @param {string} s
 */
export function isMobile(s: string): boolean {
  return /^1[0-9]{10}$/.test(s)
}

/**
 * 电话号码
 * @param {string} s
 */
export function isPhone(s: string): boolean {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

/**
 * URL地址
 * @param {string} s
 */
export function isURL(s: string): boolean {
  return /^http[s]?:\/\/.*/.test(s)
}

/**
 * 身份证号
 * @param {string} id
 */
export function isID(id: string): boolean {
  let format =
    /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/
  if (!format.test(id)) {
    return false
  }
  let year = id.substr(6, 4),
    month = id.substr(10, 2),
    date = id.substr(12, 2),
    time = Date.parse(month + '-' + date + '-' + year),
    now_time = Date.now(),
    dates = new Date(parseInt(year), parseInt(month), 0).getDate()
  if (time > now_time || parseInt(date) > dates) {
    return false
  }
  let c = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2)
  let b = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2')
  let id_array = id.split('')
  let sum = 0
  for (let k = 0; k < 17; k++) {
    sum += parseInt(id_array[k]) * c[k]
  }
  if (id_array[17].toUpperCase() != b[sum % 11].toUpperCase()) {
    return false
  }
  return true
}

/**
 * 身份证号计算年龄 性别  出生日期
 * @param {string} UUserCard
 */
export function IdCard(UUserCard: string): { briday: string; sex: number; age: number } {
  let briday =
    UUserCard.substring(6, 10) +
    '-' +
    UUserCard.substring(10, 12) +
    '-' +
    UUserCard.substring(12, 14)
  let sex = parseInt(UUserCard.substr(16, 1)) % 2 == 1 ? 2 : 1
  let myDate = new Date()
  let month = myDate.getMonth() + 1
  let day = myDate.getDate()
  let age = myDate.getFullYear() - parseInt(UUserCard.substring(6, 10)) - 1
  if (
    parseInt(UUserCard.substring(10, 12)) < month ||
    (parseInt(UUserCard.substring(10, 12)) == month && parseInt(UUserCard.substring(12, 14)) <= day)
  ) {
    age++
  }
  let ob = {
    briday: briday,
    sex: sex,
    age: age,
  }
  return ob
}

export function formatTen(num: number): string {
  return num > 9 ? num.toString() : '0' + num
}

//标准时间转年月日---
export function TimeYY(date: Date): string {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  return (
    year +
    '-' +
    formatTen(month) +
    '-' +
    formatTen(day) +
    ' ' +
    formatTen(hour) +
    ':' +
    formatTen(minute) +
    ':' +
    formatTen(second)
  )
}

export function TimeYYdAY(date: Date): { year: number; month: string; day: string; week: string } {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()

  let weekArray = new Array('日', '一', '二', '三', '四', '五', '六')
  let week = weekArray[new Date(date).getDay()]
  let data = {
    year: year,
    month: formatTen(month),
    day: formatTen(day),
    week: week,
  }
  return data
}
//倒计时
export function daojishi(
  endTime: number,
  startTime: number,
): { day: number; hour: number; minutes: number; seconds: number; mmsec: number } {
  let date = endTime - startTime
  let mmsec = date % 1000
  let seconds = Math.floor((date / 1000) % 60)
  let minutes = Math.floor((date / 1000 / 60) % 60)
  let hour = Math.floor((date / 1000 / 60 / 60) % 24)
  let day = Math.floor(date / 1000 / 60 / 60 / 24)
  return {
    day: day,
    hour: hour,
    minutes: minutes,
    seconds: seconds,
    mmsec: mmsec,
  }
}
//计算后多少分钟之后的时间
export function addMinutes(date: Date, minutes: number): Date {
  minutes = parseInt(minutes.toString())
  let interTimes = minutes * 60 * 1000
  interTimes = parseInt(interTimes.toString())
  return new Date(Date.parse(date.toString()) + interTimes)
}

//标准时间转年月日
export function TimeDate(date: Date): string {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  return year.toString().substr(2, 2) + formatTen(month)
}

//获取日期的前十天
export function GetDateStr(AddDayCount: number): string {
  let dd = new Date()
  dd.setDate(dd.getDate() + AddDayCount)
  let y = dd.getFullYear()
  let m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1
  let d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate()
  return y + '-' + m + '-' + d
}

//时间戳转时间
// 时间戳转换成时间
export function timestampToTime(cjsj: number): string {
  let date = new Date(cjsj)
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
  let h = date.getHours() + ':'
  let m = date.getMinutes() + ':'
  let s = date.getSeconds()
  return Y + M + D + h + m + s
}

export function timestampToTimes(cjsj: number): string {
  let date = new Date(cjsj)
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
  let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  return Y + M + D + h + m
}
