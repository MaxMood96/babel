/* @minVersion 7.13.10 */
/* @onlyBabel7 */

export default function _classCheckPrivateStaticFieldDescriptor(
  descriptor,
  action,
) {
  if (descriptor === undefined) {
    throw new TypeError(
      "attempted to " + action + " private static field before its declaration",
    );
  }
}
