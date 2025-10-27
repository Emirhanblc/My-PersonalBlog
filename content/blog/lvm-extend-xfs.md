---
slug: lvm-extend-xfs
title: LVM Extend Sonrası XFS Neden Büyümedi?
date: 2025-04-15
readingTime: 7
categories: [Linux, Storage]
---

1. Problem Senaryosu
- /data altında çalışan servis kapatılamıyordu.
- LVM'e +100G eklendi ama df çıktısı değişmedi.

Komutlar:

```
lvextend -L +100G /dev/vgdata/lvdata
xfs_growfs /data
```

2. Yanlış Yaklaşım
- ...

3. Çalışan Çözüm
- ...

4. Risk Notları
- Canlıda fs büyütmek veri kaybı riski taşır, snapshot alınmadan yapılmaz.
