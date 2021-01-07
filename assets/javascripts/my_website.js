'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor');
  setInterval(() => {
    cursor.classList.toggle('hidden');
  }, 800);
});