import { ShortcutCategory, ExpressionCategory, EffectCategory } from '../types';

export const shortcutsData: ShortcutCategory[] = [
    {
        name: "🛠️ 工具 (Tools)",
        items: [
            { name: "选取工具 (Selection)", key: ["V"], description: "最基础的工具，用于选择图层或属性。", vizType: "v-nav" },
            { name: "抓手工具 (Hand)", key: ["H"], description: "移动视图画布，不改变图层位置。", vizType: "v-nav" },
            { name: "缩放视图 (Zoom)", key: ["Z"], description: "放大或缩小合成视图。", vizType: "v-nav" },
            { name: "旋转工具 (Rotation)", key: ["W"], description: "旋转图层。", vizType: "v-wiggle" },
            { name: "摄像机工具 (Camera)", key: ["C"], description: "在3D空间中移动摄像机。", vizType: "v-focus" },
            { name: "锚点工具 (Pan Behind)", key: ["Y"], description: "移动图层的中心点(锚点)而不移动图层。", vizType: "v-graph" },
            { name: "形状 (Shape)", key: ["Q"], description: "绘制矩形、椭圆等形状蒙版。", vizType: "v-loop-cycle" },
            { name: "钢笔 (Pen)", key: ["G"], description: "绘制自由路径或蒙版。", vizType: "v-loop-cycle" },
            { name: "文字 (Type)", key: ["Ctrl","T"], description: "创建文本图层。", vizType: "v-text" },
            { name: "Roto笔刷", key: ["Alt","W"], description: "智能抠像画笔。", vizType: "v-focus" }
        ]
    },
    {
        name: "📊 属性 (Properties)",
        items: [
            { name: "位置 (Position)", key: ["P"], description: "显示位置属性。", vizType: "v-nav" },
            { name: "缩放 (Scale)", key: ["S"], description: "显示缩放属性。", vizType: "v-wiggle" },
            { name: "旋转 (Rotation)", key: ["R"], description: "显示旋转属性。", vizType: "v-wiggle" },
            { name: "不透明度 (Opacity)", key: ["T"], description: "显示不透明度属性。", vizType: "v-loop-cycle" },
            { name: "锚点 (Anchor Point)", key: ["A"], description: "显示锚点属性。", vizType: "v-nav" },
            { name: "遮罩路径 (Mask Path)", key: ["M"], description: "显示遮罩路径。", vizType: "v-loop-cycle" },
            { name: "遮罩羽化 (Mask Feather)", key: ["F"], description: "显示遮罩羽化属性。", vizType: "v-focus" },
            { name: "显示关键帧 (Uberkeys)", key: ["U"], description: "显示所有有关键帧的属性。", vizType: "v-timeline" },
            { name: "显示表达式 (Exp)", key: ["E","E"], description: "显示所有已应用表达式的属性。", vizType: "v-console" },
            { name: "音频波形 (Waveform)", key: ["L","L"], description: "显示音频波形图。", vizType: "v-graph" }
        ]
    },
    {
        name: "🎬 时间轴 (Timeline)",
        items: [
            { name: "切断图层", key: ["Ctrl","Shift","D"], description: "在当前时间点将图层一分为二。", vizType: "v-split-anim" },
            { name: "修剪入点", key: ["Alt","["], description: "将图层入点修剪到当前时间。", vizType: "v-timeline" },
            { name: "修剪出点", key: ["Alt","]"], description: "将图层出点修剪到当前时间。", vizType: "v-timeline" },
            { name: "移到入点", key: ["["], description: "图层起点移动到当前时间。", vizType: "v-nav" },
            { name: "移到出点", key: ["]"], description: "图层终点移动到当前时间。", vizType: "v-nav" },
            { name: "上一帧", key: ["PgUp"], description: "时间指针前移一帧。", vizType: "v-timeline" },
            { name: "下一帧", key: ["PgDn"], description: "时间指针后移一帧。", vizType: "v-timeline" },
            { name: "工作区头", key: ["B"], description: "设置工作区起始点。", vizType: "v-timeline" },
            { name: "工作区尾", key: ["N"], description: "设置工作区结束点。", vizType: "v-timeline" },
            { name: "添加标记", key: ["*"], description: "在时间轴添加标记点。", vizType: "v-timeline" }
        ]
    }
];

