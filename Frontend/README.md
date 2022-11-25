# 시험 안내

git에 익숙해지기 위한 두 가지 Test가 진행될 예정입니다.

아래 설명을 잘 읽고 공통 시험과 각 분야 (F/B)별 시험을 진행해주세요.

각 테스트에 따른 제출 자료를 잘 읽고 답안을 누락없이 제출해주세요.

`commit 메시지`와 `branch 네이밍` convention을 잘 지켜주세요.

제한 시간은 1시간이며, 1번 시험은 반드시 제출해주시고 시간이 부족한 경우 2번 문제는 개인 별로 정리하는 시간을 가져주세요.

<br>
<br>

# 1. Frontend Git test

**[Test 1]** 을 진행하기 위해 개인 Github 홈페이지로 이동 후 원격 repository를 생성해주세요.

repository 이름은 다음과 같이 설정해주세요.

```
  git-practice
```

clone 받은 해당 디렉토리를 본인 github의 `git-practice` 레포지토리에 연동해주세요.

  - `wecode-git-test` 레포지토리를 클론해주세요.
   
    ```shell
        $ git clone https://github.com/wecode-bootcamp-korea/wecode-git-test.git
    ```
    
  - 터미널에서 클론 받은 레포지토리의 디렉토리 경로로 이동 후 remote 연결을 해제해주세요.
   
    ```shell
        $ git remote remove origin
    ```

  - 이후 개인 Github에 생성한 레포지토리의 주소로 remote를 다시 연동해주세요.
   
    ```shell
        $ git remote add origin https://github.com/GITHUB_USERNAME/git-practice.git
    ```
    
git 명령어를 실제로 적용해보고, conflict가 발생했을 때 이를 해결하는 과정을 익힐 수 있습니다.

아래 설명을 잘 읽고 시험을 진행해 주세요.

<br>

## 1-1. Install node modules

1. 터미널에서 `git-test`폴더로 진입해 주세요.

```
cd Frontend/git-test/
```

2. node modules를 설치해 주세요.

```
npm install
```

3.  `npm start`를 입력하시고 정상적으로 작동하는지 확인해 주세요.

<br>

## 1-2. feature/login

1. `Frontend/git-test/` 경로의 `main` 브랜치에서 `feature/login` 브랜치를 생성해 주세요.

2. `src` 폴더 안에 `pages` 폴더를 생성해 주시고 과제를 진행하기 위한 `Login` 폴더 및 파일들을 생성해 주세요.

```shell
src
 └── pages
       └── Login
             └── Login.js
             └── Login.css
```

3. `Login.js`에 아래의 코드를 입력해 주세요.

```javascript
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [userInfo, setUserInfo] = useState({ id: '', password: '' });
  const navigate = useNavigate();

  const getUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const isValid = userInfo.id.includes('@') && userInfo.password.length >= 5;

  const goToMain = (e) => {
    e.preventDefault();
    navigate('/main');
  };

  return (
    <div className="login">
      <main className="loginContainer">
        <h1 className="title">Git Test</h1>
        <form className="loginForm" onSubmit={goToMain}>
          <input
            className="userId"
            name="id"
            type="text"
            value={userInfo.id}
            placeholder="이메일을 입력해 주세요."
            onChange={getUserInfo}
          />
          <input
            className="userPassword"
            name="password"
            type="password"
            value={userInfo.password}
            placeholder="비밀번호를 입력해 주세요."
            onChange={getUserInfo}
          />
          <button className="loginButton" type="submit" disabled={!isValid}>
            로그인
          </button>
        </form>
      </main>
    </div>
  );
}
```

4. `Login.css`에 아래의 코드를 입력해 주세요.

```css
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loginContainer {
  padding: 30px;
  border: 1px solid gray;
  border-radius: 15px;
  text-align: center;
}

.title {
  font-size: 40px;
}

.loginForm {
  display: flex;
  flex-direction: column;
  margin: 40px 0;
}

.userId,
.userPassword {
  width: 280px;
  margin-bottom: 15px;
  padding: 15px 0 15px 15px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: #fafafa;
  outline: none;
}

.loginButton {
  padding: 15px 0;
  background-color: #0095f6;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 700;
  outline: none;
  cursor: default;
}

.loginButton:disabled {
  background-color: lightgray;
}
```

5. `Router.js`에서 `/`의 경로에 `Login` 컴포넌트가 보일 수 있도록 변경해 주세요.

