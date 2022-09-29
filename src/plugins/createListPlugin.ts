import {
  createPluginFactory,
  PlatePlugin,
} from '@udecode/plate-core';
import { ListPlugin } from "@udecode/plate";
import { CustomLeaf } from './customLeaf';

export const ELEMENT_UL = 'unordered-list';
export const ELEMENT_OL = 'ordered-list';
export const ELEMENT_LI = 'list-item';


/**
 * Enables support for bulleted, numbered and to-do lists.
 */
export const createListPlugin = createPluginFactory({
  key: 'list-a',
  component: CustomLeaf,
  plugins: [
    {
      key: ELEMENT_UL,
      isElement: true,
      deserializeHtml: { rules: [{ validNodeName: 'UL' }] },
      component: CustomLeaf,
    } as PlatePlugin<ListPlugin>,
    {
      key: ELEMENT_OL,
      isElement: true,
      deserializeHtml: { rules: [{ validNodeName: 'OL' }] },
      component: CustomLeaf,
    } as PlatePlugin<ListPlugin>,
    {
      key: ELEMENT_LI,
      isElement: true,
      deserializeHtml: { rules: [{ validNodeName: 'LI' }] },
      component: CustomLeaf,
    },
  ],
});
