function createAnalytics() {
   let documentClickCounter = 0;
   let isDestroyed = false;

   const listener = () => documentClickCounter++;

   document.addEventListener("click", listener);

   return {
      destroy() {
         document.removeEventListener("click", listener);
         isDestroyed = true;
      },
      getClicks() {
         if (isDestroyed) return `Analytics is destoryed. Total click = ${counter}`;
         return documentClickCounter;
      },
   };
}

window.analytics = createAnalytics();
