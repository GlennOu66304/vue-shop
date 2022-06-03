## Goal

1.categoray bug fix

2.Nav bar component build



## Mobile website test

1.Vue Project configuration

[Vue  Create site](https://blog.csdn.net/qq_43540219/article/details/107735809)

2.find the IP of the Mac:

[How to Find Your IP Address On a Mac](https://www.hellotech.com/guide/for/how-to-find-ip-address-on-mac)

3.open the IP address and + port number to visite the address

4.02-移动端调试工具-Weinre真机调试

[02-移动端调试工具-Weinre真机调试](https://www.jianshu.com/p/8a341388d3d1)

[video Tutorial](https://www.udemy.com/course/vuejs-app/learn/lecture/8654350#content)

## The reason why the clear effect does not work

You can use test it in the mobile device



or add the emulator

[桌面端适配](https://www.wenjiangs.com/doc/vant-advanced-usage#zhuo-mian-duan-gua-pei)

[vant-search组件在pc（非移动端模式下） clear事件不触发 ](https://github.com/youzan/vant/issues/6367)

## ## Search

1.Fetch the Search data

2.UI before search Vant UI input

2,1 input section+ key word

2.2 enter search

2.3 search suggestion

2.4 gray area

3.UI after the Search

4.Shift between the before and after search(v-show),@click trigger this happen

4.1 new router search-result, v-for render the result X

4.2 left arrow, search result(option2) 

4.3 vant UI error loading, then fetch the data ,afte the data then set the searchResultDetails to true, then start to render the data

when you hit the search result: (change it in the click method)

1.has the search result:

1.1close the suggestion section

1.2load the search result



2.no search result(this.toast achieve)

2.1close the suggestion section

2.2load the search result



Nav bar issue

defult no nav bar add the nav bar later

## Procee





## Vue Shop 

1.data fetch

2.color change:

2.1 only one will be activated 

3.component build(main content write)

4.bs scroll use



1.add the new classname to the menuItem($refs)

2.Also apply the css property to the menu item

3.





## Data Fetch

default Array[index to get the array].children to get the goods item in the selcted's array

index equal == activate array

Click





Home 

simliar like banner(v-for), title

UI

1.goods

1.good item sections

2.in the home page secton get the data



## file directory explain:

1.App.vue:routerView

2.index.vue:

2.1 a base html view of all pages

2.2 conatins another routter view:home, order,me



## Router View

every tab could show it's own title

## Process

1.App.vue Parent's nav bar title will change

2.defined a title value in the data section

3.also register a event in the created()

4.parent component App.vue will call this function

## Vant UI usage:

[在非 vite 项目中按需引入组件（推荐）](https://youzan.github.io/vant/#/zh-CN/quickstart) 

[[what is the difference between babel.config.js and vue.config.js and can i combine the 2 files?](https://stackoverflow.com/questions/61674491/what-is-the-difference-between-babel-config-js-and-vue-config-js-and-can-i-combi)]

[局部注册](https://youzan.github.io/vant/#/zh-CN/advanced-usage#zu-jian-zhu-ce)

## Set up the apache Mock data server

1.Apache Start the Project Mock Up data

1.1 start the Apche server

1.2 add the json files into the server

[macOS Apache 配置](https://blog.zfanw.com/macos-apache/)

1.3 revers the address to the given server

[Apache服务器搭建(Mock数据准备)](http://bluezyz.com/index.php/archives/83/)

(Vue create build the project can choose the eleme)：

Git download the certain commit 

Then start to modify it.



git download the project

git reset the git commit to view the commit

## Demo and Source Code()

Mobile Bease App**:eleme, meituan,java web elementUI** Vue3 Project

[Demo](https://github.com/iphone3/qsyj)

[项目资源准备](http://bluezyz.com/index.php/archives/85/)

[iphone3](https://github.com/iphone3)/**[qsyj](https://github.com/iphone3/qsyj)**