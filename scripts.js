const openMenu = document.getElementById('menu-btn');
const closeMenu = document.getElementById('close-btn');
const navMenu = document.querySelector('.list-menu');
// const menuItem = document.querySelectorAll('.menu-item');

function showMenu() {
  navMenu.style.display = 'block';
  navMenu.style.height = '100%';
}

function hideMenu() {
  navMenu.style.display = 'none';
}

openMenu.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hideMenu);

// for (let i = 1; i <= menuItem.length; i++){
//     menuItem[i].addEventListener('click', hideMenu);
// }

// The block below generate speakers dynamically
const speakers = document.getElementById('speaker-container');
const speakerDesk = document.getElementById('desk-speaker');
const btnLoad = document.getElementById('loadBtn');

const speakerArr = [
  {
    speakerImg: 'Assets/img/speakers/sarah-j.jpeg',
    speakerName: 'Sarah Johnson',
    speakerInfo:
      'Sarah is a seasoned web developer with over 8 years of experience in the industry.',
    speakerDescription:
      'Sarah specializes in Javascript and is an expert in building interactive web applications.',
  },
  {
    speakerImg: 'Assets/img/speakers/david-b.jpeg',
    speakerName: 'David Brown',
    speakerInfo:
      'David is a full-stack developer with a strong background in both front-end and back-end technologies.',
    speakerDescription:
      'David is known for his ability to simplify complex concepts and make them accessible to beginner programmers.',
  },
  {
    speakerImg: 'Assets/img/speakers/rachel-lee.jpg',
    speakerName: 'Rachel Lee',
    speakerInfo:
      'Rachel is a self-taught programmer who has been coding for over 5 years.',
    speakerDescription:
      'Rachel has experience working with both Javascript and Python, and is passionate about teaching others how to code.',
  },
  {
    speakerImg: 'Assets/img/speakers/micheal-n.jpeg',
    speakerName: 'Michael Nguyen',
    speakerInfo:
      'Michael is a seasoned software engineer who has been working in the industry for over 10 years.',
    speakerDescription:
      'Michael is also a mentor and advisor to several startup companies and is dedicated to helping the next generation of programmers.',
  },
  {
    speakerImg: 'Assets/img/speakers/w-thomas.jpeg',
    speakerName: 'Thomas Williams',
    speakerInfo:
      'Thomas is a software engineer with a passion for solving complex problems with code.',
    speakerDescription:
      'He is known for his ability to break down complex topics and present them in a clear and concise manner, making them accessible to all levels of students.',
  },
  {
    speakerImg: 'Assets/img/speakers/k-smith.jpeg',
    speakerName: 'Katie Smith',
    speakerInfo:
      'Katie is a front-end developer with a focus on user experience and design.',
    speakerDescription:
      'Katie is passionate about teaching others and has been a guest speaker at several coding bootcamps and workshops.',
  },
];

let currentSpeaker = 0;

function loadMore() {
  const maxSpeaker = 3;
  for (let i = 0; i < maxSpeaker; i += 1) {
    if (currentSpeaker >= speakerArr.length) {
      btnLoad.style.display = 'none';
    }

    speakers.innerHTML += `<div class="speaker-container">
        <div class="img-container">
            <img src="${speakerArr[i + currentSpeaker].speakerImg}" alt="Profile image">
        </div>
        <div class="text-container">
            <h4>${speakerArr[i + currentSpeaker].speakerName}</h4>
            <span class="speaker-info">${speakerArr[i + currentSpeaker].speakerInfo}</span>
            <hr id="hr-speaker">
            <p class="speaker-desc">${speakerArr[i + currentSpeaker].speakerDescription}</p>
        </div>
    </div>`;
  }
  currentSpeaker += maxSpeaker;
}

function loadDesk() {
  for (let i = 0; i < speakerArr.length; i += 1) {
    speakerDesk.innerHTML += `<div class="speaker-container">
            <div class="img-container">
                <img src="${speakerArr[i].speakerImg}" alt="Profile image">
            </div>
            <div class="text-container">
                <h4>${speakerArr[i].speakerName}</h4>
                <span class="speaker-info">${speakerArr[i].speakerInfo}</span>
                <hr id="hr-speaker">
                <p class="speaker-desc">${speakerArr[i].speakerDescription}</p>
            </div>
        </div>`;
  }
}

loadMore();
loadDesk();
