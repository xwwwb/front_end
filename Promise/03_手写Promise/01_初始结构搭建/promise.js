function Promise(executor) {
	// 同步调用 执行器函数

	// 添加属性
	this.PromiseState = "pending"
	this.PromiseResult = null

	// 声明属性
	this.callbacks = []
	// 保存实例对象的this值
	const self = this
	function resolve(data) {
		// 判断状态
		if (self.PromiseState !== "pending") return
		// console.log(this) // 这里为什么是window
		// 1.修改对象的状态(promiseState)
		self.PromiseState = "fulfilled"
		// 2.设置对象结果值(promiseResult)
		self.PromiseResult = data
		self.callbacks.forEach(item => {
			item.onResolved(data)
		})
	}
	function reject(data) {
		if (self.PromiseState !== "pending") return
		// console.log(this) // 这里为什么是window
		self.PromiseState = "rejected"
		self.PromiseResult = data
		self.callbacks.forEach(item => {
			item.onRejected(data)
		})
	}
	try {
		executor(resolve, reject)
	} catch (e) {
		reject(e)
	}
}

Promise.prototype.then = function (onResolved, onRejected) {
	const self = this
	// 有关下面this指向和try 有疑问 好像前两个不用try 第三个用
	function callback(type) {
		// 这里的try catch好像无意义 因为上面处理过异常了
		try {
			// 获取回调函数的执行结果
			let result = type(self.PromiseResult)
			// 判断 是否为promise
			if (result instanceof Promise) {
				result.then(v => {
					resolve(v)
				}, r => {
					reject(r)
				})
			} else {
				resolve(result)
			}
		} catch (e) {
			reject(e)
		}
	}
	return new Promise((resolve, reject) => {
		console.log("开始执行then了 then的this", this)
		if (this.PromiseState === "fulfilled") {
			callback(onResolved)
		}
		if (this.PromiseState === "rejected") {
			callback(onRejected)
		}
		// if (this.PromiseState === "pending") {
		// 	console.log("这里不对 这里的promise实例包裹的异步任务 但是会先执行then")
		// }
		if (this.PromiseState === 'pending') {
			// 保存回调函数
			this.callbacks.push({
				onRejected: function () {
					callback(onRejected)
				},
				onResolved: function () {
					callback(onResolved)
				}
			})
		}
	})
}
