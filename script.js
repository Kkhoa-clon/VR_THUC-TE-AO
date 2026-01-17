/* ===== KHAI BÁO MODEL ===== */
const models = {
  h2o: {
    glb: "h2o.glb",
    usd: "h2o.usdz",
    sketchfab: "https://sketchfab.com/3d-models/water-molecule-h2o-0d1e8d1f8f2c4a8f9c0c"
  },
  skeleton: {
    glb: "skeleton.glb",
    usd: "skeleton.usdz",
    sketchfab: "https://sketchfab.com/3d-models/human-skeleton-3d-scan-1c5c7e9e1e5b4b1c8a"
  },
  a_molecule_chemistry: {
    glb: "a_molecule_chemistry.glb",
    usd: "A_Molecule_Chemistry.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  archaea: {
    glb: "archaea.glb",
    usd: "Archaea.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  atomic_models: {
    glb: "atomic_models.glb",
    usd: "Atomic_Models.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  black_hole: {
    glb: "black_hole.glb",
    usd: "Black_Hole.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  celestial_sphere_2020_update: {
    glb: "celestial_sphere_2020_update.glb",
    usd: "Celestial_sphere_2020_update.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  distillation_montage: {
    glb: "distillation_-_montage.glb",
    usd: "Distillation_-_montage.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  fluorine_atom: {
    glb: "fluorine_atom.glb",
    usd: "Fluorine_Atom.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  jupiter: {
    glb: "jupiter.glb",
    usd: "Jupiter.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  knee_anatomy: {
    glb: "knee_anatomy.glb",
    usd: "Knee_Anatomy.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  laboratory_glasswares_pack: {
    glb: "laboratory_glasswares_pack.glb",
    usd: "Laboratory_Glasswares_Pack.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  life_cycle_of_a_frog: {
    glb: "life_cycle_of_a_frog.glb",
    usd: "Life_Cycle_of_a_Frog.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  lysosome: {
    glb: "lysosome.glb",
    usd: "Lysosome.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  mhd_simulation_of_a_star_with_a_hot_jupiter: {
    glb: "mhd_simulation_of_a_star_with_a_hot_jupiter.glb",
    usd: "MHD_simulation_of_a_star_with_a_hot_Jupiter.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  molecular_signaling_of_osteoporosis: {
    glb: "molecular_signaling_of_osteoporosis.glb",
    usd: "Molecular_Signaling_Of_Osteoporosis.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  neptune: {
    glb: "neptune.glb",
    usd: "Neptune.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  of_planes_and_satellites: {
    glb: "of_planes_and_satellites.glb",
    usd: "Of_Planes_and_Satellites.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  organelle_dynamics_1: {
    glb: "organelle_dynamics (1).glb",
    usd: "Organelle_Dynamics (1).usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  organelle_dynamics: {
    glb: "organelle_dynamics.glb",
    usd: "Organelle_Dynamics.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  physics_organelle_building_codes: {
    glb: "physics_-_organelle_building_codes.glb",
    usd: "Physics_-_Organelle_Building_Codes.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  shoulder_joint: {
    glb: "shoulder_joint.glb",
    usd: "Shoulder_joint.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  stereomatria: {
    glb: "stereomatria.glb",
    usd: "stereomatria.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  the_moon_sharp: {
    glb: "the_moon_sharp.glb",
    usd: "The_Moon_Sharp.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  uranus: {
    glb: "uranus.glb",
    usd: "Uranus.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  valence_electrons: {
    glb: "valence_electrons.glb",
    usd: "Valence_Electrons.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  venus_planet_bedside_lamp: {
    glb: "venus_planet_bedside_lamp.glb",
    usd: "Venus_Planet_Bedside_Lamp.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  },
  venus: {
    glb: "venus.glb",
    usd: "Venus.usdz",
    sketchfab: "https://sketchfab.com/placeholder"
  }
};

/* ===== LOAD ẢNH TỪ SKETCHFAB ===== */
async function loadPreview(imgId, sketchfabUrl) {
  try {
    const api =
      "https://sketchfab.com/oembed?format=json&maxwidth=512&url=" +
      encodeURIComponent(sketchfabUrl);

    const res = await fetch(api);
    if (!res.ok) throw new Error("Fetch failed");

    const data = await res.json();
    const img = document.getElementById(imgId);

    img.src = data.thumbnail_url;
    img.alt = data.title;
  } catch (err) {
    console.error("Sketchfab error:", err);
    document.getElementById(imgId).src =
      "https://via.placeholder.com/512x300?text=No+Preview";
  }
}

/* ===== LOAD KHI DOM SẴN SÀNG ===== */
window.addEventListener("DOMContentLoaded", () => {
  loadPreview("img-h2o", models.h2o.sketchfab);
  loadPreview("img-skeleton", models.skeleton.sketchfab);
  loadPreview("img-a_molecule_chemistry", models.a_molecule_chemistry.sketchfab);
  loadPreview("img-archaea", models.archaea.sketchfab);
  loadPreview("img-atomic_models", models.atomic_models.sketchfab);
  loadPreview("img-black_hole", models.black_hole.sketchfab);
  loadPreview("img-celestial_sphere_2020_update", models.celestial_sphere_2020_update.sketchfab);
  loadPreview("img-distillation_montage", models.distillation_montage.sketchfab);
  loadPreview("img-fluorine_atom", models.fluorine_atom.sketchfab);
  loadPreview("img-jupiter", models.jupiter.sketchfab);
  loadPreview("img-knee_anatomy", models.knee_anatomy.sketchfab);
  loadPreview("img-laboratory_glasswares_pack", models.laboratory_glasswares_pack.sketchfab);
  loadPreview("img-life_cycle_of_a_frog", models.life_cycle_of_a_frog.sketchfab);
  loadPreview("img-lysosome", models.lysosome.sketchfab);
  loadPreview("img-mhd_simulation_of_a_star_with_a_hot_jupiter", models.mhd_simulation_of_a_star_with_a_hot_jupiter.sketchfab);
  loadPreview("img-molecular_signaling_of_osteoporosis", models.molecular_signaling_of_osteoporosis.sketchfab);
  loadPreview("img-neptune", models.neptune.sketchfab);
  loadPreview("img-of_planes_and_satellites", models.of_planes_and_satellites.sketchfab);
  loadPreview("img-organelle_dynamics_1", models.organelle_dynamics_1.sketchfab);
  loadPreview("img-organelle_dynamics", models.organelle_dynamics.sketchfab);
  loadPreview("img-physics_organelle_building_codes", models.physics_organelle_building_codes.sketchfab);
  loadPreview("img-shoulder_joint", models.shoulder_joint.sketchfab);
  loadPreview("img-stereomatria", models.stereomatria.sketchfab);
  loadPreview("img-the_moon_sharp", models.the_moon_sharp.sketchfab);
  loadPreview("img-uranus", models.uranus.sketchfab);
  loadPreview("img-valence_electrons", models.valence_electrons.sketchfab);
  loadPreview("img-venus_planet_bedside_lamp", models.venus_planet_bedside_lamp.sketchfab);
  loadPreview("img-venus", models.venus.sketchfab);
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
