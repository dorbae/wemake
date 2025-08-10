# Wemake

A modern React application built with Vite, TypeScript, and TailwindCSS.

## 🚀 Features

- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 🏷️ **Automatic PR Labeling System** - PR prefix 기반 자동 label 설정
- 📖 [React Router docs](https://reactrouter.com/)

## 🏷️ Automatic PR Labeling

이 프로젝트는 PR 제목의 prefix를 자동으로 감지하여 적절한 label을 설정하는 시스템을 포함하고 있습니다.

### 지원하는 PR 타입
- `feat:` / `✨` → enhancement
- `fix:` / `🐛` → bug
- `refactor:` / `♻️` → enhancement
- `docs:` / `📚` → documentation
- `style:` / `💄` → maintenance
- `test:` / `✅` → testing
- `chore:` / `🔧` → maintenance
- `perf:` / `⚡` → enhancement
- `security:` / `🔒` → security
- `deps:` / `📦` → dependencies
- `breaking:` / `💥` → breaking-change
- `revert:` / `↩️` → revert
- `types:` / `🔧` → types
- `a11y:` / `♿` → accessibility
- `i18n:` / `🌐` → i18n
- `mobile:` / `📱` → mobile
- `desktop:` / `💻` → desktop
- `web:` / `🌍` → web

### 자동 설정되는 추가 Label
- **Size Labels**: PR 크기에 따라 `size-XS`, `size-S`, `size-M`, `size-L`, `size-XL`
- **Priority Labels**: 내용에 따라 `high-priority`, `medium-priority`, `low-priority`
- **Status Labels**: `needs-review` 등

자세한 내용은 [`.github/AUTO_LABELING.md`](.github/AUTO_LABELING.md)를 참조하세요.

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🤝 Contributing

PR을 생성할 때는 제목에 적절한 prefix를 포함해주세요. 자동으로 적절한 label이 설정됩니다.

**예시:**
- `feat: 새로운 사용자 대시보드 추가`
- `fix: 로그인 오류 해결`
- `docs: API 문서 업데이트`
- `✨ 새로운 기능` (이모지도 지원!)

## 📚 Documentation

- [React Router](https://reactrouter.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
