import * as $ from 'jquery';

function createAnalytics(): {} {
   let documentClickCounter = 0;
   let destroyed: boolean = false;

   const listener = (): number => documentClickCounter++;

   $(document).on('click', listener);

   return {
      destroy() {
         $(document).off('click', listener);
         destroyed = true;
      },
      getClicks() {
         if (destroyed) return `Analytics is destoryed. Total click = ${documentClickCounter}`;
         return documentClickCounter;
      },
   };
}

window[`analytics`] = createAnalytics();
