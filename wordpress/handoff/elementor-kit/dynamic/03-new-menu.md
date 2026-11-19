# 03 · NEW MENU "Baru di Kurnia" (DINAMIS · render #3)

**Section id:** `#new-menu` · **Sumber markup:** `wordpress/sections/13-new-menu.html` (main)
**Sumber data:** `wordpress/data/menu.js` → `window.KS_MENU` (filter `isNew:true`)

## Apa yang ditampilkan
Grid kartu menu **baru** (image-forward, **TANPA HARGA**). Auto-hide bila tak ada item `isNew:true`.

Field per item (`menu.js`): `name`, `desc`, `image`, `isNew` (boolean), `signature` (boolean), `placeholder` (boolean).

> Di `main`: 1 item baru sudah asli (**Rahang Tuna**, foto WebP resmi). 2 item lain (**Menu Baru 2**, **Menu Baru 3**) masih `placeholder:true` → **[ISI DARI TIM]**.

## Cara di WordPress (CPT + ACF + Loop Grid — disarankan)
1. Pakai **CPT "Menu"** (lihat `acf/cpt-register.php` + `acf/acf-fields-menu.json`).
2. Field ACF Menu: `nama` (judul post), `foto` (image), `deskripsi` (textarea), `kategori` (taxonomy/select), `is_baru` (true/false), `is_signature` (true/false). **TANPA field harga.**
3. Elementor **Loop Grid**:
   - Query: CPT Menu, filter `is_baru = true`.
   - Kolom: 3 (desktop) → 2 (tablet) → 1 (mobile), sesuai CSS kit.
   - Loop item template: Image = `foto`, Heading = judul, Text = `deskripsi`, badge "Baru" = label statis.

### Alternatif cepat (tanpa CPT)
Tempel `data/config.js`+`data/menu.js` (sekali, sebelum section) lalu `sections/13-new-menu.html` ke widget HTML. Edit menu di `menu.js`.

## Aturan locked
- **TANPA HARGA** di mana pun.
- Sumber data sama dengan **Signature** (section #4) — satu CPT "Menu", dibedakan oleh flag `is_baru` vs `is_signature`.
