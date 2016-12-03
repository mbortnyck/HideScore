// Saves options to chrome.storage.sync.
function save_options() {
  chrome.storage.sync.set({
    avclub: document.getElementById('avclub').checked,
    gamespot: document.getElementById('gamespot').checked,
    ign: document.getElementById('ign').checked,
    nme: document.getElementById('nme').checked,
    pitchfork: document.getElementById('pitchfork').checked,
    residentadvisor: document.getElementById('residentadvisor').checked,
    rollingstone: document.getElementById('rollingstone').checked,
    xlr8r: document.getElementById('xlr8r').checked
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get(null, function(items) {
    document.getElementById('avclub').checked = items.avclub;
    document.getElementById('gamespot').checked = items.gamespot;
    document.getElementById('ign').checked = items.ign;
    document.getElementById('nme').checked = items.nme;
    document.getElementById('pitchfork').checked = items.pitchfork;
    document.getElementById('residentadvisor').checked = items.residentadvisor;
    document.getElementById('rollingstone').checked = items.rollingstone;
    document.getElementById('xlr8r').checked = items.xl8r;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);