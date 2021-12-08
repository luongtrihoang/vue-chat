'use strict'

import * as dayjs from 'dayjs'
import { FORMAT_DATE } from './../constants/date'

/**
 * 2つは同じ年月か？
 * @param {Date} date1 - 比較対象1
 * @param {Date} date2 - 比較対象2
 * @returns {boolean} - 比較結果
 */
const isSameYearMonth = (date1, date2) => {
  // Dateオブジェクトでなければ偽判定とする
  if ([date1, date2].some((d) => !isValidDate(d))) {
    return false
  }
  // 年月を比較する
  const date1YearMonth = date1.getFullYear() + date1.getMonth() + 1
  const date2YearMonth = date2.getFullYear() + date2.getMonth() + 1
  return date1YearMonth === date2YearMonth
}

/**
 * 2つは同じ年月日か？
 * @param {Date} date1 - 比較対象1
 * @param {Date} date2 - 比較対象2
 * @returns {boolean} - 比較結果
 */
const isSameDay = (date1, date2) => {
  // 不正な日付なら絞り込まない
  if ([date1, date2].some((d) => !isValidDate(d))) return false
  // 日付の文字列にして同日か比較
  return date1.toDateString() === date2.toDateString()
}

/**
 * 0時Dateを取得する
 * @param {Date} date - 対象
 * @returns {Date} - 0時Date
 */
const getMidnightDate = (date) => {
  // 不正な日付なら何もしない
  if (!isValidDate(date)) return date

  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

/**
 * valid Dateか？
 * @param {Date} date - 対象
 * @returns {boolean} - 結果
 */
const isValidDate = (date) => {
  return dayjs(date).isValid()
}

/**
 * Format Date Time
 * @param {Date} date - 対象
 * @returns {string} - 結果
 */
const formatDateTime = (date) => {
  if (!isValidDate(date)) return ''

  return dayjs(date).format(FORMAT_DATE.DATE_TIME)
}

/**
 * Format Date
 * @param {Date} date - 対象
 * @returns {string} - 結果
 */
const formatDate = (date) => {
  if (!isValidDate(date)) return ''

  return dayjs(date).format(FORMAT_DATE.DATE)
}

/**
 * Format Time
 * @param {Date} date - 対象
 * @returns {string} - 結果
 */
const formatTime = (date) => {
  if (!isValidDate(date)) return ''

  return dayjs(date).format(FORMAT_DATE.TIME)
}

/**
 * 来月を算出する
 * @param {Date} date - 対象
 * @returns {Date} - 来月
 */
const nextMonth = (date) => {
  if (date.getMonth() === 11) {
    return new Date(date.getFullYear() + 1, 0)
  } else {
    return new Date(date.getFullYear(), date.getMonth() + 1)
  }
}

/**
 * 先月を算出する
 * @param {Date} date - 対象
 * @returns {Date} - 先月
 */
const lastMonth = (date) => {
  if (date.getMonth() === 0) {
    return new Date(date.getFullYear() - 1, 11)
  } else {
    return new Date(date.getFullYear(), date.getMonth() - 1)
  }
}

/**
 * 文字列をparseしてDateオブジェクトを返す
 * @param {string} dateString - ISO 8601 format
 * @returns {Date} - As Javascript Date
 */
const toDate = (dateString) => {
  return dayjs(dateString).toDate()
}

export const dateHelper = Object.freeze({
    isSameYearMonth,
    isSameDay,
    getMidnightDate,
    isValidDate,
    formatDate,
    formatDateTime,
    formatTime,
    nextMonth,
    lastMonth,
    toDate
})
