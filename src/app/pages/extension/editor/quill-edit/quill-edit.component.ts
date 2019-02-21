import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quill-edit',
  templateUrl: './quill-edit.component.html',
  styleUrls: ['./quill-edit.component.scss']
})
export class QuillEditComponent implements OnInit {
  public editor;
  public editorContent;
  public editorConfig = {
    placeholder: 'About Your Self'
  };
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.editorContent = this.editorContent;
      console.log('you can use the quill instance object to do something', this.editor);
      // this.editor.disable();
    }, 2800);
  }

  onEditorBlured(quill) {
    console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
    console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
    console.log('quill content is changed!', quill, html, text);
  }

}
