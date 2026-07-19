+++
date = '2026-07-19T15:41:50+08:00'
draft = false
title = 'Baubles 05'
summary = '大战 Rime'
+++
## Varnish
本来该栏目是想记录 [Rime](https://rime.im/) 配置，不过继一天一夜的折腾后，我打算写点别的。

首先是在[项目仓库](https://github.com/rime/squirrel)下载最新发布，也可以`brew install --cask squirrel-app`一键搞定[^1]。之后再下载自己所需方案（这里我用的是[雾凇拼音](https://github.com/iDvel/rime-ice)），或使用输入法内置词库。

前置准备完毕后开始定制化，主要通过创建`default.custom.yaml`和`squirrel.custom.yaml`来打补丁，可用参数在`default.yaml`和`squirrel.yaml`均有详细说明。

### 代码规范

为了让改代码时方便看教程，我直接在`patch:`前注释了教程网址，于是改动全部未同步。如何知道改动是否生效？在补丁文件里写入`config_version`，格式是`2026-07-19`。重新部署后`command+shift+G`进入`~/Library/Rime/build`，打开`default.yaml`和`squirrel.yaml`，如果`config_version`与补丁文件一致，则改动生效。

当然，还会出现的一种情况是改动生效了，但貌似不太对劲，比如——标点符号。由于第三方词库写法未必与内置词库完全一致，部分补丁还需要参考词库教程和自行扒代码。

例如：我希望将半角符号`/`改为`、`，如果不引入预设，那么打上的补丁会直接覆盖半角符号全部预设，导致设置的是中文标点却只能打出英文标点，部署后的符号映射长这样：
```yaml
punctuator:
  full_shape:
    (略)
  half_shape:
    "/" : "、"
```

而雾凇中引入预设标点符号的写法是`__include: default:/punctuator`而非[Rime教程](https://github.com/rime/home/wiki/CustomizationGuide#%E5%AE%9A%E8%A3%BD%E6%8C%87%E5%8D%97)里的`import_preset: default`。（顺便，这个补丁最好写进`rime_ice.custom.yaml`里）

### 重启解决一切（？）

因为一些神秘的原因，macOS 下所有系统原生应用和基于 Electron 开发的第三方应用均不能使用鼠须管，在重装 Rime、移除自定义配置（万一发生了什么奇妙的反应呢？虽然不太可能）、重启、测试快捷键等多番尝试后，我终于困了，查看 issue 发现有人提出 HBuilderX 也有类似问题，过往也有类似的 issue，但因为无法被复现而被关闭。不管了，我要去睡觉。

第二天，仍然不死心的我再次重装，并在重装后重启电脑。欸，它好了。

（发出尖锐爆鸣）[^2]

可能是macOS抽风也可能是因为某些操作导致底层打架，之前也发生过 Steam 一进就闪退的问题，重启后就好了。这样一看，Mac 何尝不是一种 Kindle 呢？（但为什么昨天就不行啊？！

> 如果感兴趣的话，以下是我的输入法皮肤。夜间配色抄的由雪齋创作的`solarized_dark`。BTW，如果不愿意自己写（自定义可以在 App Store 下载「鼠须管绘板」），Rime的[内置皮肤](https://github.com/rime/squirrel/blob/master/data/squirrel.yaml)也蛮不错的。

{{< details summary="squirrel.custom.yaml" >}}
```yaml fold
patch:
  config_version: '2026-07-19'
  style: 
    color_scheme: Light
    color_scheme_dark: Dark
  preset_color_schemes:
    Light:
      inline_preedit: true
      font_face: "STDongGuanTi"
      font_point: 18
      label_font_point: 15
      candidate_list_layout: linear
      corner_radius: 5
      border_height: 5
      border_width: 5
      color_space: display_p3
      back_color: '0xE5F0F6F6'
      text_color: '0x808080'
      hilited_text_color: '0x000000'
      candidate_text_color: '0x000000'
      hilited_candidate_text_color: '0x487913'
      label_color: '0x888888'
      hilited_candidate_label_color: '0xB3416C11'
      comment_text_color: '0x808080'
    Dark:
      inline_preedit: true
      font_face: "STDongGuanTi"
      font_point: 18
      label_font_point: 15
      candidate_list_layout: linear
      corner_radius: 5
      border_height: 5
      border_width: 5
      color_space: display_p3
      back_color: '0x271407'
      text_color: '0x746D60'
      hilited_text_color: '0xB9706E'
      candidate_text_color: '0x798FEF'
      hilited_candidate_text_color: '0x989D65'
      label_color: '0x5692E6'
      hilited_candidate_label_color: '0xC78757'
      comment_text_color: '0xC190F0'
      hilited_comment_text_color: '0x3D998C'
```

{{< /details >}}
## Eucalyptus
游戏《桌面探索者》（Desktop Explorer）于昨日在 Steam 发售正式版，定价约为 ¥55。复古怀旧风微恐（主要靠音乐和图像营造氛围）解谜游戏，在叔叔留下的旧电脑里找到答案。游戏蛮有意思的，让我联想到另一款解谜游戏《last seen online》。
## Moss
- 昨晚和狗大战，人方和狗方就皮卡丘的归属权发生争执，期间狗一脚踩我脸上。
- 讨厌某些占用过大且基本用不到几次的软件，比如 WPS，只有交作业文档才用得上，之前尝试过换成 Libre Office，但它在我电脑上动不动就闪退？

[^1]: 前者下载完毕后运行安装器，电脑自动重启，之后需手动在输入法中添加「鼠须管」。后者运行完毕后输入法中已添加「鼠须管」，但出于某个未知原因需要手动激活，比如删除后再重新添加。

[^2]: 证明37不纯
