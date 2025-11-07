document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
    // 移动端点击后关闭菜单
    if (window.innerWidth < 768) {
      toggleMenu();
    }
  });
});
// 检测元素是否在视口中
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  // 元素顶部进入视口底部100px内时触发（留出缓冲）
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 100
  );
}

// 处理滚动事件
function handleScroll() {
  document.querySelectorAll('.fade-element').forEach(element => {
    if (isInViewport(element) && !element.classList.contains('fade-in')) {
      element.classList.add('fade-in'); // 触发淡入动画
    }
  });
}

// 初始加载时检查一次（避免页面刷新后元素已在视口却不显示动画）
window.addEventListener('load', handleScroll);
// 滚动时持续检查
window.addEventListener('scroll', handleScroll);