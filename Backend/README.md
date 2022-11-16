# 1. 공통 과제 

git에 익숙해지기 위한 두 가지 Test가 진행될 예정입니다.

아래 설명을 잘 읽고 공통 시험과 각 분야 (F/B)별 시험을 진행해주세요.

각 테스트에 따른 제출 자료를 잘 읽고 답안 코드를 누락없이 제출해주세요.

제한 시간은 1시간입니다.

<br>
<br>

## 1-1. 개인 Gtihub Repository 생성 및 연동

**[Test 1]** 을 진행하기 위해 개인 Github 홈페이지로 이동 후 원격 repository를 생성해주세요.

repository 이름은 다음과 같이 설정해주세요.

```
  git-practice
```

clone 받은 해당 디렉토리를 본인 github의 `git-practice` 레포지토리에 연동해주세요.

<br>

## 1-2. Git command 정리

다음 `git command`에 대한 개념 정리 후 알고 있는 대로 `git-command.md` 파일을 작성하여 주세요.

양식은 자유롭습니다.

아래 내용에 얼마나 알고있는지 각자의 양식과 언어로 자유롭게 작성해주시면 됩니다.

- `git init`
- `git remote add origin <remote repository url>`
- `git add <file name>`
- `git commit`
- `git push origin <branch name>`
- `git pull origin <branch name>`
- `git merge <branch name>`

<br>
<br>

# 2. Backend Git test

이번에는 git 명령어를 실제로 적용해보고, conflict가 발생했을 때 이를 해결하는 과정을 익힐 수 있습니다.

아래 설명을 잘 읽고 시험을 진행해주세요.

<br>

## 2-1. feature/signup

1. main 브랜치에서 `feature/kimcode-signup` 브랜치를 생성해주세요.

2. `feature/kimcode-signup` 브랜치로 이동하여 아래 예시코드와 동일한 내용을 `app.js`에서 작업해주세요.

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
        ?,
        ?
      )
    `, [username, email, password])
})
```
<br>

## 2-2. feature/signin

1. main 브랜치로 이동 후 `feature/kimcode-signin` 브랜치를 생성해주세요.

2. `feature/kimcode-signin` 브랜치로 이동하여 아래 예시코드와 동일한 내용을 `app.js`에서 작업해주세요.

3. 위 작업이 완료되었으면 해당 브랜치를 `push`하여 `PR (pull request)`을 생성해주세요.

4. github 레포지토리로 이동 후 `feature/signup` PR을 main 브랜치로 병합해주세요.

5. `feature/signin` PR로 이동하여 해당 PR을 main 브랜치로 병합해주세요.

6. `conflict` 가 발생하였다면 conflict를 해결 후 main 브랜치로 병합해주세요.

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