export const effectsData: EffectCategory[] = [
    {
        name: "🎨 颜色校正 (Color)",
        items: [
            { name: "Lumetri 颜色", description: "专业级调色面板，包含 LUT、曲线、色轮。", category: "Color", vizType: "v-graph" },
            { name: "曲线 (Curves)", description: "通过RGB曲线调整亮度、对比度和色彩平衡。", category: "Color", vizType: "v-graph" },
            { name: "色阶 (Levels)", description: "调整直方图黑白场，快速去灰或增加对比。", category: "Color", vizType: "v-graph" },
            { name: "色相/饱和度", description: "Hue/Saturation。调整全局或特定颜色的鲜艳度。", category: "Color", vizType: "v-loop-cycle" },
            { name: "色调 (Tint)", description: "将画面映射为双色（常用于去色或双色调风格）。", category: "Color", vizType: "v-loop-cycle" },
            { name: "三色调 (Tritone)", description: "分别控制高光、中间调、阴影的颜色。", category: "Color", vizType: "v-loop-cycle" },
            { name: "CC Toner", description: "高级色调映射，支持双色、三色、五色调映射。", category: "Color", vizType: "v-loop-cycle" },
            { name: "CC Color Neutralizer", description: "色彩中和器，快速修正色偏。", category: "Color", vizType: "v-graph" },
            { name: "CC Color Offset", description: "色彩偏移，用于调整通道相位或做RGB分离。", category: "Color", vizType: "v-wiggle" },
            { name: "CC Kernel", description: "卷积核滤镜，通过矩阵数学运算自定义模糊/锐化。", category: "Color", vizType: "v-console" },
            { name: "更改颜色", description: "Change Color。吸管选取颜色并替换为新颜色。", category: "Color", vizType: "v-text" },
            { name: "更改为颜色", description: "Change to Color。将特定颜色范围变为另一颜色。", category: "Color", vizType: "v-text" },
            { name: "通道混合器", description: "Channel Mixer。高质量黑白转换或通道互换。", category: "Color", vizType: "v-graph" },
            { name: "阴影/高光", description: "Shadow/Highlight。提亮阴影，压暗高光（HDR感）。", category: "Color", vizType: "v-focus" },
            { name: "曝光度 (Exposure)", description: "模拟相机曝光调整。", category: "Color", vizType: "v-focus" },
            { name: "自然饱和度", description: "Vibrance。智能提升饱和度，保护肤色。", category: "Color", vizType: "v-loop-cycle" },
            { name: "照片滤镜", description: "Photo Filter。模拟传统相机加色温滤镜。", category: "Color", vizType: "v-loop-cycle" },
            { name: "黑白 (Black & White)", description: "将图像转为灰度，可控制各原色权重。", category: "Color", vizType: "v-graph" },
            { name: "OCIO 转换", description: "OpenColorIO。用于ACES工作流的色彩空间转换。", category: "Color", vizType: "v-console" }
        ]
    },
    {
        name: "🌊 扭曲 (Distort)",
        items: [
            { name: "湍流置换 (Turbulent)", description: "神器。基于分形噪波扭曲图像，做液体、烟雾、热浪。", category: "Distort", vizType: "v-wiggle" },
            { name: "液化 (Liquify)", description: "像PS一样推拉像素，手动修图变形。", category: "Distort", vizType: "v-wiggle" },
            { name: "CC Bend It", description: "将图层像棍子一样弯曲。", category: "Distort", vizType: "v-wiggle" },
            { name: "CC Bender", description: "类似Bend It，但支持放置两根弯曲控制棒。", category: "Distort", vizType: "v-wiggle" },
            { name: "CC Blobbylize", description: "斑点化。根据亮度/Alpha将图层变成液态斑点。", category: "Distort", vizType: "v-focus" },
            { name: "CC Flo Motion", description: "通过两个控制点产生漩涡流体变形。", category: "Distort", vizType: "v-wiggle" },
            { name: "CC Griddler", description: "将图层切成网格片并进行推拉变形。", category: "Distort", vizType: "v-console" },
            { name: "CC Lens", description: "模拟鱼眼镜头或球形畸变。", category: "Distort", vizType: "v-focus" },
            { name: "CC Page Turn", description: "模拟书本/纸张卷页效果。", category: "Distort", vizType: "v-loop-cycle" },
            { name: "CC Power Pin", description: "增强版边角定位，带透视辅助。", category: "Distort", vizType: "v-timeline" },
            { name: "CC Ripple Pulse", description: "涟漪脉冲。产生扩散的水波纹。", category: "Distort", vizType: "v-focus" },
            { name: "CC Slant", description: "倾斜。将图层进行斜切变形。", category: "Distort", vizType: "v-timeline" },
            { name: "CC Smear", description: "涂抹。像用手指涂抹湿油漆一样拉伸像素。", category: "Distort", vizType: "v-wiggle" },
            { name: "CC Split", description: "分裂。根据两点撕裂图层。", category: "Distort", vizType: "v-split-anim" },
            { name: "CC Tiler", description: "平铺。将图层缩小并重复平铺。", category: "Distort", vizType: "v-console" },
            { name: "置换图 (Displacement)", description: "利用另一图层的亮度值来扭曲当前图层。", category: "Distort", vizType: "v-wiggle" },
            { name: "光学补偿", description: "Optics Compensation。模拟广角镜头畸变。", category: "Distort", vizType: "v-focus" },
            { name: "网格变形 (Mesh Warp)", description: "通过网格点精细控制局部变形。", category: "Distort", vizType: "v-wiggle" },
            { name: "极坐标 (Polar)", description: "直角坐标与极坐标互转，常用于制作放射线条。", category: "Distort", vizType: "v-focus" },
            { name: "波纹 (Ripple)", description: "自动生成水面波纹动画。", category: "Distort", vizType: "v-wiggle" },
            { name: "边角定位 (Corner Pin)", description: "控制四个角，用于屏幕替换或透视匹配。", category: "Distort", vizType: "v-timeline" }
        ]
    },
    {
        name: "✨ 生成 (Generate)",
        items: [
            { name: "梯度渐变 (Gradient)", description: "创建双色线性或径向渐变背景。", category: "Generate", vizType: "v-loop-cycle" },
            { name: "四色渐变 (4-Color)", description: "生成四个角的混合渐变。", category: "Generate", vizType: "v-loop-cycle" },
            { name: "分形噪波 (Fractal)", description: "万能纹理。制作云、水、火、磨损、贴图。", category: "Generate", vizType: "v-wiggle" },
            { name: "描边 (Stroke)", description: "沿Mask路径生成线条。", category: "Generate", vizType: "v-timeline" },
            { name: "填充 (Fill)", description: "简单的纯色覆盖。", category: "Generate", vizType: "v-text" },
            { name: "写入 (Write-on)", description: "通过关键帧位置模拟手写过程。", category: "Generate", vizType: "v-wiggle" },
            { name: "CC Light Rays", description: "光芒放射。从高亮处产生体积光。", category: "Generate", vizType: "v-focus" },
            { name: "CC Light Sweep", description: "扫光。模拟金属反光扫过表面。", category: "Generate", vizType: "v-timeline" },
            { name: "CC Threads", description: "交织线。生成类似编织物的纹理。", category: "Generate", vizType: "v-console" },
            { name: "CC Glue Gun", description: "热熔胶枪。模拟喷射出的粘稠液体。", category: "Generate", vizType: "v-wiggle" },
            { name: "CC Light Burst", description: "光爆。强烈的放射状模糊光线。", category: "Generate", vizType: "v-focus" },
            { name: "光束 (Beam)", description: "生成激光剑或两点连线。", category: "Generate", vizType: "v-timeline" },
            { name: "单元格图案 (Cell)", description: "生成晶格、气泡、蜂窝等平铺图案。", category: "Generate", vizType: "v-console" },
            { name: "棋盘 (Checkerboard)", description: "生成透明背景棋盘格。", category: "Generate", vizType: "v-console" },
            { name: "网格 (Grid)", description: "生成网格线。", category: "Generate", vizType: "v-console" },
            { name: "无线电波 (Radio)", description: "生成向外扩散的波纹圆圈。", category: "Generate", vizType: "v-focus" },
            { name: "音频波形", description: "根据音频生成可视化的波形线条。", category: "Generate", vizType: "v-graph" },
            { name: "音频频谱", description: "根据音频生成柱状频谱。", category: "Generate", vizType: "v-graph" }
        ]
    },
    {
        name: "🌟 风格化 (Stylize)",
        items: [
            { name: "发光 (Glow)", description: "让亮部产生辉光，UI和特效必备。", category: "Stylize", vizType: "v-focus" },
            { name: "CC Glass", description: "模拟玻璃折射，可加凹凸贴图。", category: "Stylize", vizType: "v-focus" },
            { name: "CC Plastic", description: "塑料质感。给图层增加高光和立体凹凸感。", category: "Stylize", vizType: "v-focus" },
            { name: "CC Mr. Smoothie", description: "迷幻流体。基于像素流动产生平滑抽象图案。", category: "Stylize", vizType: "v-wiggle" },
            { name: "CC Block Load", description: "块状加载。模拟旧网络图片加载的块状过渡。", category: "Stylize", vizType: "v-console" },
            { name: "CC Burn Film", description: "烧胶片。模拟老电影胶片烧毁效果。", category: "Stylize", vizType: "v-focus" },
            { name: "CC HexTile", description: "六边形拼贴。蜂巢状重复。", category: "Stylize", vizType: "v-console" },
            { name: "CC Kaleida", description: "万花筒。生成对称镜像图案。", category: "Stylize", vizType: "v-focus" },
            { name: "CC RepeTile", description: "重复拼贴。向四周无限扩展边缘像素。", category: "Stylize", vizType: "v-console" },
            { name: "CC Threshold", description: "阈值。将图像二值化为简单的色块。", category: "Stylize", vizType: "v-console" },
            { name: "CC Vignette", description: "暗角。给画面四角添加压暗效果。", category: "Stylize", vizType: "v-focus" },
            { name: "卡通 (Cartoon)", description: "平滑色块，模拟矢量/漫画风格。", category: "Stylize", vizType: "v-text" },
            { name: "马赛克 (Mosaic)", description: "将图像像素化为大方块。", category: "Stylize", vizType: "v-console" },
            { name: "查找边缘", description: "Find Edges。提取轮廓线，反转后可做粉笔画。", category: "Stylize", vizType: "v-text" },
            { name: "粗糙边缘", description: "Roughen Edges。腐蚀边缘，做做旧或撕纸效果。", category: "Stylize", vizType: "v-wiggle" },
            { name: "动态拼贴", description: "Motion Tile。镜像复制边缘，做无缝背景。", category: "Stylize", vizType: "v-console" },
            { name: "画笔描边", description: "Brush Strokes。模拟手绘笔触。", category: "Stylize", vizType: "v-wiggle" },
            { name: "散布 (Scatter)", description: "将像素打散，产生噪点或溶解感。", category: "Stylize", vizType: "v-part" }
        ]
    },
    {
        name: "⛈️ 模拟 (Simulation)",
        items: [
            { name: "CC Particle World", description: "3D 粒子系统。制作火花、烟尘、雨雪。", category: "Simulation", vizType: "v-part" },
            { name: "CC Rainfall", description: "快速生成下雨场景，可调雨滴大小风向。", category: "Simulation", vizType: "v-part" },
            { name: "CC Snowfall", description: "快速生成下雪场景，自带深度晃动。", category: "Simulation", vizType: "v-part" },
            { name: "CC Pixel Polly", description: "像素破碎。图层像玻璃一样炸裂。", category: "Simulation", vizType: "v-part" },
            { name: "CC Ball Action", description: "将图像转化为无数个小球体。", category: "Simulation", vizType: "v-console" },
            { name: "CC Bubbles", description: "生成气泡覆盖效果。", category: "Simulation", vizType: "v-part" },
            { name: "CC Drizzle", description: "细雨。模拟雨滴落在水面的涟漪。", category: "Simulation", vizType: "v-focus" },
            { name: "CC Hair", description: "生成毛发/草地纹理。", category: "Simulation", vizType: "v-wiggle" },
            { name: "CC Mr. Mercury", description: "水银先生。模拟液态金属流动。", category: "Simulation", vizType: "v-wiggle" },
            { name: "CC Star Burst", description: "星爆。模拟飞越星空的效果。", category: "Simulation", vizType: "v-part" },
            { name: "破碎 (Shatter)", description: "带物理引擎的墙体破碎，可自定义形状。", category: "Simulation", vizType: "v-part" },
            { name: "波形环境", description: "Wave World。生成用于置换图的水波高度图。", category: "Simulation", vizType: "v-focus" },
            { name: "泡沫 (Foam)", description: "生成大量肥皂泡。", category: "Simulation", vizType: "v-part" }
        ]
    },
    {
        name: "🟩 抠像 (Keying)",
        items: [
            { name: "Keylight (1.2)", description: "好莱坞级绿幕抠像，处理溢色极佳。", category: "Keying", vizType: "v-focus" },
            { name: "Key Cleaner", description: "键控降噪。配合Keylight平滑边缘。", category: "Keying", vizType: "v-focus" },
            { name: "Advanced Spill", description: "高级溢出抑制。去除绿边/蓝边。", category: "Keying", vizType: "v-text" },
            { name: "提取 (Extract)", description: "根据亮度抠像，去除黑背景或白背景。", category: "Keying", vizType: "v-console" },
            { name: "线性颜色键", description: "Linear Color Key。简单的颜色去除。", category: "Keying", vizType: "v-text" },
            { name: "遮罩抑制", description: "Matte Choker。收缩或羽化 Alpha 边缘。", category: "Keying", vizType: "v-focus" },
            { name: "内部/外部键", description: "细调边缘的半透明区域。", category: "Keying", vizType: "v-focus" },
            { name: "差值遮罩", description: "Difference Matte。对比两张图抠出不同部分。", category: "Keying", vizType: "v-text" }
        ]
    },
    {
        name: "🌫️ 模糊与锐化 (Blur)",
        items: [
            { name: "高斯模糊", description: "Gaussian Blur。最基础、最快的柔化。", category: "Blur", vizType: "v-focus" },
            { name: "摄像机镜头模糊", description: "Camera Lens Blur。模拟真实光圈虚化。", category: "Blur", vizType: "v-focus" },
            { name: "定向模糊", description: "Directional Blur。模拟运动时的拖影。", category: "Blur", vizType: "v-split-anim" },
            { name: "径向模糊", description: "Radial Blur。旋转或缩放放射状模糊。", category: "Blur", vizType: "v-focus" },
            { name: "CC Cross Blur", description: "交叉模糊。分别控制X轴和Y轴的模糊。", category: "Blur", vizType: "v-split-anim" },
            { name: "CC Vector Blur", description: "矢量模糊。根据亮度贴图引导模糊方向。", category: "Blur", vizType: "v-wiggle" },
            { name: "锐化 (Sharpen)", description: "增强边缘对比度。", category: "Blur", vizType: "v-console" },
            { name: "钝化蒙版", description: "Unsharp Mask。高质量锐化工具。", category: "Blur", vizType: "v-console" },
            { name: "通道模糊", description: "Channel Blur。单独模糊红/绿/蓝通道。", category: "Blur", vizType: "v-focus" }
        ]
    },
    {
        name: "👓 透视 (Perspective)",
        items: [
            { name: "3D 摄像机跟踪", description: "Camera Tracker。反求摄像机运动。", category: "Perspective", vizType: "v-focus" },
            { name: "投影 (Drop Shadow)", description: "添加简单的2D阴影。", category: "Perspective", vizType: "v-text" },
            { name: "径向投影", description: "Radial Shadow。模拟光源产生的长阴影。", category: "Perspective", vizType: "v-timeline" },
            { name: "CC Sphere", description: "球体。将平面图层卷成3D球。", category: "Perspective", vizType: "v-focus" },
            { name: "CC Cylinder", description: "圆柱体。将图层卷成圆柱。", category: "Perspective", vizType: "v-focus" },
            { name: "CC Spotlight", description: "聚光灯。模拟打光效果。", category: "Perspective", vizType: "v-focus" },
            { name: "斜面 Alpha", description: "Bevel Alpha。给边缘增加立体倒角。", category: "Perspective", vizType: "v-text" },
            { name: "3D 眼镜", description: "合成左右眼视图为立体3D红蓝格式。", category: "Perspective", vizType: "v-text" }
        ]
    },
    {
        name: "⏱️ 时间 (Time)",
        items: [
            { name: "色调分离时间", description: "Posterize Time。抽帧，模拟定格动画。", category: "Time", vizType: "v-split-anim" },
            { name: "CC Force Motion Blur", description: "强力运动模糊。给无模糊素材加模糊。", category: "Time", vizType: "v-split-anim" },
            { name: "CC Wide Time", description: "多重曝光。叠加前后多帧画面。", category: "Time", vizType: "v-part" },
            { name: "回声 (Echo)", description: "根据运动产生拖尾残影。", category: "Time", vizType: "v-timeline" },
            { name: "时间置换", description: "Time Displacement。用灰度图控制时间偏移。", category: "Time", vizType: "v-wiggle" },
            { name: "像素运动模糊", description: "Pixel Motion Blur。基于光流法计算模糊。", category: "Time", vizType: "v-split-anim" },
            { name: "时差 (Time Diff)", description: "计算两层之间的时间差异。", category: "Time", vizType: "v-timeline" }
        ]
    },
    {
        name: "🎞️ 过渡 (Transition)",
        items: [
            { name: "线性擦除", description: "Linear Wipe。基础切光。", category: "Transition", vizType: "v-split-anim" },
            { name: "百叶窗", description: "Venetian Blinds。条状分割切换。", category: "Transition", vizType: "v-grid" },
            { name: "渐变擦除", description: "Gradient Wipe。根据灰度图亮度进行转场。", category: "Transition", vizType: "v-focus" },
            { name: "CC Glass Wipe", description: "玻璃擦除。变形融化般的过渡。", category: "Transition", vizType: "v-wiggle" },
            { name: "CC Grid Wipe", description: "网格擦除。格子翻转过渡。", category: "Transition", vizType: "v-console" },
            { name: "CC Jaws", description: "锯齿状咬合过渡。", category: "Transition", vizType: "v-split-anim" },
            { name: "CC Light Wipe", description: "光斑擦除。亮部先消失。", category: "Transition", vizType: "v-focus" },
            { name: "CC Twister", description: "扭曲者。像拧毛巾一样扭曲转场。", category: "Transition", vizType: "v-wiggle" },
            { name: "卡片擦除", description: "Card Wipe。模拟翻牌效果。", category: "Transition", vizType: "v-console" }
        ]
    },
    {
        name: "🔌 通道与实用 (Channel)",
        items: [
            { name: "设置遮罩 (Set Matte)", description: "超级好用。用任意层的Alpha遮挡当前层。", category: "Channel", vizType: "v-text" },
            { name: "反转 (Invert)", description: "反相颜色。制作底片效果。", category: "Channel", vizType: "v-loop-cycle" },
            { name: "最小/最大", description: "Minimax。扩张或收缩像素（类似腐蚀膨胀）。", category: "Channel", vizType: "v-console" },
            { name: "CC Composite", description: "复合。将原素材叠加在效果处理后的图像上。", category: "Channel", vizType: "v-text" },
            { name: "固态层合成", description: "Solid Composite。在透明背景垫底颜色。", category: "Channel", vizType: "v-text" },
            { name: "移除颜色遮罩", description: "Remove Color Matting。去黑底/白底。", category: "Channel", vizType: "v-text" },
            { name: "转换通道", description: "Shift Channels。交换红绿蓝通道。", category: "Channel", vizType: "v-graph" },
            { name: "混合 (Blend)", description: "混合两个图层。", category: "Channel", vizType: "v-text" },
            { name: "Cineon 转换器", description: "Utility类。用于电影胶片Log与线性空间转换。", category: "Channel", vizType: "v-graph" },
            { name: "应用颜色 LUT", description: "挂载 .cube 等调色预设文件。", category: "Channel", vizType: "v-loop-cycle" }
        ]
    },
    {
        name: "🎛️ 表达式控制 (Exp Control)",
        items: [
            { name: "滑块控制", description: "Slider Control。提供一个数值滑杆。", category: "Exp Control", vizType: "v-timeline" },
            { name: "复选框控制", description: "Checkbox。提供开/关(0/1)开关。", category: "Exp Control", vizType: "v-console" },
            { name: "颜色控制", description: "Color Control。提供取色器。", category: "Exp Control", vizType: "v-text" },
            { name: "点控制", description: "Point Control。提供[x,y]坐标。", category: "Exp Control", vizType: "v-focus" },
            { name: "角度控制", description: "Angle Control。提供旋转轮。", category: "Exp Control", vizType: "v-focus" },
            { name: "图层控制", description: "Layer Control。提供图层下拉菜单。", category: "Exp Control", vizType: "v-nav" },
            { name: "下拉菜单控制", description: "Dropdown Menu。自定义列表选项。", category: "Exp Control", vizType: "v-nav" }
        ]
    },
    {
        name: "🕶️ 沉浸式视频 (VR)",
        items: [
            { name: "VR 平面到球面", description: "Plane to Sphere。将平面文字/Logo贴到VR环境。", category: "VR", vizType: "v-focus" },
            { name: "VR 旋转球面", description: "Rotate Sphere。修正全景视频的水平线。", category: "VR", vizType: "v-focus" },
            { name: "VR 数字故障", description: "Digital Glitch。VR环境专用的故障效果。", category: "VR", vizType: "v-console" },
            { name: "VR 降噪", description: "Denoise。去除全景视频噪点。", category: "VR", vizType: "v-focus" },
            { name: "VR 转换器", description: "Converter。鱼眼/立方体贴图/等距柱状投影互转。", category: "VR", vizType: "v-focus" }
        ]
    }
];

