canvasColor();

function canvasColor() {
  var can2 = document.getElementById("can2");
  var colorImg = new SimpleImage(70, 70);
  for (var p of colorImg.values()) {
    var x = p.getX();
    var y = p.getY();
    if (y < 10) {
      p.setRed(255);
    } else
    if (y < 20) {
      p.setRed(255);
      p.setGreen(128);
    } else
    if (y < 30) {
      p.setRed(255);
      p.setGreen(255);
    } else
    if (y < 40) {
      p.setGreen(255);
    } else
    if (y < 50) {
      p.setGreen(255);
      p.setBlue(255);
    } else
    if (y < 60) {
      p.setBlue(255);
    } else {
      p.setBlue(255);
      p.setRed(128);
    }
  }
  colorImg.drawTo(can2);
}
var img = null;
var imgG = null;
var can = null;

function updatePic() {
  var fname = document.getElementById("inpt");
  can = document.getElementById("can");
  img = new SimpleImage(fname);
  img.drawTo(can);
}

function callColors() {
  toGray();
  toRed();
  toGreen();
  toBlue();
  toBlack();
  toWhite();
}

function toGray() {
  var colorDgree = document.getElementById("grayC").value;
  imgG = new SimpleImage(img.getWidth(), img.getHeight());
  for (var p of img.values()) {
    var x = p.getX();
    var y = p.getY();
    var r = p.getRed();
    var g = p.getGreen();
    var b = p.getBlue();
    var clr;
    var avgColor = (r + g + b) / 3;
    var newP = imgG.getPixel(x, y);
    clr = parseInt(r.toString()) - parseInt(colorDgree.toString());
    if (clr >= avgColor) {
      newP.setRed(clr);
    } else {
      clr = parseInt(r.toString()) + parseInt(colorDgree.toString());
      if (clr <= avgColor) {
        newP.setRed(clr);
      } else
        newP.setRed(avgColor);
    }
    clr = parseInt(g.toString()) - parseInt(colorDgree.toString());
    if (clr >= avgColor) {
      newP.setGreen(clr);
    } else {
      clr = parseInt(g.toString()) + parseInt(colorDgree.toString());
      if (clr <= avgColor) {
        newP.setGreen(clr);
      } else
        newP.setGreen(avgColor);
    }
    clr = parseInt(b.toString()) - parseInt(colorDgree.toString());
    if (clr >= avgColor) {
      newP.setBlue(clr);
    } else {
      clr = parseInt(b.toString()) + parseInt(colorDgree.toString());
      if (clr <= avgColor) {
        newP.setBlue(clr);
      } else
        newP.setBlue(avgColor);
    }
  }
  imgG.drawTo(can);
}

function toRed() {
  var colorDgree = document.getElementById("redC").value;
  for (var p of imgG.values()) {
    var x = p.getX();
    var y = p.getY();
    var r = p.getRed();
    var g = p.getGreen();
    var b = p.getBlue();
    var clr;
    var newP = imgG.getPixel(x, y);
    clr = parseInt(g.toString()) - parseInt(colorDgree.toString());
    if (clr >= 0)
      newP.setGreen(clr);
    else
      newP.setGreen(0);
    clr = parseInt(b.toString()) - parseInt(colorDgree.toString());
    if (clr >= 0)
      newP.setBlue(clr);
    else
      newP.setBlue(0);
  }
  imgG.drawTo(can);
}

function toGreen() {
  var colorDgree = document.getElementById("greenC").value;
  for (var p of imgG.values()) {
    var x = p.getX();
    var y = p.getY();
    var r = p.getRed();
    var g = p.getGreen();
    var b = p.getBlue();
    var clr;
    var newP = imgG.getPixel(x, y);
    clr = parseInt(r.toString()) - parseInt(colorDgree.toString());
    if (clr >= 0)
      newP.setRed(clr);
    else
      newP.setRed(0);
    clr = parseInt(b.toString()) - parseInt(colorDgree.toString());
    if (clr >= 0)
      newP.setBlue(clr);
    else
      newP.setBlue(0);
  }
  imgG.drawTo(can);
}

function toBlue() {
  var colorDgree = document.getElementById("blueC").value;
  for (var p of imgG.values()) {
    var x = p.getX();
    var y = p.getY();
    var r = p.getRed();
    var g = p.getGreen();
    var b = p.getBlue();
    var clr;
    var newP = imgG.getPixel(x, y);
    clr = parseInt(r.toString()) - parseInt(colorDgree.toString());
    if (clr >= 0)
      newP.setRed(clr);
    else
      newP.setRed(0);
    clr = parseInt(g.toString()) - parseInt(colorDgree.toString());
    if (clr >= 0)
      newP.setGreen(clr);
    else
      newP.setGreen(0);
  }
  imgG.drawTo(can);
}

