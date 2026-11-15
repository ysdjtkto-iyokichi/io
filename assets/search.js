const q=document.getElementById('q');
q.addEventListener('input',()=>{const v=q.value.trim().toLowerCase();
document.querySelectorAll('.book-card').forEach(c=>{c.classList.toggle('hidden',v&&!c.dataset.search.toLowerCase().includes(v));});
document.querySelectorAll('.rank-section').forEach(s=>{const any=[...s.querySelectorAll('.book-card')].some(c=>!c.classList.contains('hidden'));s.classList.toggle('hidden',!!v&&!any);});});
