/**
 * 必须加载这两个 Houdini Paint Worklet 模块
 * 1. ringparticles: 处理顶部的流动圆环
 * 2. extra-confetti: 处理底部和中间的纸屑/噪点背景
 */

if ('paintWorklet' in CSS) {
    // 加载圆环模块
    CSS.paintWorklet.addModule('https://unpkg.com/css-houdini-ringparticles/dist/ringparticles.js');
    
    // 【关键步骤】加载纸屑/噪点模块
    // 对应 CSS 中的 background-image: paint(extra-confetti);
    CSS.paintWorklet.addModule('https://unpkg.com/extra-confetti/dist/extra-confetti.js');

    // 处理欢迎区域的鼠标交互
    const $welcome = document.querySelector('#welcome');
    if ($welcome) {
        let isInteractive = false;
        
        $welcome.addEventListener('pointermove', (e) => {
            if (!isInteractive) {
                $welcome.classList.add('interactive');
                isInteractive = true;
            }
            // 计算鼠标位置百分比
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            
            $welcome.style.setProperty('--ring-x', x);
            $welcome.style.setProperty('--ring-y', y);
            $welcome.style.setProperty('--ring-interactive', 1);
        });

        $welcome.addEventListener('pointerleave', () => {
            $welcome.classList.remove('interactive');
            isInteractive = false;
            // 恢复中心位置
            $welcome.style.setProperty('--ring-x', 50);
            $welcome.style.setProperty('--ring-y', 50);
            $welcome.style.setProperty('--ring-interactive', 0);
        });
    }
} else {
    console.warn("当前浏览器不支持 Houdini Paint API，请使用最新版 Chrome 或 Edge。");
}

// IntersectionObserver: 控制 features 区域图片显示
(function() {
    const features = document.querySelectorAll('#features .feature');
    if (!features.length) return;

    // 默认激活第一个
    features[0].classList.add('active');

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                features.forEach(function(f) { f.classList.remove('active'); });
                entry.target.classList.add('active');
            }
        });
    }, {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0
    });

    features.forEach(function(feature) {
        observer.observe(feature);
    });
})();