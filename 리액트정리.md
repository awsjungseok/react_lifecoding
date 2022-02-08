# 8. CSS 코딩하는 법

* index css 지우기
* app 컴포넌트 css 지우기

# 9. 배포하는 법

* empty cache and hard reload

* 네트워크 메모리 보는 법

* 빌드

* 배포

  * serve 설치(-g)
  * doc root 
  * 배포 시 네트워크 메모리 차이 비교

  > Q.
  >
  > 1. npm vs npx
  >    * serve 시 npm이 아닌 npx로
  > 2. serve 설치란?
  > 3. -s
  >    build를 doc root로 하겠다. 

# 10. 리액트가 없다면

* public > pure.html
  1. h1 WEB
  2. world wide web!
  3. h1 ~ contents1 : header로 감싸기
  4. ul > li > a href=1.html, 2. css, 3. js
  5. ul : nav로 감싸기
  6. h2 HTML
  7. HTML is HyperText Markup Language.
  8. h2 ~ contents2 : article로 감싸기

# 11.1. 컴포넌트 만들기 1

* App.js > logo.svg 삭제
* Subject 컴포넌트 만들기
  * pure.html의 header
* App 컴포넌트 > Subject 컴포넌트

> * jsx

 21:30

# 11.2. 컴포넌트 만들기 2

* TOC 컴포넌트
  * nav
* Content 컴포넌트
  * article
* App 컴포넌트 > 
  * TOC 컴포넌트
  * Content 컴포넌트

# 12. props

* App 컴포넌트 >
  * Subject 컴포넌트 > title > WEB, sub > world wide web! 속성
    * Subject 컴포넌트에서 속성값 출력하도록 클래스 변경
  * Content 컴포넌트 > title > HTML, desc > HTML is HyperText Markup Language. 

# 13. React Developer Tools

20:20

* react doc., 질문, 검색
* React Developer Tools 설치
* 개발자도구를 통해 컴포넌트, props 상태 확인

# 14. Component 파일로 분리하기

* src > components
  * TOC.js > class TOC extends Component 복붙
  * Content.js > class Content extends Component 복붙
  * Subject.js > class Subject extends Component 복붙
* App.js 에서 위 3개의 컴포넌트 불러오기

# 15.1. State 소개

# 15.2. State 사용

* App.js > class App > constructor 생성
  * state 생성
    * subject
      * title : WEB
      * sub : World Wide Web!
* Subject 컴포넌트를 통해 state > subject > title, sub 출력
* 찾아볼것
  * super
  * this가 가리키는 것

# 15.3. key

* state 작성
  * subject(ob)
    * title : WEB
    * sub : World Wide Web!
  * contents(arr)
    * ob
      * id : 1
      * title : HTML
      * desc : HTML is for information
    * ob
      * id : 2
      * title : CSS
      * desc : CSS is for design
    * ob
      * id : 3
      * title : JS
      * desc : JS is for interactive 

* TOC > data에 state > contents 주입
* TOC.js > class TOC
  * for문을 통해 li > a tag에 App 컴포넌트로부터 받은 contents 값 출력
    * var lists = li(key = data[i].id) > a(href = "/content/" + data[i].id, 내용 = data[i].title)
    * var data = props > data

* class App은 state를 통해 초기화하였고 자식 컴포넌트에 전달 시 props를 사용한다.

# 16.1. 이벤트 state props & render 함수

* state

  * +mode : 'welcome'
  * +welcome : {title : 'Welcome', desc : 'Hi!'}

* 상태값에 따라 랜더링 적용

  * var _title, _desc = null

  * mode가 'welcome'인 경우
    * _title, _desc에 state > welcome > title, desc 값 주입
  * mode가 'read'인 경우
    * _title, _desc에 contents[0].title, desc 값 주입
  * Content 컴포넌트 title, desc에 _title, _desc 적용

# 16.2. 이벤트 설치

* 링크 클릭 시 state 바꾸기
  1. Subject.js의 헤더태그 App.js로 복붙
  2. props를 state로 바꾸기
  3. 헤더 클릭 시 경고창 띄우기
  4. 콘솔로 이벤트 출력
  5. e.preventDefault()
     * 리로드 안되게끔
* 리액트에서의 함수는 첫번재 매개변수의 값으로 이벤트 객체를 주입해주기로 약속되어있다.
* debugger

# 16.3. 이벤트에서 state 변경하기

* 함수를 통해 state를 'welcome'으로 바꾸기

  * 타입에러 : cannot read property 'state' of defined
    * this

