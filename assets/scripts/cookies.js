function getCookieConsent() {
    return localStorage.getItem('cookieConsent');
  }
  
function showCookieConsent() {
    const cookieConsent = document.getElementById('cookieConsent');
    cookieConsent.style.display = 'block';
  }
  
function hideCookieConsent() {
    const cookieConsent = document.getElementById('cookieConsent');
    cookieConsent.style.display = 'none';
  }
  
function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    hideCookieConsent();
  }
  
function rejectCookies() {
    localStorage.setItem('cookieConsent', 'rejected');
    hideCookieConsent();
  }
  
function handleCookieConsent() {
const consent = getCookieConsent();
    if (consent !== 'accepted' && consent !== 'rejected') {
        showCookieConsent();
    }
    }
  
document.getElementById('acceptCookies').addEventListener('click', acceptCookies);
document.getElementById('rejectCookies').addEventListener('click', rejectCookies);
document.addEventListener('DOMContentLoaded', handleCookieConsent);
  