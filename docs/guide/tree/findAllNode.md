---
titleTemplate: utils-snap-fn-docs
---

# findAllNode

**Definition**:

```ts
/**
 * Finds all nodes in a tree that contain the given key-value pair.
 *
 * @param tree - the tree to search through
 * @param key - the key to look for in each node
 * @param value - the value to match with the key in each node
 * @returns an array containing all nodes that match the given key-value pair
 */
```

# Demo

```ts
import { reactive } from 'vue'
import { findAllNode } from 'utils-snap-fn'

type TreeNode<T, U> = {
  id: T
  name: U
  type: U
  children: TreeNode<T, U>[]
}

const tree = reactive<TreeNode<number, string>>({
  id: 1,
  name: 'Parent',
  type: 'folder',
  children: [
    {
      id: 2,
      name: 'Child 1',
      type: 'file',
      children: [],
    },
    {
      id: 3,
      name: 'Child 2',
      type: 'folder',
      children: [
        {
          id: 4,
          name: 'Grandchild',
          type: 'file',
          children: [],
        },
      ],
    },
  ],
})

const output = findTreeNode(tree, 'type', 'file')

/*
  [
    {
      id: 2,
      name: 'Child 1',
      type: 'file',
      children: [],
    },
    {
      id: 4,
      name: 'Grandchild',
      type: 'file',
      children: [],
    },
  ]
*/
```

[Source Code](https://github.com/guxuerui/utils-snap-fn/blob/main/src/playground/tree/findAllNode.ts)
