// Project and Certification Management

// Sample Projects Data (dapat diubah di data/projects.json)
const defaultProjects = [
  {
    id: 'coffee-ai',
    title: 'Coffee Bean Selector AI',
    category: 'Machine Learning',
    description: 'Aplikasi machine learning untuk membantu pecinta kopi dalam mengidentifikasi dan memilih biji kopi berdasarkan citra digital menggunakan teknologi computer vision dan deep learning.',
    technologies: ['Python', 'TensorFlow', 'Machine Learning', 'Computer Vision'],
    features: ['Upload gambar', 'Prediksi otomatis', 'Hasil klasifikasi', 'Responsive UI'],
    image: 'assets/images/coffee-ai.jpg',
    demoUrl: '#',
    githubUrl: 'https://github.com/Atharramadan'
  },
  {
    id: 'absensi-siswa',
    title: 'Sistem Monitoring Absensi Siswa',
    category: 'Web Application',
    description: 'Aplikasi monitoring kehadiran siswa berbasis web yang membantu pencatatan dan pengelolaan absensi secara digital.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    features: ['Dashboard admin', 'Data siswa', 'Rekap absensi', 'Laporan kehadiran'],
    image: 'assets/images/absensi.jpg',
    demoUrl: '#',
    githubUrl: 'https://github.com/Atharramadan'
  },
  {
    id: 'kelontong-system',
    title: 'Agen Kelontong Berbasis Web',
    category: 'Web Information System',
    description: 'Sistem manajemen agen kelontong berbasis web untuk mengelola produk, transaksi, stok barang, dan laporan.',
    technologies: ['CodeIgniter 4', 'PHP', 'MySQL'],
    features: ['Manajemen produk', 'Stok barang', 'Transaksi', 'Dashboard laporan'],
    image: 'assets/images/kelontong.jpg',
    demoUrl: '#',
    githubUrl: 'https://github.com/Atharramadan'
  }
];

const defaultCertifications = [
  {
    id: 'mtcna',
    title: 'MTCNA',
    issuer: 'MikroTik',
    date: '2025-01-15',
    image: 'assets/images/mtcna.jpg',
    description: 'MikroTik Certified Network Associate - Sertifikasi jaringan komputer yang membuktikan pemahaman dasar mengenai konfigurasi, routing, manajemen jaringan, dan implementasi perangkat MikroTik.',
    credentialUrl: '#'
  }
];

// Load Projects from JSON or use defaults
async function loadProjects() {
  try {
    const response = await fetch('data/projects.json');
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log('Using default projects');
  }
  return defaultProjects;
}

// Load Certifications from JSON or use defaults
async function loadCertifications() {
  try {
    const response = await fetch('data/certifications.json');
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log('Using default certifications');
  }
  return defaultCertifications;
}

// Render Projects
function renderProjects(projects) {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = projects.map((project) => `
    <div class="project-card">
      <div class="project-image">
        ${project.image ? `<img src="${project.image}" alt="${project.title}">` : `<i class="fas fa-project-diagram"></i>`}
      </div>
      <div class="project-content">
        <span class="project-category">${project.category}</span>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-buttons">
          <a href="${project.demoUrl}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-play"></i>
            Demo
          </a>
          <a href="${project.githubUrl}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i>
            GitHub
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Certifications
function renderCertifications(certifications) {
  const container = document.getElementById('certifications-container');
  if (!container) return;

  container.innerHTML = certifications.map((cert) => `
    <div class="cert-card">
      <div class="cert-icon">
        <i class="fas fa-certificate"></i>
      </div>
      <h3 class="cert-title">${cert.title}</h3>
      <p class="cert-issuer">${cert.issuer}</p>
      <p class="cert-description">${cert.description}</p>
      <p style="font-size: 0.85rem; opacity: 0.7; margin-bottom: var(--spacing-lg);">${new Date(cert.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      ${cert.credentialUrl && cert.credentialUrl !== '#' ? `
        <a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-small">
          Lihat Sertifikat
          <i class="fas fa-external-link-alt"></i>
        </a>
      ` : ''}
    </div>
  `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
  const projects = await loadProjects();
  const certifications = await loadCertifications();
  
  renderProjects(projects);
  renderCertifications(certifications);
});
