+++
draft = false
title = '一棵树是怎样诞生的'
summary = ' '
weight = 1
+++
本站内容采用[CC BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en)许可，源码以[MIT协议](https://mit-license.org/)开源于[Git Hub](https://github.com/Fdfvfrv/worldtree)。
## 网站设计
> 我喜欢简洁、明快、利落的事物，这棵树的设计当然也遵循我的美学理念。                                 

**虽然尽可能地做了移动端适配，但为了最好的阅读体验，请在电脑上浏览并让窗口宽度大于1024px。**
- 视觉引导：文本指引，减少图块。
- 背景：电脑和平板是带有纹理的渐变图，手机暂时设置为纯色。
- 字体：
  {{< details summary=" " >}}
```css
--serif-font-family: 
  serif; 
--fangsong-font-family: 
  'STFangsong',  
  serif;
--monospace-font-family: 
  'Menlo', 
  'Monaco', 
  monospace;
--heading-font:
  'STDongGuanTi',
  sans-serif;
```
{{< /details >}}
- [图标](https://www.flaticon.com/free-icon/winter_15622311?term=tree&page=1&position=85&origin=search&related_id=15622311)：很有锈味[^1]，一眼相中。

## 资源
静态网站生成器为 [Hugo](https://gohugo.io/)，使用 [Cloudflare](https://www.cloudflare.com/) 部署。我希望尽可能地减少 JS 依赖，目前本站仅会保存的数据是明暗模式设置，且该数据存储于本地，你随时可以删除。

[^1]: 指[解密游戏 Rusty Lake（锈湖）](https://www.rustylake.com/)
