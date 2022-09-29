import 'tippy.js/animations/scale.css'
import 'tippy.js/dist/tippy.css'
import { FormatBold } from '@styled-icons/material/FormatBold'
import { FormatItalic } from '@styled-icons/material/FormatItalic'
import { FormatListBulleted } from '@styled-icons/material/FormatListBulleted'
import { FormatListNumbered } from '@styled-icons/material/FormatListNumbered'
import { FormatUnderlined } from '@styled-icons/material/FormatUnderlined'

import {
  getPluginType,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
  ListToolbarButton,
  MarkToolbarButton,
    usePlateEditorRef,
} from '@udecode/plate'

export const ListToolbarButtons = () => {
  const editor = usePlateEditorRef()!

  return (
    <>
        <ListToolbarButton
            type={getPluginType(editor, 'ul-a')}
            icon={<FormatListBulleted />}
        />
        <ListToolbarButton
            type={getPluginType(editor, 'ol-a')}
            icon={<FormatListNumbered />}
        />
    </>
  )
}

export const BasicMarkToolbarButtons = () => {
  const editor = usePlateEditorRef()!

  return (
    <>
      <MarkToolbarButton
        type={getPluginType(editor, MARK_BOLD)}
        icon={<FormatBold />}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_ITALIC)}
        icon={<FormatItalic />}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_UNDERLINE)}
        icon={<FormatUnderlined />}
      />
    </>
  )
}

export const ToolbarButtons = () => {
    return (
        <>
            <ListToolbarButtons />
            <BasicMarkToolbarButtons />
        </>
    )
}