* setState()

  ```react
  setState({
      state: '...'
  })
  ```

# 16.4 이벤트 bind 함수 이해하기

* 콘솔로 this 출력
  * function 밖
  * function 안
  * function 안 + bind(this)

* obj 객체 생성
  * 프로퍼티
    * name : 'egoing'

* bindTest() 함수 생성
  * 콘솔로 obj객체의 name 출력(this를 통해)
  * bindTest2 함수 생성 : bindTest 함수와 obj 함수를 bind()함수로 묶기

# 16.5 이벤트 setState 함수 이해하기

# 17.1. 컴포넌트 이벤트 만들기1

  * Subject 컴포넌트에 onChangePage 함수 설치
    * App 객체에 bind
    * alert('Hi!')
    * setState - mode : 'welcome'
  * 설치한 함수를 Subject 컴포넌트에서 props로 받아서 실행
    * onClick 시 함수 실행.
      * Subject 객체에 bind
      * preventDefault()
      * props로 onChangePage() 함수를 받아서 실행

# 17.2. 컴포넌트 이벤트 만들기2

* TOC 각각 링크 클릭 시
  * state : "read"로 변경
  * 각각의 내용에 맞추어 Content 변경
* ?
  * e.preventDefault()

# 17.3. 컴포넌트 이벤트 만들기3

* TOC 각각 링크 클릭 시 Contents의 title과 desc를 해당 내용으로 변경
  1. state.selected_content_id : null
  2. TOC에 props로 넘긴 content[].id에 i값 넣기
  3. TOC에 props로 넘긴 onChangePage 함수의 인자값으로 id값 넣기
  4. 받은 인자값을 setState()로 selected_content_id 값 변경

* 코드

  * App.js

    ```react
    import { Component } from 'react';
    import './App.css';
    import TOC from './Components/TOC'
    import Content from './Components/Content'
    import Subject from './Components/Subject'
    
    class App extends Component {
      constructor(props) {
        super(props)
        this.state = {
          mode : 'welcome',
          welcome : { title : 'Welcome', desc : 'Hi!' },
          subject : {
            title : 'WEB',
            sub : 'World Wide Web!'
          },
          contents : [
            {id : null, title : "HTML", desc :"HTML HTML"},
            {id : null, title : "CSS", desc :"CSS CSS"},
            {id : null, title : "JS", desc : "JS JS"}
          ],
          selected_content_id : null
        }
      }
      render() {
        var _title, _desc = null
        if (this.state.mode === 'welcome') {
          _title = this.state.welcome.title
          _desc = this.state.welcome.desc
        } else if (this.state.mode === 'read') {
          for(let i = 0; i < this.state.contents.length; i++) {
            if(this.state.contents[i].id === this.state.selected_content_id) {
              _title = this.state.contents[i].title
              _desc = this.state.contents[i].desc
            }
          }
        }
        return (
          <div className="App">
            <Subject title={this.state.subject.title} onChangePage={function() {
              this.setState({mode:'welcome'})
            }.bind(this)}>{this.state.subject.sub}</Subject>
            <TOC data={this.state.contents} onChangePage={function(id) {
              this.setState({
                mode:'read',
                selected_content_id : id
              })
            }.bind(this)}></TOC>
            <Content title={_title} desc={_desc}></Content>
          </div>
        )
      }
    }
    
    export default App;
    ```

  * TOC.js

    ```react
    import { Component } from "react";
    
    class TOC extends Component {
        render() {
            var lists = []
            var data = this.props.data
            for(let i=0; i<data.length; i++) {
                data[i].id = i
                lists.push(
                    <li key={data[i].id}>
                        <a href={"/content/" + data[i].id} onClick={function(e) {
                            this.props.onChangePage(data[i].id)
                            e.preventDefault()
                        }.bind(this)}>
                            {data[i].title}
                        </a>
                    </li>
                )
            }
            return(
                <nav>
                    <ul>
                        {lists}
                    </ul>
                </nav>
            )
        }
    }
    
    export default TOC
    ```

* cf

  * DOM 속성을 이용한 방법

    * TOC.js

      ```react
      <a href={"/content/" + data[i].id} data-id={data[i].id} onClick={function(e) {
                              this.props.onChangePage(Number(e.target.dataset.id))
                              console.log(e.target.dataset.id)
                              e.preventDefault()
                          }.bind(this)}>
                              {data[i].title}
                          </a>
      ```

  * bind() 속성을 이용한 방법

    * TOC.js

      ```react
      <a href={"/content/" + data[i].id} data-id={data[i].id} onClick={function(id, e) {
                              this.props.onChangePage(id)
                              console.log(e.target.dataset.id)
                              e.preventDefault()
                          }.bind(this, data[i].id)}>
                              {data[i].title}
                          </a>
      ```

