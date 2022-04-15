const main = document.getElementById("main");
const frameWrapper = document.getElementById("frame-wrapper");

const courses = {
  bcom: {
    name: "Bachelor of Commerce",
    semCount: 6,
    sems: {
      sem1: "https://drive.google.com/embeddedfolderview?id=15iY79eM1U-oBkMQ3DT61mE3siwGqCYnq#grid",
      sem2: "https://drive.google.com/embeddedfolderview?id=17bIs1y7dB8hBY85BQXNtIGB38mXavi_R#grid",
      sem3: "",
      sem4: "",
      sem5: "",
      sem6: "",
    },
  },
  bca: {
    name: "Bachelors in Computer Application",
    semCount: 6,
    sems: {
      sem1: "https://drive.google.com/embeddedfolderview?id=164T5fZuGQRRjKXyvvaEYxh25J9qkCflS#grid",
      sem2: "https://drive.google.com/embeddedfolderview?id=164xfF9eqMer51l6WEeqMOt6Wz1K9UYF1#grid",
      sem3: "",
      sem4: "",
      sem5: "",
      sem6: "",
    },
  },
  bba: {
    name: "Bachelor of Business Administration",
    semCount: 6,
    sems: {
      sem1: "https://drive.google.com/embeddedfolderview?id=12bOqtUQG8DhYUuRnFcDFPNP3ofVIHyHe#grid",
      sem2: "https://drive.google.com/embeddedfolderview?id=12baOHVgdMxpG0obFP3utNFGV7QUay3Qm#grid",
      sem3: "",
      sem4: "",
      sem5: "",
      sem6: "",
    },
  },
};

const btech = {
  cse: {
    name: "Computer Science Engineering",
    semCount: 8,
    sems: {
      sem1: "https://drive.google.com/embeddedfolderview?id=1-EugW8PgxYrlQ67EsEtDEaT9tcHVIiDu#grid",
      sem2: "https://drive.google.com/embeddedfolderview?id=1-7tye2ijjgBH-AgAJdJ1etElkq0HcdcZ#grid",
      sem3: "",
      sem4: "",
      sem5: "",
      sem6: "",
      sem7: "",
      sem8: "",
    },
  },
  mech: {
    name: "Mechanical Engineering",
    semCount: 8,
    sems: {
      sem1: "https://drive.google.com/embeddedfolderview?id=1-EugW8PgxYrlQ67EsEtDEaT9tcHVIiDu#grid",
      sem2: "https://drive.google.com/embeddedfolderview?id=1-7tye2ijjgBH-AgAJdJ1etElkq0HcdcZ#grid",
      sem3: "",
      sem4: "",
      sem5: "",
      sem6: "",
      sem7: "",
      sem8: "",
    },
  },
  civil: {
    name: "Civil Engineering",
    semCount: 8,
    sems: {
      sem1: "https://drive.google.com/embeddedfolderview?id=1-EugW8PgxYrlQ67EsEtDEaT9tcHVIiDu#grid",
      sem2: "https://drive.google.com/embeddedfolderview?id=1-7tye2ijjgBH-AgAJdJ1etElkq0HcdcZ#grid",
      sem3: "",
      sem4: "",
      sem5: "",
      sem6: "",
      sem7: "",
      sem8: "",
    },
  },
  ele: {
    name: "Electrical Engineering",
    semCount: 8,
    sems: {
      sem1: "https://drive.google.com/embeddedfolderview?id=1-EugW8PgxYrlQ67EsEtDEaT9tcHVIiDu#grid",
      sem2: "https://drive.google.com/embeddedfolderview?id=1-7tye2ijjgBH-AgAJdJ1etElkq0HcdcZ#grid",
      sem3: "",
      sem4: "",
      sem5: "",
      sem6: "",
      sem7: "",
      sem8: "",
    },
  },
};

let links = document.querySelector(".links");
for (let child of links.children) {
  child.addEventListener("click", () => {
    for (let dummy of links.children) {
      dummy.classList.remove("active-link");
      if (dummy == child) child.classList.add("active-link");
    }
  });
}

let aboutKey = document.getElementById("aboutKey");
aboutKey.addEventListener("click", () => {
  showElement(document.getElementById("about"));
});

function showElement(element) {
  Array.from(main.children).forEach((child) => child.classList.add("hide"));
  element.classList.remove("hide");
}

function openFrame(link) {
  let iframe = frameWrapper.firstElementChild;
  link
    ? iframe.setAttribute("src", link)
    : iframe.setAttribute("src", "loading.html");
  frameWrapper.classList.add("show");
}
function closeFrame() {
  frameWrapper.classList.remove("show");
  let iframe = frameWrapper.firstElementChild;
  iframe.setAttribute("src", "loading.html");
}

document.getElementById("close-frame").addEventListener("click", closeFrame);
const branches = document.querySelectorAll("span[data-id]");
branches.forEach((branch) => {
  branch.addEventListener("click", () => {
    let ele = document.getElementById(branch.dataset.id);
    if (ele) showElement(ele);
    else populateBranches(branch);
  });
});

function populateBranches(element) {
  const wrapper1 = document.createElement("div");
  wrapper1.id = element.dataset.id;
  wrapper1.classList.add("flex", "flex-column", "course-cont");
  let obj =
    element.parentElement.parentElement.id == "btechKey" ? btech : courses;
  wrapper1.innerHTML = `<h1>${obj[element.dataset.id].name}</h1>`;

  const wrapper = document.createElement("div");
  wrapper.classList.add("flex", "flex-wrap", "transit");
  for (let i = 1; i <= obj[element.dataset.id].semCount; i++) {
    let color = `${87 - 5 * i}%`;
    let code = ` <div class="card">
          <div class="card__content flex flex-column">
            <h2 class="card__header colory" style="--lightness: ${color}">SEMESTER-${i}</h2>
            <a  href="${obj[element.dataset.id].sems["sem" + i]
        ? obj[element.dataset.id].sems["sem" + i]
        : "loading.html"
      }" target="extern" class="card__button" onclick = "openFrame()">Click for notes</a> 
          </div>   
    </div> `;
    wrapper.innerHTML += code;
  }
  wrapper1.appendChild(wrapper);
  Array.from(main.children).forEach((child) => {
    child.classList.add("hide");
  });
  main.appendChild(wrapper1);
}
