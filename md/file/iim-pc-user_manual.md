# 笼鸽 PC版

## 使用说明

软件绿色便携，无需安装，解压运行即可。**iim**（**iim.exe**）是服务，网址是界面。

1. Linux运行iim，Windows以管理员身份运行iim.exe；
2. 浏览器中访问网址[127.0.0.1:60000/web/](http://127.0.0.1:60000/web/)

> 浏览器请用Chrome或Firefox，IE和杂牌估计是不行的！Android手机可以使用[笼鸽APP](https://app.lilu.red/#iim)，能够互通。

## 设置为服务开机自启动

如你不想每次手动运行服务，可以设置为开机自启动。
> 注意：只有访问网址并保持网页打开时才能接收消息！如不希望接收消息，可以关闭网页。

### Ubuntu

1. `$ gnome-session-properties`
2. 在打开的“启动应用程序首选项”中点“添加”；
3. 名称填写“笼鸽”，命令点“浏览...”选择你解压后iim执行文件的位置，例如`/home/m/app/iim/iim`；
4. 点“保存”，点“关闭”；
5. 重启系统，然后浏览器访问网址即可。

> 玩Linux的一般都是高手，大家各显神通就好。

### Windows

1. 点“开始”菜单按钮
2. 展开“Windows系统”
3. 右键点击“命令提示符”
4. 点“更多”
5. 点“以管理员身份运行”,如询问则选“是”
6. 在打开的“管理员：命令提示符”窗口中输入下面命令：
```
SCHTASKS /Create /TN "启动笼鸽服务" /SC  ONLOGON /RL HIGHEST /TR "C:\Users\v\Documents\iim\nircmd.exe exec hide C:\Users\v\Documents\iim\iim.exe"
```
按enter键运行，如果配置正确会提示：`成功：成功创建计划任务“启动笼鸽服务”。`。重启系统，然后浏览器访问网址即可。
> 注意：如果软件放在C盘，一定放到用户目录内，比如`C:\Users\v\`。实际设置时，修改上面的`C:\Users\v\Documents\iim`为你的iim文件夹路径。