```javascript
<Route path="/" element={<Login />} />
```

6. `npm start` 입력 후 아래와 같은 화면이 브라우저에 나오는지 확인해 주세요.

![git-test-1](https://user-images.githubusercontent.com/37888503/202239045-2757111e-0ee1-4045-910f-1890b1d0db73.gif)

7. 위 작업이 완료되었으면 해당 브랜치를 `push`하여 `PR (pull request)`을 생성해 주세요.  
   commit message 컨벤션을 따르고 있는지 다시 한번 확인해주세요!

<br>

## 1-3. feature/main

1. `Frontend/git-test/` 경로의 `main` 브랜치에서 `feature/main` 브랜치를 생성해 주세요.

2. `pages` 폴더 안에 과제를 진행하기 위한 `Main` 폴더 및 파일들을 생성해 주세요.

```shell
src
 └── pages
       └── Main
             └── Main.js
             └── Main.css
```

3. `Main`폴더를 생성해 주시고 폴더 안에 `Main.js`와 `Main.css` 파일을 생성해 주세요.

4. `Main.js`에 아래의 코드를 입력해 주세요.

```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

export default function Main() {
  return (
    <main className="main">
      <h1>Main</h1>
      <img className="image" src="images/code.avif" alt="메인 이미지" />
      <Link to="/">
        <button className="button">이전으로</button>
      </Link>
    </main>
  );
}
```

5. `Main.css`에 아래의 코드를 입력해 주세요.

```css
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.image {
  width: 400px;
  border-radius: 15px;
  margin-bottom: 25px;
}

.button {
  width: 200px;
  height: 40px;
  background-color: #fafafa;
  border: 1px solid gray;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
}

.button:hover {
  border: 1px solid #0095f6;
  color: #fafafa;
  background-color: #0095f6;
}
```

6. `Router.js`에서 `url` 주소를 `/main`으로 설정하시고 `Main` 컴포넌트를 연결해 주세요.

```javascript
<Route path="/main" element={<Main />} />
```

7. `npm start` 입력 후 아래와 같은 화면이 브라우저에 나오는지 확인해 주세요.

![git-test-2](https://user-images.githubusercontent.com/37888503/202240758-dffad4ae-aaa3-48d5-af7f-28366dc56181.gif)

8. 위 작업이 완료되었으면 해당 브랜치를 `push`하여 `PR (pull request)`을 생성해 주세요.  
   commit message 컨벤션을 따르고 있는지 다시 한번 확인해주세요!

9. `과제 : 아래와 같이 PR 2개가 등록 된 브라우저의 화면을 캡쳐하여 구글 클래스룸에 업로드 해주세요.`

![git-test-1](https://user-images.githubusercontent.com/37888503/202905344-351d4f73-9947-4bf6-80ea-705f4bab2a43.png)

<br>

## 1-4. merge Login PR

1. github 레포지토리로 이동 후 `feature/login` PR을 `merge`해 주세요.

2. `과제 : 아래와 같이 github의 feature/main관련 PR에서 Conflict가 발생한 화면을 캡쳐하여 구글 클래스룸에 업로드 해주세요.`

![git-test-2](https://user-images.githubusercontent.com/37888503/202905200-93179daf-b70d-450d-9def-5f9777cf0b38.png)

<br>

## 1-5. Resolving conflicts

1. `main` 또는 `master` 브랜치에서 `pull`을 실행해 주세요.

2. `feature/main` 브랜치로 이동 후 `merge`를 해주세요.

3. `conflict`가 발생하였다면 `conflict`를 해결해 주시고 `push`해 주세요.

4. `과제 : 아래와 같이 github에서 feature/main관련 PR에서 Conflict가 해결된 화면을 캡쳐하여 구글 클래스룸에 업로드 해주세요.`

![git-test-3](https://user-images.githubusercontent.com/37888503/202905196-5acb5e11-0ba9-4677-9d39-d97f999752e9.png)

<br>
<br>

# 2. Git command 정리

다음 `git command`에 대한 개념 정리 후 알고 있는 대로 `git-test/READE.md` 파일을 작성하여 주세요.

양식은 자유롭습니다.

아래 내용에 얼마나 알고있는지 각자의 양식과 언어로 자유롭게 작성해주시면 됩니다.

- `git init`
- `git remote add origin <remote repository url>`
- `git add <file name>`
- `git commit`
- `git push origin <branch name>`
- `git pull origin <branch name>`
- `git merge <branch name>`
