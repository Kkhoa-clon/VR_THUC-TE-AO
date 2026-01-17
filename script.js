/* ===== KHAI BÁO MODEL ===== */
const models = {
  h2o: {
    glb: "h2o.glb",
    usd: "h2o.usdz",
    image: "image/h2o.webp"
  },
  skeleton: {
    glb: "skeleton.glb",
    usd: "skeleton.usdz",
    image: "image/skeleton.webp"
  },
  a_molecule_chemistry: {
    glb: "a_molecule_chemistry.glb",
    usd: "A_Molecule_Chemistry.usdz",
    image: "image/A-Molecule-Chemistry.webp"
  },
  archaea: {
    glb: "archaea.glb",
    usd: "Archaea.usdz",
    image: "image/Archaea.webp"
  },
  atomic_models: {
    glb: "atomic_models.glb",
    usd: "Atomic_Models.usdz",
    image: "image/Atomic-Models.webp"
  },
  black_hole: {
    glb: "black_hole.glb",
    usd: "Black_Hole.usdz",
    image: "image/black-hole.webp"
  },
  distillation_montage: {
    glb: "distillation_-_montage.glb",
    usd: "Distillation_-_montage.usdz",
    image: "image/Distillation-montage.webp"
  },
  fluorine_atom: {
    glb: "fluorine_atom.glb",
    usd: "Fluorine_Atom.usdz",
    image: "image/Fluorine-Atom.webp"
  },
  jupiter: {
    glb: "jupiter.glb",
    usd: "Jupiter.usdz",
    image: "image/jupiter.webp"
  },
  knee_anatomy: {
    glb: "knee_anatomy.glb",
    usd: "Knee_Anatomy.usdz",
    image: "image/Knee-Anatomy-Model.webp"
  },
  laboratory_glasswares_pack: {
    glb: "laboratory_glasswares_pack.glb",
    usd: "Laboratory_Glasswares_Pack.usdz",
    image: "image/Laboratory-Glasswares-Pack.webp"
  },
  life_cycle_of_a_frog: {
    glb: "life_cycle_of_a_frog.glb",
    usd: "Life_Cycle_of_a_Frog.usdz",
    image: "image/Life-Cycle-of-a-Frog.webp"
  },
  lysosome: {
    glb: "lysosome.glb",
    usd: "Lysosome.usdz",
    image: "image/lysosome.webp"
  },
  mhd_simulation_of_a_star_with_a_hot_jupiter: {
    glb: "mhd_simulation_of_a_star_with_a_hot_jupiter.glb",
    usd: "MHD_simulation_of_a_star_with_a_hot_Jupiter.usdz",
    image: "image/MHD-simulation-of-a-star-with-a-hot Jupiter.webp"
  },
  molecular_signaling_of_osteoporosis: {
    glb: "molecular_signaling_of_osteoporosis.glb",
    usd: "Molecular_Signaling_Of_Osteoporosis.usdz",
    image: "image/Molecular-Signaling-Of-Osteoporosis.webp"
  },
  neptune: {
    glb: "neptune.glb",
    usd: "Neptune.usdz",
    image: "image/neptune.webp"
  },
  of_planes_and_satellites: {
    glb: "of_planes_and_satellites.glb",
    usd: "Of_Planes_and_Satellites.usdz",
    image: "image/Of-Planes-and-Satellites.webp"
  },
  organelle_dynamics_1: {
    glb: "organelle_dynamics (1).glb",
    usd: "Organelle_Dynamics (1).usdz",
    image: "image/Organelle-Dynamics.webp"
  },
  physics_organelle_building_codes: {
    glb: "physics_-_organelle_building_codes.glb",
    usd: "Physics_-_Organelle_Building_Codes.usdz",
    image: "image/Physics-Organelle-Building-Codes.webp"
  },
  stereomatria: {
    glb: "stereomatria.glb",
    usd: "stereomatria.usdz",
    image: "image/stereomatria.webp"
  },
  the_moon_sharp: {
    glb: "the_moon_sharp.glb",
    usd: "The_Moon_Sharp.usdz",
    image: "image/The-Moon-Sharp.webp"
  },
  uranus: {
    glb: "uranus.glb",
    usd: "Uranus.usdz",
    image: "image/uranus.webp"
  },
  valence_electrons: {
    glb: "valence_electrons.glb",
    usd: "Valence_Electrons.usdz",
    image: "image/Valence-Electrons.webp"
  },
  venus_planet_bedside_lamp: {
    glb: "venus_planet_bedside_lamp.glb",
    usd: "Venus_Planet_Bedside_Lamp.usdz",
    image: "image/Venus-Planet-Bedside-Lamp.webp"
  }
};

/* ===== LOAD ẢNH TỪ THƯ MỤC IMAGE ===== */
function loadPreview(imgId, imagePath) {
  const img = document.getElementById(imgId);
  img.src = imagePath;
  img.alt = imgId.replace("img-", "").replace(/_/g, " ");
}

