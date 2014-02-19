rapid-prototype-html5
=====================

初始化
=====

### 1,环境配置
需安装Node.js、Ruby

如何安装自行查找。

### 2,安装相关模块
    sudo npm install -g yo grunt-cli bower generator-webapp-rjs
    gem install compass

### 3,下载依赖库
进入项目根目录

    chmod +x build
    ./build

### 4,grunt的使用，请参见官方网站

config.json文件配置
=====

### 1,示例

    [
        {
            // 图片名
            "name": "aaa.png",

            // 标明这是首页，必须放在第一个item
            // 其余页面不要设置此属性
            "level": "first",

            // 图片宽度
            "width": "640",

            // 设置热点
            "actions": [
                {
                    // 热点名称
                    "name": "返回",

                    // 热点坐标
                    // 形状为矩形
                    // 前2个为左上点的x，y坐标，
                    // 后2个为右下点的x，y坐标，
                    // 获取x，y的图片宽度需遵循上一层中设置的width
                    "point": [5, 53, 137, 121],

                    // 此区域点击后所跳转的图片文件名，不要带后缀
                    "action": "bbb",

                    // 配置跳转动画，不配置则无跳转动画
                    "animation": {
                        // 选用哪一个跳转动画，1--65可选
                        "animationType": 1,

                        // 是否为回退跳转
                        "isBack": true
                    }
                }
            ]
        },
        {
            "name": "bbb.png",
            "width": "640",
            "actions": [
                {
                    "name": "具体日期",
                    "point": [0, 599, 639, 1041],
                    "action": "aaa",
                    "animation": {
                        "animationType": 1,
                        "isBack": false
                    }
                }
            ]
        }
    ]