# 18. 베이스캠프

* cf
  * props vs state
  * redux

# 19.1. create 구현 : 소개

# 19.2. create 구현 : mode 변경 기능

* Control 컴포넌트 생성

  * create, update, delete
    * ul > li > a
    * href = /'해당 기능 이름'

  * onChangeMode 핸들러 생성
    * create, update, delete 모두에게 핸들러 적용
    * 클릭 시 핸들러가 호출되어 모드가 바뀌도록

* 코드

  * App.js

    ```react
    import { Component } from 'react';
    import './App.css';
    import TOC from './Components/TOC'
    import Content from './Components/Content'
    import Subject from './Components/Subject'
    import Control from './Components/Control'
    
    class App extends Component {
      constructor(props) {
        super(props)
        this.state = {
          mode : 'welcome',
          welcome : { title : 'Welcome', desc : 'Hi!' },
          subject : {
            title : 'WEB',
            sub : 'World Wide Web!'
          },
          contents : [
            {id : null, title : "HTML", desc :"HTML HTML"},
            {id : null, title : "CSS", desc :"CSS CSS"},
            {id : null, title : "JS", desc : "JS JS"}
          ],
          selected_content_id : null
        }
      }
      render() {
        var _title, _desc = null
        if (this.state.mode === 'welcome') {
          _title = this.state.welcome.title
          _desc = this.state.welcome.desc
        } else if (this.state.mode === 'read') {
          for(let i = 0; i < this.state.contents.length; i++) {
            if(this.state.contents[i].id === this.state.selected_content_id) {
              _title = this.state.contents[i].title
              _desc = this.state.contents[i].desc
            }
          }
        }
        return (
          <div className="App">
            <Subject title={this.state.subject.title} onChangePage={function() {
              this.setState({mode:'welcome'})
            }.bind(this)}>{this.state.subject.sub}</Subject>
            <TOC data={this.state.contents} onChangePage={function(id) {
              this.setState({
                mode:'read',
                selected_content_id : id
              })
              console.log(this.state.selected_content_id)
            }.bind(this)}></TOC>
            <Control onChangeMode={function(_mode){
              this.setState({mode : _mode})
            }.bind(this)}></Control>
            <Content title={_title} desc={_desc}></Content>
          </div>
        )
      }
    }
    
    export default App;
    
    ```

  * Control.js

    ```react
    import {Component} from "react"
    
    class Control extends Component {
        render() {
          return (
            <ul>
              <li><a href="/create" onClick={function(e) {
                e.preventDefault()
                this.props.onChangeMode('create')
              }.bind(this)}>create</a></li>
              <li><a href="/update" onClick={function(e) {
                e.preventDefault()
                this.props.onChangeMode('update')
              }.bind(this)}>update</a></li>
              <li><input type="button" value="delete" onClick={function(e) {
                e.preventDefault()
                this.props.onChangeMode('delete')
              }.bind(this)}></input></li>
            </ul>
          )
        }
    }
    
    export default Control
    ```

# 19.3. create 구현 : mode 전환 기능

* Content 컴포넌트 이름 변경

  : Content → ReadContent

* CreateContent 컴포넌트 생성

* 변수 _article 생성, mode가 welcome, read일 시 _article = ReadContent 컴포넌트

* ReadContent 출력은 콧수염으로

* mode가 'create'일 시 CreateContent 출력

# 19.4. create 구현 : form

* CreateContent 컴포넌트 form 구현
  * form
    * att
      * action : /create_process
      * method : post
      * onSubmit
        * preventDefault
        * alert("submit!!!!!")
    * input
      * type : text
      * name : title
      * placeholder : title
    * textarea
      * name : desc
      * placeholder : description
    * input
      * type : submit

# 19.5. create 구현 : onSubmit 이벤트

CreateContent 컴포넌트의 Submit 버튼이 클릭되었을 때 이벤트 객체로 데이터를 받아서 contents arr에 항목 추가하기

* App 객체

  * CreateContent 컴포넌트 

    * submitData
      * att
        * _title
        * _desc

    * debugger를 통하여 이벤트 객체의 onSubmit value값 확인

