const defaultMarkdownCode = `<h1> Welcome to my React Markdown Previewer! </h1>

<h2> This is a sub-heading... </h2>
<h3> And here's some other cool stuff:</h3>

Heres some code, \`<div></div>\`, between 2 backticks.

<p>this is multi-line code:</p>
<code>
function anotherExample(firstLine, lastLine) {
  if (firstLine == '' && lastLine == '') {
    return multiLineCode;
  }
}
</code>

<p> You can also make text <b>bold</b>... whoa!</p>
<p> Or <i>_italic_</i> </p>
<p> Or... wait for it... <b><i>_both!_</i></b>
<p> And feel free to go crazy <del>crossing stuff out</del>.<p>
<p>There's also <a href="https://www.freecodecamp.com">(https://www.freecodecamp.com)</a>, and
</p>

<blockquote cite="">
Block Quotes!
</blockquote>

<p>And if you want to get really crazy, even tables:</p>

`;
  









// Wild Header | Crazy Header | Another Header?
// ------------ | ------------- | ------------- 
// Your content can | be here, and it | can be here....
// And here. | Okay. | I think we get it.

// - And of course there are lists.
//   - Some are bulleted.
//      - With different indentation levels.
//         - That look like this.


// 1. And there are numbererd lists too.
// 1. Use just 1s if you want! 
// 1. But the list goes on...
// - Even if you use dashes or asterisks.
// * And last but not least, let's not forget embedded images:



export default defaultMarkdownCode;