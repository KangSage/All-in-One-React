# Chapter 01. 개요

## 01. 첫 인사, 개요 소개

* 생략

## 02. HTML, CSS 그리고 JS란

HTML(Hyper Text Markup Language)는 페이지의 제목, 문단, 표, 이미지, 동영상 등을  
정의하고 그 구조와 의미를 부여하는 정적 언어로 웹의 구조를 담당한다.  
HTML은 튼튼한 구조(Semantic)를 만드는 것이 중요하다.

CSS(Cascading Style Sheets)는 마크업 언어(HTML, XML 등)가  
실제 표시되는 방법(색상, 크기, 폰트, 레이아웃 등)을  
지정하여 콘텐츠 구조를 꾸며주는 정적 언어로 웹의 시각적인 표현을 담당.  
스타일을 꾸미는 것에 집중하고 적당한 크기와 아름다운 색상, 원하는 위치를 지정하는데 집중한다.

JS(JavaScript)는 콘텐츠를 바꾸고 움직이는 등  
페이지를 동적으로 꾸며주는 역할을 하는 프로그래밍 언어로 웹의 동적 처리를 담당

이 3가지의 언어가 각 역할을 제대로 수행하도록 구조적, 기술적으로 나누어 최적화할 필요가 있다.  
구조적으로 파일과 디렉토리를 구분하는 것은 규모가 크고  
복잡한 웹 페이지를 만들 때 유지보수, 확장성, 생산성 을 위한 최적화이다.

## 03. 웹 표준과 웹 접근성

### 웹 표준

웹 표준(Web Standard)이란 W3C의 권고안에 나오는 기술들이다.  
이 표준 기술들을 기준으로 웹 브라우저들이 만들어지는데 브라우저 개발사마다 표준 기술 해석의 차이,  
[표준화 제정 단계](https://wit.nts-corp.com/2013/10/16/280)에 따른 신기술 삽입 등으로 브라우저별 구동에 차이가 생기게 된다.
> 보통의 경우 표준화 제정 단계의 '권고안(REC)'에 해당하는 기술이 표준안이다.

### 크로스 브라우징

Cross Browsing은 조금씩 다르게 구동되는 여러 브라우저에 대한  
동일한 UX 제공을 할 수 있도록 제작하는 기술, 방법이다.

기본적으로 모든 브라우저는 웹 표준을 준수해서 제작되지만 MS의 IE만 다른 경우가 많아  
IE에서도 동일하게 동작하게 하는 것을 크로스 브라우징이라고 부르기도 한다.

### 웹 접근성

웹 접근성이란 정상적인 웹 콘텐츠 사용이 가능한 일반 사용자부터  
고령자, 장애인 같은 제한이 있는 사용자를 포함해 모든 사용자들이  
동등하게 접근할 수 있는 웹 콘텐츠를 제작하는 방법이다.

ex) 청각 장애인을 위해 영상에 자막을 넣거나  
마우스 사용이 불가능한 사람들을 위해 키보드로 웹을 컨트롤 가능하게 하는 등의 행위

* 과기부 지정 품질인증 기관을 통해 심사 및 인증을 받는 웹 접근성 품질 인증 마크라는 것도 있다.

## 04. 에디터 소개

### 웹 개발을 위한 에디터

디자인과 달리 웹 개발은 툴에 대한 종속성은 거의 없다.

웹 개발 실무에

Sublime Text, Atom, Brackets, VS Code, WebStorm 등

## 05. VS code 설치 및 설정

* 생략

## 06. VS code 한글 패치

* 생략

## 07. Beautify and live server

* Extensions: Marketpalce에서 Beautify와 Live Server 검색하여 설치
* Beautify setting : Beautify Extensions 설치 후 File > Preferences >  
  Keyboard Shortcuts 선택 > Beautyfy selection을 검색하여 원하는 키에 바인딩해준다.
* cmd + alt + l 조합 추천

## 08. 그 외 좋은 확장 프로그램과 알아두면 좋은 단축키

* 그 외 추천 확장들
  * Terminal
  * Live Sass Compiler
  * Turbo Console log
  * Better Comments
  * Highlight Matching Tag

  * GitLens
  * REST CLIENT

* 단축키

> * 약어로 랩핑(Wrap)  
> 랩핑할 코드 선택 > 모든 명령 표시 실행 / "Ctrl(cmd) + Shift + P"  
> Emmet: Wrap with Abbreviation(Emmet: 약어로 랩핑)를 입력하거나 목록에서 선택(“Enter”)  
> div, span 등의 Emmet 문법(ex: .wrapper, span.bold)을 입력 완료(“Enter”)

## 09. 이미지에 대한 이해

웹에서 사용하는 이미지

비트맵과 벡터 이미지

