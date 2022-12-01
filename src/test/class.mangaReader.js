class MangaReader {
  chapters = [];
  stepValues = [];
  steps = [];

  currentChapter = 1;
  currentStep = 1;
  currentPage = 0;

  overviewMode = false;
  zoom = false;
  src = "";

  constructor(src) {
    this.src = src;
    this.setupReader();
  }

  setupReader() {
    //ONLY ONES THAT ADAPT ON CHANGE ARE PERSPECTIVE AND SCALE
    var temp =
      "z-index: 0; position: absolute; transform-origin: left top; transition: all 250ms ease-in-out 125ms; transform-style: preserve-3d; top: 50%; left: 50%;";
    temp += "perspective: " + 1000 + "px;";
    temp += "transform: scale(" + 0.75 + ');">';

    //SET READER DIV
    document.getElementById("mangaReader").style = temp;

    //SET STYLE DIV
    document.getElementById("mangaReader").innerHTML =
      '<div id="readerStyle" style="position: absolute; transform-origin: left top; transition: all 350ms ease-in-out 0ms; transform-style: preserve-3d; transform: rotateZ(0deg) rotateY(0deg) rotateX(0deg) translate3d(0px, 0px, 0px);">';

    //SET GUI
    this.setGui();

    //SET DEFAULT EMPTY FRAME
    this.setDiv();

    //SET DEFAULT EMPTY OVERVIEW
    this.setOverview(this.src);
    //SET STEPS
    this.retrieveJson();
  }

  //JSON JSON JSON
  retrieveJson() {
    var pages;
    //GET JSON DATA
    $.getJSON(this.src + "data.json", function (data) {
      // TRAVEL THROUGH CHAPTERS
      for (var j = 0; j < data.length; j++) {
        // FILL chapters ARRAY WHITH PAGE AMOUNTS
        reader.chapters[data[j].chapter] = data[j].pages.length - 1;

        // DO ONLY IF CURRENT CHAPTER
        if (parseInt(data[j].chapter) === parseInt(reader.currentChapter)) {
          // ASIGN PAGE AMOUNT FOR THIS CHAPTER
          pages = data[j].pages.length - 1;

          // ASIGN PAGE AMOUNT IN PAGE SELECTOR (GUI)
          document.getElementById("pageAmount").innerHTML = pages;
          document.getElementById("pageTextField").value = reader.currentPage;
          reader.setPageInputSize(pages);

          // TRAVEL THROUGH PAGES
          $.each(data[j].pages, function (key, value) {
            // FILL stteps ARRAY WHITH STEP AMOUNTS FOR EACH PAGE
            reader.steps[key] = value.panels.length - 1;

            // DO ONLY IF CURRENT PAGE
            if (parseInt(value.page) === parseInt(reader.currentPage)) {
              // GO THROUGH PANELS AND FILL stepValues ARRAY.
              for (var i = 0; i < value.panels.length; i++) {
                if (value.panels[i].id === "overview") {
                  reader.stepValues[0] = [0, 0, 0, 0, 0, 0.75];
                  reader.changeOverview(reader.src + value.panels[i].src);
                } else {
                  reader.stepValues[i + 1] = [
                    value.panels[i].id,
                    value.panels[i].dataX,
                    value.panels[i].dataY,
                    value.panels[i].width,
                    value.panels[i].height,
                    value.panels[i].dataScale,
                  ];
                }
              }
            }
          });
        }
      }
    });
  }
  //JSON JSON JSON

  //NEXT SLIDE || PAGE
  async nextButtonFunc() {
    if (this.overviewMode) {
      setTimeout(() => {
        this.nextPage(this.currentPage + 1);
      }, 1);
    } else {
      if (this.currentStep === this.steps[this.currentPage]) {
        this.nextPage(this.currentPage + 1);
      } else {
        if (this.currentStep < this.steps[this.currentPage]) {
          this.currentStep++;
        } else {
          this.nextPage(this.currentPage + 1);
        }
      }
    }

    //ITEM 1 OF NEXT PAGE ALWAYS READS ITEM 1 OF LAST PAGE, DON´T KNOW WHY.

    if (!this.overviewMode) {
      if (this.stepValues[this.currentStep] !== undefined) {
        this.updateStyle(this.stepValues[this.currentStep]);
        this.changeFrame(this.stepValues[this.currentStep]);
      } else {
        this.currentStep--;
        setTimeout(() => {
          this.nextButtonFunc();
        }, 1);
      }
    }
  }

  nextPage(nextPage) {
    this.stepValues = [];
    if (nextPage < this.chapters[this.currentChapter] + 1) {
      this.currentPage = nextPage;

      if (this.overviewMode || this.steps[this.currentPage] < 1) {
        this.currentStep = 0;
        this.showZoom("show");
        this.overviewSwitchIcon("overview");
      } else {
        this.currentStep = 1;
        this.overviewSwitchIcon("panel");
      }

      document.getElementById("pageTextField").value = this.currentPage;
    } else {
      this.nextChapter();
    }
    this.retrieveJson();
  }

  nextChapter() {
    if (this.currentChapter < this.chapters.length - 1) {
      this.currentChapter++;
      this.currentPage = 0;
      if (this.overviewMode || this.steps[this.currentPage] < 1) {
        this.showZoom("show");
        this.currentStep = 0;
      } else {
        this.currentStep = 1;
      }

      document.getElementById("pageTextField").value = this.currentPage;
    } else {
      console.log("NO MORE CHAPTERS TO LOAD, BACK TO MANGA PAGE");
    }
  }

  //PREV SLIDE / PAGE
  prevButtonFunc() {
    if (this.overviewMode) {
      setTimeout(() => {
        this.prevPage();
      }, 1);
    } else {
      if (this.currentStep === 1) {
        this.prevPage();
      } else {
        if (this.currentStep > 0) {
          this.currentStep--;
        } else {
          this.prevPage();
        }
      }
    }

    //ITEM 1 OF NEXT PAGE ALWAYS READS ITEM 1 OF LAST PAGE, DON´T KNOW WHY.

    if (!this.overviewMode) {
      if (this.stepValues[this.currentStep] !== undefined) {
        this.updateStyle(this.stepValues[this.currentStep]);
        this.changeFrame(this.stepValues[this.currentStep]);
      } else {
        this.currentStep--;
        setTimeout(() => {
          this.nextButtonFunc();
        }, 1);
      }
    }
  }

  prevPage() {
    this.stepValues = [];
    if (this.currentPage - 1 >= 0) {
      this.currentPage--;

      if (this.overviewMode || this.steps[this.currentPage] < 1) {
        this.currentStep = 0;
        this.overviewSwitchIcon("overview");
        this.showZoom("show");
      } else {
        this.currentStep = this.steps[this.currentPage];
        this.overviewSwitchIcon("panel");
      }

      document.getElementById("pageTextField").value = this.currentPage;
    } else {
      this.prevChapter();
    }
    this.retrieveJson();
  }

  prevChapter() {
    if (this.currentChapter > 1) {
      this.currentChapter--;
      this.currentPage = this.chapters[this.currentChapter];
      if (this.overviewMode || this.steps[this.currentPage] < 1) {
        this.showZoom("show");
        this.currentStep = 0;
      } else {
        this.showZoom("hide");
        this.currentStep = this.steps[this.currentPage];
      }

      document.getElementById("pageTextField").value = this.currentPage;
    } else {
      console.log("NO MORE CHAPTERS TO LOAD, BACK TO MANGA PAGE");
    }
  }

  panelClickFunc() {
    var auxRect = document.getElementById("overview").getBoundingClientRect();
    var auxRect = document
      .getElementById("frame-child")
      .getBoundingClientRect();
    var y;
    var x;
    // document.onmousemove = function (e) {
    //   var cursorX = e.pageX;
    //   var cursorY = e.pageY;
    //   console.log(cursorX);
    // };
    document.getElementById("readerGui").onclick = function clickEvent(e) {
      x = e.clientX - auxRect.left; //x position within the element.
      y = e.clientY - auxRect.top; //y position within the element.
      //console.log("x:" + x + "  |  y:" + y);
    };
  }

  overviewSwitchFunc() {
    var switchState = "default";
    if (this.steps[this.currentPage] < 1) {
      var switchState = "unable";
    } else {
      this.overviewMode = !this.overviewMode;
      if (this.overviewMode) {
        var switchState = "overview";
        this.updateStyle(this.stepValues[0]);
        this.changeFrame([this.stepValues[0]]);
        // hide away frame
        document.getElementById("frame-child").style.opacity = 0;
      } else {
        this.updateStyle(this.stepValues[this.currentStep]);
        document.getElementById("frame-child").style.opacity = 0.99;
        this.changeFrame([this.stepValues[this.currentStep]]);
        if (this.currentStep === 0) {
          this.nextButtonFunc();
        }
      }
    }
    this.overviewSwitchIcon(switchState);
  }

  overviewSwitchIcon(state) {
    if (state === "overview") {
      this.showZoom("show");
      document.getElementById("overviewIcon").src = "../assets/panel.png";
    } else if (state === "unable") {
      this.showZoom("show");
      document.getElementById("overviewIcon").src = "../assets/unable.png";
    } else {
      this.showZoom("hide");
      document.getElementById("overviewIcon").src = "../assets/overview.png";
    }
  }

  zoomFunc() {
    this.zoom = !this.zoom;
    if (this.zoom) {
      document.getElementById("pageImage").draggable = false;
      document.getElementById("zoomIcon").src = "../assets/close_zoom.png";
      this.showZoom("snuck");
    } else {
      document.getElementById("zoomIcon").src = "../assets/zoom.png";
      this.showZoom("return");
      document.getElementById("slider").value = 30;
      var aux =
        "translate(-50%, -50%) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(" +
        1 +
        ")";
      document.getElementById("overview").style.transform = aux;
    }
  }

  showZoom(show) {
    if (show === "show") {
      document.getElementById("zoomSwitch").style.display = "block";
      setTimeout(() => {
        document.getElementById("zoomSwitch").style.marginBottom = "4rem";
      }, 1);
    } else if (show === "hide") {
      document.getElementById("zoomSwitch").style.marginBottom = "10px";
      setTimeout(() => {
        document.getElementById("zoomSwitch").style.display = "none";
      }, 500);
    } else if (show === "snuck") {
      document.getElementById("zoomSwitch").style.marginBottom = "10px";
      document.getElementById("zoomSlider").style.marginBottom = "4rem";
      document.getElementById("slider").style.height = "25rem";

      document.getElementById("zoomSlider").style.display = "block";
      setTimeout(() => {
        document.getElementById("overviewSwitch").style.display = "none";
        document.getElementById("nextButton").style.display = "none";
        document.getElementById("prevButton").style.display = "none";
      }, 500);
      setTimeout(() => {
        document.getElementById("zoomSlider").style.opacity = 1;
      }, 1);
      document.getElementById("overviewSwitch").style.opacity = 0;
      document.getElementById("nextButton").style.opacity = 0;
      document.getElementById("prevButton").style.opacity = 0;
    } else {
      document.getElementById("slider").style.height = "1rem";
      document.getElementById("zoomSlider").style.marginBottom = "10px";
      document.getElementById("zoomSwitch").style.marginBottom = "4rem";

      document.getElementById("overviewSwitch").style.display = "block";
      document.getElementById("nextButton").style.display = "block";
      document.getElementById("prevButton").style.display = "block";
      document.getElementById("zoomSlider").style.opacity = 0;
      setTimeout(() => {
        document.getElementById("overviewSwitch").style.opacity = 1;
        document.getElementById("nextButton").style.opacity = 1;
        document.getElementById("prevButton").style.opacity = 1;
      }, 1);
      setTimeout(() => {
        document.getElementById("zoomSlider").style.display = "none";
      }, 500);
    }
  }

  pageSelector() {
    document.getElementById("pageTextField").addEventListener("change", (e) => {
      var i = parseInt(reader.currentChapter);

      if (parseInt(e.currentTarget.value) < parseInt(reader.chapters[i])) {
        reader.currentPage = parseInt(e.currentTarget.value);
        reader.overviewMode = false;
        reader.overviewSwitchFunc();
        reader.currentStep = 0;

        reader.nextPage(parseInt(e.currentTarget.value));
      }
    });
  }

  sliderFunc(scroll) {
    var slider = document.getElementById("slider");
    if (this.zoom) {
      if (scroll !== 0) {
        var temp =
          parseInt(document.getElementById("slider").value) + scroll * 10;
        document.getElementById("slider").value = temp;
        temp = parseInt(temp) / 10;
        if (temp < 1) {
          temp = 1;
        }

        var aux =
          "translate(-50%, -50%) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(" +
          parseInt(temp) +
          ")";
        document.getElementById("overview").style.transform = aux;
      }
    }
    slider.oninput = function () {
      var scale = (parseInt(this.value) * parseInt(this.value)) / 1500;
      scale++;

      var aux =
        "translate(-50%, -50%) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(" +
        scale +
        ")";
      document.getElementById("overview").style.transform = aux;
    };
  }

  setPageInputSize(amount) {
    if (parseInt(amount) < 10) {
      document.getElementById("pageInput").style.width = "2.42rem";
      document.getElementById("pageTextField").style.width = "0.75rem";
      document.getElementById("pageTextField").maxLength = 1;
    } else if (parseInt(amount) > 9 && parseInt(amount) < 100) {
      document.getElementById("pageInput").style.width = "4rem";
      document.getElementById("pageTextField").style.width = "1.45rem";
      document.getElementById("pageTextField").maxLength = 2;
    } else {
      document.getElementById("pageInput").style.width = "5.45rem";
      document.getElementById("pageTextField").style.width = "2.17rem";
      document.getElementById("pageTextField").maxLength = 3;
    }
  }

  setDiv() {
    var step = [0, 0, 0, 0, 0, 0];
    var temp =
      '<div id="frame" data-x="' +
      step[1] +
      '" data-y="' +
      step[2] +
      '" data-z="' +
      step[0] +
      '" data-scale="' +
      step[5] +
      '" data-rel-position="absolute" style="position: absolute; transform: translate(-50%, -50%) translate3d(' +
      step[1] +
      "px, " +
      step[2] +
      "px, " +
      step[0] +
      "px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(" +
      step[5] +
      '); transition: all 200ms ease-in-out 0ms;transform-style: preserve-3d;"><div id="frame-child" style="transition: all 200ms ease-in-out 0ms;transform-style: preserve-3d;width: ' +
      step[3] +
      "px; height: " +
      step[4] +
      'px; border: 3000px solid #303030; opacity: 0.99;"></div></div>';
    document.getElementById("readerStyle").innerHTML += temp;
  }

  changeFrame(step) {
    document.getElementById("frame").dataX = step[1];
    document.getElementById("frame").dataY = step[2];
    document.getElementById("frame").dataZ = step[0];
    document.getElementById("frame").scale = step[5];
    document.getElementById("frame").style.transform =
      "translate(-50%, -50%) translate3d(" +
      step[1] +
      "px, " +
      step[2] +
      "px, " +
      step[0] +
      "px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(" +
      step[5] +
      ")";

    document.getElementById("frame-child").style.width =
      parseInt(step[3] / 10) + "px";
    document.getElementById("frame-child").style.height =
      parseInt(step[4] / 10) + "px";
  }

  setOverview(src) {
    var pageSize = screen.height / 3 - screen.height / 25;
    var temp =
      '<div id="overview" onclick="reader.panelClickFunc()" class="active" data-x="0" data-y="0" data-z="0" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-rotate-order="xyz" data-rel-position="absolute" data-rel-x="0" data-rel-y="0" data-rel-z="0" data-rel-rotate-x="0" data-rel-rotate-y="0" data-rel-rotate-z="0" style="transition: all 350ms ease-in-out 0ms;position: absolute; transform: translate(-50%, -50%) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1); transform-style: preserve-3d;"><img id="pageImage" src="' +
      src +
      '" style="width: ' +
      pageSize * 2 +
      "px; height: " +
      pageSize * 3 +
      'px"></div>';
    document.getElementById("readerStyle").innerHTML += temp;
  }

  changeOverview(src) {
    document.getElementById("pageImage").src = src;
  }

  setGui() {
    var temp =
      '<button id="zoomSwitch" onclick="reader.zoomFunc()" title="Zoom" style="position: absolute;margin-left: 10px;margin-bottom: 4rem;left: 0px;bottom: 0px;border-radius: 2rem;border: none;color: #303030;padding: 0.35rem 0.5rem;background-position: center;background-size: contain;cursor: pointer; transition: all 350ms ease-in-out 0ms;transform-style: preserve-3d;">' +
      '<img id="zoomIcon" src="../assets/zoom.png" height="30rem"></button>' +
      '<div id="zoomSlider" onclick="reader.sliderFunc(0)" style="transition: all 350ms ease-in-out 0ms;transform-style: preserve-3d;">' +
      '<input id="slider" style="transition: all 350ms ease-in-out 0ms;transform-style: preserve-3d;" type="range" orient="vertical" data-vertical="true" min="1" max="150" value="30" class="slider"></div>' +
      '<button id="overviewSwitch" onclick="reader.overviewSwitchFunc()" title="Switch view" style="position: absolute;margin-left: 10px;margin-bottom: 10px;left: 0px;bottom: 0px;border-radius: 2rem;border: none;color: #303030;padding: 0.35rem 0.5rem;background-position: center;background-size: contain;cursor: pointer;transition: all 350ms ease-in-out 0ms;transform-style: preserve-3d;">' +
      '<img id="overviewIcon" src="../assets/overview.png" height="30rem"/></button>' +
      '<button id="nextButton" onclick="reader.nextButtonFunc()" title="Next" style="transition: all 350ms ease-in-out 0ms;transform-style: preserve-3d;"></button>' +
      '<button id="prevButton" onclick="reader.prevButtonFunc()" title="Previous" style="transition: all 350ms ease-in-out 0ms;transform-style: preserve-3d;"></button>' +
      '<div id="pageInput" style="cursor: pointer;display: flex;height: fit-content;position: absolute;align-items: center;margin-right: 10px;margin-bottom: 10px;bottom:0px;right: 0px;border-radius: 2rem;background-color: #b63333;border: none;padding: 0rem 0.4rem;width: 3.2rem;background-position: center;background-size: contain;font-size: 1.25rem;text-align:left">' +
      '<input id="pageTextField" type="text" onkeypress="return reader.onlyNumberKey(event)" onkeydown="reader.pageSelector(this)" maxlength="3" value="0" max="999" min="0" style="color:#303030;width: 1.15rem;align-items: center;background-color:transparent;border: none;font-size: 1.4rem;text-align:right" title="Choose page">/' +
      '<a id="pageAmount" title="Current page" ></a></div>';
    document.getElementById("readerGui").innerHTML = temp;
  }

  updateStyle(values) {
    var temp =
      "rotateZ(0deg) rotateY(0deg) rotateX(0deg) translate3d(" +
      -parseInt(values[1]) +
      "px," +
      -parseInt(values[2]) +
      "px," +
      -parseInt(values[0]) +
      "px)";
    document.getElementById("readerStyle").style.transform = temp;
    document.getElementById("mangaReader").style.transform =
      "scale(" + parseFloat(values[5]) + ")";
  }

  onlyNumberKey(evt) {
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
      return false;
    } else {
      return true;
    }
  }
}
