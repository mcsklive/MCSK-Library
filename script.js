const GOOGLE_APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxYe88qRyCzfn0ei8QeWJXhGX3vDJUbIpfWJDn8IeRpdTJcYrGD0kp5bSw8Z522lbsllg/exec';

const translations = {
    th: {
        "menu-dash": "📊 แดชบอร์ดวิเคราะห์", "menu-proj": "📁 ข้อมูลโปรเจกต์", "menu-team": "👥 จัดการทีมงาน", "menu-admin": "🛡️ ตั้งค่าผู้ดูแลระบบ", "menu-relax": "☕ มุมพักผ่อน", "menu-logout": "🚪 ออกจากระบบ",
        "admin-header": "การตั้งค่าสภาพแวดล้อม (Settings)", "admin-sub": "Business Analyst Configuration", "admin-section": "อุปกรณ์และระบบปฏิบัติการหลัก (Environment Specs)", "os-label": "อุปกรณ์ที่ใช้ซิงก์ข้อมูลหลัก (Primary OS)", "access-label": "ระดับการเข้าถึงข้อมูล (Access Level)", "btn-save": "💾 บันทึกการเปลี่ยนแปลง",
        "dash-chart-title": "สถิติการประสานงานรายเดือน", "dash-log-title": "กิจกรรมล่าสุด", "dash-table-title": "รายชื่อพนักงานในทีม (Team Directory)", "th-id": "รหัสพนักงาน", "th-role": "บทบาท (Role)", "th-task": "หน้าที่หลัก", "th-status": "สถานะ",
        "proj-header": "กระดานงาน (Kanban Board)", "proj-sub": "ลากและวางการ์ดเพื่ออัปเดตสถานะโปรเจกต์", "kb-todo": "📌 รอดำเนินการ (To Do)", "kb-inprog": "⏳ กำลังทำ (In Progress)", "kb-done": "✅ เสร็จสิ้น (Completed)", "kb-add": "➕ เพิ่มงานใหม่",
        "team-header": "ประสิทธิภาพทีม (Team Performance)", "team-sub": "ติดตามผลการประเมินและการประสานงาน", "team-jnr-title": "🌱 น้องใหม่ (Junior Staff)", "team-jnr-status": "สถานะ: กำลังเรียนรู้งาน (Training)", "team-jnr-desc": "Customer Support Etiquette และประสานงานเบื้องต้น", "team-jnr-prog": "อัตราความสำเร็จงาน", "team-snr-title": "⭐ พี่เก่า (Senior Colleague)", "team-snr-status": "สถานะ: ปฏิบัติงาน (Active)", "team-snr-desc": "ดูแลโครงสร้างระบบและตัดสินใจเคสระดับสูง", "team-snr-prog": "ความเร็วในการปิดเคส", "btn-eval": "📄 ดูผลประเมิน", "btn-assign": "🎯 มอบหมายงานพิเศษ",
        "toast-save": "บันทึกการตั้งค่าระบบเรียบร้อยแล้ว!", "toast-update": "อัปเดตสถานะงานเรียบร้อย", "toast-add": "เพิ่มงานใหม่สำเร็จ!", "toast-delete": "ลบงานเรียบร้อยแล้ว!",
        "search-placeholder": "ค้นหางาน...", "filter-all": "งานทั้งหมด", "filter-mine": "งานของฉัน",
        "modal-title": "✨ เพิ่มงานใหม่", "modal-task-name": "ชื่องาน", "modal-tag": "ประเภทงาน (Tag)", "modal-assignee": "ผู้รับผิดชอบ", "modal-date": "วันที่กำหนดส่ง", "btn-cancel": "ยกเลิก", "btn-confirm": "บันทึกงาน",
        "empty-msg": "ไม่มีงานในช่องนี้",
        "admin-users": "จัดการสมาชิก (Member Database)", "th-name": "ชื่อ-นามสกุล", "th-email": "อีเมล", "th-action": "จัดการ", "btn-delete": "ลบ (Delete)", "msg-delete": "คุณแน่ใจหรือไม่ที่จะลบผู้ใช้นี้?", "msg-deleted": "ลบผู้ใช้เรียบร้อยแล้ว", "msg-status": "อัปเดตสถานะผู้ใช้เรียบร้อย",
        "relax-header": "มุมพักผ่อน (Relaxation Corner) 🍃", "relax-sub": "พักสายตา ฟังเพลงสบายๆ และสูดลมหายใจลึกๆ",
        "relax-music": "🎵 Music Preview (ค้นหาเพลง)", "relax-breathe": "🌬️ 4-7-8 Breathing", "breathe-ready": "พร้อมแล้วกดเริ่มเลย", "btn-start-breathe": "▶ เริ่มทำสมาธิ", "btn-stop-breathe": "⏹ หยุด"
    },
    en: {
        "menu-dash": "📊 Analytics Dashboard", "menu-proj": "📁 Projects", "menu-team": "👥 Team Management", "menu-admin": "🛡️ Admin Settings", "menu-relax": "☕ Relaxation Corner", "menu-logout": "🚪 Logout",
        "admin-header": "System Settings", "admin-sub": "Business Analyst Configuration", "admin-section": "Environment & Specs", "os-label": "Primary Sync Device (OS)", "access-label": "Data Access Level", "btn-save": "💾 Save Changes",
        "dash-chart-title": "Monthly Coordination Stats", "dash-log-title": "Recent Activities", "dash-table-title": "Team Directory", "th-id": "Employee ID", "th-role": "Role", "th-task": "Main Task", "th-status": "Status",
        "proj-header": "Kanban Board", "proj-sub": "Drag and drop cards to update project status", "kb-todo": "📌 To Do", "kb-inprog": "⏳ In Progress", "kb-done": "✅ Completed", "kb-add": "➕ Add Task",
        "team-header": "Team Performance", "team-sub": "Track evaluation and coordination results", "team-jnr-title": "🌱 Junior Staff", "team-jnr-status": "Status: Training", "team-jnr-desc": "Customer Support Etiquette and basic coordination", "team-jnr-prog": "Task Success Rate", "team-snr-title": "⭐ Senior Colleague", "team-snr-status": "Status: Active", "team-snr-desc": "Oversee system structure and handle high-level cases", "team-snr-prog": "Case Resolution Speed", "btn-eval": "📄 View Evaluation", "btn-assign": "🎯 Assign Special Task",
        "toast-save": "Settings saved successfully!", "toast-update": "Task updated successfully", "toast-add": "New task added!", "toast-delete": "Task deleted successfully!",
        "search-placeholder": "Search tasks...", "filter-all": "All Tasks", "filter-mine": "My Tasks",
        "modal-title": "✨ Add New Task", "modal-task-name": "Task Name", "modal-tag": "Task Type (Tag)", "modal-assignee": "Assignee", "modal-date": "Due Date", "btn-cancel": "Cancel", "btn-confirm": "Save Task",
        "empty-msg": "No tasks here",
        "admin-users": "Member Database", "th-name": "Full Name & Date", "th-email": "Email", "th-action": "Action", "btn-delete": "Delete", "msg-delete": "Are you sure you want to delete this user?", "msg-deleted": "User deleted successfully", "msg-status": "User status updated",
        "relax-header": "Relaxation Corner 🍃", "relax-sub": "Take a break, enjoy the music, and breathe deeply",
        "relax-music": "🎵 Music Preview (Search)", "relax-breathe": "🌬️ 4-7-8 Breathing", "breathe-ready": "Click Start when ready", "btn-start-breathe": "▶ Start Breathing", "btn-stop-breathe": "⏹ Stop"
    }
};