/* ===== LOAD KHI DOM SẴN SÀNG ===== */
window.addEventListener("DOMContentLoaded", () => {
  loadPreview("img-h2o", models.h2o.image);
  loadPreview("img-skeleton", models.skeleton.image);
  loadPreview("img-a_molecule_chemistry", models.a_molecule_chemistry.image);
  loadPreview("img-archaea", models.archaea.image);
  loadPreview("img-atomic_models", models.atomic_models.image);
  loadPreview("img-black_hole", models.black_hole.image);
  loadPreview("img-distillation_montage", models.distillation_montage.image);
  loadPreview("img-fluorine_atom", models.fluorine_atom.image);
  loadPreview("img-jupiter", models.jupiter.image);
  loadPreview("img-knee_anatomy", models.knee_anatomy.image);
  loadPreview("img-laboratory_glasswares_pack", models.laboratory_glasswares_pack.image);
  loadPreview("img-life_cycle_of_a_frog", models.life_cycle_of_a_frog.image);
  loadPreview("img-lysosome", models.lysosome.image);
  loadPreview("img-mhd_simulation_of_a_star_with_a_hot_jupiter", models.mhd_simulation_of_a_star_with_a_hot_jupiter.image);
  loadPreview("img-molecular_signaling_of_osteoporosis", models.molecular_signaling_of_osteoporosis.image);
  loadPreview("img-neptune", models.neptune.image);
  loadPreview("img-of_planes_and_satellites", models.of_planes_and_satellites.image);
  loadPreview("img-organelle_dynamics_1", models.organelle_dynamics_1.image);
  loadPreview("img-physics_organelle_building_codes", models.physics_organelle_building_codes.image);
  loadPreview("img-stereomatria", models.stereomatria.image);
  loadPreview("img-the_moon_sharp", models.the_moon_sharp.image);
  loadPreview("img-uranus", models.uranus.image);
  loadPreview("img-valence_electrons", models.valence_electrons.image);
  loadPreview("img-venus_planet_bedside_lamp", models.venus_planet_bedside_lamp.image);

  setupQRCode();
});

/* ===== MỞ AR ===== */
function openAR(name) {
  const model = models[name];
  const ua = navigator.userAgent;

  if (/iPhone|iPad/i.test(ua)) {
    location.href = model.usd;
    return;
  }

  if (/Android/i.test(ua)) {
    location.href =
      "intent://arvr.google.com/scene-viewer/1.0" +
      "?file=" + encodeURIComponent(location.origin + "/" + model.glb) +
      "&mode=ar_only" +
      "#Intent;scheme=https;package=com.google.ar.core;end;";
    return;
  }

  alert("Trang này chỉ hỗ trợ trên điện thoại.");
}

/* ===== QR CODE & REMOTE DISPLAY ===== */
let peer = null;
let conn = null;

function setupQRCode() {
  const generateBtn = document.getElementById('generate-qr');
  const qrModal = document.getElementById('qr-modal');
  const closeQrBtn = document.getElementById('close-qr');
  const closeViewerBtn = document.getElementById('close-viewer');

  generateBtn.addEventListener('click', generateQR);
  closeQrBtn.addEventListener('click', () => qrModal.style.display = 'none');
  closeViewerBtn.addEventListener('click', closeRemoteViewer);
}

function generateQR() {
  const qrModal = document.getElementById('qr-modal');
  const qrcodeDiv = document.getElementById('qrcode');

  // Generate random peer ID
  const peerId = Math.random().toString(36).substring(2, 15);

  // Initialize PeerJS
  peer = new Peer(peerId);

  peer.on('open', (id) => {
    // Generate QR code with the peer ID
    const qr = qrcode(0, 'M');
    qr.addData(`${window.location.origin}?remote=${id}`);
    qr.make();

    const qrImg = qr.createImgTag(4, 0);
    qrcodeDiv.innerHTML = qrImg;

    qrModal.style.display = 'flex';
  });

  peer.on('connection', (connection) => {
    conn = connection;
    qrModal.style.display = 'none';
    showRemoteViewer();

    conn.on('data', (data) => {
      if (data.type === 'loadModel') {
        loadRemoteModel(data.modelName);
      }
    });
  });
}

function showRemoteViewer() {
  const remoteViewer = document.getElementById('remote-viewer');
  remoteViewer.style.display = 'flex';
}

function closeRemoteViewer() {
  const remoteViewer = document.getElementById('remote-viewer');
  remoteViewer.style.display = 'none';

  if (conn) {
    conn.close();
    conn = null;
  }
  if (peer) {
    peer.destroy();
    peer = null;
  }
}

function loadRemoteModel(modelName) {
  const viewerContainer = document.getElementById('viewer-container');
  const model = models[modelName];

  if (!model) return;

  viewerContainer.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
      <img src="${model.image}" alt="${modelName}" style="max-width: 300px; max-height: 300px; margin-bottom: 20px;">
      <h2>${modelName.replace(/_/g, ' ')}</h2>
      <p>Mô hình đang được hiển thị từ xa</p>
    </div>
  `;
}

// Check if this is a remote connection
const urlParams = new URLSearchParams(window.location.search);
const remoteId = urlParams.get('remote');
if (remoteId) {
  // This is the phone connecting to the computer
  peer = new Peer();

  peer.on('open', () => {
    conn = peer.connect(remoteId);

    conn.on('open', () => {
      // Override openAR to send to remote instead
      window.originalOpenAR = openAR;
      window.openAR = (name) => {
        conn.send({ type: 'loadModel', modelName: name });
      };
    });
  });
}
