# movie app 2019
react JS로 movie app 만들기


## proptypes
다른 파일에서 필요한 것을 가져오거나 체크할 때 유용함  
설치 ```npm i prop-types```
```javascript
import PropTypes from 'prop-types';
///
Food.propTypes = {name:PropTypes.string.isRequired}
//isRequired: undefined일 수 없다.
```

```Typo in static class property declaration 에러가 뜬다면 proptypes 소문자로 써야함!!```
  
## function App과 class App  
- function App(): function component  
  - return 하면 스크린에 표시됨
  - state를 필요로하지 않는다면 function을 써도 상관 없다.  
- class App() : class component
  - react component를 extends함. render() method를 통해 스크린에 render가능
  - react는 모든 class compnent의 render를 실행한다.
  - React.Component는 return을 가지고 있지 않음.
  - 왜쓰는가? -> state 때문!

## state
- dynamic data(동적 데이터)와 함께 쓰인다.
- state는 object이고, component의 dynamic data를 넣을 공간임.
- ```this.state.count=1```과 같이 state를 직접 변경하면 안됨!
- setState()를 이용하기
- ☆ state를 바꿀 때마다 (==setState를 호출할 때마다) react가 알아서 refresh, render함수를 호출함.
- 미래에 쓰고자하는 state를 미리 선언할 필요 없음. setState에서 새로운 state를 추가해도 문제없음  
  
처음 render하면 호출되는 life cycle method는 무엇일까? ```componentDidMount()```
--> componentDidMount에서 data를 fetch하면 된다.
(API로부터 data fetching이 완료되면 map을 만들고 movie를 render한다

## fetching movies from API
- 일반적으로 fetch를 많이 사용하지만, axios를 사용하는 것이 좋음.
- ```npm i axios```
- axios과정은 느리기때문에 로딩을 기다려야함. componentDidMount함수가 끝날때까지 Loading...
  - await: 비동기, 기다려야함을 알림. 함수는 ```async```
  
## map함수를 이용한 genres 가져오기
- react에서는 css를 위한 class를 className으로 써주는 것이 좋다.
- array가져오는 법
```html
<ul> 
  {genres.map (genre => 
  <li> {genre} </li>
  )} 
</ul>
```
- map function은 또 다른 argument(index)를 준다. (현재 item+ item number) -->key로 이용
```html
<ul> 
  {genres.map((genre, index) => 
  <li key={index}> {genre} </li> 
  )}
</ul>

## deploying to Github Pages
- cmd ```npm i gh-pages```
- package.json파일 수정
```json
"homepage":"https://깃허브아이디(소문자).github.io/repository이름"

//start, build 명령어 아래에 추가
"deploy" : "gh-pages -d build"
"predeploy" : "npm run build" 
//pre~~ 이름 같아야 pre가 이전에 저절로 실행됨.
```  
- cmd ```npm run deploy```
