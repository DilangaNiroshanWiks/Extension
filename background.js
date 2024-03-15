chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [], // Remove any existing rules
    addRules: [
      {
        id: 1, // Unique ID for the rule
        priority: 1,
        action: {
          type: 'block',
        },
        condition: {
          urlFilter: {
            urlMatches: '.*google.*pagead.*', // Corrected URL filter format
          },
        },
      },
      // Add more rules as needed for other ad networks or specific ad URLs
    ],
  });
});
