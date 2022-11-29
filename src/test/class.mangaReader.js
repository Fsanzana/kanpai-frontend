class mangaReader {
  chapters = [];
  stepValues = [];
  steps = [];

  currentChapter = 1;
  currentStep = 0;
  currentPage = 1;

  overviewMode = false;
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
      '<div id="readerStyle" style="position: absolute; transform-origin: left top; transition: all 500ms ease-in-out 0ms; transform-style: preserve-3d; transform: rotateZ(0deg) rotateY(0deg) rotateX(0deg) translate3d(0px, 0px, 0px);">';

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
    $.getJSON(this.src + "data.json", function (data) {
      for (var j = 0; j < data.length; j++) {
        reader.chapters[data[j].chapter] = data[j].pages.length - 1;

        if (parseInt(data[j].chapter) === parseInt(reader.currentChapter)) {
          pages = data[j].pages.length - 1;
          document.getElementById("pageAmount").innerHTML = pages;
          reader.setPageInputSize(pages);
          $.each(data[j].pages, function (key, value) {
            reader.steps[key] = value.panels.length - 1;

            if (parseInt(value.page) === parseInt(reader.currentPage)) {
              for (var i = 0; i < value.panels.length; i++) {
                if (value.panels[i].id === "overview") {
                  reader.stepValues[0] = [0 , 0 , 0 , 0 , 0 , 0];
                  reader.changeOverview(reader.src + value.panels[i].src);
                } else {
                  reader.stepValues[i+1] = [
                    value.panels[i].id.split("-").pop(),
                    value.panels[i].dataX,
                    value.panels[i].dataY,
                    value.panels[i].width,
                    value.panels[i].height,
                    value.panels[i].dataScale
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

  //NEXT SLIDE / PAGE
  nextButtonFunc() {
    if (this.overviewMode) {
      this.nextPage();
    } else {
      if (this.currentStep === this.steps[this.currentPage]) {
        this.nextPage();
      } else {
        if (this.currentStep < this.steps[this.currentPage]) {
          this.currentStep++;
          this.stepFrame();
        } else {
          this.nextPage();
        }
      }
    }
    //PAGE 1 OF FIRST CHAPTER BUGGED, DON´T KNOW WHY.
    this.updateStyle(this.stepValues[this.currentStep]);
    this.changeFrame(this.stepValues[this.currentStep]);
    this.stepFrame(this.currentStep);
  }

  nextPage() {
    if (this.currentPage + 1 < this.chapters[this.currentChapter] + 1) {
      this.currentPage++;

      if (this.overviewMode || this.steps[this.currentPage] < 1) {
        this.currentStep = 0;
      } else {
        this.currentStep = 1;
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
        this.currentStep = 0;
      } else {
        this.currentStep = 1;
      }

      document.getElementById("pageTextField").value = this.currentPage;
    } else {
      console.log("NO MORE CHAPTERS TO LOAD, BACK TO MANGA PAGE");
    }
  }

  // MOVE THE FOCUS FRAME
  stepFrame(step){
    
  }

  //PREV SLIDE / PAGE
  prevButtonFunc() {
    console.log("prev");
  }

  overviewSwitchFunc() {
    console.log("overview");
  }

  pageSelector() {
    document.querySelector("input").addEventListener("change", (e) => {
      if (
        parseInt(e.currentTarget.value) <
        parseInt(reader.chapters[reader.currentchapter])
      ) {
        reader.currentPage = parseInt(e.currentTarget.value);
      }
    });
  }

  setPageInputSize(amount) {
    if (parseInt(amount) < 10) {
      document.getElementById("pageInput").style.width = "2rem";
      document.getElementById("pageTextField").style.width = "0.5rem";
      document.getElementById("pageTextField").maxLength = 1;
    } else if (parseInt(amount) > 9 && parseInt(amount) < 100) {
      document.getElementById("pageInput").style.width = "3.2rem";
      document.getElementById("pageTextField").style.width = "1.15rem";
      document.getElementById("pageTextField").maxLength = 2;
    } else {
      document.getElementById("pageInput").style.width = "4.2rem";
      document.getElementById("pageTextField").style.width = "1.7rem";
      document.getElementById("pageTextField").maxLength = 3;
    }
  }

  setDiv() {
    var step= [0,0,0,0,0,0];
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
      '); transform-style: preserve-3d;"><div id="frame-child" style="width: ' +
      step[3] +
      "px; height: " +
      step[4] +
      'px; border: 3000px solid #303030; opacity: 0.99;"></div></div>';
    document.getElementById("readerStyle").innerHTML += temp;
  }

  changeFrame(step) {
    document.getElementById("frame").dataX=step[1];
    document.getElementById("frame").dataY=step[2];
    document.getElementById("frame").dataZ=step[0];
    document.getElementById("frame").scale=step[5];
    document.getElementById("frame").style.transform='translate(-50%, -50%) translate3d(' +
    step[1] +
    "px, " +
    step[2] +
    "px, " +
    step[0] +
    "px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(" +
    step[5] +
    ')';

    document.getElementById("frame-child");
    document.getElementById("frame-child").style.width=step[3];
    document.getElementById("frame-child").style.width=step[4];
  }

  setOverview(src) {
    var pageSize = (screen.height/3)-screen.height/25;
    var temp =
      '<div id="overview" class="active" data-x="0" data-y="0" data-z="0" data-rotate-x="0" data-rotate-y="0" data-rotate-z="0" data-rotate-order="xyz" data-rel-position="absolute" data-rel-x="0" data-rel-y="0" data-rel-z="0" data-rel-rotate-x="0" data-rel-rotate-y="0" data-rel-rotate-z="0" style="position: absolute; transform: translate(-50%, -50%) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1); transform-style: preserve-3d;"><img id="pageImage" src="' +
      src +
      '" style="width: '+
      (pageSize*2)+
      'px; height: '+
      (pageSize*3)+
      'px"></div>';
    document.getElementById("readerStyle").innerHTML += temp;
  }

  changeOverview(src) {
    document.getElementById("pageImage").src=src;
  }

  setGui() {
    var temp =
      '<button id="overviewSwitch" onclick="reader.overviewSwitchFunc()" title="Switch view" style="position: absolute;margin-left: 10px;margin-bottom: 10px;left: 0px;bottom: 0px;border-radius: 2rem;background-color: #b63333;border: none;color: #303030;padding: 0.35rem 0.5rem;background-position: center;background-size: contain;cursor: pointer;"><img id="overviewIcon" src="../assets/overview.png" height="30rem"/></button><button id="nextButton" onclick="reader.nextButtonFunc()" title="Next"></button><button id="prevButton" onclick="reader.prevButtonFunc()" title="Previous" ></button><div id="pageInput" style="cursor: pointer;display: flex;height: fit-content;position: absolute;align-items: center;margin-right: 10px;margin-bottom: 10px;bottom:0px;right: 0px;border-radius: 2rem;background-color: #b63333;border: none;padding: 0rem 0.4rem;width: 3.2rem;background-position: center;background-size: contain;font-size: 1.25rem;text-align:left"><input id="pageTextField" type="text" onkeypress="return reader.onlyNumberKey(event)" onkeydown="reader.pageSelector(this)" maxlength="3" value="0" max="999" min="0" style="color:#303030;width: 1.15rem;align-items: center;background-color:transparent;border: none;font-size: 1.25rem;text-align:right" title="Choose page">/<a id="pageAmount" title="Current page" ></a></div>';
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
    document.getElementById("mangaReader").style.transform='scale('+parseFloat(values[5])+')';
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
