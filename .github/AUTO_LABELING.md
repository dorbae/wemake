# 자동 PR Label 설정 시스템

## 🎯 개요

이 시스템은 PR 제목의 prefix를 자동으로 감지하여 적절한 label을 설정합니다. 예를 들어:

- `feat: 새로운 기능` → `enhancement` label 자동 설정
- `fix: 버그 수정` → `bug` label 자동 설정
- `docs: 문서 업데이트` → `documentation` label 자동 설정
- `✨ 새로운 기능` → `enhancement` label 자동 설정 (이모지 지원)

## 🚀 작동 원리

### 1. GitHub Actions 워크플로우
- `auto-label-pr.yml`: PR이 열리거나 수정될 때 자동 실행
- `actions/labeler@v4`: PR 제목 패턴 매칭을 통한 label 설정

### 2. Labeler 설정
- `.github/labeler.yml`: prefix 패턴과 label 매핑 규칙 정의
- 정규식 패턴과 이모지를 사용하여 PR 제목에서 prefix 추출

### 3. 커스텀 Label 설정
- 추가적인 우선순위 및 상태 label 자동 설정
- PR 크기에 따른 자동 label 설정
- GitHub CLI를 사용한 동적 label 관리

## 📋 지원하는 PR 타입

| Prefix | Label | 설명 |
|--------|-------|------|
| `feat:` / `✨` | `enhancement` | 새로운 기능 추가 |
| `fix:` / `🐛` | `bug` | 버그 수정 |
| `refactor:` / `♻️` | `enhancement` | 코드 리팩토링 |
| `docs:` / `📚` | `documentation` | 문서 수정 |
| `style:` / `💄` | `maintenance` | 코드 스타일 수정 |
| `test:` / `✅` | `testing` | 테스트 코드 |
| `chore:` / `🔧` | `maintenance` | 빌드/설정 관련 |
| `perf:` / `⚡` | `enhancement` | 성능 개선 |
| `security:` / `🔒` | `security` | 보안 관련 |
| `deps:` / `📦` | `dependencies` | 의존성 업데이트 |
| `breaking:` / `💥` | `breaking-change` | 호환성 깨뜨리는 변경 |
| `revert:` / `↩️` | `revert` | 변경사항 되돌리기 |
| `types:` / `🔍` | `types` | 타입 정의 또는 수정 |
| `a11y:` / `♿` | `accessibility` | 접근성 개선 |
| `i18n:` / `🌍` | `i18n` | 국제화 관련 |
| `mobile:` / `📱` | `mobile` | 모바일 관련 |
| `desktop:` / `💻` | `desktop` | 데스크톱 관련 |
| `web:` / `🌐` | `web` | 웹 관련 |

## 📏 PR 크기별 자동 Label

| 변경사항 크기 | Label | 설명 |
|---------------|-------|------|
| 10줄 이하 | `size: XS` | 매우 작은 변경사항 |
| 11-30줄 | `size: S` | 작은 변경사항 |
| 31-100줄 | `size: M` | 중간 변경사항 |
| 101-500줄 | `size: L` | 큰 변경사항 |
| 500줄 초과 | `size: XL` | 매우 큰 변경사항 |

## 🏷️ 우선순위 자동 설정

- **High Priority**: `security`, `breaking-change` label이 있는 경우
- **Medium Priority**: `bug`, `hotfix` label이 있는 경우  
- **Low Priority**: 기타 모든 경우

## ⚙️ 설정 방법

### 1. Label 생성
```bash
# GitHub CLI가 설치되어 있어야 합니다
gh auth login

# Label 생성 스크립트 실행
./.github/scripts/create-labels.sh
```

### 2. 수동 Label 생성
```bash
# 개별 label 생성 예시
gh label create "enhancement" --color "0366d6" --description "새로운 기능이나 개선사항"
gh label create "size: M" --color "5319e7" --description "중간 변경사항 (31-100줄)"
```

### 3. 워크플로우 활성화
- `.github/workflows/auto-label-pr.yml` 파일이 저장소에 있으면 자동으로 활성화됩니다
- GitHub 저장소의 Actions 탭에서 워크플로우 상태를 확인할 수 있습니다

## 🔧 커스터마이징

### Labeler 규칙 추가
`.github/labeler.yml`에 새로운 규칙을 추가할 수 있습니다:

```yaml
# 새로운 label 규칙 예시
new-label:
  - 'new-prefix:'
  - 'another-prefix:'
  - '🔧'  # 이모지도 지원
```

### 커스텀 Label 로직
`.github/workflows/auto-label-pr.yml`의 각 단계를 수정하여 추가적인 label 로직을 구현할 수 있습니다.

## 📊 사용 예시

### PR 제목 예시
```
feat: 1.5. 다크모드 및 shadcn/ui 컴포넌트 시스템 구축
✨ 새로운 사용자 대시보드 추가
```
→ 자동으로 `enhancement` label 설정

```
fix: 로그인 버튼 클릭 시 오류 발생 문제 해결
🐛 API 응답 파싱 오류 수정
```
→ 자동으로 `bug` label 설정

```
docs: API 문서 업데이트 및 사용법 예시 추가
📚 README 파일 개선
```
→ 자동으로 `documentation` label 설정

```
refactor: 사용자 인증 로직 개선
♻️ 컴포넌트 구조 리팩토링
```
→ 자동으로 `enhancement` label 설정

## 🚨 주의사항

### 1. 권한 설정
- `GITHUB_TOKEN`이 PR 편집 권한을 가지고 있어야 합니다
- 저장소 설정에서 Actions 권한을 확인하세요

### 2. Label 충돌
- 동일한 PR에 여러 label이 설정될 수 있습니다
- 필요에 따라 중복 label을 수동으로 제거할 수 있습니다

### 3. 워크플로우 오류
- GitHub Actions 로그에서 오류를 확인할 수 있습니다
- label이 존재하지 않는 경우 자동 생성되지 않을 수 있습니다

## 🔄 문제 해결

### Label이 설정되지 않는 경우
1. GitHub Actions 워크플로우가 실행되었는지 확인
2. PR 제목이 정의된 패턴과 일치하는지 확인
3. 필요한 label이 저장소에 존재하는지 확인

### 워크플로우 오류 발생 시
1. Actions 탭에서 워크플로우 실행 로그 확인
2. GitHub CLI 인증 상태 확인
3. 저장소 권한 설정 확인

## 📈 향후 개선 계획

- [x] PR 크기에 따른 자동 label 설정 (small, medium, large)
- [x] 이모지 기반 prefix 지원
- [x] 더 많은 PR 타입 지원
- [ ] 파일 변경 유형에 따른 label 설정
- [ ] 리뷰어 자동 할당
- [ ] PR 템플릿과의 연동 강화
- [ ] 커스텀 label 규칙 설정 UI

