/**
 * Gets the DOM element from the internal React instance.
 * This avoids having to use findDOMNode which breaks ReactTestRenderer.
 *
 * @param {Object} ref - the component's ref.
 *
 * @return the underlying DOM node from the ref.
 */
export default function getHostDOMNode(ref) {
  return (ref && ref._reactInternalInstance) ?
    ref._reactInternalInstance._renderedComponent._hostNode :
    null;
}
