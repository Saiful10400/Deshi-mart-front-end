import { Bold as BoldicIcon } from "lucide-react";
import { Heading1 as Headingxl } from "lucide-react";
import { Heading2 as Headingl } from "lucide-react";
import { Heading3 as Headings } from "lucide-react";
import {
  AlignCenter,
  AlignLeft,
  Italic as ItalicIcon,
  List,
  UnderlineIcon,
} from "lucide-react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Italic from "@tiptap/extension-italic";
import Heading from "@tiptap/extension-heading";
import { EditorContent, useEditor } from "@tiptap/react";
import "./css/textEditor.css";
import React, { useEffect } from "react";

const RichTextEditor = ({tittle,setterFn}:{tittle:string,setterFn:React.Dispatch<React.SetStateAction<string>>}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,

      Underline,
      Bold,
      Italic,
      Heading.configure({ levels: [1, 2, 3] }),
      BulletList,
      ListItem,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({ placeholder: "Write something …" }),
    ],
    
  });

useEffect(()=>{
 if(editor){
    setterFn(editor.getHTML())
 }   
})
  return (
    <div>
    <label htmlFor={tittle} className="text-start w-full">
    <span className="font-semibold text-lg">{tittle}</span>
      {editor && (
        <section className="border py-2  rounded-lg">
          <div>
            {/* buttons. */}
            <div className="flex items-center gap-3 mb-3 border-b border-black py-2 pl-2">
              <button type="button"
                className={` ${
                  editor?.isActive("italic")
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200"
                } p-1 rounded-md`}
                onClick={() => editor?.chain().focus().toggleItalic().run()}
              >
                <ItalicIcon />
              </button>

              <button type="button"
                className={`${
                  editor?.isActive("bold")
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200"
                } p-1 rounded-md`}
                onClick={() => editor.chain().focus().toggleBold().run()}
              >
                <BoldicIcon />
              </button>

              <button type="button"
                className={`${
                  editor?.isActive("underline")
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200"
                } p-1 rounded-md`}
                onClick={() => editor.chain().focus().toggleUnderline().run()}
              >
                <UnderlineIcon />
              </button>

              <button type="button"
                className={`${
                  editor.isActive("heading", { level: 1 })
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200"
                } p-1 rounded-md`}
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
              >
                <Headingxl />
              </button>
              <button type="button"
                className={`${
                  editor.isActive("heading", { level: 2 })
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200"
                } p-1 rounded-md`}
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
              >
                <Headingl />
              </button>

              <button type="button"
                className={`${
                  editor.isActive("heading", { level: 3 })
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200"
                } p-1 rounded-md`}
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
              >
                <Headings />
              </button>

              <button type="button"
                className={`${
                  editor.isActive({ textAlign: "left" })
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200"
                } p-1 rounded-md`}
                onClick={() =>
                  editor.chain().focus().setTextAlign("left").run()
                }
              >
                <AlignLeft />
              </button>

              <button type="button"
                className={`${
                  editor.isActive({ textAlign: "center" })
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200"
                } p-1 rounded-md`}
                onClick={() =>
                  editor.chain().focus().setTextAlign("center").run()
                }
              >
                <AlignCenter />
              </button>

              <button type="button"
                className={`${
                  editor.isActive("bulletList")
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200"
                } p-1 rounded-md`}
                onClick={() => editor.chain().focus().toggleBulletList().run()}
              >
                <List />
              </button>

             
            </div>

            <div>
              <EditorContent id={tittle} editor={editor} />
            </div>
          </div>
        </section>
      )}
      </label>
    </div>
  );
};

export default RichTextEditor;