function toggleLanguage() {
    let currentLang = localStorage.getItem('sys_lang') || 'th';
    let newLang = currentLang === 'th' ? 'en' : 'th';
    localStorage.setItem('sys_lang', newLang);
    applyLanguage(newLang);
}

function applyLanguage(lang) {
    const texts = translations[lang];
    if (!texts) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[key]) el.innerHTML = texts[key];
    });
    
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.placeholder = texts["search-placeholder"];

    document.querySelectorAll('.lang-btn').forEach(btn => btn.innerText = lang === 'en' ? 'EN' : 'TH');

    const welcomeText = document.getElementById('welcome-user');
    if(welcomeText) {
        const username = sessionStorage.getItem('user_name') || sessionStorage.getItem('user_token') || 'ผู้ใช้งาน';
        welcomeText.innerText = lang === 'en' ? `Welcome back, ${username}! 🎉` : `ยินดีต้อนรับกลับมา, ${username}! 🎉`;
    }
    
    if (window.myChartInstance) {
        window.myChartInstance.data.datasets[0].label = lang === 'en' ? 'Ticket Resolution Rate (%)' : 'อัตราการปิดทิกเก็ต (%)';
        window.myChartInstance.update();
    }
    if (document.querySelector('.kanban-board')) renderKanban(currentKanbanTasks);
    if (document.getElementById('admin-user-table-body')) loadUserManagement();
}

const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.querySelectorAll('.theme-btn').forEach(btn => btn.innerText = savedTheme === 'dark' ? '☀️' : '🌙');
};

document.querySelectorAll('.theme-btn').forEach(btn => btn.addEventListener('click', () => {
    const targetTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
    initTheme();
    
    if (window.myChartInstance) {
        const isDark = targetTheme === 'dark';
        window.myChartInstance.options.plugins.legend.labels.color = isDark ? '#f8fafc' : '#1a202c';
        window.myChartInstance.options.scales.x.ticks.color = isDark ? '#f8fafc' : '#1a202c';
        window.myChartInstance.options.scales.y.ticks.color = isDark ? '#f8fafc' : '#1a202c';
        window.myChartInstance.options.scales.y.grid.color = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
        window.myChartInstance.data.datasets[0].borderColor = isDark ? '#38bdf8' : '#434190';
        window.myChartInstance.data.datasets[0].backgroundColor = isDark ? 'rgba(56, 189, 248, 0.15)' : 'rgba(67, 65, 144, 0.15)';
        window.myChartInstance.data.datasets[0].pointBackgroundColor = isDark ? '#ffffff' : '#434190';
        window.myChartInstance.update();
    }
}));

