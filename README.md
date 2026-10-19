# YEARLY TRIP

大阪から家族4人で行く「一年に一度の旅行」を比較・計画する静的サイト。

## 2027年1月の候補

- 沖縄：5泊。初日は那覇、うち3泊はルネッサンス。
- 東京ディズニーリゾート：3泊4日。

## ページ

- `index.html` — 沖縄 vs ディズニーの比較トップ
- `price-check.html` — 沖縄5泊の狙い目日程・料金Evidence・6社比較トラッカー
- `sales.html` — セール時期と旅行会社比較

セール日程は毎年固定とはせず、公式情報で確認できた実開催日を更新する方針。
最終確認日：2026-09-12

## 焼津 家族4人の車旅（2026-10-13 新規）

- `yaizu-family/index.html` — 浪速警察署発／西名阪・名阪国道経由。刈谷の温泉、東名・新東名のSAシャワー、家族向け遊び場、焼津のホテル、2泊3日モデル、概算費用。
- `yaizu-family/night-discount.html` — 西名阪・名阪国道・亀山〜焼津の通常ETC/深夜割引の区間別比較と、往復シミュレーター。
- `yaizu-family/themepark-special.html` — テーマパーク特設ランディング。刈谷岩ケ池公園★★★★★・おすすめ3選・ルート前後の注意点・写真付き入口。旅行トップと YEARLY TRIP トップからリンク。
- `yaizu-family/theme-parks.html` — 名阪国道〜東名沿い13施設の写真付き比較。刈谷PAの手前/直結/先、料金、雨天、ナビで絞り込み。旅行トップの予算セレクターとも連動した選択肢を掲載。
- 既存の `awaji-camp/index.html` をデザインモデルとして使用。淡路島の旅行内容は変更しない。
- 旅程日が未定のため、ホテルの家族4人での空室・料金、高速料金の全経路確定照会は未実施。写真は利用条件を確認できた素材を `yaizu-family/assets/` に保存し、`yaizu-family/PHOTO_CREDITS.md` に出典を記録。料金比較は松原〜天理＋亀山〜焼津のモデル区間に限定し、市内高速や途中降車分は含めない。

### 焼津旅行サイト共通ヘッダー（2026-10-14）

- 対象: `yaizu-family/index.html`、`themepark-special.html`、`theme-parks.html`、`night-discount.html`。
- `yaizu-family/header.css` + `header.js` を全ページで共有し、左にハンバーガーメニュー、中央にトップへ戻る透過ロゴ、右にネイティブ共有／URLコピーを配置。
- `yaizu-family/assets/brand/logo.png`: 背景透過PNG。 `assets/brand/favicon.svg`: 焼津旅行専用ファビコン。
- メニューは全画面、Escキー・フォーカス管理・背面スクロール制御に対応。スクロール後のヘッダーは半透明の濃紺グラデーション。
- モバイルでの最終実機検証は公開後に別途確認。外部の既存ページ（淡路島／沖縄）には変更を加えない。

## なんば駅発 → 静波海岸｜一般公開用（2026-10-19）

- **公開トップ:** `shizunami-drive/index.html`。大阪・なんば駅を起点、静岡県牧之原市の静波海岸を終点に設定。
- `shizunami-drive/themepark-special.html` — 途中で遊べるテーマパーク特設ページ。
- `shizunami-drive/theme-parks.html` — 刈谷の100円遊園地を含む13施設の独自★5コスパ比較。
- `shizunami-drive/night-discount.html` — 西名阪・名阪国道・亀山〜吉田ICの割引条件と簡易料金差計算。吉田IC向け未検証料金を断定しない。
- `shizunami-drive/header.css`、`header.js`、`assets/brand/logo.svg`、`assets/brand/favicon.svg` — 共通ヘッダー・ロゴ・共有リンク。
- 施設写真は既存の `yaizu-family/assets/` に格納されたライセンス確認済み素材を同じGitHub Pagesドメインから参照。静波海岸の写真はWikimedia Commons（久保嶋宏明／CC BY-SA 3.0）で写真下に帰属表記し、外部CDNに障害がある場合の代替画像を設定。
- 一般公開向けはnoindexを使用せずindex/followを設定。旧 `yaizu-family/` は記録として残し、内容を混在させない。
- 宿泊・高速・燃料代は日付未確定の予算例。吉田ICに向かう正式な料金・個別の日付料金は出発前に必ずNEXCO/宿の公式サイトで再照会。

## 静波・一般公開サイト / グルメ

- `shizunami-drive/index.html#food` — 静波周辺グルメ「カリーフォルニア ハグ」を当サイト独自のおすすめ★★★★★（5/5）として掲載。Googleマップ、営業時間・料金の参考、公式確認導線付き。地図等の口コミ評点とは分けて表記。写真の権利確認がないため実物写真は地図から閲覧。共通ヘッダーで各ページからリンク。

### 静波サイト・帰りの高速ルート（2026-10-19）

- `shizunami-drive/index.html#return-route` — 復路は静波海岸→吉田IC→東名→豊田JCT→伊勢湾岸→四日市JCT→新名神→草津JCT→名神→吹田IC→一般道→新御堂筋(国道423号)→梅田→なんば駅。
- 高速区間と吹田IC〜なんばの一般道区間のGoogleマップナビを別々に掲載。土山SAを新名神のチェック地点とする。
- `shizunami-drive/night-discount.html#return-tolls` — 帰りは「吉田IC→吹田IC」で料金照会。既存の往路モデル（亀山→吉田）を帰りの料金として流用しない。
- 同フォルダの4 HTMLページのハンバーガーメニューに「帰り：新名神・吹田IC・新御堂筋」を設置。
