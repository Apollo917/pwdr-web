<div align="center">

# 🔣 Pwdr-web

A web utility for generating deterministic passwords based on a phrase and key

[![version](https://img.shields.io/npm/v/pwdr-web?style=for-the-badge)](https://www.npmjs.com/package/pwdr-web)
[![license](https://img.shields.io/npm/l/pwdr-web?style=for-the-badge)](https://github.com/Apollo917/pwdr-web/blob/main/LICENSE)
[![size](https://img.shields.io/bundlephobia/minzip/pwdr-web?style=for-the-badge)](https://bundlephobia.com/result?p=pwdr-web)
[![downloads](https://img.shields.io/npm/dw/pwdr-web?style=for-the-badge)](https://www.npmjs.com/package/pwdr-web)

</div>

## 📦 Installation

```bash
npm i pwdr-web
```

## 🚀 Quickstart

```javascript
import { generatePwd } from 'pwdr-web';

const pwd = await generatePwd('phrase', 'key');
```

### 🔢 Resulting password

- Minimum length: 16
- Maximum length: 64
- Default length: 32

## 🔁 Version compatibility check

- phrase: `compatibility_check_phrase`
- key: `compatibility_check_key`
- length: `32`

### 🏷️ Versions

- **v1.0.0**
    - output: `1e9/wtB["D0NS/oCa/ra9p,v'NHBT4GQ`