function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    if(sidebar) sidebar.classList.toggle('open');
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 500); }, 3500);
}

function togglePasswordVisibility(id) {
    const input = document.getElementById(id);
    if(input) input.type = input.type === "password" ? "text" : "password";
}

function toggleForm(type) {
    document.getElementById('login-form')?.classList.toggle('active-form', type === 'login');
    document.getElementById('register-form')?.classList.toggle('active-form', type === 'register');
}

document.getElementById('reg-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!GOOGLE_APP_SCRIPT_URL || GOOGLE_APP_SCRIPT_URL.includes('วาง_URL')) { alert('กรุณาตั้งค่า GOOGLE_APP_SCRIPT_URL'); return; }

    const btn = document.getElementById('submit-btn');
    btn.innerText = "กำลังสมัครสมาชิก... ⏳"; btn.disabled = true;

    try {
        const response = await fetch(GOOGLE_APP_SCRIPT_URL, {
            method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({ action: 'register', name: document.getElementById('reg-name').value.trim(), email: document.getElementById('reg-email').value.trim(), password: document.getElementById('reg-password').value })
        });
        const result = await response.json();
        alert(result.message);
        if(result.status === "register_success") toggleForm('login');
    } catch (error) {
        alert('เกิดข้อผิดพลาดในการเชื่อมต่อ Database');
    } finally { btn.innerText = "สมัครสมาชิก"; btn.disabled = false; }
});

document.getElementById('log-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!GOOGLE_APP_SCRIPT_URL || GOOGLE_APP_SCRIPT_URL.includes('วาง_URL')) { alert('กรุณาตั้งค่า GOOGLE_APP_SCRIPT_URL'); return; }

    const emailOrId = document.getElementById('login-email').value.trim();
    const btn = document.getElementById('login-btn');
    btn.innerText = "กำลังตรวจสอบ... ⏳"; btn.disabled = true;

    try {
        const response = await fetch(GOOGLE_APP_SCRIPT_URL, {
            method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({ action: 'login', username: emailOrId, password: document.getElementById('login-password').value })
        });
        const result = await response.json();

        if (result.status === "success") {
            sessionStorage.setItem('user_token', result.email || emailOrId);
            sessionStorage.setItem('user_name', result.name || emailOrId);
            window.location.href = 'dashboard.html';
        } else {
            alert(`เข้าสู่ระบบไม่ได้: ${result.message}`);
            btn.innerText = "เข้าสู่ระบบ"; btn.disabled = false;
        }
    } catch (error) {
        alert('เกิดข้อผิดพลาดในการเชื่อมต่อ Database');
        btn.innerText = "เข้าสู่ระบบ"; btn.disabled = false;
    }
});

function logout() {
    sessionStorage.removeItem('user_token');
    sessionStorage.removeItem('user_name');
    window.location.href = 'index.html';
}

function exportToCSV() {
    showToast(localStorage.getItem('sys_lang') === 'en' ? "CSV Export Successful!" : "ส่งออกข้อมูลเป็นไฟล์ CSV สำเร็จ!", "success");
}

