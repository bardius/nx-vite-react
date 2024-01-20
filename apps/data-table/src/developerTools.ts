/// <reference types="@welldone-software/why-did-you-render" />
import React from 'react';

if (import.meta.env.DEV) {
  const { default: whyDidYouRender } = await import('@welldone-software/why-did-you-render');

  whyDidYouRender(React, {
    include: [/.*/],
    exclude: [/^BrowserRouter/, /^Link/, /^Route/],
    trackHooks: true,
    trackAllPureComponents: true,
    logOnDifferentValues: true,
    trackExtraHooks: [],
  });

  // TODO: add @axe-core/react for accessibility issues
}