function toBlack() {
  var colorDgree = document.getElementById("blackC").value;
  for (var p of imgG.values()) {
    var x = p.getX();
    var y = p.getY();
    var r = p.getRed();
    var g = p.getGreen();
    var b = p.getBlue();
    var clr;
    var newP = imgG.getPixel(x, y);
    clr = parseInt(r.toString()) - parseInt(colorDgree.toString());
    if (clr >= 0)
      newP.setRed(clr);
    else
      newP.setRed(0);
    clr = parseInt(g.toString()) - parseInt(colorDgree.toString());
    if (clr >= 0)
      newP.setGreen(clr);
    else
      newP.setGreen(0);
    clr = parseInt(b.toString()) - parseInt(colorDgree.toString());
    if (clr >= 0)
      newP.setBlue(clr);
    else
      newP.setBlue(0);
  }
  imgG.drawTo(can);
}

function toWhite() {
  var colorDgree = document.getElementById("whiteC").value;
  for (var p of imgG.values()) {
    var x = p.getX();
    var y = p.getY();
    var r = p.getRed();
    var g = p.getGreen();
    var b = p.getBlue();
    var clr;
    var newP = imgG.getPixel(x, y);
    clr = parseInt(r.toString()) + parseInt(colorDgree.toString());
    if (clr <= 255)
      newP.setRed(clr);
    else
      newP.setRed(255);
    clr = parseInt(g.toString()) + parseInt(colorDgree.toString());
    if (clr <= 255)
      newP.setGreen(clr);
    else
      newP.setGreen(255);
    clr = parseInt(b.toString()) + parseInt(colorDgree.toString());
    if (clr <= 255)
      newP.setBlue(clr);
    else
      newP.setBlue(255);
  }
  imgG.drawTo(can);
}

function rainBow() {
  imgG = new SimpleImage(img.getWidth(), img.getHeight());
  var y
  for (var p of img.values()) {
    var x = p.getX();
    y = p.getY();
    imgG.setPixel(x, y, p);
  }
  for (var newP of imgG.values()) {
    y = newP.getY();
    var thrashold = img.getHeight();
    var avg = (newP.getRed() + newP.getGreen() + newP.getBlue()) / 3;
    if (y < 1 / 7 * thrashold) {
      newP.setGreen(avg / 2);
      newP.setBlue(avg / 2);
      if (avg >= 128)
        avg = 255;
      else
        avg += 128;
      newP.setRed(avg);
    } else
    if (y < 2 / 7 * thrashold) {
      newP.setBlue(avg / 2);
      if (avg >= 128)
        avg = 255;
      else
        avg += 128;
      newP.setRed(avg);
      avg -= 64;
      newP.setGreen(avg);
    } else
    if (y < 3 / 7 * thrashold) {
      newP.setBlue(avg / 2);
      if (avg >= 128)
        avg = 255;
      else
        avg += 128;
      newP.setRed(avg);
      newP.setGreen(avg);
    } else
    if (y < 4 / 7 * thrashold) {
      newP.setRed(avg / 2);
      newP.setBlue(avg / 2);
      if (avg >= 128)
        avg = 255;
      else
        avg += 128;
      newP.setGreen(avg);
    } else
    if (y < 5 / 7 * thrashold) {
      newP.setRed(avg / 2);
      if (avg >= 128)
        avg = 255;
      else
        avg += 128;
      newP.setGreen(avg);
      newP.setBlue(avg);
    } else
    if (y < 6 / 7 * thrashold) {
      newP.setRed(avg / 2);
      newP.setGreen(avg / 2);
      if (avg >= 128)
        avg = 255;
      else
        avg += 128;
      newP.setBlue(avg);
    } else {
      newP.setGreen(avg / 2);
      if (avg >= 128)
        avg = 255;
      else
        avg += 128;
      newP.setBlue(avg);
      avg -= 64;
      newP.setRed(avg);
    }
    imgG.setPixel(x, y, newP);
  }
  imgG.drawTo(can);
}

function resetCall() {
  imgG = new SimpleImage(img.getWidth(), img.getHeight());
  for (var p of img.values()) {
    var x = p.getX();
    var y = p.getY();
    imgG.setPixel(x, y, p);
  }
  imgG.drawTo(can);
}