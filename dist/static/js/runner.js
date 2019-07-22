
let consoleInfo = []
// 重写window.error
window.onerror = function (msg, url, row, col) {
  consoleInfo.push({ data: { msg, url, row, col }, type: 'error' })
  return false
}
// 重写console
if (console) {
  const ableMethods = ['log', 'info', 'debug', 'warn', 'error']
  for (let item of ableMethods) {
    console[item] = function (data) {
      consoleInfo.push({ data, type: item })
    }
  }
}
// 重写document.write
document.write = function (data) {
  document.body.innerHTML += data
}
