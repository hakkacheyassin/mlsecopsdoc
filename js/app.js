/* ============================================
   MLSecOps Pipeline — Documentation App
   ============================================ */

(function () {
  'use strict';

  // ---- DOM refs ----
  const sidebar = document.getElementById('sidebar');
  const sidebarNav = document.getElementById('sidebarNav');
  const sidebarClose = document.getElementById('sidebarClose');
  const menuBtn = document.getElementById('menuBtn');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const searchInput = document.getElementById('searchInput');
  const pipelineContent = document.getElementById('pipelineContent');
  const detailOverlay = document.getElementById('detailOverlay');
  const detailPanel = document.getElementById('detailPanel');
  const detailClose = document.getElementById('detailClose');
  const detailContent = document.getElementById('detailContent');

  // ---- Helpers ----
  function hexToRgb(hex) {
    const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return r
      ? { r: parseInt(r[1], 16), g: parseInt(r[2], 16), b: parseInt(r[3], 16) }
      : { r: 99, g: 102, b: 241 };
  }

  function animateCounter(el, target, duration) {
    const start = performance.now();
    (function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    })(start);
  }

  function getStepIcon(id) { return ICONS[id] || ''; }
  function getStageIcon(stageId) { return ICONS[STAGE_ICON_KEYS[stageId]] || ''; }

  // ---- Build Sidebar Nav ----
  function buildSidebarNav() {
    PIPELINE_DATA.stages.forEach((stage, i) => {
      const group = document.createElement('div');
      group.className = 'nav-stage';
      group.dataset.stageId = stage.id;

      const btn = document.createElement('button');
      btn.className = 'nav-stage-btn';
      btn.innerHTML = `
        <span class="nav-stage-icon" style="color:${stage.color}">${getStageIcon(stage.id)}</span>
        <span>${stage.name}</span>
      `;
      btn.addEventListener('click', () => {
        const isExpanded = group.classList.contains('expanded');
        // Collapse all
        document.querySelectorAll('.nav-stage').forEach(g => g.classList.remove('expanded'));
        document.querySelectorAll('.nav-stage-btn').forEach(b => b.classList.remove('active'));
        if (!isExpanded) {
          group.classList.add('expanded');
          btn.classList.add('active');
        }
        const anchor = document.getElementById(`stage-${stage.id}`);
        if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeMobileMenu();
      });
      group.appendChild(btn);

      const stepsList = document.createElement('div');
      stepsList.className = 'nav-steps';
      stage.steps.forEach(step => {
        const link = document.createElement('button');
        link.className = 'nav-step-link';
        link.dataset.stepId = step.id;
        link.innerHTML = `<span class="nav-step-id">${step.id}</span> ${step.name}`;
        link.addEventListener('click', (e) => {
          e.stopPropagation();
          openDetail(step, stage);
          closeMobileMenu();
        });
        stepsList.appendChild(link);
      });
      group.appendChild(stepsList);
      sidebarNav.appendChild(group);
    });

    // Tools & Technologies Reference — standalone link, not a stage
    const toolsLink = document.createElement('button');
    toolsLink.className = 'nav-stage-btn nav-tools-ref-btn';
    toolsLink.innerHTML = `
      <span class="nav-stage-icon" style="color:#E55300">${ICONS['B2'] || ''}</span>
      <span>Tools &amp; Technologies</span>
    `;
    toolsLink.addEventListener('click', () => {
      document.querySelectorAll('.nav-stage').forEach(g => g.classList.remove('expanded'));
      document.querySelectorAll('.nav-stage-btn').forEach(b => b.classList.remove('active'));
      toolsLink.classList.add('active');
      const anchor = document.getElementById('stage-tools-reference');
      if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeMobileMenu();
    });
    sidebarNav.appendChild(toolsLink);
  }

  // ---- Build Main Content ----
  function buildContent() {
    PIPELINE_DATA.stages.forEach((stage, si) => {
      // Connector
      if (si > 0) {
        const conn = document.createElement('div');
        conn.className = 'stage-connector';
        conn.innerHTML = `<div class="connector-arrow">
          <div class="connector-line"></div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>`;
        pipelineContent.appendChild(conn);
      }

      const section = document.createElement('section');
      section.className = 'stage-section';
      section.id = `section-${stage.id}`;

      const rgb = hexToRgb(stage.color);

      section.innerHTML = `
        <span class="stage-anchor" id="stage-${stage.id}"></span>
        <div class="stage-section-header" style="border-bottom-color: ${stage.color}">
          <div class="stage-section-icon" style="background: ${stage.color}">${getStageIcon(stage.id)}</div>
          <div class="stage-section-info">
            <div class="stage-section-name">${stage.name}</div>
            <div class="stage-section-desc">${stage.description}</div>
          </div>
          <span class="stage-step-count">${stage.steps.length} steps</span>
        </div>
        <div class="steps-list" id="steps-${stage.id}"></div>
      `;

      pipelineContent.appendChild(section);

      const list = section.querySelector('.steps-list');
      stage.steps.forEach(step => {
        const row = document.createElement('div');
        row.className = 'step-row';
        row.dataset.stepId = step.id;
        if (step.isDecision) row.classList.add('decision');
        if (step.isBlocked) row.classList.add('blocked');

        const bgAlpha = step.isBlocked ? '0.08' : '0.08';
        const iconBg = step.isBlocked
          ? `rgba(239,68,68,${bgAlpha})`
          : step.isDecision
            ? `rgba(245,158,11,${bgAlpha})`
            : `rgba(${rgb.r},${rgb.g},${rgb.b},${bgAlpha})`;
        const iconColor = step.isBlocked
          ? '#ef4444'
          : step.isDecision
            ? '#f59e0b'
            : stage.color;

        const tools = step.tools.slice(0, 3).map(t =>
          `<span class="step-row-tool">${t.name}</span>`
        ).join('');

        row.innerHTML = `
          <div class="step-row-icon" style="background:${iconBg};color:${iconColor}">
            ${getStepIcon(step.id)}
          </div>
          <div class="step-row-body">
            <div class="step-row-top">
              <span class="step-row-id">${step.id}</span>
              <span class="step-row-name">${step.name}</span>
            </div>
            <div class="step-row-desc">${step.description}</div>
          </div>
          <div class="step-row-tools">${tools}</div>
          <div class="step-row-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        `;

        row.addEventListener('click', () => openDetail(step, stage));
        list.appendChild(row);
      });
    });
  }

  // ---- Detail Panel ----
  function openDetail(step, stage) {
    const rgb = hexToRgb(stage.color);
    const iconBg = step.isBlocked
      ? 'rgba(239,68,68,0.1)'
      : step.isDecision
        ? 'rgba(245,158,11,0.1)'
        : `rgba(${rgb.r},${rgb.g},${rgb.b},0.1)`;
    const iconColor = step.isBlocked ? '#ef4444' : step.isDecision ? '#f59e0b' : stage.color;

    const toolsHtml = step.tools.map(t => {
      const initials = t.name.split(/[\s/]+/).map(w => w[0]).join('').substring(0, 2).toUpperCase();
      return `
        <div class="detail-tool-item">
          <div class="detail-tool-initials" style="background:rgba(${rgb.r},${rgb.g},${rgb.b},0.08);color:${stage.color}">${initials}</div>
          <div class="detail-tool-info">
            <div class="detail-tool-name">${t.name}</div>
            <div class="detail-tool-desc">${t.desc}</div>
          </div>
        </div>`;
    }).join('');

    detailContent.innerHTML = `
      <div class="detail-badge" style="background:rgba(${rgb.r},${rgb.g},${rgb.b},0.06);color:${stage.color};border:1px solid rgba(${rgb.r},${rgb.g},${rgb.b},0.15)">
        ${getStageIcon(stage.id)} ${stage.name}
      </div>
      <div class="detail-icon-large" style="background:${iconBg};color:${iconColor}">
        ${getStepIcon(step.id)}
      </div>
      <h3 class="detail-name">${step.name}</h3>
      <span class="detail-id">Step ${step.id}</span>

      <div class="detail-section">
        <div class="detail-section-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          Description
        </div>
        <p class="detail-text">${step.description}</p>
      </div>

      <div class="detail-section">
        <div class="detail-section-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
          Tools & Technologies
        </div>
        <div class="detail-tools-list">${toolsHtml}</div>
      </div>

      <div class="detail-section">
        <div class="detail-section-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          Why This Step Matters
        </div>
        <div class="detail-why-box">${step.why}</div>
      </div>
    `;

    detailOverlay.classList.add('active');
    detailPanel.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Highlight in sidebar
    document.querySelectorAll('.nav-step-link').forEach(l =>
      l.classList.toggle('active', l.dataset.stepId === step.id)
    );
  }

  function closeDetailPanel() {
    detailOverlay.classList.remove('active');
    detailPanel.classList.remove('active');
    document.body.style.overflow = '';
    document.querySelectorAll('.nav-step-link').forEach(l => l.classList.remove('active'));
  }

  // ---- Mobile Menu ----
  function openMobileMenu() {
    sidebar.classList.add('open');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    sidebar.classList.remove('open');
    mobileOverlay.classList.remove('active');
    if (!detailPanel.classList.contains('active')) {
      document.body.style.overflow = '';
    }
  }

  // ---- Search ----
  function setupSearch() {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase().trim();
      const allSteps = document.querySelectorAll('.step-row');
      const allSections = document.querySelectorAll('.stage-section');
      const allConnectors = document.querySelectorAll('.stage-connector');
      const navStages = document.querySelectorAll('.nav-stage');
      const navStepLinks = document.querySelectorAll('.nav-step-link');

      if (!q) {
        allSteps.forEach(r => r.style.display = '');
        allSections.forEach(s => s.style.display = '');
        allConnectors.forEach(c => c.style.display = '');
        navStages.forEach(g => { g.style.display = ''; g.classList.remove('expanded'); });
        navStepLinks.forEach(l => l.style.display = '');
        document.querySelectorAll('.no-results').forEach(n => n.remove());
        return;
      }

      let anyVisible = false;

      PIPELINE_DATA.stages.forEach(stage => {
        const section = document.getElementById(`section-${stage.id}`);
        const stepsList = document.getElementById(`steps-${stage.id}`);
        const navGroup = document.querySelector(`.nav-stage[data-stage-id="${stage.id}"]`);
        let stageHasMatch = false;

        stage.steps.forEach(step => {
          const match =
            step.name.toLowerCase().includes(q) ||
            step.id.toLowerCase().includes(q) ||
            step.description.toLowerCase().includes(q) ||
            step.tools.some(t => t.name.toLowerCase().includes(q));

          const row = stepsList.querySelector(`.step-row[data-step-id="${step.id}"]`);
          if (row) row.style.display = match ? '' : 'none';

          const navLink = sidebarNav.querySelector(`.nav-step-link[data-step-id="${step.id}"]`);
          if (navLink) navLink.style.display = match ? '' : 'none';

          if (match) { stageHasMatch = true; anyVisible = true; }
        });

        if (section) section.style.display = stageHasMatch ? '' : 'none';
        if (navGroup) {
          navGroup.style.display = stageHasMatch ? '' : 'none';
          if (stageHasMatch) navGroup.classList.add('expanded');
          else navGroup.classList.remove('expanded');
        }
      });

      allConnectors.forEach(c => c.style.display = 'none');

      // No results message
      document.querySelectorAll('.no-results').forEach(n => n.remove());
      if (!anyVisible) {
        const msg = document.createElement('div');
        msg.className = 'no-results';
        msg.innerHTML = `
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <p>No steps match "<strong>${q}</strong>"</p>`;
        pipelineContent.appendChild(msg);
      }
    });
  }

  // ---- Scroll Observer ----
  function setupScrollObserver() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.stage-section').forEach(s => obs.observe(s));
  }

  // ---- Active Sidebar Tracking ----
  function setupActiveTracking() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id.replace('section-', '');
          document.querySelectorAll('.nav-stage').forEach(g => {
            const match = g.dataset.stageId === id;
            g.classList.toggle('expanded', match);
            g.querySelector('.nav-stage-btn').classList.toggle('active', match);
          });
        }
      });
    }, { threshold: 0.2, rootMargin: '-60px 0px -60% 0px' });

    document.querySelectorAll('.stage-section').forEach(s => obs.observe(s));
  }

  // ---- Stats ----
  function initStats() {
    let steps = 0;
    const toolSet = new Set();
    PIPELINE_DATA.stages.forEach(s => {
      steps += s.steps.length;
      s.steps.forEach(st => st.tools.forEach(t => toolSet.add(t.name)));
    });
    setTimeout(() => {
      animateCounter(document.getElementById('statSteps'), steps, 1400);
      animateCounter(document.getElementById('statTools'), toolSet.size, 1700);
      animateCounter(document.getElementById('statStages'), PIPELINE_DATA.stages.length, 1100);
    }, 400);
  }

  // ---- Tools Reference Section ----
  function renderToolsReference() {
    const section = document.createElement('section');
    section.className = 'stage-section tools-reference-section';
    section.id = 'section-tools-reference';

    const grouped = {};
    TOOLS_REFERENCE.forEach(t => {
      if (!grouped[t.category]) grouped[t.category] = [];
      grouped[t.category].push(t);
    });

    const cardsHtml = Object.keys(grouped).map(cat => `
      <div class="tools-ref-group">
        <div class="tools-ref-group-title">${cat}</div>
        <div class="tools-ref-grid">
          ${grouped[cat].map(t => `
            <div class="tools-ref-card">
              <div class="tools-ref-card-name">${t.name}</div>
              <div class="tools-ref-card-role"><strong>Role:</strong> ${t.role}</div>
              <div class="tools-ref-card-why"><strong>Why:</strong> ${t.why}</div>
              ${t.docs ? `<a class="tools-ref-card-link" href="${t.docs}" target="_blank" rel="noopener">Official docs &rarr;</a>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    section.innerHTML = `
      <span class="stage-anchor" id="stage-tools-reference"></span>
      <div class="stage-section-header" style="border-bottom-color:#E55300">
        <div class="stage-section-icon" style="background:#E55300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
        </div>
        <div class="stage-section-info">
          <div class="stage-section-name">Tools &amp; Technologies Reference</div>
          <div class="stage-section-desc">Every tool used across the pipeline, grouped by area — what it does, why it was chosen, and a link to its official documentation.</div>
        </div>
        <span class="stage-step-count">${TOOLS_REFERENCE.length} tools</span>
      </div>
      <div class="tools-reference-body">${cardsHtml}</div>
    `;

    pipelineContent.appendChild(section);
  }

  // ---- Init ----
  function init() {
    buildSidebarNav();
    buildContent();
    renderToolsReference();
    initStats();
    setupSearch();
    setupScrollObserver();
    setupActiveTracking();

    // Events
    detailClose.addEventListener('click', closeDetailPanel);
    detailOverlay.addEventListener('click', closeDetailPanel);
    menuBtn.addEventListener('click', openMobileMenu);
    sidebarClose.addEventListener('click', closeMobileMenu);
    mobileOverlay.addEventListener('click', closeMobileMenu);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        if (detailPanel.classList.contains('active')) closeDetailPanel();
        else closeMobileMenu();
      }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
