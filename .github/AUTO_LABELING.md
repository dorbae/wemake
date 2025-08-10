# 🏷️ 자동 PR Labeling 시스템

이 프로젝트는 PR 제목의 prefix를 자동으로 감지하여 적절한 label을 설정하는 시스템을 포함하고 있습니다.

## 🚀 주요 기능

### 1. PR 제목 prefix 기반 자동 labeling
- `feat: 새로운 기능` → `enhancement` label 자동 설정
- `fix: 버그 수정` → `bug` label 자동 설정
- `docs: 문서 업데이트` → `documentation` label 자동 설정
- `✨ 새로운 기능` → `enhancement` label 자동 설정 (이모지 지원)

### 2. PR 크기에 따른 자동 size labeling
- 10줄 이하: `size-XS`
- 11-30줄: `size-S`
- 31-100줄: `size-M`
- 101-500줄: `size-L`
- 500줄 초과: `size-XL`

### 3. 스마트 우선순위 자동 설정
- **High Priority**: `security`, `breaking-change` label이 있는 경우
- **Medium Priority**: `bug`, `hotfix` label이 있는 경우  
- **Low Priority**: 기타 모든 경우

### 4. 상태 label 자동 설정
- 모든 새 PR에 `needs-review` label 자동 설정

## 🚀 작동 원리

### 1. GitHub Actions 워크플로우
- `.github/workflows/auto-label-pr.yml`: PR 이벤트 발생 시 자동 실행
- `opened`, `edited`, `synchronize` 이벤트에서 트리거

### 2. Labeler 설정
- `.github/labeler.yml`: prefix 패턴과 label 매핑 규칙 정의
- 정규식 패턴과 이모지를 사용하여 PR 제목에서 prefix 추출

### 3. 커스텀 Label 설정
- 추가적인 우선순위 및 상태 label 자동 설정
- PR 크기에 따른 자동 label 설정

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
| `types:` / `🔧` | `types` | 타입 정의/수정 |
| `a11y:` / `♿` | `accessibility` | 접근성 개선 |
| `i18n:` / `🌐` | `i18n` | 국제화 |
| `mobile:` / `📱` | `mobile` | 모바일 관련 |
| `desktop:` / `💻` | `desktop` | 데스크톱 관련 |
| `web:` / `🌍` | `web` | 웹 관련 |

## 📏 PR 크기별 자동 Label

| 변경사항 크기 | Label | 설명 |
|---------------|-------|------|
| 10줄 이하 | `size-XS` | 매우 작은 변경사항 |
| 11-30줄 | `size-S` | 작은 변경사항 |
| 31-100줄 | `size-M` | 중간 변경사항 |
| 101-500줄 | `size-L` | 큰 변경사항 |
| 500줄 초과 | `size-XL` | 매우 큰 변경사항 |

## 🏷️ 우선순위 자동 설정

- **High Priority**: `security`, `breaking-change` label이 있는 경우
- **Medium Priority**: `bug`, `hotfix` label이 있는 경우  
- **Low Priority**: 기타 모든 경우

## 🔧 설정 방법

### 1. Label 생성
```bash
# 스크립트 실행 권한 부여
chmod +x .github/scripts/create-labels.sh

# 모든 label 생성
./.github/scripts/create-labels.sh
```

### 2. 수동 label 생성
```bash
# 개별 label 생성 예시
gh label create "enhancement" --color "0366d6" --description "새로운 기능이나 개선사항"
gh label create "bug" --color "d73a4a" --description "버그 수정"
```

## 📖 사용법

### PR 작성 시
1. PR 제목에 적절한 prefix 포함
   - `feat: 새로운 사용자 대시보드 추가`
   - `fix: 로그인 오류 해결`
   - `✨ 새로운 기능` (이모지도 지원!)

2. 자동으로 적절한 label 설정됨
   - prefix에 따른 타입 label
   - PR 크기에 따른 size label
   - 우선순위 및 상태 label

## 🎯 기대 효과

1. **개발자 경험 향상**: PR 작성 시 자동으로 적절한 label 설정
2. **프로젝트 관리 효율성**: 체계적인 label 체계로 이슈/PR 분류 개선
3. **리뷰 프로세스 개선**: 우선순위와 크기에 따른 리뷰 일정 조정
4. **프로젝트 가시성**: 명확한 label로 프로젝트 상태 파악 용이

## 📈 향후 개선 계획

- [x] PR 크기에 따른 자동 label 설정 (small, medium, large)
- [x] 이모지 기반 prefix 지원
- [x] 더 많은 PR 타입 지원
- [ ] 커스텀 label 규칙 추가 기능
- [ ] label 통계 대시보드
- [ ] 팀별 label 규칙 설정

## 🔗 관련 파일

- `.github/workflows/auto-label-pr.yml`: 자동 labeling 워크플로우
- `.github/labeler.yml`: Labeler 패턴 매칭 규칙
- `.github/labels.yml`: Label 정의 및 색상
- `.github/scripts/create-labels.sh`: 자동 label 생성 스크립트
- `.github/pull_request_template.md`: PR 템플릿

