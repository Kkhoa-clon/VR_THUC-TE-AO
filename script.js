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
