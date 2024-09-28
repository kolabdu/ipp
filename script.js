// // script.js

console.log("Script is running"); // Check if the script runs

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const searchBtn = document.getElementById('searchBtn');
const searchField = document.getElementById('searchField');

// Toggle navigation links
if (menuBtn) {
  console.log("Menu button found"); // Check if menu button is found
  menuBtn.addEventListener('click', () => {
    console.log("Menu button clicked"); // Check if the button click is recognized
    if (navLinks) {
      navLinks.classList.toggle('active');
      console.log("Toggled nav links visibility"); // Log when nav links are toggled
    }
  });
}

// Search button functionality
if (searchBtn) {
  console.log("Search button found"); // Check if search button is found
  searchBtn.addEventListener('click', () => {
    const query = searchField.value.trim();
    if (query) {
      console.log(`Searching for: ${query}`); // Log the search query
    } else {
      console.log("Please enter a search term.");
    }
  });
}
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const query = searchField.value.trim();
      if (query) {
        console.log(`Searching for: ${query}`);
        highlightTerm(query); // Call the highlight function
      } else {
        console.log("Please enter a search term.");
      }
    });
  }
  
  function highlightTerm(term) {
    // Remove previous highlights
    const highlighted = document.querySelectorAll('.highlight');
    highlighted.forEach(el => {
      el.classList.remove('highlight');
    });
  
    // Search for term in specific elements (for example, all paragraphs)
    const paragraphs = document.querySelectorAll('p'); // Change selector as needed
    let found = false;
  
    paragraphs.forEach(paragraph => {
      const regex = new RegExp(`(${term})`, 'gi'); // Case-insensitive search
      if (regex.test(paragraph.textContent)) {
        found = true; // Set found to true if the term is in the paragraph
        paragraph.innerHTML = paragraph.innerHTML.replace(regex, '<span class="highlight">$1</span>');
        paragraph.scrollIntoView({ behavior: 'smooth' }); // Scroll to the first occurrence
      }
    });
  
    if (!found) {
      console.log(`No matches found for: ${term}`);
    }
  }
//   // script.js

// console.log("Script is running"); // Check if the script runs

// const menuBtn = document.querySelector('.menu-btn');
// const navLinks = document.querySelector('.nav-links');
// const searchBtn = document.getElementById('searchBtn');
// const searchField = document.getElementById('searchField');

// // Toggle navigation links
// if (menuBtn) {
//   console.log("Menu button found"); // Check if menu button is found
//   menuBtn.addEventListener('click', () => {
//     console.log("Menu button clicked"); // Check if the button click is recognized
//     if (navLinks) {
//       navLinks.classList.toggle('active');
//       console.log("Toggled nav links visibility"); // Log when nav links are toggled
//     }
//   });
// }

// // Search button functionality
// if (searchBtn) {
//   console.log("Search button found"); // Check if search button is found
//   searchBtn.addEventListener('click', () => {
//     const query = searchField.value.trim();
//     if (query) {
//       console.log(`Searching for: ${query}`); // Log the search query
//       highlightTerm(query); // Call the highlight function
//     } else {
//       console.log("Please enter a search term.");
//     }
//   });
// }

// function highlightTerm(term) {
//   // Remove previous highlights
//   const highlighted = document.querySelectorAll('.highlight');
//   highlighted.forEach(el => {
//     el.classList.remove('highlight');
//   });

//   // Search for term in all relevant elements (e.g., cards)
//   const cards = document.querySelectorAll('.card'); // Adjust selector as needed
//   let found = false;

//   cards.forEach(card => {
//     const regex = new RegExp(`(${term})`, 'gi'); // Case-insensitive search
//     if (regex.test(card.textContent)) {
//       found = true; // Set found to true if the term is in the card
//       // Highlight the term in the card's HTML
//       card.innerHTML = card.innerHTML.replace(regex, '<span class="highlight">$1</span>');
//       card.scrollIntoView({ behavior: 'smooth' }); // Scroll to the first occurrence
//     }
//   });

//   if (!found) {
//     console.log(`No matches found for: ${term}`);
//   }
// }
