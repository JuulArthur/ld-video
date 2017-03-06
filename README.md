# ld-video
Video plugin for [last-draft](http://lastdraft.vace.nz)

[![npm version](https://badge.fury.io/js/ld-video.svg)](https://badge.fury.io/js/ld-video)

# Install
```jsx
npm install ld-video --save
```

# Use
```jsx
import {Editor} from 'last-draft'
import video from 'ld-video'
let plugins = [video]

export default class ExampleEditor extends Component {
  constructor(props) {
    super(props)
    const INITIAL_STATE = editorStateFromHtml('<div></div>')
    this.state = { value: INITIAL_STATE }
  }

  onChange(editorState) {
    this.setState({ value: editorState })
  }

  render() {
    return (
      <Editor
        inline={['bold', 'italic', 'code', 'dropcap']}
        blocks={['h2', 'quote']}
        plugins={plugins}
        editorState={this.state.value}
        onChange={::this.onChange} />
    )
  }
}

```

## Styles

Last Draft plugins use styled-components 💅 for the base styling.

## Custom Styles with CSS

You can also add custom css to override the base styling with the following class names specified below:

```css
.ld-block-wrapper {}
.ld-block {}
.ld-block-actions-wrapper {}
.ld-block-actions {}
.ld-block-action {}
.ld-block-content {}
.ld-block-input-wrapper {}
.ld-block-input {}
.ld-video-block-wrapper {}
.ld-video-block {}
.ld-video-block-button {}
```
