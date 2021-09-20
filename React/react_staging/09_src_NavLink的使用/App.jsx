import React, { Component } from 'react'
import {NavLink,BrowserRouter,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* 原生html中靠<a>跳转到不同的页面 */}
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

							{/* 在react中靠路由链接实现切换组件  编写路由链接*/}
							{/* 如果使用了activeClassName 则不会默认指定active属性 使用activeClassName所规定的属性 */}
							{/* 若不使用activeClassName 则默认指定为active到class中 */}
							  <NavLink activeClassName=" " className="list-group-item" to="/about">About</NavLink>
							 <NavLink activeClassName="active demo" className="list-group-item" to="/home">Home</NavLink>
			
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								
								<Route path="/about" component={About}/>
								<Route path="/home" component={Home}/>
							
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
