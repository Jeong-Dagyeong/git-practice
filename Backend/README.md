# 시험 안내 

git에 익숙해지기 위한 두 가지 Test가 진행될 예정입니다.

아래 설명을 잘 읽고 공통 시험과 각 분야 (F/B)별 시험을 진행해주세요.

각 테스트에 따른 제출 자료를 잘 읽고 답안을 누락없이 제출해주세요.

`commit 메시지`와 `branch 네이밍` convention을 잘 지켜주세요.

제한 시간은 1시간이며, 1번 시험은 반드시 제출해주시고 시간이 부족한 경우 2번 문제는 개인 별로 정리하는 시간을 가져주세요.

<br>
<br>

# 1.Backend Git test

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
    
git 명령어를 실제로 적용해보고, conflict가 발생했을 때 이를 해결해보겠습니다.

아래 설명을 잘 읽고 시험을 진행해주세요.

<br>

## 1-1. git remote 변경

해당 레포지토리를 클론 받은 후 개인 github에서 `git-practice`라는 이름으로 레포지토리를 생성해주세요.

이후 git remote 연동을 개인 레포지토리 주소로 수정해주세요.

다음 단계부터는 개인 github 레포지토리에 push 해주세요.

<br>

## 1-2. feature/signup

1. main 브랜치에서 `feature/signup` 브랜치를 생성해주세요.

2. `feature/signup` 브랜치로 이동하여 아래 예시코드와 동일한 내용을 `app.js`에서 작업해주세요.

3. 위 작업이 완료되었으면 해당 브랜치를 `push`하여 `PR (pull request)`을 생성해주세요.  
commit message 컨벤션을 따르고 있는지 다시 한번 확인해주세요!

예시 코드)

```javascript
app.post('/users/signup', async (req, res) => {
  const { username, email, password } = req.body
    return await myDataSource.query(`
      INSERT INTO
        users (
          username,
          email,
          password			
        )
      VALUES (
        ?,
        ?,
        ?
      )
    `, [username, email, password])
})
```
<br>

## 1-3. feature/signin

1. main 브랜치로 이동 후 `feature/kimcode-signin` 브랜치를 생성해주세요.

2. `feature/signin` 브랜치로 이동하여 아래 예시코드와 동일한 내용을 `app.js`에서 작업해주세요.

예시 코드)
```javascript
app.post('/users/signin', async (req, res) => {
  const { email, password } = req.body;
  const user = await myDataSource.query(`
    SELECT
      users.id
    FROM
      users
    WHERE
      users.email = ?
   `, [email]);
	
  if (!user) {
    res.json({message: "SIGNUP_REQUIRED"});
  }
	
  return res.json({ userId: user.id});
})
```

3. `과제 : 아래와 같이 PR 2개가 등록 된 브라우저의 화면을 캡쳐하여 구글 클래스룸에 업로드 해주세요.` 

![back-1](https://user-images.githubusercontent.com/93123657/203455693-81b944cc-7f92-47ba-a4d1-5ffeefc02f45.png)

<br>

## 1-4. Merge sign-up feature PR 

1. github 레포지토리로 이동 후 `feature/signup` PR을 `merge`해 주세요.

2. `과제 : 아래와 같이 github의 feature/singin 관련 PR에서 Conflict가 발생한 화면을 캡쳐하여 구글 클래스룸에 업로드 해주세요.`

![back-2](https://user-images.githubusercontent.com/93123657/203455709-da3fdad1-9538-4335-8fd8-36d968fc32c8.png)

<br>

## 1-5. Resolving conflicts

1. `main` 브랜치에서 `pull`을 실행해 주세요.

2. `feature/signin` 브랜치로 이동 후 main 브랜치를 `merge`를 해주세요.

3. `conflict`가 발생하였다면 `conflict`를 해결해 주시고 `push`해 주세요.

4. `과제 : 아래와 같이 github에서 feature/signin 관련 PR에서 Conflict가 해결된 화면을 캡쳐하여 구글 클래스룸에 업로드 해주세요.`

![back-3](https://user-images.githubusercontent.com/93123657/203455788-11e71d2d-aa13-4ddd-a197-8658308675ee.png)


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
