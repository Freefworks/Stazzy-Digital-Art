var sites = [
'digital-art-1.html', 
'digital-art-2.html', 
'digital-art-3.html', 
'digital-art-4.html', 
'digital-art-5.html', 
'digital-art-6.html', 
'digital-art-7.html',
'digital-art-12.html',
'digital-art-13.html',
'digital-art-14.html'
]; function randomSite() {var i = parseInt(Math.random() * sites.length); location.href = sites[i];}