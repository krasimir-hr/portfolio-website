const sections = document.querySelectorAll('section');
let currentIndex = 0;
let isScrolling = false;
let scrollStep = 0;
const stepsRequired = 3;

function scrollToSection(index) {
   isScrolling = true;

   if (index === 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   } else {
      sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
   }

   setTimeout(() => {
      if (index === 0) {
         window.scrollTo({ top: 0 });
      } else {
         sections[index].scrollIntoView({ block: 'start' });
      }
      isScrolling = false;
      scrollStep = 0;
   }, 100);
}

function handleWheel(e) {
   if (isScrolling) return;

   scrollStep++;
   console.log(scrollStep);

   if (scrollStep < stepsRequired) return;

   if (e.deltaY > 0 && currentIndex < sections.length - 1) {
      currentIndex++;
      scrollToSection(currentIndex);
   } else if (e.deltaY < 0 && currentIndex > 0) {
      currentIndex--;
      scrollToSection(currentIndex);
   } else {
      scrollStep = 0;
   }
}

window.addEventListener('wheel', handleWheel);