비트맵(Bitmap)은 각 픽셀이 모여 만들어진 정보의 집합으로 레스터(Raster) 이미지라고도 함.
픽셀 단위로 화면에 렌더링한다. BMP, JPG 등 대부분의 일반적인 이미지 포멧은 비트맵 형식.

벡터(Vector)는 수학적 정보의 형태(Shape)들이 만들어내는 결과물
이미지가 가지고 있는 점, 선, 면의 좌표, 색상 등의 정보를 가지고 화면에 렌더링한다.
그래서 더 많은 연산을 해야하지만 해상도와 상관 없이 렌더링이 가능하다.
확대 / 축소해도 깨지지 않고 수학적 정보만 가지고 있으므로 용량 변화 없음.

## 10. JPG, PNG, GIF, WEBP, SVG

* JPG(JPEG) `높은 압축률(적은 용량)`  
  Joint Photographic coding Experts Group : Full-color와 Gray-scale의 압축을 위한 포맷
  * 손실 압축
  * 표현 해상도(24비트, 약 1600만 색상)가 뛰어나 고해상도에 적합
  * 이미지의 품질과 용량을 쉽게 조절 가능
  * 가장 널리 쓰이는 이미지 포맷  

* PNG `투명도 지원!`  
  Portable Network Graphics : Gif의 대체 포맷으로 개발
  * 비손실 압축
  * 8비트(256 색상) / 24비트(약 1600만 색상) 컬러 이미지 처리
  * Alpha Channel 지원(투명도)
  * W3C 권장 포맷

* GIF `동영상 같은 이미지!`  
  Graphics Interchange Format : 이미지 파일 내에 이미지 및 문자열 같은 정보를 저장할 수 있음
  * 비손실 압축
  * 여러 장의 이미지를 한 개의 파일로 담을 수 있음(움짤, 애니메이션)
  * 8비트 컬러만 지원 - 표현력이 떨어짐

* WEBP `완벽하지만 지원하는 브라우저가 적음`  
  JPG, PNG, GIF를 모두 대체할 수 있는 구글이 개발한 이미지 포맷.
  * 완벽한 손실/비손실 압축 지원
  * GIF 같은 애니메이션 지원
  * Alpha Channel 지원(손실, 비손실 모두)

* SVG  `백터 이미지에 익숙하지 않으면 다루기 까다롭다`  
  Scalable Vector Graphics : 마크업 언어(HTML/XML) 기반의 벡터 그래픽을 표현하는 포맷  
  * 해상도의 영향에서 자유로움 -> 크로스 브라우징에 유리
  * CSS로 스타일링 가능
  * JS로 이벤트 핸들링 가능
  * 코드로 혹은 파일로 사용 가능

## 11. 특수 기호의 이름 정리

* ` : Grave(그레이브)
* ~ : Tilde(틸드)
* ! : Exclamation(엑스클러메이션) mark
* @ : At(엣) sign
* \# : Number sign, Sharp
* $ : Dollar sign
* % : Percent sign
* ^ : Caret
* & : Ampersand
* \* : Asterisk
* \- : Hyphen, Dash
* _ : Underscore, Low dash
* = : Equals sign
* " : Quotation mark
* ' : Apostrophe
* : : Colon
* ; : Semicolon
* , : Comma
* . : Period, Dot
* ? : Question mark
* / : Slash
* | : Vertical bar
* \ : Backslash
* () : Parenthesis
* {} : Brace
* [] : Bracket
* <> : Angle Bracket

> [HTML Entity List](https://www.freeformatter.com/html-entities.html)

## 12. 오픈 소스와 라이센스

> 오픈소스란 어떤 제품을 개발하는 과정에 필요한 소스 코드나  
> 설계도를 누구나 접근해서 열람할 수 있도록 공개하는 것

오픈소스 != Free
사실은 다양한 종류의 오픈소스 라이선스가 존재  
개인적 이용은 가능하지만 상업적 이용에 제한이 있거나 비용이 발생할 수 있음.

* Apache License
  * 아파치 소프트웨어 재단에서 자체 소프트웨어에 적용하기 위해 만든 라이선스
  * 개인적/상업적 이용, 배포, 수정, 특허 신청 가능

* MIT License
  * MIT에서 소프트웨에 학생들을 위해 개발한 라이선스
  * 개인 소스에 이 라이선스를 사용하고 있다는 표시만 지켜주면 됨.

* BSD License
  * Berkeley Software Distribution은 버클리 캘리포니아 대학에서 개발한 라이선스
  * MIT와 동일하게 표시만 지켜주면 됨.

* Beerware
  * 오픈소스 개발자에게 만날 경우 맥주를 사줘야하는 라이선스

> [OpenSource.org](https://opensource.org/licenses)
