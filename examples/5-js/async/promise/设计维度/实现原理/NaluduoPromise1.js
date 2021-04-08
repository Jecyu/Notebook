/*
 * @Author: naluduo233
 * @Date: 2021-04-04 11:57:44
 * @LastEditors: naluduo233
 * @LastEditTime: 2021-04-04 11:59:06
 * @FilePath: /examples/5-js/async/promise/设计维度/实现原理/NaluduoPromise1.js
 * @Description: 
 */
// 三个状态
const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";
class NaluduoPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined; // 存放成功状态的值
    this.reason = undefined; // 存放失败状态的值

    // 调用此方法就是成功
    let resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
      }
    };

    // 调用此方法就是失败
    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
      }
    };

    try {
      // 立即执行，将 resolve 和 reject 函数传给使用者
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  // 包含一个 then 方法，并接收两个参数 onFUlfilled、onRejected
  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value); // 延迟绑定回调函数
    }

    if (this.status === onRejected) {
      onRejected(this.reason);
    }
  }
}
module.exports = NaluduoPromise;