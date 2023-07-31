const searchi = document.getElementById("searchq");
const search = document.getElementById("search");
const closeA = document.getElementById("alertx");
const alerty = document.getElementById("alert");
const style = document.getElementById("relsn");
const favi = document.getElementById("favi");
const logo = document.getElementById("logo");

class xor {
    static encode(str) {
        return encodeURIComponent(str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));
    };
    static decode(str) {
        return decodeURIComponent(str.slice(0, -1)).split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join('');
    };
};

function isUrl(val = '') {
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};

function ser() { 
    event.preventDefault();
    let url = searchi.value.trim();
    window.parent.document.getElementById("searchbar").value = url;
    let safeSearch = localStorage.getItem("ss");
    if(safeSearch === null) {
        if (!isUrl(url)) url = `https://searx.org/search?q=${url}&safesearch=0`;
    } else if(safeSearch === "ss_0") {
        if (!isUrl(url)) url = `https://searx.org/search?q=${url}&safesearch=0`;
    } else if(safeSearch === "ss_1") {
        if (!isUrl(url)) url = `https://searx.org/search?q=${url}&safesearch=1`;
    } else if(safeSearch === "ss_2") {
        if (!isUrl(url)) url = `https://searx.org/search?q=${url}&safesearch=2`;
    }
    window.open("sw" + "/" + xor.encode(url), "_self");
}

searchi.addEventListener("focus", () => {
    searchi.addEventListener("keydown", (e) => {
        if(e.keyCode == "9") {
            e.preventDefault();
            return;
        }
        if(e.keyCode == "13") {
            e.preventDefault();
            ser()
        }
    })
    if (search.classList.contains("rectDown")) {
        search.classList.remove("rectDown");
        search.classList.add("rectUp");
        return;
    } else {
        search.classList.add("rectUp");
        return;
    }
});

searchi.addEventListener("blur", () => {
    if (search.classList.contains("rectUp")) {
        search.classList.remove("rectUp");
        search.classList.add("rectDown");
        return;
    } else {
        search.classList.add("rectDown");
        return;
    }
});

if(closeA) {
    closeA.addEventListener("click", () => {
        alerty.style.display = "none";
    });
}

const parent = window.parent.document;
const siteFrame = parent.querySelector(".iframething");
const urlbar = parent.querySelector("#urlbar");
const urlToOpen = window.parent.parent.document.querySelector(".winFocus").getAttribute("urltoopen");

if (urlToOpen != "undefined") {
    const parentDomain = window.parent.parent.document.location.hostname;
    if (parentDomain === "localhost") {
        siteFrame.setAttribute("src", `//${parentDomain}:${window.parent.document.location.port}/sw/${xor.encode(urlToOpen)}`);
        urlbar.value = urlToOpen;
    } else {
        siteFrame.setAttribute("src", `https://${parentDomain}/sw/${xor.encode(urlToOpen)}`);
        urlbar.value = urlToOpen;
    }
}

function logRecentSite(url) {
    const MAX_RECENT_SITES = 5;
  
    let recentSites = JSON.parse(localStorage.getItem('recentSites') || '[]');
  
    const index = recentSites.findIndex((site) => site.url === url);
  
    if (index !== -1) {
      recentSites.splice(index, 1);
    }
  
    recentSites.unshift({ url: url, timestamp: Date.now() });
  
    recentSites = recentSites.slice(0, MAX_RECENT_SITES);
  
    localStorage.setItem('recentSites', JSON.stringify(recentSites));
  }
  
  function getRecentSites() {
    const recentSites = JSON.parse(localStorage.getItem('recentSites') || '[]');
    return recentSites;
  }
  
  function updateAppsMenu() {
    event.preventDefault();
    const url = event.currentTarget.dataset.url;
  }

  function redirectToEncodedURL(element) {
    const dataUrl = element.getAttribute('data-url');
    const encodedUrl = xor.encode(dataUrl);
    window.location.href = `/sw/${encodedUrl}`;
  }  
  
  function handleProfileIconClick() {
    // Eventually
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    updateAppsMenu();
  
    const profileIcon = document.querySelector('.profile-link');
    profileIcon.addEventListener('click', handleProfileIconClick);

    const appIcons = document.querySelectorAll('.app-icon');
    appIcons.forEach((appIcon) => {
      appIcon.addEventListener('click', handleAppIconClick);
    });
  });
  