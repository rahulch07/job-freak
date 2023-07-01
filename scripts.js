function showContent(tabName) {
    var tabs = document.getElementsByClassName('tab-content');
    console.log(tabs);
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }
    
    var activeTab = document.getElementById(tabName);
    activeTab.classList.add('active');
  }