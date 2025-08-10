#!/bin/bash

# GitHub 저장소에 label을 생성하는 스크립트
# 사용법: ./create-labels.sh

# 색상 정의
declare -A colors=(
  ["enhancement"]="0366d6"
  ["bug"]="d73a4a"
  ["documentation"]="0075ca"
  ["testing"]="c2e0c6"
  ["maintenance"]="fef2c0"
  ["security"]="ff0000"
  ["dependencies"]="0366d6"
  ["breaking-change"]="ff0000"
  ["revert"]="d73a4a"
  ["types"]="0075ca"
  ["accessibility"]="7057ff"
  ["i18n"]="008672"
  ["mobile"]="fbca04"
  ["desktop"]="0366d6"
  ["web"]="0075ca"
  ["size: XS"]="00ff00"
  ["size: S"]="7c1158"
  ["size: M"]="5319e7"
  ["size: L"]="fbca04"
  ["size: XL"]="ff0000"
  ["high-priority"]="ff0000"
  ["medium-priority"]="ffa500"
  ["low-priority"]="00ff00"
  ["in-progress"]="fef2c0"
  ["ready-for-review"]="0366d6"
  ["needs-review"]="ffa500"
  ["approved"]="00ff00"
  ["good-first-issue"]="7057ff"
  ["help-wanted"]="008672"
  ["wont-fix"]="ffffff"
  ["duplicate"]="cfd3d7"
  ["invalid"]="e4e669"
)

# 설명 정의
declare -A descriptions=(
  ["enhancement"]="새로운 기능이나 개선사항"
  ["bug"]="버그 수정"
  ["documentation"]="문서 수정 또는 추가"
  ["testing"]="테스트 코드 추가 또는 수정"
  ["maintenance"]="유지보수 작업"
  ["security"]="보안 관련 수정"
  ["dependencies"]="의존성 업데이트"
  ["breaking-change"]="호환성을 깨뜨리는 변경사항"
  ["revert"]="변경사항 되돌리기"
  ["types"]="타입 정의 또는 수정"
  ["accessibility"]="접근성 개선"
  ["i18n"]="국제화 관련"
  ["mobile"]="모바일 관련 변경사항"
  ["desktop"]="데스크톱 관련 변경사항"
  ["web"]="웹 관련 변경사항"
  ["size: XS"]="매우 작은 변경사항 (10줄 이하)"
  ["size: S"]="작은 변경사항 (11-30줄)"
  ["size: M"]="중간 변경사항 (31-100줄)"
  ["size: L"]="큰 변경사항 (101-500줄)"
  ["size: XL"]="매우 큰 변경사항 (500줄 초과)"
  ["high-priority"]="높은 우선순위"
  ["medium-priority"]="중간 우선순위"
  ["low-priority"]="낮은 우선순위"
  ["in-progress"]="진행 중"
  ["ready-for-review"]="리뷰 준비 완료"
  ["needs-review"]="리뷰 필요"
  ["approved"]="승인됨"
  ["good-first-issue"]="초보자에게 좋은 이슈"
  ["help-wanted"]="도움 필요"
  ["wont-fix"]="수정하지 않을 예정"
  ["duplicate"]="중복된 이슈"
  ["invalid"]="유효하지 않은 이슈"
)

echo "GitHub 저장소에 label을 생성합니다..."

# 각 label 생성
for label in "${!colors[@]}"; do
  color="${colors[$label]}"
  description="${descriptions[$label]}"
  
  echo "Creating label: $label"
  gh label create "$label" --color "$color" --description "$description" || echo "Label '$label' already exists or failed to create"
done

echo "Label 생성이 완료되었습니다!"