async function checkAuthStatus() {
    const email = sessionStorage.getItem('user_token');
    if (!email || email === 'save@admin.com') return; 

    try {
        const sheetId = '16-DjVwTG8TsdOohfg5p3BlvxBe174YIrDy2CbcER228';
        const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=Member_Database`;
        const response = await fetch(url);
        const text = await response.text();
        const jsonStr = text.substring(47, text.length - 2);
        const data = JSON.parse(jsonStr);
        
        let userFound = false;
        let isApproved = false;

        data.table.rows.forEach(row => {
            if (row && row.c && row.c[1] && row.c[1].v === email) {
                userFound = true;
                const status = row.c[4] ? String(row.c[4].v).trim().toLowerCase() : 'pending';
                if (status === 'approve') isApproved = true;
            }
        });

        if (userFound && !isApproved) {
            alert("เซสชันของคุณหมดอายุ หรือถูกระงับสิทธิ์การใช้งาน กรุณาติดต่อแอดมิน");
            logout();
        }
    } catch (error) {
        console.warn("Auth Check Bypass (Network Issue)");
    }
}

// 🌟 3. โหลดข้อมูล Dashboard
window.myChartInstance = null;
function loadDashboardData() {
    setTimeout(() => {
        document.querySelectorAll('.skeleton-loading').forEach(el => el.classList.remove('skeleton-loading'));
        const tableBody = document.getElementById('data-table-body');
        if (tableBody) {
            tableBody.innerHTML = `
                <tr><td>${sessionStorage.getItem('user_name') || 'Admin'}</td><td>Business Analyst</td><td>วิเคราะห์โครงสร้าง</td><td><span class="badge badge-success">Approve</span></td></tr>
                <tr><td>NONG-MAI01</td><td>Support Staff</td><td>Customer Support</td><td><span class="badge badge-warning">Training</span></td></tr>
                <tr><td>NONG-KAO02</td><td>Senior Analyst</td><td>เคลียร์เคสระดับสูง</td><td><span class="badge badge-success">Approve</span></td></tr>`;
        }

        const logList = document.getElementById('log-list');
        const currentLang = localStorage.getItem('sys_lang') || 'th';
        if (logList) logList.innerHTML = currentLang === 'en' ? `<li>[10:00] Login successful</li><li>[09:30] Python script verified</li><li>[09:15] ARRAYFORMULA updated</li>` : `<li>[10:00] เข้าสู่ระบบสำเร็จ</li><li>[09:30] ตรวจสอบสคริปต์ Python อัตโนมัติ</li><li>[09:15] อัปเดตสูตร ARRAYFORMULA</li>`;

        const ctx = document.getElementById('mainChart')?.getContext('2d');
        if (ctx) {
            if (window.myChartInstance) {
                window.myChartInstance.destroy();
            }

            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            const textColor = isDark ? '#f8fafc' : '#1a202c';
            const gridColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
            const lineColor = isDark ? '#38bdf8' : '#434190';
            const fillBg = isDark ? 'rgba(56, 189, 248, 0.15)' : 'rgba(67, 65, 144, 0.15)';
            
            window.myChartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: currentLang === 'en' ? 'Ticket Resolution Rate (%)' : 'อัตราการปิดทิกเก็ต (%)', data: [75, 82, 90, 88],
                        borderColor: lineColor, backgroundColor: fillBg,
                        fill: true, tension: 0.4, borderWidth: 3, pointBackgroundColor: isDark ? '#ffffff' : '#434190', pointRadius: 4
                    }]
                },
                options: {
                    responsive: true, maintainAspectRatio: false,
                    plugins: { legend: { labels: { color: textColor, font: { family: 'Prompt', size: 13 } } }, tooltip: { mode: 'index', intersect: false } },
                    scales: { y: { ticks: { color: textColor }, grid: { color: gridColor }, min: 0, max: 100 }, x: { ticks: { color: textColor }, grid: { display: false } } },
                    interaction: { mode: 'nearest', axis: 'x', intersect: false }
                }
            });
        }
    }, 100); 
}

// 🌟 4. ระบบ Kanban Board
let currentKanbanTasks = [];
let currentFilter = 'all';
let pendingTargetCol = 'todo';

function loadKanbanBoard() {
    let tasks = JSON.parse(localStorage.getItem('kanban_tasks'));
    if (!tasks || tasks.length === 0) {
        tasks = [
            { id: 't1', title: 'วิเคราะห์ข้อมูล Mocap Q2', tag: 'Data Analysis', badge: 'badge-warning', col: 'todo', assign: 'ME', date: '2026-04-30' },
            { id: 't2', title: 'พัฒนาระบบ Automated Timestamp', tag: 'Python Scripting', badge: 'badge-info', col: 'inprogress', assign: 'NK', date: '2026-05-15' },
            { id: 't3', title: 'ทดสอบสูตร ARRAYFORMULA', tag: 'Google Sheets', badge: 'badge-success', col: 'done', assign: 'NM', date: '2026-04-20' }
        ];
        localStorage.setItem('kanban_tasks', JSON.stringify(tasks));
    }
    currentKanbanTasks = tasks;
    
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('task-date-input');
    if(dateInput) dateInput.value = today;
    filterKanban(); 
}

function renderKanban(tasksToRender) {
    const cols = ['todo', 'inprogress', 'done'];
    const lang = localStorage.getItem('sys_lang') || 'th';
    const emptyMsg = translations[lang]["empty-msg"];
    
    cols.forEach(colId => {
        const listDiv = document.getElementById(`list-${colId}`);
        const countSpan = document.getElementById(`count-${colId}`);
        if(!listDiv) return;
        
        listDiv.innerHTML = '';
        const colTasks = tasksToRender.filter(t => t.col === colId);
        if(countSpan) countSpan.innerText = colTasks.length;

        if (colTasks.length === 0) {
            listDiv.innerHTML = `<div class="empty-state"><span>📭</span> ${emptyMsg}</div>`;
        } else {
            colTasks.forEach(task => {
                let dateDisplay = "No Date";
                if(task.date) {
                    const d = new Date(task.date);
                    dateDisplay = `${d.getDate()} ${d.toLocaleString('default', { month: 'short' })}`;
                }
                const card = document.createElement('div');
                card.className = 'kanban-card'; card.draggable = true; card.id = task.id; card.ondragstart = drag;
                card.innerHTML = `
                    <div class="card-header-flex">
                        <h4>${task.title}</h4>
                        <button class="delete-task-btn" onclick="deleteTask('${task.id}')" title="ลบงานนี้">🗑️</button>
                    </div>
                    <div class="card-meta">
                        <span class="badge ${task.badge}">${task.tag}</span>
                        <div class="card-footer"><span class="due-date">📅 ${dateDisplay}</span><div class="avatar" title="${task.assign}">${task.assign}</div></div>
                    </div>`;
                listDiv.appendChild(card);
            });
        }
    });
}

window.setFilter = function(filterType, btnElement) {
    currentFilter = filterType;
    document.querySelectorAll('.filter-pill').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    filterKanban();
}

window.filterKanban = function() {
    const searchKeyword = document.getElementById('search-input')?.value.toLowerCase() || "";
    let filtered = currentKanbanTasks;
    if (currentFilter !== 'all') filtered = filtered.filter(t => t.assign === currentFilter);
    if (searchKeyword.trim() !== "") filtered = filtered.filter(t => t.title.toLowerCase().includes(searchKeyword) || t.tag.toLowerCase().includes(searchKeyword));
    renderKanban(filtered);
}

window.openTaskModal = function(colId) { pendingTargetCol = colId; document.getElementById('task-title-input').value = ""; document.getElementById('task-modal').classList.add('active'); }
window.closeTaskModal = function() { document.getElementById('task-modal').classList.remove('active'); }

window.saveNewTask = function() {
    const title = document.getElementById('task-title-input').value.trim();
    if(!title) { alert("กรุณาระบุชื่องาน"); return; }
    const tagVal = document.getElementById('task-tag-input').value; 
    const [tagName, badgeClass] = tagVal.split('|');
    
    currentKanbanTasks.push({
        id: 't' + Date.now(), title: title, tag: tagName, badge: badgeClass,
        col: pendingTargetCol, assign: document.getElementById('task-assign-input').value, date: document.getElementById('task-date-input').value
    });
    localStorage.setItem('kanban_tasks', JSON.stringify(currentKanbanTasks));
    closeTaskModal(); filterKanban(); 
    showToast(translations[localStorage.getItem('sys_lang') || 'th']["toast-add"], 'success');
}

window.deleteTask = function(taskId) {
    const lang = localStorage.getItem('sys_lang') || 'th';
    const msg = lang === 'en' ? "Are you sure you want to delete this task?" : "คุณแน่ใจหรือไม่ที่จะลบงานนี้?";
    if(confirm(msg)) {
        currentKanbanTasks = currentKanbanTasks.filter(t => t.id !== taskId);
        localStorage.setItem('kanban_tasks', JSON.stringify(currentKanbanTasks));
        filterKanban();
        showToast(translations[lang]["toast-delete"], 'info');
    }
}

window.allowDrop = function(ev) { 
    ev.preventDefault(); 
    const dropTarget = ev.target.closest('.kanban-column');
    if(dropTarget) dropTarget.classList.add('drag-over');
}
window.drag = function(ev) { ev.dataTransfer.setData("text", ev.target.id); }
window.drop = function(ev) {
    ev.preventDefault();
    document.querySelectorAll('.kanban-column').forEach(col => col.classList.remove('drag-over'));
    const taskId = ev.dataTransfer.getData("text");
    let dropTarget = ev.target.closest('.kanban-column');
    
    if(dropTarget) {
        const newColId = dropTarget.id;
        const taskIndex = currentKanbanTasks.findIndex(t => t.id === taskId);
        if (taskIndex > -1 && currentKanbanTasks[taskIndex].col !== newColId) {
            currentKanbanTasks[taskIndex].col = newColId;
            localStorage.setItem('kanban_tasks', JSON.stringify(currentKanbanTasks));
            filterKanban();
            showToast(translations[localStorage.getItem('sys_lang') || 'th']["toast-update"], 'success');
        }
    }
}

document.addEventListener('dragover', (ev) => {
    if (!ev.target.closest('.kanban-column')) {
        document.querySelectorAll('.kanban-column').forEach(col => col.classList.remove('drag-over'));
    }
});

// 🌟 5. ระบบ Admin Settings
window.loadAdminSettings = function() {
    const savedOS = localStorage.getItem('admin_os');
    if(savedOS && document.getElementById('os-select')) {
        document.getElementById('os-select').value = savedOS;
    }
}

window.saveAdminSettings = function() {
    const osSelect = document.getElementById('os-select');
    if(osSelect) {
        localStorage.setItem('admin_os', osSelect.value);
        showToast(translations[localStorage.getItem('sys_lang') || 'th']["toast-save"], 'success');
    }
}

async function loadUserManagement() {
    const currentUserToken = sessionStorage.getItem('user_token');
    const section = document.getElementById('user-management-section');
    if (!section) return;

    if (currentUserToken === 'save@admin.com') {
        section.style.display = 'block';
        const tbody = document.getElementById('admin-user-table-body');
        tbody.innerHTML = `<tr><td colspan=\"5\" style=\"text-align: center; padding: 40px; color: var(--accent);\"><div class="skeleton-loading" style="height: 30px; border-radius: 8px;"></div></td></tr>`;

        try {
            const sheetId = '16-DjVwTG8TsdOohfg5p3BlvxBe174YIrDy2CbcER228';
            const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=Member_Database`;
            
            const response = await fetch(url);
            const text = await response.text();
            const jsonStr = text.substring(47, text.length - 2);
            const data = JSON.parse(jsonStr);
            
            let sheetUsers = [];
            data.table.rows.forEach(row => {
                if (!row || !row.c || !row.c[1]) return; 
                sheetUsers.push({
                    name: row.c[0] ? row.c[0].v : '-',
                    email: row.c[1] ? row.c[1].v : '-',
                    regDate: row.c[3] ? (row.c[3].f || row.c[3].v) : '-',
                    approval: row.c[4] ? String(row.c[4].v).trim() : 'Pending', 
                });
            });

            renderGoogleSheetUsers(sheetUsers);

        } catch (error) {
            tbody.innerHTML = `<tr><td colspan=\"5\" style=\"text-align: center; color: #e53e3e; padding: 30px;\">เกิดข้อผิดพลาดในการดึงข้อมูลจาก Google Sheets</td></tr>`;
        }
    } else {
        section.style.display = 'none';
    }
}

