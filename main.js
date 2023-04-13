let allPosts = [
  {
    title: "5 Tips for Boosting Productivity in the Workplace",
  },
  {
    title: "The Ultimate Guide to Healthy Eating on a Budget",
  },
  {
    title: "Mastering Time Management: A Step-by-Step Approach",
  },
  {
    title: "The Art of Effective Communication: Key Strategies for Success",
  },
  {
    title: "Unlocking Creativity: How to Overcome Writer's Block",
  },
  {
    title: "Demystifying SEO: A Beginner's Guide to Search Engine Optimization",
  },
  {
    title:
      "The Power of Positive Thinking: Transforming Your Mindset for Success",
  },
];

const searchIcon = document.querySelector("header.main-header .search-icon");
const searchResults = document.querySelector(
  "header.main-header .search-results"
);
const searchInput = document.querySelector(".search-results .search-input");
const searchTitle = document.querySelector(".search-results .search-title");
const resultsContainer = document.querySelector(".results-container");

let filteredPosts = [];

searchIcon.addEventListener("click", () => {
  searchResults.classList.toggle("active");
});

const populateSearchResults = () => {
  const ul = document.createElement("ul");

  filteredPosts.forEach((p) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = p.title;

    li.appendChild(a);
    ul.appendChild(li);
  });

  resultsContainer.innerHTML = "";
  resultsContainer.appendChild(ul);
};

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();

  if (query) {
    filteredPosts = allPosts.filter((post) => {
      const title = post.title.toLowerCase();
      return title.includes(query);
    });

    populateSearchResults();
    searchTitle.textContent = "Search Results";
  } else {
    searchTitle.textContent = "Featured Posts";
    resultsContainer.innerHTML = `<ul>
    <li>
      <a href="#"
        >The Science of Sleep: Understanding the Importance of Rest</a
      >
    </li>

    <li>
      <a href="#"
        >Unleashing Your Leadership Potential: Essential Skills for
        Today's Leaders</a
      >
    </li>

    <li>
      <a href="#"
        >Mastering Personal Finance: Budgeting, Saving, and Investing
        Strategies</a
      >
    </li>
  </ul>`;
  }
});
