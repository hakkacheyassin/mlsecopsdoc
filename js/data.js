// SVG icon map — all Lucide-style SVG icons for every step and stage. 
const ICONS = {
  // Stages
  'stage-data-ingestion': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
  'stage-code-security': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  'stage-training': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
  'stage-model-validation': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
  'stage-registry-approval': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>',
  'stage-deployment': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
  'stage-monitoring': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',

  // Steps
  'A1': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
  'A2': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  'A3': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  'A4': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',
  'B1': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>',
  'B2': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>',
  'B3': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
  'B4': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  'B5': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  'C1': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
  'C2': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 1 4 4c0 .73-.2 1.41-.54 2H18a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1.1A7 7 0 0 1 12 22a7 7 0 0 1-4.9-11H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.54A3.98 3.98 0 0 1 8 4a4 4 0 0 1 4-4z"/></svg>',
  'C3': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  'C4': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>',
  'D1': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  'D2': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',
  'D3': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="3" x2="12" y2="21"/><polyline points="17 8 12 3 7 8"/><line x1="17" y1="16" x2="7" y2="16"/></svg>',
  'D4': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20"/><path d="m4.93 4.93 14.14 14.14M19.07 4.93 4.93 19.07"/></svg>',
  'D5': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
  'X': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>',
  'E0': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/><path d="m2 2 20 20"/></svg>',
  'E1': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
  'E2': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="2" y1="9" x2="22" y2="9"/><line x1="10" y1="3" x2="10" y2="9"/></svg>',
  'E3': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>',
  'E4': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>',
  'F1': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  'F2': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  'F3': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  'F4': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  'F5': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
  'G1': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  'G2': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',
  'G3': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
  'G4': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  'G5': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',
  'H1': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>',
  'H2': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
};

// Stage icon key mapping
const STAGE_ICON_KEYS = {
  'data-ingestion': 'stage-data-ingestion',
  'code-security': 'stage-code-security',
  'training': 'stage-training',
  'model-validation': 'stage-model-validation',
  'registry-approval': 'stage-registry-approval',
  'deployment': 'stage-deployment',
  'monitoring': 'stage-monitoring',
};