function renderGoogleSheetUsers(users) {
    const tbody = document.getElementById('admin-user-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    const lang = localStorage.getItem('sys_lang') || 'th';

    users.forEach((u) => {
        const tr = document.createElement('tr');
        const isSuperAdmin = u.email === 'save@admin.com';
        const roleBadge = isSuperAdmin ? 'badge-success' : 'badge-info';
        const roleText = isSuperAdmin ? 'SuperAdmin' : 'User';
        
        let selectColor = '';
        if (u.approval.toLowerCase() === 'approve') selectColor = 'color: var(--success); font-weight: 600;';
        else if (u.approval.toLowerCase() === 'reject') selectColor = 'color: #e53e3e; font-weight: 600;';
        else selectColor = 'color: var(--warning); font-weight: 600;';

        let statusHtml = `
            <select class="custom-select" style="padding: 8px 12px; width: 130px; font-size: 13px; ${selectColor}" 
                    onchange="updateSheetUserStatus('${u.email}', this.value)" ${isSuperAdmin ? 'disabled' : ''}>
                <option value="Pending" ${(!u.approval || u.approval.toLowerCase() === 'pending') ? 'selected' : ''}>Pending</option>
                <option value="Approve" ${u.approval.toLowerCase() === 'approve' ? 'selected' : ''}>Approve</option>
                <option value="Reject" ${u.approval.toLowerCase() === 'reject' ? 'selected' : ''}>Reject</option>
            </select>
        `;

        let actionHtml = isSuperAdmin 
            ? `<span style="color:var(--text-sub); font-size:13px; font-weight:500;">🔒 System Root</span>` 
            : `<button class="btn btn-outline" style="padding: 8px 16px; margin: 0; border-color: #e53e3e; color: #e53e3e; font-size: 13px; border-radius: 8px;" 
               onclick="deleteSheetUser('${u.email}')">${translations[lang]['btn-delete']}</button>`;

        tr.innerHTML = `
            <td>
                <div style="font-weight: 600;">${u.name}</div>
                <div style="font-size: 12px; color: var(--text-sub); margin-top: 6px;">📅 ${u.regDate}</div>
            </td>
            <td>${u.email}</td>
            <td><span class="badge ${roleBadge}">${roleText}</span></td>
            <td>${statusHtml}</td>
            <td>${actionHtml}</td>
        `;
        tbody.appendChild(tr);
    });
}

window.updateSheetUserStatus = async function(email, newStatus) {
    if (!GOOGLE_APP_SCRIPT_URL || GOOGLE_APP_SCRIPT_URL.includes('วาง_URL')) return;
    showToast('กำลังอัปเดตข้อมูลไปยัง Database... ⏳', 'info');
    try {
        await fetch(GOOGLE_APP_SCRIPT_URL, {
            method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({ action: 'update', email: email, newStatus: newStatus })
        });
        showToast(translations[localStorage.getItem('sys_lang') || 'th']['msg-status'], 'success');
        setTimeout(() => loadUserManagement(), 1500);
    } catch (error) { showToast('เกิดข้อผิดพลาดในการเชื่อมต่อ Database', 'error'); }
}

window.deleteSheetUser = async function(email) {
    if (!GOOGLE_APP_SCRIPT_URL || GOOGLE_APP_SCRIPT_URL.includes('วาง_URL')) return;
    const lang = localStorage.getItem('sys_lang') || 'th';
    if (!confirm(translations[lang]['msg-delete'])) return;
    showToast('กำลังลบข้อมูลจาก Database... ⏳', 'info');
    try {
        await fetch(GOOGLE_APP_SCRIPT_URL, {
            method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({ action: 'delete', email: email })
        });
        showToast(translations[lang]['msg-deleted'], 'success');
        setTimeout(() => loadUserManagement(), 1500);
    } catch (error) { showToast('เกิดข้อผิดพลาดในการเชื่อมต่อ Database', 'error'); }
}


// 🌟 6. มุมพักผ่อน (Relaxation Corner - Breathing Exercise)
let breatheInterval;
let isBreathing = false;

window.startBreathing = function() {
    const btn = document.getElementById('breathe-btn');
    const circle = document.querySelector('.breathe-circle');
    const text = document.getElementById('breathe-text');
    const lang = localStorage.getItem('sys_lang') || 'th';

    if (isBreathing) {
        clearInterval(breatheInterval);
        circle.className = 'breathe-circle';
        text.innerText = lang === 'en' ? "Click Start when ready" : "พร้อมแล้วกดเริ่มเลย";
        btn.innerText = lang === 'en' ? "▶ Start Breathing" : "▶ เริ่มทำสมาธิ";
        btn.classList.remove('btn-outline-danger');
        isBreathing = false;
        return;
    }

    isBreathing = true;
    btn.innerText = lang === 'en' ? "⏹ Stop" : "⏹ หยุด";
    btn.classList.add('btn-outline-danger'); 

    const breatheAnimation = () => {
        text.innerText = lang === 'en' ? "Inhale..." : "หายใจเข้า...";
        circle.className = 'breathe-circle inhale';
        
        setTimeout(() => {
            text.innerText = lang === 'en' ? "Hold..." : "กลั้นไว้...";
            circle.className = 'breathe-circle hold';
            
            setTimeout(() => {
                text.innerText = lang === 'en' ? "Exhale..." : "หายใจออก...";
                circle.className = 'breathe-circle exhale';
            }, 7000);
            
        }, 4000);
    };

    breatheAnimation();
    breatheInterval = setInterval(breatheAnimation, 19000);
}

// 🌟 7. ระบบค้นหาเพลงและเล่นพรีวิว + Global Floating Player
function initGlobalPlayer() {
    if (document.getElementById('global-music-player')) return;
    
    const playerHTML = `
        <div id="global-music-player" class="global-player hidden">
            <img id="global-np-img" src="" alt="cover">
            <div class="global-np-info">
                <h4 id="global-np-title">Title</h4>
                <p id="global-np-artist">Artist</p>
            </div>
            <audio id="global-audio" controls controlsList="nodownload"></audio>
            <button class="close-player-btn" onclick="closeGlobalPlayer()">✖</button>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', playerHTML);
}

window.closeGlobalPlayer = function() {
    const globalPlayer = document.getElementById('global-music-player');
    const audio = document.getElementById('global-audio');
    audio.pause();
    globalPlayer.classList.add('hidden');
}

window.searchMusic = async function(event) {
    if (event.key !== 'Enter') return;
    
    const query = document.getElementById('music-search-input').value.trim();
    if (!query) return;

    const resultsContainer = document.getElementById('music-results-container');
    const lang = localStorage.getItem('sys_lang') || 'th';
    
    resultsContainer.innerHTML = `
        <div class="skeleton-loading" style="height: 80px; border-radius: 10px; margin-bottom: 8px;"></div>
        <div class="skeleton-loading" style="height: 80px; border-radius: 10px; margin-bottom: 8px;"></div>
        <div class="skeleton-loading" style="height: 80px; border-radius: 10px;"></div>
    `;

    try {
        const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=10`);
        const data = await response.json();
        
        if (data.results.length === 0) {
            resultsContainer.innerHTML = `<div class="empty-state" style="padding: 20px;"><span>❌</span> ${lang === 'en' ? 'No results found' : 'ไม่พบเพลงที่ค้นหา'}</div>`;
            return;
        }

        resultsContainer.innerHTML = '';
        data.results.forEach(track => {
            const artwork = track.artworkUrl100;
            const title = track.trackName;
            const artist = track.artistName;
            const previewUrl = track.previewUrl;

            if (!previewUrl) return; 

            // แก้ไขลิงก์ไปยัง Spotify 
            const spotifySearchUrl = `https://open.spotify.com/search/${encodeURIComponent(title + ' ' + artist)}`;

            const trackDiv = document.createElement('div');
            trackDiv.className = 'track-item';
            
            trackDiv.innerHTML = `
                <img src="${artwork}" alt="cover">
                <div class="track-info">
                    <h4>${title}</h4>
                    <p>${artist}</p>
                    <div class="track-actions">
                        <button class="btn-music btn-preview" onclick="playTrack('${previewUrl}', '${title.replace(/'/g, "\\'")}', '${artist.replace(/'/g, "\\'")}', '${artwork}')">
                            ▶ Preview
                        </button>
                        <a href="${spotifySearchUrl}" target="_blank" class="btn-music btn-fullsong spotify-btn">
                            <span style="font-size: 14px; margin-right: 4px;">🟢</span> Play on Spotify
                        </a>
                    </div>
                </div>
            `;
            resultsContainer.appendChild(trackDiv);
        });

    } catch (error) {
        console.error("Music Fetch Error:", error);
        resultsContainer.innerHTML = `<div class="empty-state" style="padding: 20px; color: #e53e3e;"><span>⚠️</span> เกิดข้อผิดพลาดในการเชื่อมต่อ</div>`;
    }
}

