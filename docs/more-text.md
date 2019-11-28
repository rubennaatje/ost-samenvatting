# More text

Lorem ipsum something something something.

**Bold text.** *Italic text.* __Underlined text__. [Masked link](/more-text.md). `Inline code`. [`Inline code with a link`](/more-text.md).

---

```js
class Memes {

	constructor(dank) {
		this.dank = dank;
	}

	get dank() {
		console.log('getting the meme dankness level');
		return this.dank;
	}

}

const memes = new Memes(true);

function yoyoyoyoyo() {
	return { yo: 'yo' };
}

if (!memes.dank) {
	process.exit();
}
else {
	console.log('your memes are dank af bro');
}
```

- One
- Two
- Three

1. A
2. B
3. C

# h1

## h2

### h3

#### h4

##### h5

###### h6


::: tip Ahhhhh
Theme components are subject to the same [browser API access restrictions](./markdown.md).
:::

::: warning Memes
Theme components are subject to the same [browser API access restrictions](./markdown.md).
:::

::: danger Memes
Theme components are subject to the same [browser API access restrictions](./markdown.md).
:::