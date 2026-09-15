// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-papers",
          title: "papers",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/papers/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-hobbies",
          title: "hobbies",
          description: "chess, and a few other things I spend time on",
          section: "Navigation",
          handler: () => {
            window.location.href = "/hobbies/";
          },
        },{id: "news-received-the-nadav-award-for-excellence-research-at-bar-ilan-university-as-the-sole-master-s-student-selected",
          title: 'Received the Nadav Award for excellence research at Bar-Ilan University, as the sole...',
          description: "",
          section: "News",},{id: "news-received-the-president-scholarship-for-outstanding-students-at-bar-ilan-university",
          title: 'Received the President Scholarship for outstanding students at Bar-Ilan University.',
          description: "",
          section: "News",},{id: "news-received-the-clore-scholarship-for-exceptional-phd-students",
          title: 'Received the Clore Scholarship for exceptional PhD students.',
          description: "",
          section: "News",},{id: "news-new-approximate-distance-oracles-and-their-applications-won-the-best-paper-award-at-isaac-2025",
          title: '‘New Approximate Distance Oracles and Their Applications’ won the Best Paper Award at...',
          description: "",
          section: "News",},{id: "news-compact-routing-schemes-in-undirected-and-directed-graphs-won-2nd-place-in-the-feder-family-award-for-best-student-work-in-communications",
          title: '‘Compact Routing Schemes in Undirected and Directed Graphs’ won 2nd place in the...',
          description: "",
          section: "News",},{id: "news-improved-girth-approximation-in-weighted-undirected-graphs-was-accepted-to-sicomp",
          title: '‘Improved Girth Approximation in Weighted Undirected Graphs’ was accepted to SICOMP.',
          description: "",
          section: "News",},{id: "news-received-the-rector-s-award-for-outstanding-students-at-bar-ilan-university",
          title: 'Received the Rector’s Award for Outstanding Students at Bar-Ilan University.',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
