import * as $ from 'jquery';

function createAnalytics() {
   let documentClickCounter = 0;
   let destroyed = false;

   const listener = () => documentClickCounter++;

   $(document).on('click', listener);

   return {
      destroy() {
         $(document).off('click', listener);
         destroyed = true;
      },
      getClicks() {
         if (destroyed) return `Analytics is destoryed. Total click = ${counter}`;
         return documentClickCounter;
      },
   };
}

window.analytics = createAnalytics();