* 코드

  * App.js

    ```react
    import { Component } from 'react';
    import './App.css';
    import TOC from './Components/TOC'
    import ReadContent from './Components/ReadContent'
    import CreateContent from './Components/CreateContent'
    import Subject from './Components/Subject'
    import Control from './Components/Control'
    
    class App extends Component {
      constructor(props) {
        super(props)
        this.state = {
          mode : 'welcome',
          welcome : { title : 'Welcome', desc : 'Hi!' },
          subject : {
            title : 'WEB',
            sub : 'World Wide Web!'
          },
          contents : [
            {id : null, title : "HTML", desc :"HTML HTML"},
            {id : null, title : "CSS", desc :"CSS CSS"},
            {id : null, title : "JS", desc : "JS JS"}
          ],
          selected_content_id : null
        }
      }
      render() {
        var _title, _desc = null
        var _article = null
        if (this.state.mode === 'welcome') {
          _title = this.state.welcome.title
          _desc = this.state.welcome.desc
          _article = <ReadContent title={_title} desc={_desc}></ReadContent>
        } else if (this.state.mode === 'read') {
          for(let i = 0; i < this.state.contents.length; i++) {
            if(this.state.contents[i].id === this.state.selected_content_id) {
              _title = this.state.contents[i].title
              _desc = this.state.contents[i].desc
            }
          }
          _article = <ReadContent title={_title} desc={_desc}></ReadContent>
        } else if (this.state.mode === 'create') {
          _article = <CreateContent getSubmitData={function(_title, _desc) {
            this.state.contents.push({id : this.state.contents.length, title : _title, desc : _desc})
            this.setState({
              contents : this.state.contents
            })
          }.bind(this)}></CreateContent>
        }
        return (
          <div className="App">
            <Subject title={this.state.subject.title} onChangePage={function() {
              this.setState({mode:'welcome'})
            }.bind(this)}>{this.state.subject.sub}</Subject>
            <TOC data={this.state.contents} onChangePage={function(id) {
              this.setState({
                mode:'read',
                selected_content_id : id
              })
              console.log(this.state.selected_content_id)
            }.bind(this)}></TOC>
            <Control onChangeMode={function(_mode){
              this.setState({mode : _mode})
            }.bind(this)}></Control>
            {_article}
          </div>
        )
      }
    }
    
    export default App;
    ```

  * CreateContent.js

    ```react
    import { Component } from "react"
    
    class CreateContent extends Component {
        render() {
          return (
            <article>
              <h2>CreateContent</h2>
                <form action="/create_process" method="post" onSubmit={function(e) {
                  e.preventDefault()
                  this.props.getSubmitData(
                    e.target.title.value,
                    e.target.desc.value
                  )
                  alert("Submit!!!")
                }.bind(this)}>
                  <p>
                    <input type="text" name="title" placeholder="title"></input>
                  </p>
                  <p>
                    <textarea name="desc" placeholder="description"></textarea>
                  </p>
                  <p>
                    <input type="submit"></input>
                  </p>
                </form>
            </article>
          )
        }
    }
    
    export default CreateContent
    ```

# 19.6. create 구현 : contents 변경

contents 변경 : 위에서 이미 함

push를 concat으로 바꾸기

* 코드

  * App.js

    ```react
    ...
          _article = <CreateContent getSubmitData={function(_title, _desc) {
            var _contents = this.state.contents.concat({
              id : this.state.contents.length, 
              title : _title, 
              desc : _desc
            })
            this.setState({
              contents : _contents
            })
          }.bind(this)}></CreateContent>
    ...
    ```

    * concat과 push 차이
    
      * concat
    
        ```js
        var arr1 = [1, 2]
        var arr2 = arr1.concat(3)
        ```
    
        복제 후 변경
    
      * push
    
        ```js
        var arr1 = [1, 2]
        var arr2 = arr1.push(3)
        ```
    
        원본에 추가

# 19.7. shouldComponentUpdate

성능 향상. Component의 props, state가 변경되었을 시에만 동작되도록 하는 메서드

* 코드

  * TOC.js

    ```react
    ...
            console.log('shouldComponentUpdate')
            return (JSON.stringify(this.props.data) != JSON.stringify(newProps.data))
        }
        render() {
            console.log('ComponentUpdate')
    ...
    ```

# 19.8. create 구현 : immutable

* Array.from(a)

  ```js
  var a = [1, 2]
  var b = Array.from(a)
  console.log(a, b)
  console.log(a === b)
  ```

  결과는 같지만 a와 b는 다른 객체이다.

* Object.assign(a)

  ```js
  var a = {name : 'ojs'}
  var b = Object.assign({}, a)
  console.log(a, b, a === b)
  ```

  Array와 마찬가지로 Object도 같은 기능을 수행하는 메서드가 있다. 결과는 같지만 a와 b는 전혀 다른 객체이다.

