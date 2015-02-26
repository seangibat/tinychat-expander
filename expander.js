var x = document.getElementById('container');
[].slice.call(x.children).forEach(function(el){ if (el.id !== "room") el.remove(); });
document.getElementById('right_block').remove();
document.getElementById('left_block').style.cssText = "width: 100%;"