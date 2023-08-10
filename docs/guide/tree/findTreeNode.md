---
titleTemplate: utils-snap-fn-docs
---

# findTreeNode

**Definition**:

```ts
/**
 * findTreeNode - A function that traverses an object tree to find a node that matches a given key and value.
 *
 * @param tree - The object tree to traverse.
 * @param key - The key to look for within each node of the tree.
 * @param value - The value to match against the key within each node of the tree.
 * @returns The node that matches the key and value, or null if no match is found.
*/
```

# Demo

```ts
import { reactive } from 'vue'
import { findTreeNode } from 'utils-snap-fn'

type TreeNode<T, U> = {
  id: T
  name: U
  children: TreeNode<T, U>[]
}

const tree = reactive<TreeNode<number, string>>({
  id: 1,
  name: 'Parent',
  children: [
    {
      id: 2,
      name: 'Child 1',
      children: [],
    },
    {
      id: 3,
      name: 'Child 2',
      children: [
        {
          id: 4,
          name: 'Grandchild',
          children: [],
        },
      ],
    },
  ],
})

const output = findTreeNode(tree, 'id', 4)

/*
  {
    id: 4,
    name: 'Grandchild',
    children: [],
  }
*/
```

[Source Code](https://github.com/guxuerui/utils-snap-fn/blob/main/src/playground/tree/findTreeNode.ts)
