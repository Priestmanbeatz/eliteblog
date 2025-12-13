// Lightweight JS for the static starter
document.addEventListener('DOMContentLoaded', function(){
  // fake ad fill for placeholders (remove when using real ads)
  document.querySelectorAll('.ad-placeholder').forEach(function(el){
    if(!el.dataset.filled){
      el.dataset.filled = '1';
      // leave as visual placeholder
    }
  });

  // simple subscribe form - saves to localStorage (replace with real service)
  var form = document.getElementById('subscribe-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var email = form.querySelector('input[type="email"]').value;
      if(!email) return alert('Enter an email');
      var list = JSON.parse(localStorage.getItem('elite_subs') || '[]');
      list.push({email:email, date:new Date().toISOString()});
      localStorage.setItem('elite_subs', JSON.stringify(list));
      form.reset();
      alert('Subscribed (local demo). Replace with MailerLite/ConvertKit code.');
    });
  }
});