window.playTrack = function(previewUrl, title, artist, img) {
    initGlobalPlayer(); 
    
    const globalPlayer = document.getElementById('global-music-player');
    const audio = document.getElementById('global-audio');
    
    document.getElementById('global-np-img').src = img;
    document.getElementById('global-np-title').innerText = title;
    document.getElementById('global-np-artist').innerText = artist;
    
    globalPlayer.classList.remove('hidden');
    audio.src = previewUrl;
    audio.play();
    
    const localContainer = document.getElementById('audio-player-container');
    if (localContainer) {
        localContainer.style.display = 'none';
    }
}

// ----------------------------------------------------------------
// 🌟 SPA Router (เปลี่ยนหน้าโดยไม่ Refresh)
// ----------------------------------------------------------------
document.addEventListener('click', async (e) => {
    const link = e.target.closest('a.nav-item');
    if (!link) return;
    
    const url = link.getAttribute('href');
    
    if (url && url.endsWith('.html') && url !== 'index.html' && !link.classList.contains('logout-link')) {
        e.preventDefault();
        
        if (window.location.pathname.endsWith(url)) {
            if(window.innerWidth <= 768) toggleMobileMenu();
            return;
        }
        
        if(window.innerWidth <= 768) toggleMobileMenu();

        const contentArea = document.querySelector('.content-area');
        contentArea.style.opacity = '0.4'; 
        
        try {
            const response = await fetch(url);
            const html = await response.text();
            
            const doc = new DOMParser().parseFromString(html, 'text/html');
            const newContent = doc.querySelector('.content-area').innerHTML;
            
            contentArea.innerHTML = newContent;
            
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            const newActiveLink = document.querySelector(`.side-nav a.nav-item[href="${url}"]`);
            if (newActiveLink) newActiveLink.classList.add('active');
            
            history.pushState({ path: url }, '', url);
            
            if (!url.includes('relax.html') && typeof breatheInterval !== 'undefined') {
                clearInterval(breatheInterval);
                isBreathing = false;
            }
            
            contentArea.style.opacity = '1';
            applyLanguage(localStorage.getItem('sys_lang') || 'th');
            initPageScripts(url);
            
            if(url.includes('relax.html')) document.body.classList.add('relax-mode');
            else document.body.classList.remove('relax-mode');
            
        } catch (err) {
            console.error("SPA Routing Error:", err);
            window.location.href = url; 
        }
    }
});

