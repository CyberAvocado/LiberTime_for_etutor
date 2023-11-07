document.getElementById('clickButton').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.scripting.executeScript({
        target: {tabId: activeTab.id},
        function: clickAndSetInterval
      });
    });
  });
  
  function clickAndSetInterval() {
    function clickResetButton() {
      var resetButton = document.querySelector('span.reset');
      if (resetButton) {
        resetButton.click();
        console.log('已重設');
      } else {
        console.log('元素不存在');
      }
    }
    
    clickResetButton();
    setInterval(clickResetButton, 1 * 60 * 1000);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('clickButton');
    button.addEventListener('click', function() {
      button.innerHTML = '已啟用';
    });
  });
  