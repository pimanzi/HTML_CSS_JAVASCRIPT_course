
$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});

// Namespace for utility functions
(function (global) {
  // ... Existing code ...

  // Function to build and show the home page
  function buildAndShowHomeHTML(categories) {
    showLoading("#main-content");

    // Load home snippet page
    $ajaxUtils.sendGetRequest(
      homeHtmlUrl,
      function (homeHtml) {
        // Choose a random category from the retrieved categories
        var chosenCategory = chooseRandomCategory(categories);

        // Substitute {{randomCategoryShortName}} with the chosen category's short name
        var homeHtmlToInsertIntoMainPage = insertProperty(
          homeHtml,
          "randomCategoryShortName",
          chosenCategory.short_name
        );

        // Insert the produced HTML into the main page
        insertHtml("#main-content", homeHtmlToInsertIntoMainPage);
      },
      false
    );
  }

  // Function to select a random category
  function chooseRandomCategory(categories) {
    var randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  }

  // Function to load menu items for a category
  dc.loadMenuItems = function (categoryShort) {
    showLoading("#main-content");

    // AJAX request to fetch menu items for the specified category
    $ajaxUtils.sendGetRequest(
      menuItemsUrl + categoryShort + ".json",
      buildAndShowMenuItemsHTML
    );
  };

  // Function to build and display menu items
  function buildAndShowMenuItemsHTML(categoryMenuItems) {
    // ... Existing code for building menu items ...
  }

  // Function to switch CSS class active to menu button
  function switchMenuToActive() {
    // ... Existing code to switch active class ...
  }

  // ... Existing code ...

  global.$dc = dc;
})(window);
