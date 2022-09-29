import 'tippy.js/dist/tippy.css'
import './index.css'
import ReactDOM from 'react-dom'
import { useRef } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import {
    createPlateUI,
    HeadingToolbar,
    Plate,
    createBoldPlugin,
    createItalicPlugin,
    createListPlugin,
    createUnderlinePlugin,
    PlateEventProvider,
    ELEMENT_CODE_BLOCK,
    StyledElement,
    createPlugins,
} from '@udecode/plate'
import {
  ELEMENT_EXCALIDRAW,
  ExcalidrawElement,
} from '@udecode/plate-ui-excalidraw'

import { ToolbarButtons } from './components/Toolbars'
import { withStyledPlaceHolders } from './components/withStyledPlaceHolders'
import { withStyledDraggables } from './components/withStyledDraggables'

import { createListPlugin as customCreateListPlugin } from './plugins/createListPlugin';

import { initialValue } from './value';

const id = 'Examples/Playground'

let components = createPlateUI({
  [ELEMENT_EXCALIDRAW]: ExcalidrawElement,
  [ELEMENT_CODE_BLOCK]: StyledElement,
   // custom: CustomLeaf
  // customize your components by plugin key
})
components = withStyledPlaceHolders(components)
components = withStyledDraggables(components)

const plugins = createPlugins(
  [
    createListPlugin(),
    createBoldPlugin(),
    createItalicPlugin(),
    createUnderlinePlugin(),
    customCreateListPlugin(),
  ],
  {
    components,
  }
)

const Plugins = () => {
  const containerRef = useRef(null)

  return (
    <DndProvider backend={HTML5Backend}>
      <PlateEventProvider>
        <HeadingToolbar>
          <ToolbarButtons />
        </HeadingToolbar>
      </PlateEventProvider>

      <div ref={containerRef} style={{ position: 'relative' }}>
        <Plate
          id={id}
          //editableProps={CONFIG.editableProps}
          initialValue={initialValue}
          plugins={plugins}
        />
      </div>
    </DndProvider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Plugins />, rootElement)
