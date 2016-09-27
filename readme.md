# 裕承保险项目脚手架

> 项目结构及最基本依赖包，api使用laravel@5.1.11，frontend使用vue@1.0.*

## 安装

	// clone仓库到本地
	git clone https://github.com/liukaijv/ycbx-template.git [alias]	
	// 进入目录
	// 安装php依赖
	composer install
	// 安装前端依赖
	npm install

## 开发
	
	// frontend开发目录 
	resources/assets/js
	// 本地开发服务 http://localhost:8080/
	npm run dev
	// 后台api服务 http://localhost:8765/api
	npm run web
	
## 发布

	// 发布后目录：public，静态资源目录：public/static
	npm run build

## 相关文档

[vue中文网](http://cn.vuejs.org/ "vuejs")

[laravel中文网](http://www.golaravel.com/ "laravel")


## 问题

Require autoload.php failed

	composer install


Script php artisan clear-compiled handling the pre-update-cmd event returned with an error

	//first
	composer update –no-scripts	
	//later
	composer update 

No supported encrypter found. The cipher or key length are invalid 

	php artisan key:generate




	