* Immutable.js

  Immutable.js는 List, Stack, Map, OrderedMap, Set, OrderedSet, Record와 같은 영구 불변(Permit Immutable) 데이터 구조를 제공한다.

  npm을 사용하여 Immutable.js를 설치한다.

  ```bash
  npm install immutable
  ```

  Immutable.js의 Map 모듈을 임포트하여 사용한다.

  ```js
  const {Map} = require('immutable')
  const map1 = Map({a:1, b:2, c:3})
  const map2 = map1.set('b', 50)
  map1.get('b') // 2
  map2.get('b') // 50
  ```

  map1.set('b', 50)의 실행에도 불구하고 map1은 불변하였다. map1.set()은 결과를 반영한 새로운 객체를 반환한다.

# 20.1. update 구현

update 기능 구현

* 예상 구현 목록

* 구현 순서
  1. UpdateContent 컴포넌트 생성
     * mode에 update 추가
     * _article else if 문
       * UpdateContent 추가
       * getContent() 메서드로 묶기
       * getContent()를 _article로 사용
  
* 코드

  * App.js

    ```react
    import { Component } from 'react';
    import './App.css';
    import TOC from './Components/TOC'
    import ReadContent from './Components/ReadContent'
    import CreateContent from './Components/CreateContent'
    import UpdateContent from './Components/UpdateContent';
    import Subject from './Components/Subject'
    import Control from './Components/Control'
    
    class App extends Component {
      constructor(props) {
        super(props)
        this.state = {
          mode : 'welcome',
          welcome : { title : 'Welcome', desc : 'Hi!' },
          subject : {
            title : 'WEB',
            sub : 'World Wide Web!'
          },
          contents : [
            {id : null, title : "HTML", desc :"HTML HTML"},
            {id : null, title : "CSS", desc :"CSS CSS"},
            {id : null, title : "JS", desc : "JS JS"}
          ],
          selected_content_id : null
        }
      }
      getContent() {
        var _title, _desc = null
        var _article = null
        if (this.state.mode === 'welcome') {
          _title = this.state.welcome.title
          _desc = this.state.welcome.desc
          _article = <ReadContent title={_title} desc={_desc}></ReadContent>
        } else if (this.state.mode === 'read') {
          for(let i = 0; i < this.state.contents.length; i++) {
            if(this.state.contents[i].id === this.state.selected_content_id) {
              _title = this.state.contents[i].title
              _desc = this.state.contents[i].desc
            }
          }
          _article = <ReadContent title={_title} desc={_desc}></ReadContent>
        } else if (this.state.mode === 'create') {
          _article = <CreateContent getSubmitData={function(_title, _desc) {
            var _contents = this.state.contents.concat({
              id : this.state.contents.length, 
              title : _title, 
              desc : _desc
            })
            this.setState({
              contents : _contents
            })
          }.bind(this)}></CreateContent>
        } else if (this.state.mode === 'update') {
          _article = <UpdateContent getSubmitData={function(_title, _desc) {
            var _contents = this.state.contents.concat({
              id : this.state.contents.length, 
              title : _title, 
              desc : _desc
            })
            this.setState({
              contents : _contents
            })
          }.bind(this)}></UpdateContent>
        }
        return _article
      }
      render() {
        return (
          <div className="App">
            <Subject title={this.state.subject.title} onChangePage={function() {
              this.setState({mode:'welcome'})
            }.bind(this)}>{this.state.subject.sub}</Subject>
            <TOC data={this.state.contents} onChangePage={function(id) {
              this.setState({
                mode:'read',
                selected_content_id : id
              })
              console.log(this.state.selected_content_id)
            }.bind(this)}></TOC>
            <Control onChangeMode={function(_mode){
              this.setState({mode : _mode})
            }.bind(this)}></Control>
            {this.getContent()}
          </div>
        )
      }
    }
    
    export default App;
    ```

# 20.2. update 구현 : form

* 도입

  * UpdateContent.js 수정

    * input 태그 value att 추가

      ```react
      ...
                    <p>
                      <input type="text" name="title" placeholder="title" value={this.props.data.title}></input>
                    </p>
      ...
      ```

  * 이후 실행 결과
    ![image-20220207195122927](C:\Users\jungs\AppData\Roaming\Typora\typora-user-images\image-20220207195122927.png)

    props로 받은 데이터를 value로 사용하면 onChange 핸들러를 사용하지 않을 경우 read-only이다.
