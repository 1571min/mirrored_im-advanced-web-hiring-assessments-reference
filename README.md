# Advanced Web Section Hiring Assessment

## Intro

이번 Advanced Web Section Hiring Assessment에서는 로그인 여부에 따른 마이페이지를 보여주는 fullstack web application을 만들어야 합니다.

## Before Start

1. 현재 읽고 있는 README.md 파일을 끝까지 정독 합니다.
2. `npm install` 또는 `yarn install` 을 통해서 의존성 모듈을 설치 합니다.
3. 서버와 클라이언트를 실행하기 위해서 두개의 터미널을 실행 하여야 합니다.

## CLIENT

### Getting Started

1. `npm run client-start`로 리액트 개발 서버를 실행 합니다.

### Requirements

클라이언트 어플리케이션은 다음과 같은 조건을 충족 하여야 합니다.

1. 로그인이 되어있는 유저만 메인 페이지로 접속 할 수 있어야 합니다.
2. 로그인이 되어 있지 않은 유저는 로그인 페이지로 보냅니다.
3. 로그인 요청을 서버에 보낼 수 있어야 합니다.
4. 로그인을 한 유저만 마이페이지에서 개인 정보를 열람할 수 있어야 합니다.

## SERVER

### Getting Started

1. `npm run server-start`를 통해서 웹서버 어플리케이션을 실행 합니다.

### Requirements

서버 어플리케이션은 다음과 같은 조건을 충족 하여야 합니다.

1. 회원가입 요청을 할 수 있는 api가 있어야 합니다.
2. 로그인 요청을 할수 있는 api가 있어야 합니다.
3. 회원가입 되어있는 유저만 로그인을 할 수 있어야 합니다.
4. 유저 개인정보를 불러올 수 있는 api가 있어야 합니다.
5. 유저 개인정보를 불러오는 api는 인증정보에 의해서 보호되어야 합니다(로그인 한 유저만 불러올 수 있어야 합니다).
6. 회원가입 시 유저정보는 database에 작성 하여야 합니다.
7. 유저정보 api 요청 시 데이터베이스에서 정보를 읽어서 응답 하여야 합니다.

## Submission

1. server & client 각 각 폴더에서 `npm test`로 테스트를 실행하여 각 디렉토리에서 server-result.json or client-result.json 파일이 생성된 것을 확인 하세요
2. student.json 파일을 본인의 정보에 맞게 수정 합니다.
3. npm run submit 스크립트를 통해 과제를 제출 합니다.(최신 테스트 결과를 반영하여 제출합니다. 제출 전 테스트를 꼭 돌려주세요.)

##