const PIPELINE_DATA = {
  stages: [
    {
      id: "data-ingestion",
      name: "Data Ingestion & Preparation",
      color: "#E55300",
      description: "Secure data collection, validation, privacy scanning, and versioning before any model training begins.",
      steps: [
        {
          id: "A1",
          name: "Data Sources",
          description: "Collection and ingestion of Linux server logs for anomaly detection.",
          tools: [
            { name: "Local CSV / DVC", desc: "Versioned dataset pulled from DVC remote storage" }
          ],
          why: "Every ML model is only as good as its data. A well-defined data ingestion layer ensures consistent, traceable, and reliable data collection."
        },
        {
          id: "A2",
          name: "Data Validation",
          description: "Automated validation of data quality, schema conformity, and statistical distributions. Catches data corruption, missing values, and out-of-range values.",
          tools: [
            { name: "Pandas schema checks", desc: "Schema, null, length and label validation in src/data/validate.py" }
          ],
          why: "Garbage in, garbage out. Without validation, corrupted or malicious data can silently degrade model performance or cause training failures."
        },
        {
          id: "A3",
          name: "PII Scanning",
          description: "Automated detection and handling of Personally Identifiable Information (PII).",
          tools: [
            { name: "Microsoft Presidio", desc: "PII detection and redaction used in src/data/pii_scan.py" }
          ],
          why: "Training models on PII violates privacy regulations. Models can memorize and leak sensitive information during inference."
        },
        {
          id: "A4",
          name: "Data Versioning (DVC)",
          description: "Version control for datasets, tracking every change to training data with full lineage.",
          tools: [
            { name: "DVC", desc: "Git-like data version control (src/data/train.csv.dvc) with a GCP Cloud Storage remote" }
          ],
          why: "Without data versioning, it's impossible to reproduce experiments, audit training data, or roll back to a known-good dataset."
        }
      ]
    },
    {
      id: "code-security",
      name: "Code & Dependency Security",
      color: "#E55300",
      description: "Comprehensive security scanning of source code, secrets, dependencies, and notebooks.",
      steps: [
        {
          id: "B1",
          name: "SAST Scan",
          description: "Static Application Security Testing — analyzing Python code for security vulnerabilities without executing it.",
          tools: [
            { name: "Bandit", desc: "Python-specific security linter run in .github/workflows/2-code-security.yml" },
            { name: "Semgrep", desc: "Lightweight static analysis engine" }
          ],
          why: "ML code often runs with elevated privileges. SAST catches vulnerabilities like command injection and path traversal before execution."
        },
        {
          id: "B2",
          name: "Secret Detection",
          description: "Automated scanning of code repositories for hardcoded secrets, API keys, and credentials.",
          tools: [
            { name: "GitLeaks", desc: "Secret scanner CLI run in the Code Security workflow" }
          ],
          why: "Hardcoded secrets are the #1 cause of cloud breaches. ML repos often contain API keys for cloud services."
        },
        {
          id: "B3",
          name: "Dependency Scan",
          description: "Scanning all third-party libraries (PyTorch, FastAPI, etc.) for known vulnerabilities (CVEs).",
          tools: [
            { name: "pip-audit", desc: "Official Python packaging audit tool" },
            { name: "Safety", desc: "Python dependency vulnerability checker" }
          ],
          why: "Supply chain attacks are exploding in ML. Malicious packages on PyPI can give attackers code execution."
        },
        {
          id: "B4",
          name: "SBOM Generation",
          description: "Software Bill of Materials — generating a complete inventory of all software components used.",
          tools: [
            { name: "Syft", desc: "SBOM generation tool producing SPDX JSON format" }
          ],
          why: "Required for software supply chain transparency. When a new CVE drops, an SBOM lets you instantly check if you're affected."
        },
        {
          id: "B5",
          name: "Notebook Scan",
          description: "Security scanning of Jupyter notebooks for embedded secrets and unsafe code patterns.",
          tools: [
            { name: "nbdefense", desc: "Security scanner for Jupyter notebooks" }
          ],
          why: "Notebooks are often shared informally and can contain sensitive data in cell outputs."
        }
      ]
    },
    {
      id: "training",
      name: "Secure Model Training",
      color: "#E55300",
      description: "Isolated, reproducible, and tracked model training using safe serialization formats.",
      steps: [
        {
          id: "C1",
          name: "Isolated Training Container",
          description: "Sandboxed Docker containers for model training with restricted permissions.",
          tools: [
            { name: "Docker", desc: "Non-root container runtime (docker/train.Dockerfile)" }
          ],
          why: "Training code often comes from research. Isolation prevents compromised training jobs from stealing data."
        },
        {
          id: "C2",
          name: "Training (safetensors)",
          description: "PyTorch model training with output serialized in safetensors format instead of pickle.",
          tools: [
            { name: "PyTorch", desc: "Deep learning framework used for NLP log anomaly detection" },
            { name: "safetensors", desc: "Safe tensor serialization library" }
          ],
          why: "Pickle-based models can execute arbitrary code when loaded. Safetensors eliminates this attack vector entirely."
        },
        {
          id: "C3",
          name: "Experiment Tracking",
          description: "Comprehensive logging of all training experiments including hyperparameters, metrics, and artifacts.",
          tools: [
            { name: "MLflow", desc: "Open-source ML lifecycle management platform used in train.py" }
          ],
          why: "Creates an audit trail of every model ever trained, essential for regulatory compliance and debugging."
        },
        {
          id: "C4",
          name: "Reproducibility Check",
          description: "Verification that model training can be reproduced. Logs SHA-256 hash of training data.",
          tools: [
            { name: "Hash Verification", desc: "SHA-256 checksum generation in train.py" },
            { name: "GitHub Actions", desc: "Reproducibility check job in training stage" }
          ],
          why: "If you can't reproduce a model, you can't trust it. Reproducibility protects against supply chain attacks."
        }
      ]
    },
    {
      id: "model-validation",
      name: "Model Validation & Testing",
      color: "#E55300",
      description: "Rigorous security and quality testing including adversarial robustness, model file scanning, and bias evaluation.",
      steps: [
        {
          id: "D1",
          name: "Adversarial Testing (ART)",
          description: "Gradient attacks (FGSM, PGD) run in embedding space with IBM ART against real hold-out data; the gate fails if worst-case adversarial accuracy drops below 0.60.",
          tools: [
            { name: "IBM ART", desc: "Adversarial Robustness Toolbox — FGSM & PGD attacks in src/evaluate/adversarial_test.py" }
          ],
          why: "Adversarial attacks can cause models to misclassify inputs. Testing robustness before deployment prevents failures."
        },
        {
          id: "D2",
          name: "Model Scanning",
          description: "Scanning of model files for embedded malicious code and unsafe serialization patterns.",
          tools: [
            { name: "ModelScan", desc: "Protect AI scanner run in src/evaluate/model_scan.py, plus structural safetensors header/dtype verification as defense-in-depth" }
          ],
          why: "Model files can contain hidden backdoors. Scanning ensures the file format is safe."
        },
        {
          id: "D3",
          name: "Bias Testing",
          description: "Fairlearn demographic parity check on real predictions: anomaly flag rates are compared between privileged (root/admin/sudo) and regular user log lines; a gap above 0.20 fails the gate.",
          tools: [
            { name: "Fairlearn", desc: "MetricFrame selection rates + demographic_parity_difference in src/evaluate/bias_test.py" }
          ],
          why: "Biased models can cause real harm. Bias testing is both an ethical and legal imperative."
        },
        {
          id: "D4",
          name: "Performance Gates",
          description: "Real evaluation on a deterministic 20% hold-out split: accuracy, precision, recall, F1 and measured p95 latency against hard thresholds.",
          tools: [
            { name: "Custom Script", desc: "Threshold enforcement script (src/evaluate/performance_gates.py)" }
          ],
          why: "Gates catch regressions, data issues, and training failures automatically."
        },
        {
          id: "D5",
          name: "All Gates Passed?",
          description: "Critical decision point — the pipeline evaluates whether all validation gates have passed.",
          tools: [
            { name: "GitHub Actions", desc: "gate-check job with explicit dependencies (needs: [...])" }
          ],
          why: "A single point of enforcement ensures no step can be bypassed.",
          isDecision: true
        },
        {
          id: "X",
          name: "Pipeline Blocked",
          description: "The pipeline is halted if any validation gate fails.",
          tools: [
            { name: "GitHub Actions", desc: "Job failure halting the pipeline" }
          ],
          why: "Blocking the pipeline prevents insecure, biased, or underperforming models from reaching production.",
          isBlocked: true
        }
      ]
    },
    {
      id: "registry-approval",
      name: "Registry & Human Approval",
      color: "#E55300",
      description: "Model signing, registry storage, documentation via model cards, and mandatory human review.",
      steps: [
        {
          id: "E0",
          name: "Model Signing",
          description: "Cryptographic signing of the validated model using digital signatures.",
          tools: [
            { name: "Cosign / Sigstore", desc: "Keyless sign-blob step in .github/workflows/5-registry-approval.yml" }
          ],
          why: "Signing creates a cryptographic chain of trust from training to production, preventing tampering."
        },
        {
          id: "E1",
          name: "Model Registry",
          description: "Centralized storage and management of model versions.",
          tools: [
            { name: "GCP Cloud Storage", desc: "Model artifacts pushed to a dedicated GCS bucket" }
          ],
          why: "Provides centralized governance and ensures only approved models can be deployed."
        },
        {
          id: "E2",
          name: "Model Card",
          description: "Standardized documentation of the model including intended use and metrics.",
          tools: [
            { name: "Custom Template", desc: "Markdown template generated in model-card/template.md" }
          ],
          why: "Model cards provide transparency for stakeholders and support regulatory compliance."
        },
        {
          id: "E3",
          name: "Human Approval",
          description: "Mandatory human review and explicit approval before deployment.",
          tools: [
            { name: "GitHub Actions", desc: "Manual approval gate in registry-approval.yml" }
          ],
          why: "AI systems making high-stakes decisions require human oversight to identify contextual risks.",
          isDecision: true
        },
        {
          id: "E4",
          name: "Deployment Rejected",
          description: "The pipeline is halted if the human reviewer rejects the model at the approval gate.",
          tools: [
            { name: "GitHub Actions", desc: "Manual gate set to 'rejected', blocking the deploy stage from running" }
          ],
          why: "A rejection path is as important as an approval path — without it, a reviewer's 'no' has nowhere to go and the model could still leak into deployment.",
          isBlocked: true
        }
      ]
    },
    {
      id: "deployment",
      name: "Secure Deployment",
      color: "#E55300",
      description: "Hardened container deployment with vulnerability scanning, signature verification, and canary rollout.",
      steps: [
        {
          id: "F1",
          name: "Container Hardening",
          description: "Securing the FastAPI deployment container by using minimal base images.",
          tools: [
            { name: "Distroless Images", desc: "gcr.io/distroless/python3-debian12 used in docker/serve.Dockerfile" }
          ],
          why: "Hardening minimizes the attack surface by removing shells, package managers, and unnecessary utilities."
        },
        {
          id: "F2",
          name: "Container Scan",
          description: "Vulnerability scanning of the deployment container image. Currently disabled (commented out) in the workflow while the rest of the pipeline is being finalized — scheduled to be re-enabled.",
          tools: [
            { name: "Trivy", desc: "Container scanner" }
          ],
          why: "Container images can contain vulnerabilities. Scanning catches these before deployment."
        },
        {
          id: "F3",
          name: "Signature Verification",
          description: "Verification of cryptographic signatures on container images.",
          tools: [
            { name: "Cosign", desc: "Signature verification in GitHub Actions deployment stage" }
          ],
          why: "Verification ensures the deployment matches exactly what was built and validated."
        },
        {
          id: "F4",
          name: "API Gateway & Security",
          description: "API gateway providing rate limiting and audit logging for the model endpoint.",
          tools: [
            { name: "FastAPI Middleware", desc: "Rate limit and audit logging in src/serve/middleware.py" },
            { name: "GCP API Gateway", desc: "Configured via Terraform in infra/modules/networking" }
          ],
          why: "An unprotected API is an invitation for abuse. The gateway is the front door security."
        },
        {
          id: "F5",
          name: "Canary Deployment",
          description: "Gradual traffic shifting from the old model to the new one.",
          tools: [
            { name: "GCP Cloud Run", desc: "Traffic splitting via gcloud run deploy --tag canary in 6-deployment.yml" }
          ],
          why: "Deploying 100% of traffic is risky. Canary deployment limits blast radius if issues occur."
        }
      ]
    },
    {
      id: "monitoring",
      name: "Production Monitoring",
      color: "#E55300",
      description: "Scheduled hourly job (GitHub Actions cron) reading real production predictions logged to GCS by the serving app, comparing them against a reference baseline via Evidently AI and Cloud Monitoring, then routing incidents to rollback or retraining.",
      steps: [
        {
          id: "G1",
          name: "Data Drift Monitoring",
          description: "Compares recent production log-line characteristics against a reference baseline stored in GCS.",
          tools: [
            { name: "Evidently AI (self-hosted)", desc: "Report snapshots pushed via RemoteWorkspace SDK in monitoring/drift_detection.py --kind data" }
          ],
          why: "Models degrade silently when incoming data shifts away from what they were trained on."
        },
        {
          id: "G2",
          name: "Prediction Drift Monitoring",
          description: "Compares the model's live anomaly rate against the reference anomaly rate.",
          tools: [
            { name: "Evidently AI (self-hosted)", desc: "Same script, monitoring/drift_detection.py --kind prediction" }
          ],
          why: "A shift in how often the model calls 'anomaly' can signal drift even when raw inputs look stable."
        },
        {
          id: "G3",
          name: "Model Performance Monitoring",
          description: "Tracks average prediction confidence and the rate of CRITICAL-risk calls from real production traffic.",
          tools: [
            { name: "Evidently AI (self-hosted)", desc: "monitoring/anomaly_detection.py, reads predictions logged by src/serve/app.py" }
          ],
          why: "Falling confidence or a spike in critical calls flags a model that's degraded even without obvious drift."
        },
        {
          id: "G4",
          name: "Cloud Run Monitoring",
          description: "Queries Google Cloud Monitoring directly for the serving service's error rate and p95 latency over the last 15 minutes.",
          tools: [
            { name: "Google Cloud Monitoring", desc: "gcloud monitoring time-series list, parsed by monitoring/cloud_run_check.py" }
          ],
          why: "Infra-level failures (crashes, latency spikes) are a different problem than model drift and need a different response (rollback, not retraining)."
        },
        {
          id: "G5",
          name: "Incident Detection & Alerting",
          description: "Classifies the combined signals into Failure, Attack, Drift, or None, and logs the incident to Cloud Logging for alert policies.",
          tools: [
            { name: "Incident Handler", desc: "Classification logic in monitoring/incident_handler.py" },
            { name: "Google Cloud Logging", desc: "gcloud logging write mlsecops-incidents, picked up by Cloud Monitoring Alert Policies" }
          ],
          why: "Automated classification routes incidents to the right response: Drift routes to retraining (the data changed, the model is still trustworthy), while Attack or Failure routes to rollback (the current model/service is not safe to keep serving).",
          isDecision: true
        },
        {
          id: "H1",
          name: "Automated Rollback",
          description: "Rolls back to the previous known-good Cloud Run revision when G5 classifies the incident as Failure or Attack — G5 is the single routing decision, so rollback and retraining can never fire together.",
          tools: [
            { name: "Bash Script", desc: "Cloud Run revision rollback in scripts/rollback.sh" }
          ],
          why: "Automated rollback restores service stability in seconds, minimizing user impact. Reserved for Attack/Failure — the current model or service itself is the problem."
        },
        {
          id: "H2",
          name: "Automated Retraining Trigger",
          description: "Fires a repository_dispatch (retrain-trigger) that restarts the pipeline from Step 1 (Data Ingestion) when G5 classifies the incident as Drift (data or prediction drift).",
          tools: [
            { name: "repository_dispatch", desc: "peter-evans/repository-dispatch in .github/workflows/7-monitoring.yml, picked up by 1-data-validation.yml" }
          ],
          why: "Drift means the world changed, not that the model is broken — rolling back would just serve a model trained on even older data. Retraining on fresh data is the correct fix."
        }
      ]
    }
  ]
};
// ---- Tools Reference: consolidated view of every tool across all 7 workflows ----
const TOOLS_REFERENCE = [
  // ---- Step 1: Data Ingestion & Preparation ----
  {
    name: "DVC + dvc-gs",
    category: "Data Ingestion",
    role: "Pulls (dvc pull) and versions (dvc add / dvc push) the training dataset against a GCS remote, so data changes are tracked like code.",
    why: "Git-native workflow for large data files; dvc-gs plugs directly into Google Cloud Storage without extra glue code.",
    docs: "https://dvc.org/doc"
  },
  {
    name: "Great Expectations",
    category: "Data Ingestion",
    role: "Runs schema, null, length and label validation on the training data (src/data/validate.py) before it's allowed downstream.",
    why: "Declarative data-quality expectations that fail loudly on corrupted or out-of-range data instead of silently degrading the model.",
    docs: "https://docs.greatexpectations.io/"
  },
  {
    name: "Microsoft Presidio (analyzer + anonymizer)",
    category: "Data Ingestion",
    role: "Detects and redacts Personally Identifiable Information (PII) in the training data (src/data/pii_scan.py --strict).",
    why: "Purpose-built PII detection with pluggable recognizers; avoids training on data that could later be memorized and leaked by the model.",
    docs: "https://microsoft.github.io/presidio/"
  },
  {
    name: "spaCy (en_core_web_lg)",
    category: "Data Ingestion",
    role: "NLP model backing Presidio's PII entity recognition (names, locations, etc.) in the log text.",
    why: "Presidio's default and most accurate English NER model for free-text PII detection.",
    docs: "https://spacy.io/models/en#en_core_web_lg"
  },

  // ---- Step 2: Code & Dependency Security ----
  {
    name: "Bandit",
    category: "Code Security",
    role: "Static Application Security Testing (SAST) — scans Python source for common security issues without executing it.",
    why: "Python-specific rule set (unlike generic linters), fast, zero-config for standard vulnerability classes.",
    docs: "https://bandit.readthedocs.io/"
  },
  {
    name: "Semgrep",
    category: "Code Security",
    role: "Lightweight static analysis engine complementing Bandit with broader, customizable pattern-based rules (semgrep scan --config auto).",
    why: "Catches issues Bandit's fixed rule set misses; rules are easy to write and share across languages.",
    docs: "https://semgrep.dev/docs/"
  },
  {
    name: "Gitleaks",
    category: "Code Security",
    role: "Scans the working tree for hardcoded secrets, API keys, and credentials accidentally committed to the repo.",
    why: "Fast, regex + entropy-based detection with a large ruleset of known secret formats; CLI works without needing the `.git` history.",
    docs: "https://github.com/gitleaks/gitleaks"
  },
  {
    name: "pip-audit",
    category: "Code Security",
    role: "Checks Python dependencies (src/train/requirements.txt) against known vulnerability databases (OSV).",
    why: "Official PyPA tool, maps directly to the requirements file actually used to build the training image.",
    docs: "https://pypi.org/project/pip-audit/"
  },
  {
    name: "Safety",
    category: "Code Security",
    role: "Second, independent dependency vulnerability scan (safety scan) alongside pip-audit.",
    why: "Defense-in-depth — different vulnerability database/source than pip-audit, catches what one tool alone might miss.",
    docs: "https://docs.safetycli.com/"
  },
  {
    name: "Syft (anchore/sbom-action)",
    category: "Code Security",
    role: "Generates a Software Bill of Materials (SBOM) in SPDX JSON format for the whole repo.",
    why: "SBOM gives a full, auditable inventory of every dependency shipped, required for supply-chain security compliance.",
    docs: "https://github.com/anchore/sbom-action"
  },
  {
    name: "NB Defense",
    category: "Code Security",
    role: "Scans Jupyter notebooks (src/notebooks/) for security issues, secrets, and PII that regular SAST tools don't parse.",
    why: "Notebooks mix code, output, and data in one file — a dedicated scanner is needed since Bandit/Semgrep don't understand `.ipynb` structure.",
    docs: "https://protectai.com/nb-defense"
  },

  // ---- Step 3: Secure Model Training ----
  {
    name: "Docker (BuildKit)",
    category: "Training",
    role: "Builds an isolated training container (mlsecops-trainer) so training runs with a locked dependency set, independent of the runner's local environment.",
    why: "Reproducibility and isolation — the exact same image runs every time, removing environment drift between runs.",
    docs: "https://docs.docker.com/build/buildkit/"
  },
  {
    name: "PyTorch",
    category: "Training",
    role: "Defines and trains the LogAnomalyDetector, an embedding-based classifier over tokenized Linux auth log lines.",
    why: "Standard, well-documented framework with first-class safetensors export support.",
    docs: "https://pytorch.org/docs/stable/index.html"
  },
  {
    name: "safetensors",
    category: "Training",
    role: "Serializes the trained model (model.safetensors) instead of pickle-based torch.save; verified structurally right after training.",
    why: "Pickle deserialization can execute arbitrary code; safetensors is a data-only format (tensor bytes + JSON header), removing that attack surface entirely.",
    docs: "https://huggingface.co/docs/safetensors/index"
  },
  {
    name: "MLflow",
    category: "Training",
    role: "Tracks experiment params, metrics (loss/accuracy per epoch), and artifacts on a remote server, verified via MlflowClient after training.",
    why: "De-facto standard for experiment tracking; gives an audit trail of every training run independent of the CI logs themselves.",
    docs: "https://mlflow.org/docs/latest/index.html"
  },

  // ---- Step 4: Model Validation and Testing ----
  {
    name: "Adversarial Robustness Toolbox (ART)",
    category: "Model Validation",
    role: "Runs FGSM and PGD adversarial attacks against the model's embedding space and checks robustness stays above a threshold (0.60).",
    why: "IBM-maintained, covers the standard adversarial-attack families, integrates directly with PyTorch models.",
    docs: "https://adversarial-robustness-toolbox.readthedocs.io/"
  },
  {
    name: "ModelScan (Protect AI)",
    category: "Model Validation",
    role: "Scans the model artifact for unsafe serialized operators and embedded payloads; paired with a structural safetensors header/JSON check.",
    why: "Purpose-built for ML artifact scanning (unlike generic antivirus, which doesn't understand pickle/safetensors internals); actively maintained by Protect AI.",
    docs: "https://github.com/protectai/modelscan"
  },
  {
    name: "Fairlearn",
    category: "Model Validation",
    role: "Measures demographic parity across the user_role sensitive feature to catch biased predictions before deployment.",
    why: "Microsoft-maintained, standard fairness metric implementations instead of hand-rolled math.",
    docs: "https://fairlearn.org/main/user_guide/index.html"
  },
  {
    name: "Custom performance gates",
    category: "Model Validation",
    role: "Evaluates accuracy, F1, and inference latency on a hold-out split against fixed thresholds (accuracy ≥ 0.85, F1 ≥ 0.85, latency ≤ 50ms).",
    why: "Pipeline-specific SLAs that no off-the-shelf tool encodes; keeps the bar explicit and versioned in code.",
    docs: ""
  },

  // ---- Step 5: Registry & Human Approval ----
  {
    name: "Cosign (Sigstore)",
    category: "Registry & Approval",
    role: "Signs the validated model artifact keylessly (cosign sign-blob) before it's pushed to the registry, producing a signature + certificate.",
    why: "Keyless signing via Sigstore avoids managing long-lived signing keys, and gives cryptographic proof the artifact wasn't tampered with after validation.",
    docs: "https://docs.sigstore.dev/cosign/overview/"
  },
  {
    name: "Google Cloud Storage (gsutil)",
    category: "Registry & Approval",
    role: "Acts as the model registry — stores the signed model, its signature/certificate, and the model card under a version path and a 'latest' pointer.",
    why: "Simple, durable object storage; the 'latest' pointer lets deployment (Step 6) fetch the newest approved model without tracking version strings.",
    docs: "https://cloud.google.com/storage/docs/gsutil"
  },
  {
    name: "GitHub Environments (production-approval)",
    category: "Registry & Approval",
    role: "Gates deployment behind a required human reviewer before Step 6 can be triggered, via a protected environment.",
    why: "Enforces a manual sign-off step for production ML deployments — no model reaches users without a human approving it.",
    docs: "https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment"
  },

  // ---- Step 6: Secure Deployment ----
  {
    name: "Cosign Verify",
    category: "Deployment",
    role: "Re-verifies the model's signature (cosign verify-blob) before it's baked into the serving container, refusing to build on failure.",
    why: "Closes the loop on E0 signing — an unverified or tampered model can never reach the build step, let alone production.",
    docs: "https://docs.sigstore.dev/cosign/overview/"
  },
  {
    name: "Google Artifact Registry",
    category: "Deployment",
    role: "Hosts the built serving container image, tagged by commit SHA, pushed via gcloud auth configure-docker.",
    why: "Native GCP container registry with fine-grained IAM, integrates directly with Cloud Run deployment.",
    docs: "https://cloud.google.com/artifact-registry/docs"
  },
  {
    name: "Terraform",
    category: "Deployment",
    role: "Applies API Gateway / networking infrastructure (infra/modules/networking) as code before the canary deploy.",
    why: "Infrastructure changes go through the same review/versioning discipline as application code, avoiding manual console drift.",
    docs: "https://developer.hashicorp.com/terraform/docs"
  },
  {
    name: "Google Cloud Run",
    category: "Deployment",
    role: "Hosts the trained model behind a canary deployment (10% traffic via --tag canary), serving predictions in production.",
    why: "Fully managed, scales to zero, native traffic-splitting support for canary rollouts without extra infra.",
    docs: "https://cloud.google.com/run/docs"
  },

  // ---- Step 7: Production Monitoring ----
  {
    name: "Evidently AI",
    category: "Monitoring",
    role: "Detects data drift and prediction drift hourly against a self-hosted Evidently instance (drift_detection.py, anomaly_detection.py).",
    why: "Open-source, purpose-built for ML monitoring dashboards and drift detection — surfaces the exact signals G5's incident routing needs.",
    docs: "https://docs.evidentlyai.com/"
  },
  {
    name: "Google Cloud Monitoring",
    category: "Monitoring",
    role: "Pulls Cloud Run request-count and latency time series to feed the G4 service-health check (cloud_run_check.py).",
    why: "Native metrics source for Cloud Run — no separate APM agent needed to observe the serving service.",
    docs: "https://cloud.google.com/monitoring/docs"
  },
  {
    name: "Google Cloud Logging",
    category: "Monitoring",
    role: "Publishes incident classifications (drift/failure/attack) as structured log entries that pre-configured Alert Policies watch.",
    why: "Decouples detection (this workflow) from alerting/notification (Terraform-managed Alert Policies) via a simple log-based trigger.",
    docs: "https://cloud.google.com/logging/docs"
  },
  {
    name: "google-cloud-storage (Python client)",
    category: "Monitoring",
    role: "Reads logged production predictions from GCS for drift comparison against the training distribution.",
    why: "Direct, dependency-light access to the same bucket the serving app writes predictions to.",
    docs: "https://cloud.google.com/python/docs/reference/storage/latest"
  }
];
