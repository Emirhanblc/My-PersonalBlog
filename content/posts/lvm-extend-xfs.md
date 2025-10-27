---
title: "LVM Extend Sonrası XFS Neden Büyümedi?"
date: "2025-04-15"
updated: "2025-10-26"
tags: ["Linux", "Storage"]
readingTime: "7 dk"
summary: "Canlı sistemde LVM büyüttükten sonra XFS neden genişlemedi ve nasıl düzeltildi."
---

## 1. Problem Senaryosu
- /data altında çalışan servis kapatılamıyordu.
- LVM'e +100G eklendi ama df çıktısı değişmedi.

```bash
lvextend -L +100G /dev/vgdata/lvdata
xfs_growfs /data
```

## 2. Yanlış Yaklaşım
- ...

## 3. Çalışan Çözüm
- ...

## 4. Risk Notları
- Canlıda fs büyütmek veri kaybı riski taşır, snapshot alınmadan yapılmaz.
