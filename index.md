## EasyPeasySlider

This is a Slider based in background images. Incredibly easy to configure and use.

### How to use

First add the html code in every part of page
```
<div id="customSlider">Example Slider Background</div>
```

Add this before close body tag

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="js/easypeasyslider.min.js"></script>
<script>
  var imagesSlider = ["images/1.jpg", "images/2.jpg", "images/3.jpg"];
  var epslider = new EasyPeasySlider(imagesSlider, false);
  $(document).ready(function() {
    epslider.init("#customSlider");
    setInterval("epslider.next()", 3000);
  });
</script>
```
