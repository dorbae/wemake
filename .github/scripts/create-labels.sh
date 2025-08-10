#!/bin/bash

# GitHub 저장소에 label을 생성하는 스크립트
# 사용법: ./create-labels.sh

# 색상 정의 - 일반 배열 사용
colors=()
descriptions=()

# 기본 label들
colors+=("enhancement:0366d6")
colors+=("bug:d73a4a")
colors+=("documentation:0075ca")
colors+=("testing:c2e0c6")
colors+=("maintenance:fef2c0")
colors+=("security:ff0000")
colors+=("dependencies:0366d6")
colors+=("breaking-change:ff0000")
colors+=("revert:d73a4a")
colors+=("types:0075ca")
colors+=("accessibility:7057ff")
colors+=("i18n:008672")
colors+=("mobile:fbca04")
colors+=("desktop:0366d6")
colors+=("web:0075ca")

# 하이픈 사용으로 변경 (GitHub 표준)
SIZE_XS="size-XS"
SIZE_S="size-S"
SIZE_M="size-M"
SIZE_L="size-L"
SIZE_XL="size-XL"
HIGH_PRIORITY="high-priority"
MEDIUM_PRIORITY="medium-priority"
LOW_PRIORITY="low-priority"
IN_PROGRESS="in-progress"
READY_FOR_REVIEW="ready-for-review"
NEEDS_REVIEW="needs-review"
GOOD_FIRST_ISSUE="good-first-issue"
HELP_WANTED="help-wanted"
WONT_FIX="wont-fix"

colors+=("$SIZE_XS:00ff00")
colors+=("$SIZE_S:7c1158")
colors+=("$SIZE_M:5319e7")
colors+=("$SIZE_L:fbca04")
colors+=("$SIZE_XL:ff0000")
colors+=("$HIGH_PRIORITY:ff0000")
colors+=("$MEDIUM_PRIORITY:ffa500")
colors+=("$LOW_PRIORITY:00ff00")
colors+=("$IN_PROGRESS:fef2c0")
colors+=("$READY_FOR_REVIEW:0366d6")
colors+=("$NEEDS_REVIEW:ffa500")
colors+=("approved:00ff00")
colors+=("$GOOD_FIRST_ISSUE:7057ff")
colors+=("$HELP_WANTED:008672")
colors+=("$WONT_FIX:ffffff")
colors+=("duplicate:cfd3d7")
colors+=("invalid:e4e669")

# 설명 정의
descriptions+=("enhancement:새로운 기능이나 개선사항")
descriptions+=("bug:버그 수정")
descriptions+=("documentation:문서 수정 또는 추가")
descriptions+=("testing:테스트 코드 추가 또는 수정")
descriptions+=("maintenance:유지보수 작업")
descriptions+=("security:보안 관련 수정")
descriptions+=("dependencies:의존성 업데이트")
descriptions+=("breaking-change:호환성을 깨뜨리는 변경사항")
descriptions+=("revert:변경사항 되돌리기")
descriptions+=("types:타입 정의 또는 수정")
descriptions+=("accessibility:접근성 개선")
descriptions+=("i18n:국제화 관련")
descriptions+=("mobile:모바일 관련 변경사항")
descriptions+=("desktop:데스크톱 관련 변경사항")
descriptions+=("web:웹 관련 변경사항")

descriptions+=("$SIZE_XS:매우 작은 변경사항 (10줄 이하)")
descriptions+=("$SIZE_S:작은 변경사항 (11-30줄)")
descriptions+=("$SIZE_M:중간 변경사항 (31-100줄)")
descriptions+=("$SIZE_L:큰 변경사항 (101-500줄)")
descriptions+=("$SIZE_XL:매우 큰 변경사항 (500줄 초과)")
descriptions+=("$HIGH_PRIORITY:높은 우선순위")
descriptions+=("$MEDIUM_PRIORITY:중간 우선순위")
descriptions+=("$LOW_PRIORITY:낮은 우선순위")
descriptions+=("$IN_PROGRESS:진행 중")
descriptions+=("$READY_FOR_REVIEW:리뷰 준비 완료")
descriptions+=("$NEEDS_REVIEW:리뷰 필요")
descriptions+=("approved:승인됨")
descriptions+=("$GOOD_FIRST_ISSUE:초보자에게 좋은 이슈")
descriptions+=("$HELP_WANTED:도움 필요")
descriptions+=("$WONT_FIX:수정하지 않을 예정")
descriptions+=("duplicate:중복된 이슈")
descriptions+=("invalid:유효하지 않은 이슈")

echo "GitHub 저장소에 label을 생성합니다..."

# 각 label 생성
for item in "${colors[@]}"; do
  # label명과 색상을 분리
  label=$(echo "$item" | cut -d: -f1)
  color=$(echo "$item" | cut -d: -f2)
  
  # 설명 찾기
  description=""
  for desc_item in "${descriptions[@]}"; do
    desc_label=$(echo "$desc_item" | cut -d: -f1)
    if [ "$desc_label" = "$label" ]; then
      description=$(echo "$desc_item" | cut -d: -f2-)
      break
    fi
  done
  
  echo "Creating label: $label"
  gh label create "$label" --color "$color" --description "$description" || echo "Label '$label' already exists or failed to create"
done

echo "Label 생성이 완료되었습니다!"
