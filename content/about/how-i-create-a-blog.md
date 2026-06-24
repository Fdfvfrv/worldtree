+++
draft = false
title = '一棵树是怎样诞生的'
summary = ' '
weight = 1
+++
本站内容采用[CC BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en)许可，源码以[MIT协议](https://mit-license.org/)开源于[Git Hub](https://github.com/Fdfvfrv/worldtree)。
## 网站设计
> 我喜欢简洁、明快、利落的事物，这棵树的设计当然也遵循我的美学理念。
- 视觉引导：文本指引，减少图块。
- 背景：电脑和平板是带有纹理的渐变图，手机暂时设置为纯色。
- 字体：以宋体为主，观感介于黑体的纯粹和楷体的优雅之间。
- [图标](https://www.flaticon.com/free-icon/winter_15622311?term=tree&page=1&position=85&origin=search&related_id=15622311)：很有锈味[^1]，一眼相中。

## 资源
静态网站生成器为 [Hugo](https://gohugo.io/)，使用 [Cloudflare](https://www.cloudflare.com/) 部署。

为了拥有较好的阅读体验，建议在本地安装以下字体：
  - [上图东观体](https://www.library.sh.cn/special/dongguanti/)
  - [思源宋体](https://github.com/adobe-fonts/source-han-serif/tree/release/)

本站字体列表（参考~~抄的~~[極客死亡計劃](https://www.geedea.pro/about/))：
{{< details summary="展开阅读" >}}
```css
--serif-font-family: 
    "Noto Serif", 
    "Noto Serif SC", 
    "Noto Serif TC", 
    "Noto Serif CJK SC", 
    "Noto Serif CJK TC", 
    "Source Han Serif SC", 
    "Source Han Serif TC", 
    "Songti SC", 
    "Times New Roman", 
    Times, 
    serif; 
--fangsong-font-family: 
    'STFangsong', 
    'FangSong', 
    '仿宋', 
    serif;
--monospace-font-family: 
    'Menlo', 
    Consolas, 
    'Courier New', 
    monospace;
--heading-font:
    'STDongGuanTi',
    sans-serif;
```
{{< /details >}}

[^1]: 指[解密游戏 Rusty Lake（锈湖）](https://www.rustylake.com/)
