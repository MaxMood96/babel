import environmentVisitor from "@babel/helper-environment-visitor";
import { traverse, types as t } from "@babel/core";
const { numericLiteral, unaryExpression } = t;

import type { NodePath, Visitor } from "@babel/core";

/**
 * A visitor to walk the tree, rewriting all `this` references in the top-level scope to be
 * `void 0` (undefined).
 */
const rewriteThisVisitor: Visitor = traverse.visitors.merge([
  environmentVisitor,
  {
    ThisExpression(path) {
      path.replaceWith(unaryExpression("void", numericLiteral(0), true));
    },
  },
]);

export default function rewriteThis(programPath: NodePath) {
  // Rewrite "this" to be "undefined".
  traverse(programPath.node, { ...rewriteThisVisitor, noScope: true });
}
