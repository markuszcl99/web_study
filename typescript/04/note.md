## 联合与交叉

联合和交叉是类型运算。
联合的作用是类型合并，交叉的作用是类型收敛

如下图所示，联合会尽量合并类型，交叉会收敛到子类型，如果没有父子类型关系，会收敛到 never
![](https://img.markuszhang.com/img/20240512175258.png)

![](https://img.markuszhang.com/img/20240512175547.png) ![](https://img.markuszhang.com/img/20240512175613.png) ![](https://img.markuszhang.com/img/20240512175644.png)