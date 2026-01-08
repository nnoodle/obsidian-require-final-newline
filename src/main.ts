import { Editor, MarkdownView, Plugin } from 'obsidian';

export default class RequireNewLinePlugin extends Plugin {
    onload() {
        this.registerEvent(this.app.workspace.on("editor-change", (editor: Editor, _info: MarkdownView) => {
            const ln = editor.lastLine()
            const line = editor.getLine(ln)
            if (line !== '') {
                const last = editor.getCursor()
                editor.setLine(ln, line+'\n')
                editor.setCursor(last)
            }
        }))
    }
}
