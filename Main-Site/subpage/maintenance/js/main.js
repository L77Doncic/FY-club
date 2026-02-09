// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
  // 初始化Lucide图标
  lucide.createIcons();

  // ========== Navbar 逻辑 ==========
  const navbar = document.getElementById('navbar');
  const backToHomeBtn = document.getElementById('backToHome');

  // 滚动监听 - Navbar样式变化
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 50;
    if (scrolled) {
      navbar.classList.remove('bg-transparent');
      navbar.classList.add('bg-white/80', 'backdrop-blur-md', 'border-b', 'border-gray-200', 'shadow-sm');
    } else {
      navbar.classList.add('bg-transparent');
      navbar.classList.remove('bg-white/80', 'backdrop-blur-md', 'border-b', 'border-gray-200', 'shadow-sm');
    }
  });

  // 返回顶部
  backToHomeBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ========== Hero 动画 ==========
  const heroContent = document.getElementById('hero-content');
  const scrollIndicator = document.getElementById('scroll-indicator');
  
  // Hero内容入场动画
  setTimeout(() => {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    heroContent.style.transition = 'opacity 0.8s easeOut, transform 0.8s easeOut';
    
    setTimeout(() => {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 100);
  }, 100);

  // 滚动指示器渐入
  setTimeout(() => {
    scrollIndicator.style.opacity = '1';
    scrollIndicator.style.transition = 'opacity 1s ease';
    
    // 滚动指示器上下动画
    const indicatorIcon = scrollIndicator.querySelector('div');
    indicatorIcon.style.animation = 'bounce 2s infinite';
  }, 1000);

  // ========== 滚动驱动动画逻辑 ==========
  const mainBuilder = document.getElementById('main-builder');
  const sidePanel = document.getElementById('side-panel');
  const gpu = document.getElementById('gpu');
  const cpuCooler = document.getElementById('cpu-cooler');
  const ram = document.getElementById('ram');
  const psu = document.getElementById('psu');
  const progressBar = document.getElementById('progress-bar');
  
  // 信息卡片元素
  const cardCase = document.getElementById('card-case');
  const cardGpu = document.getElementById('card-gpu');
  const cardCpuCooler = document.getElementById('card-cpu_cooler');
  const cardRam = document.getElementById('card-ram');
  const cardPsu = document.getElementById('card-psu');
  
  // 所有卡片
  const allCards = [cardCase, cardGpu, cardCpuCooler, cardRam, cardPsu];
  
  // 重置所有卡片状态
  const resetAllCards = () => {
    allCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = card === cardCase || card === cardCpuCooler || card === cardPsu 
        ? 'translateY(-50%) translateX(50px) scale(0.95)' 
        : 'translateY(-50%) translateX(-50px) scale(0.95)';
    });
  };
  
  // 激活指定卡片
  const activateCard = (card) => {
    resetAllCards();
    card.style.opacity = '1';
    card.style.transform = 'translateY(-50%) translateX(0) scale(1)';
  };

  // 滚动监听 - 驱动所有动画
  window.addEventListener('scroll', () => {
    // 计算滚动进度 (0-1)
    const scrollTop = window.scrollY;
    const builderOffset = mainBuilder.offsetTop;
    const builderHeight = mainBuilder.offsetHeight;
    const viewportHeight = window.innerHeight;
    
    let scrollProgress = (scrollTop - builderOffset + viewportHeight) / (builderHeight);
    scrollProgress = Math.max(0, Math.min(1, scrollProgress));
    
    // 更新进度条
    progressBar.style.transform = `scaleX(${scrollProgress})`;

    // ========== 部件动画 ==========
    // 1. 侧面板动画 (0.10 - 0.25)
    if (scrollProgress >= 0.1 && scrollProgress <= 0.25) {
      const progress = (scrollProgress - 0.1) / 0.15;
      sidePanel.style.transform = `translateX(${progress * 500}px)`;
      sidePanel.style.opacity = `${1 - progress}`;
    } else if (scrollProgress > 0.25) {
      sidePanel.style.transform = 'translateX(500px)';
      sidePanel.style.opacity = '0';
    } else {
      sidePanel.style.transform = 'translateX(0)';
      sidePanel.style.opacity = '1';
    }

    // 2. GPU动画 (0.25 - 0.55)
    if (scrollProgress >= 0.25 && scrollProgress <= 0.35) {
      const progress = (scrollProgress - 0.25) / 0.10;
      gpu.style.transform = `translateX(${progress * -50}px) rotateY(${progress * 10}deg)`;
      gpu.style.opacity = '1';
    } else if (scrollProgress > 0.35 && scrollProgress <= 0.45) {
      gpu.style.transform = 'translateX(-50px) rotateY(10deg)';
      gpu.style.opacity = '1';
    } else if (scrollProgress > 0.45 && scrollProgress <= 0.55) {
      const progress = (scrollProgress - 0.45) / 0.10;
      gpu.style.transform = `translateX(${progress * -750 - 50}px) rotateY(10deg)`;
      gpu.style.opacity = `${1 - progress}`;
    } else if (scrollProgress > 0.55) {
      gpu.style.transform = 'translateX(-800px) rotateY(10deg)';
      gpu.style.opacity = '0';
    } else {
      gpu.style.transform = 'translateX(0) rotateY(0deg)';
      gpu.style.opacity = '1';
    }

    // 3. CPU Cooler动画 (0.40 - 0.70)
    if (scrollProgress >= 0.40 && scrollProgress <= 0.50) {
      const progress = (scrollProgress - 0.40) / 0.10;
      cpuCooler.style.transform = `translateY(${progress * -40}px)`;
      cpuCooler.style.opacity = '1';
    } else if (scrollProgress > 0.50 && scrollProgress <= 0.60) {
      cpuCooler.style.transform = 'translateY(-40px)';
      cpuCooler.style.opacity = '1';
    } else if (scrollProgress > 0.60 && scrollProgress <= 0.70) {
      const progress = (scrollProgress - 0.60) / 0.10;
      cpuCooler.style.transform = `translateY(-40px) translateX(${progress * 800}px)`;
      cpuCooler.style.opacity = `${1 - progress}`;
    } else if (scrollProgress > 0.70) {
      cpuCooler.style.transform = 'translateY(-40px) translateX(800px)';
      cpuCooler.style.opacity = '0';
    } else {
      cpuCooler.style.transform = 'translateY(0) translateX(0)';
      cpuCooler.style.opacity = '1';
    }

    // 4. RAM动画 (0.70 - 0.95)
    if (scrollProgress >= 0.70 && scrollProgress <= 0.75) {
      const progress = (scrollProgress - 0.70) / 0.05;
      ram.style.transform = `translateX(${progress * 40}px)`;
      ram.style.opacity = '1';
    } else if (scrollProgress > 0.75 && scrollProgress <= 0.85) {
      ram.style.transform = 'translateX(40px)';
      ram.style.opacity = '1';
    } else if (scrollProgress > 0.85 && scrollProgress <= 0.95) {
      const progress = (scrollProgress - 0.85) / 0.10;
      ram.style.transform = `translateX(${progress * 560 + 40}px)`;
      ram.style.opacity = `${1 - progress}`;
    } else if (scrollProgress > 0.95) {
      ram.style.transform = 'translateX(600px)';
      ram.style.opacity = '0';
    } else {
      ram.style.transform = 'translateX(0)';
      ram.style.opacity = '1';
    }

    // 5. PSU动画 (0.85 - 1.0)
    if (scrollProgress >= 0.85 && scrollProgress <= 0.90) {
      const progress = (scrollProgress - 0.85) / 0.05;
      psu.style.transform = `translateY(${progress * 40}px)`;
      psu.style.opacity = '1';
    } else if (scrollProgress > 0.90 && scrollProgress <= 0.95) {
      psu.style.transform = 'translateY(40px)';
      psu.style.opacity = '1';
    } else if (scrollProgress > 0.95 && scrollProgress <= 1.0) {
      const progress = (scrollProgress - 0.95) / 0.05;
      psu.style.transform = `translateY(40px) translateX(${progress * -800}px)`;
      psu.style.opacity = `${1 - progress}`;
    } else if (scrollProgress > 1.0) {
      psu.style.transform = 'translateY(40px) translateX(-800px)';
      psu.style.opacity = '0';
    } else {
      psu.style.transform = 'translateY(0) translateX(0)';
      psu.style.opacity = '1';
    }

    // ========== 信息卡片激活逻辑 ==========
    if (scrollProgress < 0.15) {
      resetAllCards(); // 初始状态
    } else if (scrollProgress < 0.25) {
      activateCard(cardCase); // Case
    } else if (scrollProgress < 0.45) {
      activateCard(cardGpu); // GPU
    } else if (scrollProgress < 0.65) {
      activateCard(cardCpuCooler); // CPU Cooler
    } else if (scrollProgress < 0.85) {
      activateCard(cardRam); // RAM
    } else if (scrollProgress < 1.0) {
      activateCard(cardPsu); // PSU
    } else {
      resetAllCards(); // 结束状态
    }
  });

  // 初始化所有卡片状态
  resetAllCards();

  // 添加bounce动画关键帧
  const style = document.createElement('style');
  style.textContent = `
    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(10px);
      }
    }
  `;
  document.head.appendChild(style);
});