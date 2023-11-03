export function modalLink(modalId, text, data={}) {
  const dataAttrs =
    Object.entries(data)
      .map(([key, value]) => `data-${key}="${value}"`)
      .join(' ');
  return `<a href="#${modalId}" ${dataAttrs} uk-toggle>${text}</a>`;
}


export function modalEventToLinkData(event) {
  const [{$el: link}, ...uikitComponents] = event.detail;
  return link.dataset;
}
