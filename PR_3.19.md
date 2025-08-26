## 📋 변경 사항

### 주요 기능/수정 내용
- 리더보드 페이지들의 메타 타이틀을 경로 파라미터를 활용하여 동적으로 생성
- 각 리더보드 페이지별 맞춤형 메타 타이틀 구현
- SEO 최적화를 위한 동적 메타데이터 처리

### 세부 변경사항
- daily-leaderboard-page: 경로 파라미터를 활용한 메타 타이틀 동적 생성
- monthly-leaderboard-page: 월별 정보를 반영한 메타 타이틀 구현
- weekly-leaderboard-page: 주별 정보를 반영한 메타 타이틀 구현
- yearly-leaderboard-page: 연도별 정보를 반영한 메타 타이틀 구현

## 🔧 파일 변경사항
- `app/features/products/pages/daily-leaderboard-page.tsx`: 일간 리더보드 메타 타이틀 동적 생성
- `app/features/products/pages/monthly-leaderboard-page.tsx`: 월간 리더보드 메타 타이틀 동적 생성
- `app/features/products/pages/weekly-leaderboard-page.tsx`: 주간 리더보드 메타 타이틀 동적 생성
- `app/features/products/pages/yearly-leaderboard-page.tsx`: 연간 리더보드 메타 타이틀 동적 생성

## 🎯 목적
- 각 리더보드 페이지별 맞춤형 메타 타이틀 제공
- SEO 최적화를 통한 검색 엔진 노출 개선
- 사용자에게 더 명확한 페이지 정보 제공
- 동적 메타데이터 처리를 통한 사용자 경험 향상

## ✅ 테스트
- [x] 일간 리더보드 메타 타이틀 정상 생성 확인
- [x] 월간 리더보드 메타 타이틀 정상 생성 확인
- [x] 주간 리더보드 메타 타이틀 정상 생성 확인
- [x] 연간 리더보드 메타 타이틀 정상 생성 확인
- [x] 빌드 오류 없음 확인
- [x] 경로 파라미터 기반 동적 메타데이터 처리 확인

## 📝 추가 정보
- 경로 파라미터를 활용한 동적 메타 타이틀 생성
- 각 리더보드 페이지별 고유한 메타데이터 제공
- SEO 최적화를 위한 구조적 개선

## 🔗 관련 이슈
- 리더보드 페이지 메타데이터 최적화
- SEO 개선 및 검색 엔진 노출 향상
- 동적 메타데이터 처리 시스템 구축

## 🚀 배포 관련
- 특별한 주의사항 없음
- 기존 기능에 영향 없음
- SEO 최적화로 검색 엔진 노출 개선
