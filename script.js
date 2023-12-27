function portrait () {
    var image = document.getElementById('portrait');
    var tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);

    image.addEventListener('mouseover', function(event) {
      // Show the tooltip with alt text
      tooltip.innerText = image.alt;
      tooltip.style.display = 'block';

      // Position the tooltip near the mouse pointer
      var x = event.pageX + 10;
      var y = event.pageY + 10;
      tooltip.style.left = x + 'px';
      tooltip.style.top = y + 'px';
    });

    image.addEventListener('mouseout', function() {
      // Hide the tooltip on mouseout
      tooltip.style.display = 'none';
    });
}