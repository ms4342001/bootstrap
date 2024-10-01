// Sidebar toggle
    const sidebar = document.getElementById('sidebar');
    const toggleSidebar = document.getElementById('toggleSidebar');

    toggleSidebar.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    // User dropdown toggle
    const userMenuToggle = document.getElementById('userMenuToggle');
    const dropdownMenu = document.getElementById('dropdownMenu');

    userMenuToggle.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // 點擊外部關閉下拉選單
    window.addEventListener('click', function(e) {
        if (!userMenuToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    // 展開與收合子選單
    function toggleSubmenu(element) {
        const submenu = element.querySelector('.submenu');
        const isOpen = submenu.style.maxHeight;

        // 收起其他子選單
        const allSubmenus = document.querySelectorAll('.submenu');
        allSubmenus.forEach(sub => {
            if (sub !== submenu) {
                sub.style.maxHeight = null;
                sub.style.opacity = '0';
                setTimeout(() => {
                    sub.style.display = 'none';
                }, 300); // 與 CSS transition 時間一致
            }
        });

        if (isOpen) {
            // 收起子選單
            submenu.style.maxHeight = null;
            submenu.style.opacity = '0';
            setTimeout(() => {
                submenu.style.display = 'none';
            }, 300); // 與 CSS transition 時間一致
        } else {
            // 展開子選單
            submenu.style.display = 'block';
            submenu.style.maxHeight = submenu.scrollHeight + "px";
            submenu.style.opacity = '1';
        }
    }