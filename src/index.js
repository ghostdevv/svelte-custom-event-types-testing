/**
 * @param {HTMLElement} element
 */
export const testAction = (e) => {
    const event = new CustomEvent('test');
    
    e.dispatchEvent(event);

    return {}
}