# Pull Request

## 📋 변경 사항

### 주요 기능/수정 내용
- 사용자 인증 시스템 및 프로필 메뉴 구축
- 알림 및 메시지 알림 기능 추가
- Avatar 컴포넌트 시스템 구축
- 로그인/회원가입 버튼 추가

### 세부 변경사항
- `@radix-ui/react-avatar` 및 `@radix-ui/react-separator` 패키지 설치
- `Avatar`, `AvatarImage`, `AvatarFallback` 컴포넌트 구현
- Navigation 컴포넌트에 props 기반 상태 관리 추가
- 알림 버튼 (BellIcon) 및 메시지 버튼 (MessageCircleIcon) 추가
- 사용자 프로필 드롭다운 메뉴 구현 (Dashboard, Profile, Settings, Logout)
- 로그인/회원가입 버튼 추가
- 알림 및 메시지 상태에 따른 시각적 표시 (빨간 점)

## 🔧 파일 변경사항
- `app/common/components/ui/avatar.tsx`: Avatar 컴포넌트 시스템 추가
- `app/common/components/ui/navigation.tsx`: 사용자 인증 및 알림 기능 통합
- `app/root.tsx`: Navigation 컴포넌트에 props 전달
- `package.json`: 새로운 Radix UI 패키지 의존성 추가

## 🎯 목적
- 사용자 인증 상태에 따른 동적 네비게이션 제공
- 알림 및 메시지 기능으로 사용자 참여도 향상
- 일관된 사용자 인터페이스 및 경험 제공
- 확장 가능한 사용자 프로필 시스템 구축

## ✅ 테스트
- [x] Avatar 컴포넌트 정상 렌더링 확인
- [x] 로그인/비로그인 상태별 네비게이션 변경 확인
- [x] 알림 및 메시지 버튼 정상 작동 확인
- [x] 사용자 프로필 드롭다운 메뉴 정상 작동 확인
- [x] 로그인/회원가입 버튼 정상 작동 확인
- [x] 빌드 오류 없음 확인
- [x] TypeScript 타입 오류 없음 확인

## 📝 추가 정보
- **사용자 상태**: `isLoggedIn`, `hasNotifications`, `hasMessages` props로 관리
- **알림 시스템**: 빨간 점으로 새로운 알림/메시지 표시
- **프로필 메뉴**: Dashboard, Profile, Settings, Logout 항목 포함
- **인증 버튼**: Login (secondary), Join (primary) 스타일 적용
- **아이콘**: Lucide React 아이콘 사용 (Bell, MessageCircle, BarChart3, LogOut)

## 🔗 관련 이슈
- 사용자 인증 시스템 구축 필요성
- 알림 및 메시지 기능 구현 요구사항
- 사용자 프로필 관리 시스템 구축

## 🚀 배포 관련
- 새로운 사용자 인증 시스템이 즉시 적용됨
- 기존 네비게이션 구조에 영향 없음
- 사용자 경험 및 참여도 향상

---
**PR 타입**: `feat` ✨
**브랜치**: `3.4`

<!-- 
PR 타입: feat/✨ - 새로운 기능 추가
- 사용자 인증 시스템 및 프로필 메뉴 구축
- 알림 및 메시지 알림 기능 추가
- Avatar 컴포넌트 시스템 구축
- 로그인/회원가입 버튼 추가
-->
