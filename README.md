# dropdown-web

Dropdown 회사 사이트 (https://www.dropdown.xyz). Next.js 로 만들었고, `main` 에 푸시하면 Vercel 이 프로덕션으로 배포한다.

```bash
npm install
npm run dev
```

## Games

게임은 각자 자기 사이트와 저장소를 갖고, 이 사이트는 `www.dropdown.xyz/game/<이름>` 주소로 이어 주기만 한다.
게임 하나는 `games/<이름>.ts` 파일 하나다. 파일 이름이 곧 주소의 `<이름>` 이다.

### 규칙

- **새 게임은 `games/` 에 파일 하나만 추가한다.** 다른 파일은 고치지 않는다
- **자기 게임 파일만 고친다.** 다른 게임의 파일은 건드리지 않는다
- 게임 목록을 모아 둔 파일은 없다. `games/` 폴더의 `.ts` 파일을 자동으로 읽는다. 그래서 `games/` 에는 게임 파일만 둔다

여러 게임 작업이 같은 파일을 동시에 고치다 충돌이 난 적이 있어서 (2026-11-19) 이렇게 나눴다.

### 게임 파일에 적는 것

`games/dear.ts` 를 복사해서 시작하면 된다. 항목의 뜻은 `lib/game.ts` 의 `GameFile` 에 적혀 있다.

| 항목 | 쓰이는 곳 |
|---|---|
| `origin` | 게임 사이트 주소. `/game/<이름>` 과 그 아래 주소가 전부 여기로 넘어간다 |
| `langs` | 언어별 경로. 하나하나가 `/sitemap.xml` 에 실린다 |
| `card` | 홈 화면 제품 목록의 카드 제목, 한 줄 설명, 아이콘 이름 |
| `footerLabel` | 푸터의 게임 링크 이름 |
| `llms` | `/llms.txt` 의 게임 한 줄. 게임 사이트의 `llms.txt` 링크는 자동으로 붙는다 |
| `order` | 카드, 푸터, `llms.txt` 에서의 순서. 작은 수가 먼저다. 새 게임은 지금 가장 큰 수에 1 을 더한다 |

### 파일 하나로 바뀌는 것

| 결과 | 만드는 코드 |
|---|---|
| `/game/<이름>` 넘김 규칙 | `next.config.ts` |
| `/sitemap.xml` | `app/sitemap.ts` |
| 제품 목록의 게임 카드 | `components/sections/InsideDropdown.tsx` |
| 푸터의 게임 링크 | `components/sections/Footer.tsx` |
| `/llms.txt` | `app/llms.txt/route.ts` |

### 예외

카드에 새 아이콘을 쓰려면 `lib/game.ts` 의 `GameIconName` 과 `lib/game-icons.tsx` 에 한 줄씩 더한다. 지금 쓸 수 있는 아이콘은 `Sprout`, `Gamepad2` 다.

### 확인

```bash
npm run build
```

빌드가 통과하면 `.next/server/app/sitemap.xml.body` 와 `.next/server/app/llms.txt.body` 에서 결과를 볼 수 있다.
