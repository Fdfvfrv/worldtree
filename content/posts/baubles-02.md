+++
date = '2026-06-27T21:14:48+08:00'
draft = false
title = 'Baubles 02'
summary = '与自然共处'
+++
> Baubles 构成如下：
> 1. Varnish（工具、资源分享）
> 2. Eucalyptus（有趣的）
> 3. Moss（碎碎念）

## 观鸟
尝试观鸟的起因不过是零零散散地刷到列表在观鸟、试玩了观鸟游戏、看了许多小鸟视频。于是想着——那我也去试试吧。

此前我也喜欢听鸟鸣，偶尔能在手机里捕捉它们的一瞬间。印象最深刻也最喜欢的场景是毕业后回学校拿资料，中午合唱团隐隐约约的吟唱顺着风飘进耳朵，伴着鸟鸣，我录下音频。那天正好是晴天，光透过树叶在地上留下斑驳的树影，我在学校的连廊和池塘边漫步，什么也不需要在乎。                

在某个又一平淡无奇的午后，我举起手机拍照。那是第一只「认识」的鸟，学名是白颊噪鹛（méi），常出没在树下，走起路蹦蹦哒哒，会拱着树叶玩，阳光下透出漂亮的红棕色，眼尾拉出一条白线，我猜这可能就是所谓「白颊」的来由。

另一种很常见的走地鸟是珠颈斑鸠，随处可以刷新，叫声是「咕咕咕」，也常以咕咕代称。相较于白颊噪鹛，体型更大些。珠颈斑鸠是红隼最好吃的朋友。

虽然说是「观鸟」，不过能观到的也只有些相对比较大胆的小鸟们，比如白鹡（jí）鸰（líng）、鹊鸲（qú）、白头鹎（bēi）、乌鸫（dōng）等。嗯……也由此认识了不少字呢。

白鹡鸰个头偏小，黑色花纹呈不规则分布；雄鹊鸲虽然乍一看通体黑白，但所谓的「黑色」其实是蓝黑色，带一点金属感。我曾误认过它俩。

能在一个无所事事的晴日午后，坐在树下的长椅看小鸟们来来去去，这真是幸福恬淡的好日子。
## 不想再学微积分
我学不明白微积分，我甚至不明白为什么我学不明白微积分。                      

为了学好微积分，我吝啬地付出过一点努力，比如……先读一本相对有趣的科普书培养对微积分的兴趣。大失败。                                    

于是我又找了教材[^1]看，据说也是通俗生动，如果不是在考试前两天才愿意阅读就更好了。最后还是狼狈地翻出教材尝试使用题海战术。幸好我对自己的要求只有及格。

## 海的对岸有什么？
《Resonance of the Ocean》，画风清新明媚的治愈游戏，[Steam](https://store.steampowered.com/app/2057080/Resonance_of_the_Ocean/) 和 [itch](https://uimss.itch.io/resonance-of-the-ocean) 都可以玩。玩法也很简单，探索小岛，找到并组装合适的材料**创作**出与海对岸传来的一致的音乐。

流程很短，快的话半小时就可以结束。游戏内应当是埋了一些伏笔，比如石头阵，岛上小屋里的日记本等，然而并没有展开叙述。

好久没看海了，真想再去逛逛海边啊。

## 如何实现「取景框」效果
树的[果壳铃]( {{< ref "links/index.md" >}} ) (`links`) 页面我最满意的设计就是「取景框」，卡片有悖于我的设计理念，但这的确是较为符合直觉且清晰、明了、易读的样式。于是简单思考后决定做成取景框，出于设备兼容性的考虑，该效果只能在电脑端展示。

**聚焦—对准—咔哒，恭喜你记录下此刻。**

{{< details summary="展开代码" >}}

```css
.link-card {
  position: relative;
  transition: transform 0.2s ease;
  margin: 0 -1rem;
  filter: grayscale(60%) blur(1px);
}
.link-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--link-color), var(--link-color)),
    linear-gradient(var(--link-color), var(--link-color)),
    linear-gradient(var(--link-color), var(--link-color)),
    linear-gradient(var(--link-color), var(--link-color)),
    linear-gradient(var(--link-color), var(--link-color)),
    linear-gradient(var(--link-color), var(--link-color)),
    linear-gradient(var(--link-color), var(--link-color)),
    linear-gradient(var(--link-color), var(--link-color));
  background-size:
    3px 10px, 10px 3px,
    3px 10px, 10px 3px,
    3px 10px, 10px 3px,
    3px 10px, 10px 3px;
  background-position:
    left top,    left top,
    right top,   right top,
    left bottom, left bottom,
    right bottom,right bottom;
  background-repeat: no-repeat;
  opacity: 0.3;
  transition: opacity 0.5s ease;
  pointer-events: none;
}
.link-card:hover {
  transform: scale(1.05);
  filter: contrast(150%);
}
.link-card:hover::before { 
  opacity: 1;
}
```

{{< /details >}}               

不过我对悬停后的过渡仍然不满意，并不觉得有「相机聚焦后拉近画面」的效果，然而这已经是目前最好的处理办法。

## Moss
- 我不喜欢雨天，尤其是夏季的雨天，闷热、湿黏，感觉自己要发霉。
- 想搭个图床，目前在看不同方案。                   
  还想做个音乐卡片。                             
  同时在考虑「Back2Top」的实现方案，我得做一个「契合调性」的。          
- 人不可能创造出自己从未见过的事物，本站的设计灵感许多来自于[極客死亡計劃](https://www.geedea.pro/)（也可以说成「模仿」）。当然，巧思是我自己的，许多用语和措辞都让我觉得自己在「创造」一个世界。

[^1]: [Calculus Made Easy](https://www.gutenberg.org/ebooks/33283)；[简中译本](https://keen-ginger-62hw.here.now/)
