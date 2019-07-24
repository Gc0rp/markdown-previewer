const defaultMarkdownCode = `# Welcome to my React Markdown Previewer!

## This is a sub-heading... 
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.google.com), and
> Block Quotes!
  

  - And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

  1. And there are numbererd lists too.
  1. Use just 1s if you want! 
  1. But the list goes on...


  ![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export default defaultMarkdownCode;