export const expressionsData: ExpressionCategory[] = [
    {
        name: "🌐 全局变量 (Global)",
        items: [
            { name: "time", description: "当前时间(秒)。", syntax: "time * 100", exampleCode: "time * 100", vizType: "v-counter" },
            { name: "index", description: "图层索引。", syntax: "index * 20", exampleCode: "index * 20", vizType: "v-graph" },
            { name: "value", description: "当前属性值(不含表达式)。", syntax: "value + 50", exampleCode: "value + 50", vizType: "v-nav" },
            { name: "thisComp", description: "当前合成对象。", syntax: "thisComp.width", exampleCode: "thisComp.width", vizType: "v-nav" },
            { name: "thisLayer", description: "当前图层对象。", syntax: "thisLayer.position", exampleCode: "thisLayer.position", vizType: "v-nav" },
            { name: "width / height", description: "图层宽/高。", syntax: "width", exampleCode: "width", vizType: "v-nav" },
            { name: "posterizeTime()", description: "抽帧/定格。", syntax: "posterizeTime(12)", exampleCode: "posterizeTime(12)", vizType: "v-split-anim" }
        ]
    },
    {
        name: "📝 文本与字符串 (String)",
        items: [
            { name: "toFixed(n)", description: "保留n位小数。做数字计数器必备。", syntax: "num.toFixed(2)", exampleCode: "effect('Slider').value.toFixed(2)", vizType: "v-counter" },
            { name: "parseInt(s)", description: "字符串转整数。", syntax: "parseInt('123')", exampleCode: "parseInt('123')", vizType: "v-counter" },
            { name: "split(sep)", description: "分割字符串为数组。", syntax: "str.split(' ')", exampleCode: "text.sourceText.split(' ')", vizType: "v-text" },
            { name: "substring(s, e)", description: "截取文本。", syntax: "str.substring(0, 5)", exampleCode: "text.sourceText.substring(0, 5)", vizType: "v-text" },
            { name: "length", description: "获取文本长度(字数)。", syntax: "str.length", exampleCode: "text.sourceText.length", vizType: "v-counter" },
            { name: "text.sourceText.style", description: "获取样式对象。", syntax: "text.sourceText.style", exampleCode: "text.sourceText.style", vizType: "v-text" },
            { name: "\r", description: "换行符(用于拼接文本)。", syntax: "'\\r'", exampleCode: "'Line 1' + '\\r' + 'Line 2'", vizType: "v-text" }
        ]
    },
    {
        name: "🗝️ 关键帧与标记 (Key/Marker)",
        items: [
            { name: "numKeys", description: "关键帧总数。", syntax: "numKeys", exampleCode: "thisProperty.numKeys", vizType: "v-counter" },
            { name: "key(index)", description: "获取第N个关键帧对象。", syntax: "key(1).time", exampleCode: "key(1).time", vizType: "v-timeline" },
            { name: "nearestKey(t)", description: "获取离当前时间最近的关键帧。", syntax: "nearestKey(time)", exampleCode: "nearestKey(time)", vizType: "v-timeline" },
            { name: "key(i).value", description: "获取关键帧数值。", syntax: "key(1).value", exampleCode: "key(1).value", vizType: "v-graph" },
            { name: "marker.key(name)", description: "获取标记。", syntax: "marker.key('name')", exampleCode: "marker.key('Start').time", vizType: "v-timeline" },
            { name: "velocity", description: "当前速度(数值变化率)。", syntax: "velocity", exampleCode: "position.velocity", vizType: "v-wiggle" }
        ]
    },
    {
        name: "⏱️ 时间转换 (Time Conv)",
        items: [
            { name: "timeToFrames(t)", description: "时间转帧数。", syntax: "timeToFrames(time)", exampleCode: "timeToFrames(time)", vizType: "v-counter" },
            { name: "framesToTime(f)", description: "帧数转时间。", syntax: "framesToTime(30)", exampleCode: "framesToTime(30)", vizType: "v-counter" },
            { name: "timeToTimecode(t)", description: "时间转为 00:00:00 格式。", syntax: "timeToTimecode(time)", exampleCode: "timeToTimecode(time)", vizType: "v-counter" },
            { name: "inPoint / outPoint", description: "图层入/出点时间。", syntax: "inPoint", exampleCode: "time - inPoint", vizType: "v-timeline" },
            { name: "duration", description: "合成或图层总时长。", syntax: "duration", exampleCode: "thisComp.duration", vizType: "v-timeline" }
        ]
    },
    {
        name: "🎲 随机 (Random)",
        items: [
            { name: "wiggle(freq, amp)", description: "随机抖动。", syntax: "wiggle(freq, amp)", exampleCode: "wiggle(5, 50)", vizType: "v-wiggle" },
            { name: "random(min, max)", description: "生成随机数。", syntax: "random(min, max)", exampleCode: "random(0, 100)", vizType: "v-counter" },
            { name: "seedRandom(s, t)", description: "锁定随机种子。", syntax: "seedRandom(1, true)", exampleCode: "seedRandom(1, true)", vizType: "v-nav" },
            { name: "noise(t)", description: "柏林噪波(平滑随机)。", syntax: "noise(time)", exampleCode: "noise(time)", vizType: "v-wiggle" }
        ]
    },
    {
        name: "🔄 循环 (Loop)",
        items: [
            { name: "loopOut('cycle')", description: "循环。", syntax: "loopOut('cycle')", exampleCode: "loopOut('cycle')", vizType: "v-loop-cycle" },
            { name: "loopOut('pingpong')", description: "往返循环。", syntax: "loopOut('pingpong')", exampleCode: "loopOut('pingpong')", vizType: "v-loop-cycle" },
            { name: "loopOut('continue')", description: "延续速度。", syntax: "loopOut('continue')", exampleCode: "loopOut('continue')", vizType: "v-loop-cycle" }
        ]
    },
    {
        name: "🧮 数学 (Math)",
        items: [
            { name: "linear(t, a, b, c, d)", description: "线性映射。", syntax: "linear(t, a, b, c, d)", exampleCode: "linear(time, 0, 1, 0, 100)", vizType: "v-graph" },
            { name: "clamp(v, min, max)", description: "限制数值。", syntax: "clamp(v, min, max)", exampleCode: "clamp(x, 0, 100)", vizType: "v-timeline" },
            { name: "Math.round(x)", description: "四舍五入。", syntax: "Math.round(x)", exampleCode: "Math.round(val)", vizType: "v-counter" },
            { name: "Math.abs(x)", description: "绝对值。", syntax: "Math.abs(x)", exampleCode: "Math.abs(-10)", vizType: "v-graph" },
            { name: "Math.min/max(a, b)", description: "取小/大值。", syntax: "Math.min(a, b)", exampleCode: "Math.max(0, val)", vizType: "v-graph" },
            { name: "Math.sin(x)", description: "正弦波。", syntax: "Math.sin(x)", exampleCode: "Math.sin(time)", vizType: "v-wiggle" }
        ]
    },
    {
        name: "🎥 3D与摄像机 (3D)",
        items: [
            { name: "lookAt(from, at)", description: "自动朝向。", syntax: "lookAt(from, at)", exampleCode: "lookAt(position, target)", vizType: "v-focus" },
            { name: "toComp(point)", description: "3D坐标转2D屏幕坐标。", syntax: "toComp(point)", exampleCode: "l.toComp([0,0,0])", vizType: "v-focus" },
            { name: "fromComp(point)", description: "2D转3D。", syntax: "fromComp(point)", exampleCode: "l.fromComp(point)", vizType: "v-focus" },
            { name: "activeCamera", description: "获取当前活动摄像机。", syntax: "activeCamera", exampleCode: "thisComp.activeCamera", vizType: "v-focus" },
            { name: "cameraOption.zoom", description: "摄像机焦距。", syntax: "cameraOption.zoom", exampleCode: "cameraOption.zoom", vizType: "v-focus" }
        ]
    },
    {
        name: "💻 现代语法 (JS)",
        items: [
            { name: "const / let", description: "定义常量/变量(推荐)。", syntax: "const x = 10", exampleCode: "const x = 10;", vizType: "v-console" },
            { name: "if / else", description: "条件判断。", syntax: "if (cond) { }", exampleCode: "if(x>0) 100 else 0", vizType: "v-console" },
            { name: "try / catch", description: "错误处理(防止报错红条)。", syntax: "try { } catch(e) { }", exampleCode: "try{...}catch(e){value}", vizType: "v-console" },
            { name: "// Comment", description: "注释。", syntax: "//", exampleCode: "// 这是一个注释", vizType: "v-console" }
        ]
    }
];