window.addEventListener('popstate', async () => {
    const url = location.pathname.split('/').pop() || 'dashboard.html';
    if (url === 'index.html') return;
    
    const contentArea = document.querySelector('.content-area');
    contentArea.style.opacity = '0.4';
    
    try {
        const response = await fetch(url);
        const html = await response.text();
        const doc = new DOMParser().parseFromString(html, 'text/html');
        contentArea.innerHTML = doc.querySelector('.content-area').innerHTML;
        
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        const newActiveLink = document.querySelector(`.side-nav a.nav-item[href="${url}"]`);
        if (newActiveLink) newActiveLink.classList.add('active');
        
        contentArea.style.opacity = '1';
        applyLanguage(localStorage.getItem('sys_lang') || 'th');
        initPageScripts(url);
        
        if(url.includes('relax.html')) document.body.classList.add('relax-mode');
        else document.body.classList.remove('relax-mode');
        
    } catch(err) {
        window.location.reload();
    }
});

function initPageScripts(url) {
    if (document.getElementById('mainChart')) loadDashboardData(); 
    if (document.querySelector('.kanban-board')) loadKanbanBoard(); 
    if (document.getElementById('os-select')) {
        loadAdminSettings(); 
        loadUserManagement(); 
    }
}

// ----------------------------------------------------------------
// 🌟 โหลดครั้งแรกตอนเปิดเว็บ
// ----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    applyLanguage(localStorage.getItem('sys_lang') || 'th');
    
    if(document.querySelector('.dashboard-wrapper')) {
        checkAuthStatus();
        initGlobalPlayer(); 
    }

    const currentUrl = window.location.pathname.split('/').pop() || 'dashboard.html';
    if(currentUrl.includes('relax.html')) document.body.classList.add('relax-mode');
    
    initPageScripts(currentUrl);
});